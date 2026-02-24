import { Action, Resource } from './resources';
import { Role } from './roles';
export type GuardContext = {
    userId: string;
    role: Role;
};
export declare function extractGuardContext(headers: Record<string, string | string[] | undefined>): GuardContext | null;
export declare function createApiGuard(resource: Resource, action: Action): (context: GuardContext) => boolean;
export declare function createOwnershipGuard(resource: Resource, action: Action): (context: GuardContext, ownerId: string) => boolean;
export declare function unauthorized(): Response;
export declare function forbidden(): Response;
