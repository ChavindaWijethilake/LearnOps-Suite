import { NextResponse } from 'next/server';

// Temporary in-memory store for telemetry data (mock)
let systemHealth = {
    status: 'Operational',
    lastUpdate: new Date().toISOString(),
    services: {
        'student-portal': { status: 'Operational', latency: 42 },
        'billing': { status: 'Operational', latency: 115 },
        'auth': { status: 'Operational', latency: 12 },
        'storage': { status: 'Degraded', latency: 450 },
    }
};

export async function GET() {
    return NextResponse.json(systemHealth);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { serviceId, status, latency } = body;

        if (serviceId && systemHealth.services[serviceId as keyof typeof systemHealth.services]) {
            systemHealth.services[serviceId as keyof typeof systemHealth.services] = {
                status: status || 'Operational',
                latency: latency || 0
            };
            systemHealth.lastUpdate = new Date().toISOString();
        }

        return NextResponse.json({ success: true, health: systemHealth });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid telemetry packet' }, { status: 400 });
    }
}
