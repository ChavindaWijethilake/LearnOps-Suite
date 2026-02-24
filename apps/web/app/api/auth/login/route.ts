import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { isValidRole, parseRole, Role } from '@learnops/rbac';
import { logAction } from '@learnops/audit';

// Secret key for JWT signing
const JWT_SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'supersecretkey123');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        // ─── Role Resolution ───
        // Determine role from request body or infer from email pattern (mock mode)
        let role: string = body.role || 'student';
        if (!body.role) {
            if (email.includes('prof')) role = 'professor';
            else if (email.includes('finance')) role = 'finance-admin';
            else if (email.includes('support')) role = 'support-agent';
            else if (email.includes('super')) role = 'super-admin';
            else if (email.includes('admin')) role = 'admin';
        }

        // Validate and normalize role using RBAC package
        const validatedRole = parseRole(role);

        // MOCK USER — In production, this would query the database with bcrypt comparison
        const user = {
            id: 'mock-id-' + Math.random().toString(36).substring(7),
            email,
            name: email.split('@')[0],
            role: validatedRole,
        };

        // Create JWT with validated role
        const token = await new SignJWT({
            sub: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(JWT_SECRET);

        // Set cookie
        (await cookies()).set({
            name: 'auth_token',
            value: token,
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 24 hours
        });

        // ─── Audit Log: Login Event ───
        const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        try {
            await logAction({
                actorId: user.id,
                actorRole: user.role,
                action: 'LOGIN',
                resource: 'USER',
                resourceId: user.id,
                metadata: { email: user.email, method: 'password' },
                ipAddress,
            });
        } catch {
            // Audit logging failure should never block login
            console.warn('[AUDIT] Failed to log login event');
        }

        return NextResponse.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
