export { Role, parseRole, isAtLeast } from './roles';
export * from './resources';
export * from './policy';
export * from './guards';

// Use 'export type' for types re-exported from modules that might be stripped by webpack/babel
export type { Permission } from './permissions';
export type { GuardContext } from './guards';
export { rolePermissions } from './permissions';
