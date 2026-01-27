import { cookies } from 'next/headers';

let courses = [
  {
    id: '1',
    name: 'Introduction to Web Development',
    code: 'WEB101',
    description: 'Learn the basics of HTML, CSS, and JavaScript',
  },
  {
    id: '2',
    name: 'Advanced React',
    code: 'WEB202',
    description: 'Master React hooks, context, and performance optimization',
  },
  {
    id: '3',
    name: 'Database Design',
    code: 'DB101',
    description: 'Learn SQL, normalization, and database architecture',
  },
];

let enrollments: { [key: string]: string[] } = {
  'demo-user': ['1'],
};

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

    const course = courses.find(c => c.id === params.id);

    if (!course) {
      return Response.json({ error: 'Course not found' }, { status: 404 });
    }

    return Response.json(course);
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

    const userId = 'demo-user';

    if (!enrollments[userId]) {
      enrollments[userId] = [];
    }

    if (!enrollments[userId].includes(params.id)) {
      enrollments[userId].push(params.id);
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
