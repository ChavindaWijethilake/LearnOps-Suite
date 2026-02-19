import { cookies } from 'next/headers';

let completedLessons: { [key: string]: Set<string> } = {
  'demo-user': new Set(),
};

export async function POST(
  request: Request,
  { params }: { params: { id: string; lessonId: string } }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const userId = 'demo-user';

    if (!completedLessons[userId]) {
      completedLessons[userId] = new Set();
    }

    completedLessons[userId].add(params.lessonId);

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
