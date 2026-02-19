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

let nextTaskId = 3;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const projectTasks = tasks.filter(t => t.projectId === params.id);
    return Response.json(projectTasks);
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { title, description, status } = await request.json();

    if (!title) {
      return Response.json({ error: 'Task title required' }, { status: 400 });
    }

    const newTask = {
      id: String(nextTaskId++),
      projectId: params.id,
      title,
      description,
      status,
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    return Response.json(newTask, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
