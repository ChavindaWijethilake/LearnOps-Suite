import { Action, Resource } from './resources';
import { Role } from './roles';
export type Permission = {
    resource: Resource;
    action: Action;
};
export declare const rolePermissions: Record<Role, Permission[]>;
