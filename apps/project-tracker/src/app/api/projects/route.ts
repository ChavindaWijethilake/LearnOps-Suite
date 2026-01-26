import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key-change-in-production';

// In-memory storage for demo (replace with database in production)
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

let nextProjectId = 2;

function getUserId() {
  return 'demo-user'; // In production, extract from JWT token
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const userId = getUserId();
    const userProjects = projects.filter(p => p.userId === userId);
    return Response.json(userProjects);
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { name, description, status } = await request.json();

    if (!name) {
      return Response.json({ error: 'Project name required' }, { status: 400 });
    }

    const newProject = {
      id: String(nextProjectId++),
      name,
      description,
      status,
      userId: getUserId(),
      createdAt: new Date().toISOString(),
    };

    projects.push(newProject);
    return Response.json(newProject, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
