import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { can, parseRole, Resource, Action } from '@learnops/rbac';

// Secret key for JWT signing/verification - should match the one in API routes
const JWT_SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'supersecretkey123');

/**
 * Route → Resource mapping for automatic RBAC checks.
 * Routes not listed here are allowed for all authenticated users.
 */
const ROUTE_PERMISSIONS: Array<{
    pattern: string;
    resource: Resource;
    action: Action;
}> = [
        // Admin routes require SYSTEM_SETTINGS access
        { pattern: '/admin', resource: Resource.SYSTEM_SETTINGS, action: Action.READ },
        // Analytics requires ANALYTICS access
        { pattern: '/analytics', resource: Resource.ANALYTICS, action: Action.READ },
        // Billing routes require BILLING access
        { pattern: '/billing', resource: Resource.BILLING, action: Action.READ },
    ];

/**
 * Check if a path matches a route pattern.
 */
function matchesRoute(pathname: string, pattern: string): boolean {
    return pathname === pattern || pathname.startsWith(pattern + '/');
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Public paths that don't require authentication
    const publicPaths = ['/login', '/admin/login', '/public', '/api/auth/login', '/api/auth/logout', '/support/request', '/api/support', '/resource-center'];

    // Check if the current path is public
    if (pathname === '/' || publicPaths.some(path => pathname.startsWith(path))) {
        return NextResponse.next();
    }

    // Check for auth token
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
        // For API routes, return 401 instead of redirecting to login page
        if (pathname.startsWith('/api')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        // Redirect to login (root) if no token found
        const url = new URL('/', request.url);
        url.searchParams.set('callbackUrl', encodeURI(pathname));
        return NextResponse.redirect(url);
    }

    try {
        // Verify token
        const { payload } = await jwtVerify(token, JWT_SECRET);

        // Parse role using RBAC package for validation
        const roleString = payload.role as string;
        const role = parseRole(roleString);

        // Add user info to headers for easier access in server components/API
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-user-id', payload.sub as string);
        requestHeaders.set('x-user-role', role);

        // ─── RBAC Route Protection ───
        // Check each protected route pattern
        for (const routePermission of ROUTE_PERMISSIONS) {
            if (matchesRoute(pathname, routePermission.pattern)) {
                // Skip the admin login page
                if (pathname === '/admin/login') break;

                if (!can(role, routePermission.resource, routePermission.action)) {
                    // For API routes, return 403
                    if (pathname.startsWith('/api')) {
                        return NextResponse.json(
                            { error: 'Forbidden', message: `Role "${role}" cannot access ${routePermission.resource}` },
                            { status: 403 }
                        );
                    }
                    // For pages, redirect to portals hub
                    return NextResponse.redirect(new URL('/portals', request.url));
                }
                break; // First matching pattern wins
            }
        }

        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
    } catch (error) {
        // Token invalid or expired
        console.error('Middleware auth error:', error);
        return NextResponse.redirect(new URL('/', request.url));
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder contents
         */
        '/((?!_next/static|_next/image|favicon.ico|images|icons).*)',
    ],
};
