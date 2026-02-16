import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Secret key for JWT signing/verification - should match the one in API routes
const JWT_SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'supersecretkey123');

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Public paths that don't require authentication
    const publicPaths = ['/login', '/public', '/api/auth/login', '/api/auth/logout'];

    // Check if the current path is public
    if (publicPaths.some(path => pathname.startsWith(path))) {
        return NextResponse.next();
    }

    // Check for auth token
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
        // Redirect to login if no token found
        const url = new URL('/login', request.url);
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

        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
    } catch (error) {
        // Token invalid or expired
        console.error('Middleware auth error:', error);
        return NextResponse.redirect(new URL('/login', request.url));
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
