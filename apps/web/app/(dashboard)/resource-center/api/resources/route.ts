import { cookies } from 'next/headers';

let resources = [
  {
    id: '1',
    title: 'Web Development Basics',
    description: 'A comprehensive guide to web development',
    category: 'Documents',
    tags: ['web', 'html', 'css', 'javascript'],
    link: 'https://example.com',
    bookmarked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'React Tutorial',
    description: 'Learn React from scratch',
    category: 'Videos',
    tags: ['react', 'javascript', 'frontend'],
    link: 'https://example.com',
    bookmarked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Database Design Course',
    description: 'Master database design principles',
    category: 'Courses',
    tags: ['database', 'sql', 'design'],
    link: 'https://example.com',
    bookmarked: false,
    createdAt: new Date().toISOString(),
  },
];

let bookmarks: { [key: string]: Set<string> } = {
  'demo-user': new Set(),
};

let nextResourceId = 4;

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const userId = 'demo-user';
    const userBookmarks = bookmarks[userId] || new Set();

    return Response.json(
      resources.map(r => ({
        ...r,
        bookmarked: userBookmarks.has(r.id),
      }))
    );
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

    const { title, description, category, tags, link } = await request.json();

    if (!title || !link) {
      return Response.json({ error: 'Title and link required' }, { status: 400 });
    }

    const newResource = {
      id: String(nextResourceId++),
      title,
      description,
      category,
      tags,
      link,
      bookmarked: false,
      createdAt: new Date().toISOString(),
    };

    resources.push(newResource);
    return Response.json(newResource, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
