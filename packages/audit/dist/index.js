"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAction = logAction;
exports.getAuditLogs = getAuditLogs;
const db_1 = require("@learnops/db");
async function logAction(entry) {
    try {
        return await db_1.prisma.auditLog.create({
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
    }
    catch (error) {
        console.error('Failed to create audit log:', error);
        // Don't throw - audit logging should not crash the main flow
    }
}
async function getAuditLogs(filters = {}, pagination = { skip: 0, take: 50 }) {
    return db_1.prisma.auditLog.findMany({
        where: filters,
        orderBy: { timestamp: 'desc' },
        skip: pagination.skip,
        take: pagination.take,
    });
}
