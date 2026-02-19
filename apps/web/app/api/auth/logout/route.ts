import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function POST() {
    (await cookies()).delete('auth_token');
    return NextResponse.json({ success: true });
}

export async function GET() {
    (await cookies()).delete('auth_token');
    return NextResponse.redirect(new URL('/', 'http://localhost:3000'));
}
