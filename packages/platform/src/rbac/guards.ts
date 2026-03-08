import { Action, Resource } from './resources';
import { Role, parseRole } from './roles';
import { can } from './policy';

export type GuardContext = {
    userId: string;
    role: Role;
};

export function extractGuardContext(headers: Record<string, string | string[] | undefined>): GuardContext | null {
    const userId = headers['x-user-id'] as string;
    const roleString = headers['x-user-role'] as string;

    if (!userId || !roleString) return null;

    return {
        userId,
        role: parseRole(roleString),
    };
}

export function createApiGuard(resource: Resource, action: Action) {
    return (context: GuardContext) => {
        return can(context.role, resource, action);
    };
}

export function createOwnershipGuard(resource: Resource, action: Action) {
    return (context: GuardContext, ownerId: string) => {
        if (context.role === Role.ADMIN || context.role === Role.SUPER_ADMIN) return true;
        return context.userId === ownerId && can(context.role, resource, action);
    };
}

export function unauthorized() {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
    });
}

export function forbidden() {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
    });
}
