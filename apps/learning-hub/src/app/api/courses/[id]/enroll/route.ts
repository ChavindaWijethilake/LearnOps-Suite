import { Response } from 'next/dist/compiled/@edge-runtime/web/incoming-request-utils';

export async function POST(request: Request) {
  try {
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
