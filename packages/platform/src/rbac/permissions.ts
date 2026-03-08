import { Action, Resource } from './resources';
import { Role } from './roles';

export type Permission = {
    resource: Resource;
    action: Action;
};

export const rolePermissions: Record<Role, Permission[]> = {
    [Role.STUDENT]: [
        { resource: Resource.COURSE, action: Action.READ },
        { resource: Resource.RESOURCE_CENTER, action: Action.READ },
        { resource: Resource.BILLING, action: Action.READ },
    ],
    [Role.PROFESSOR]: [
        { resource: Resource.COURSE, action: Action.READ },
        { resource: Resource.COURSE, action: Action.UPDATE },
        { resource: Resource.RESOURCE_CENTER, action: Action.READ },
        { resource: Resource.RESOURCE_CENTER, action: Action.CREATE },
    ],
    [Role.ADMIN]: [
        { resource: Resource.USER, action: Action.READ },
        { resource: Resource.USER, action: Action.UPDATE },
        { resource: Resource.SYSTEM_SETTINGS, action: Action.READ },
        { resource: Resource.SYSTEM_SETTINGS, action: Action.UPDATE },
        { resource: Resource.ANALYTICS, action: Action.READ },
        { resource: Resource.AUDIT_LOG, action: Action.READ },
    ],
    [Role.SUPPORT_AGENT]: [
        { resource: Resource.SUPPORT_TICKET, action: Action.READ },
        { resource: Resource.SUPPORT_TICKET, action: Action.UPDATE },
        { resource: Resource.USER, action: Action.READ },
    ],
    [Role.FINANCE_ADMIN]: [
        { resource: Resource.BILLING, action: Action.READ },
        { resource: Resource.BILLING, action: Action.UPDATE },
        { resource: Resource.BILLING, action: Action.EXPORT },
    ],
    [Role.SUPER_ADMIN]: Object.values(Resource).flatMap(r =>
        Object.values(Action).map(a => ({ resource: r as Resource, action: a as Action }))
    ),
};
