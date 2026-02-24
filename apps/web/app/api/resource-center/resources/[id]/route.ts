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

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    resources = resources.filter(r => r.id !== params.id);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
