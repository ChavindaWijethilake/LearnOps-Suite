import { Action, Resource } from './resources';
import { Role } from './roles';
export declare function can(role: Role, resource: Resource, action: Action): boolean;
export declare function canWithOwnership(role: Role, resource: Resource, action: Action, userId: string, ownerId: string): boolean;
export declare function getPermissionsForRole(role: Role): import("./permissions").Permission[];
