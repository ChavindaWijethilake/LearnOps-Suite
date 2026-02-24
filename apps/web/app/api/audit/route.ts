import { NextRequest, NextResponse } from 'next/server';
import { getAuditLogs } from '@learnops/audit';
import { extractGuardContext, forbidden, unauthorized, Resource, Action, can } from '@learnops/rbac';

export async function GET(request: NextRequest) {
    const context = extractGuardContext(Object.fromEntries(request.headers));

    if (!context) return unauthorized();

    // Check permission to read audit logs
    if (!can(context.role, Resource.AUDIT_LOG, Action.READ)) {
        return forbidden();
    }

    const { searchParams } = new URL(request.url);
    const skip = parseInt(searchParams.get('skip') || '0');
    const take = parseInt(searchParams.get('take') || '50');

    // Build filters
    const filters: any = {};
    const resource = searchParams.get('resource');
    if (resource) filters.resource = resource;

    const action = searchParams.get('action');
    if (action) filters.action = action;

    const actorId = searchParams.get('actorId');
    if (actorId) filters.actorId = actorId;

    try {
        const logs = await getAuditLogs(filters, { skip, take });
        return NextResponse.json(logs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch audit logs' }, { status: 500 });
    }
}
