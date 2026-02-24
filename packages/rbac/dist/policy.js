"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.can = can;
exports.canWithOwnership = canWithOwnership;
exports.getPermissionsForRole = getPermissionsForRole;
const roles_1 = require("./roles");
const permissions_1 = require("./permissions");
function can(role, resource, action) {
    const permissions = permissions_1.rolePermissions[role] || [];
    return permissions.some(p => p.resource === resource && p.action === action);
}
function canWithOwnership(role, resource, action, userId, ownerId) {
    // Basic systemic permission check
    if (!can(role, resource, action))
        return false;
    // ABAC logic: students can only access their own resources
    if (role === roles_1.Role.STUDENT && userId !== ownerId)
        return false;
    return true;
}
function getPermissionsForRole(role) {
    return permissions_1.rolePermissions[role] || [];
}
