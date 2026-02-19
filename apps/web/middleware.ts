import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Secret key for JWT signing/verification - should match the one in API routes
const JWT_SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'supersecretkey123');

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Public paths that don't require authentication
    const publicPaths = ['/login', '/admin/login', '/public', '/api/auth/login', '/api/auth/logout', '/support/request', '/api/support'];

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

        // Add user info to headers for easier access in server components/API
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-user-id', payload.sub as string);
        requestHeaders.set('x-user-role', payload.role as string);

        // Specific role-based redirects
        const role = payload.role as string;
        const isAdmin = role === 'admin' || role === 'super-admin';

        // Redirect admins from portals hub or root to admin dashboard
        // if (isAdmin && (pathname === '/portals' || pathname === '/')) {
        //     return NextResponse.redirect(new URL('/admin', request.url));
        // }

        // Prevent non-admins from accessing admin routes
        if (pathname.startsWith('/admin') && pathname !== '/admin/login' && !isAdmin) {
            return NextResponse.redirect(new URL('/portals', request.url));
        }

        // Prevent admins from accessing student/professor portals if necessary, 
        // or just let them through. For now, we'll keep it open or redirect them to admin dashboard
        // if they try to go to the main login page while logged in.

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
