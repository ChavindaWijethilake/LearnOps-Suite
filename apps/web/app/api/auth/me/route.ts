import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'supersecretkey123');

export async function GET() {
    const token = (await cookies()).get('auth_token')?.value;

    if (!token) {
        return NextResponse.json({ user: null }, { status: 401 });
    }

    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);

        return NextResponse.json({
            user: {
                id: payload.sub,
                email: payload.email,
                name: payload.name,
                role: payload.role
            }
        });
    } catch (error) {
        return NextResponse.json({ user: null }, { status: 401 });
    }
}
