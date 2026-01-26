import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // In production, fetch from database
  return NextResponse.json({
    id: params.id,
    title: 'Sample Request',
    description: 'Sample description',
    status: 'open',
    priority: 'high',
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  return NextResponse.json({ success: true, request: { id: params.id, ...data } });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({ success: true });
}
