import { cookies } from 'next/headers';

let bookmarks: { [key: string]: Set<string> } = {
  'demo-user': new Set(),
};

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

    if (!bookmarks[userId]) {
      bookmarks[userId] = new Set();
    }

    if (bookmarks[userId].has(params.id)) {
      bookmarks[userId].delete(params.id);
    } else {
      bookmarks[userId].add(params.id);
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
