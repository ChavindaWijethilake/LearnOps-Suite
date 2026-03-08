import { Action, Resource } from './resources';
import { Role } from './roles';
import { rolePermissions } from './permissions';

export function can(role: Role, resource: Resource, action: Action): boolean {
    const permissions = rolePermissions[role] || [];
    return permissions.some(p => p.resource === resource && p.action === action);
}

export function canWithOwnership(
    role: Role,
    resource: Resource,
    action: Action,
    userId: string,
    ownerId: string
): boolean {
    // Basic systemic permission check
    if (!can(role, resource, action)) return false;

    // ABAC logic: students can only access their own resources
    if (role === Role.STUDENT && userId !== ownerId) return false;

    return true;
}

export function getPermissionsForRole(role: Role) {
    return rolePermissions[role] || [];
}
