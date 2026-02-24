export type AuditLogEntry = {
    actorId: string;
    actorRole: string;
    action: string;
    resource: string;
    resourceId?: string;
    metadata?: any;
    ipAddress?: string;
};
export declare function logAction(entry: AuditLogEntry): Promise<{
    id: string;
    actorId: string;
    actorRole: string;
    action: string;
    resource: string;
    resourceId: string | null;
    metadata: string | null;
    ipAddress: string | null;
    timestamp: Date;
} | undefined>;
export declare function getAuditLogs(filters?: any, pagination?: {
    skip: number;
    take: number;
}): Promise<{
    id: string;
    actorId: string;
    actorRole: string;
    action: string;
    resource: string;
    resourceId: string | null;
    metadata: string | null;
    ipAddress: string | null;
    timestamp: Date;
}[]>;
