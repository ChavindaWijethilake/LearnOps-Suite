import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const cookieStore = await cookies();
  cookieStore.set('auth', '', { maxAge: 0 });
  return Response.json({ success: true });
}
