import { cookies } from 'next/headers';

let tasks: any[] = [
  {
    id: '1',
    projectId: '1',
    title: 'Create design mockup',
    description: 'Design homepage',
    status: 'In Progress',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    projectId: '1',
    title: 'Setup database',
    description: 'Configure PostgreSQL',
    status: 'To Do',
    createdAt: new Date().toISOString(),
  },
];

export async function PATCH(
  request: Request,
  { params }: { params: { id: string; taskId: string } }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { status } = await request.json();
    const taskIndex = tasks.findIndex(t => t.id === params.taskId);

    if (taskIndex === -1) {
      return Response.json({ error: 'Task not found' }, { status: 404 });
    }

    tasks[taskIndex].status = status;
    return Response.json(tasks[taskIndex]);
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string; taskId: string } }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    tasks = tasks.filter(t => t.id !== params.taskId);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
