import { prisma } from '@learnops/db';

export type AuditLogEntry = {
    actorId: string;
    actorRole: string;
    action: string;
    resource: string;
    resourceId?: string;
    metadata?: any;
    ipAddress?: string;
};

export async function logAction(entry: AuditLogEntry) {
    try {
        return await prisma.auditLog.create({
            data: {
                actorId: entry.actorId,
                actorRole: entry.actorRole,
                action: entry.action,
                resource: entry.resource,
                resourceId: entry.resourceId,
                metadata: entry.metadata ? JSON.stringify(entry.metadata) : null,
                ipAddress: entry.ipAddress,
            }
        });
    } catch (error) {
        console.error('Failed to create audit log:', error);
        // Don't throw - audit logging should not crash the main flow
    }
}

export async function getAuditLogs(filters: any = {}, pagination = { skip: 0, take: 50 }) {
    return prisma.auditLog.findMany({
        where: filters,
        orderBy: { timestamp: 'desc' },
        skip: pagination.skip,
        take: pagination.take,
    });
}
