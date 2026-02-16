import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { prisma } from '@learnops/db'; // Assuming this export exists or I need to create it
import { cookies } from 'next/headers';

// Secret key for JWT signing
const JWT_SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'supersecretkey123');

// Simple Prisma Client instance if not exported from package (temporary/fallback)
import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient(); // We should use the singleton from package if possible

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

        // In a real app, hash password comparison here. 
        // For now, we'll accept any password for valid users or specific test users.
        // Once DB is up, we will query:
        /*
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || user.password !== password) { // Replace generic password check with bcrypt/argon2
             return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }
        */

        // MOCK AUTH for development until DB is approachable/seeded
        // Check if DB is reachable, if not fall back to mock based on email
        let user;
        try {
            // Try to connect to DB? No, usually we just fail. 
            // But for this "dev" task I'll simulate based on email pattern to allow login
            // without DB for the initial "docker not running" scenario.

            // ACTUAL LOGIC (commented out until DB is ready/seeded)
            /*
            const prisma = new PrismaClient(); 
            user = await prisma.user.findUnique({ where: { email } });
            */
        } catch (e) {
            console.error("DB Error", e);
        }

        // TEMPORARY MOCK LOGIC for "dev" task
        let role = body.role || 'student';
        if (!body.role && email.includes('prof')) role = 'professor';
        if (!body.role && email.includes('super')) role = 'super-admin';
        if (!body.role && email.includes('admin')) role = 'admin';

        user = {
            id: 'mock-id-' + Math.random().toString(36).substring(7),
            email,
            name: email.split('@')[0],
            role,
        };

        // Create JWT
        const token = await new SignJWT({
            sub: user.id,
            email: user.email,
            role: user.role,
            name: user.name
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

        return NextResponse.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
