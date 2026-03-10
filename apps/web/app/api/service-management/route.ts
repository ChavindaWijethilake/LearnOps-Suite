import { NextResponse } from 'next/server';

let requests: any[] = [
    {
        id: '1',
        title: 'Network Access Request',
        status: 'open',
        priority: 'high',
        createdAt: new Date().toISOString(),
    }
];

export async function GET() {
    return NextResponse.json({ requests });
}

export async function POST(request: Request) {
    const data = await request.json();

    const newRequest = {
        id: Math.random().toString(36).substr(2, 9),
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    requests.push(newRequest);
    return NextResponse.json({ success: true, request: newRequest }, { status: 201 });
}
