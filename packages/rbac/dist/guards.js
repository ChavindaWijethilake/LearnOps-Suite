"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractGuardContext = extractGuardContext;
exports.createApiGuard = createApiGuard;
exports.createOwnershipGuard = createOwnershipGuard;
exports.unauthorized = unauthorized;
exports.forbidden = forbidden;
const roles_1 = require("./roles");
const policy_1 = require("./policy");
function extractGuardContext(headers) {
    const userId = headers['x-user-id'];
    const roleString = headers['x-user-role'];
    if (!userId || !roleString)
        return null;
    return {
        userId,
        role: (0, roles_1.parseRole)(roleString),
    };
}
function createApiGuard(resource, action) {
    return (context) => {
        return (0, policy_1.can)(context.role, resource, action);
    };
}
function createOwnershipGuard(resource, action) {
    return (context, ownerId) => {
        if (context.role === roles_1.Role.ADMIN || context.role === roles_1.Role.SUPER_ADMIN)
            return true;
        return context.userId === ownerId && (0, policy_1.can)(context.role, resource, action);
    };
}
function unauthorized() {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
    });
}
function forbidden() {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
    });
}
