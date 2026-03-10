import { cookies } from 'next/headers';

let projects: any[] = [
    {
        id: '1',
        name: 'Website Redesign',
        description: 'Redesign company website',
        status: 'In Progress',
        userId: 'demo-user',
        createdAt: new Date().toISOString(),
    },
];

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value || cookieStore.get('auth')?.value;

        if (!token) {
            return Response.json({ error: 'Not authenticated' }, { status: 401 });
        }

        const project = projects.find(p => p.id === params.id);

        if (!project) {
            return Response.json({ error: 'Project not found' }, { status: 404 });
        }

        return Response.json(project);
    } catch (error) {
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value || cookieStore.get('auth')?.value;

        if (!token) {
            return Response.json({ error: 'Not authenticated' }, { status: 401 });
        }

        projects = projects.filter(p => p.id !== params.id);
        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
