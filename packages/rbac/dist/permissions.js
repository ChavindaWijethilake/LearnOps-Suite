"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolePermissions = void 0;
const resources_1 = require("./resources");
const roles_1 = require("./roles");
exports.rolePermissions = {
    [roles_1.Role.STUDENT]: [
        { resource: resources_1.Resource.COURSE, action: resources_1.Action.READ },
        { resource: resources_1.Resource.RESOURCE_CENTER, action: resources_1.Action.READ },
        { resource: resources_1.Resource.BILLING, action: resources_1.Action.READ },
    ],
    [roles_1.Role.PROFESSOR]: [
        { resource: resources_1.Resource.COURSE, action: resources_1.Action.READ },
        { resource: resources_1.Resource.COURSE, action: resources_1.Action.UPDATE },
        { resource: resources_1.Resource.RESOURCE_CENTER, action: resources_1.Action.READ },
        { resource: resources_1.Resource.RESOURCE_CENTER, action: resources_1.Action.CREATE },
    ],
    [roles_1.Role.ADMIN]: [
        { resource: resources_1.Resource.USER, action: resources_1.Action.READ },
        { resource: resources_1.Resource.USER, action: resources_1.Action.UPDATE },
        { resource: resources_1.Resource.SYSTEM_SETTINGS, action: resources_1.Action.READ },
        { resource: resources_1.Resource.SYSTEM_SETTINGS, action: resources_1.Action.UPDATE },
        { resource: resources_1.Resource.ANALYTICS, action: resources_1.Action.READ },
        { resource: resources_1.Resource.AUDIT_LOG, action: resources_1.Action.READ },
    ],
    [roles_1.Role.SUPPORT_AGENT]: [
        { resource: resources_1.Resource.SUPPORT_TICKET, action: resources_1.Action.READ },
        { resource: resources_1.Resource.SUPPORT_TICKET, action: resources_1.Action.UPDATE },
        { resource: resources_1.Resource.USER, action: resources_1.Action.READ },
    ],
    [roles_1.Role.FINANCE_ADMIN]: [
        { resource: resources_1.Resource.BILLING, action: resources_1.Action.READ },
        { resource: resources_1.Resource.BILLING, action: resources_1.Action.UPDATE },
        { resource: resources_1.Resource.BILLING, action: resources_1.Action.EXPORT },
    ],
    [roles_1.Role.SUPER_ADMIN]: Object.values(resources_1.Resource).flatMap(r => Object.values(resources_1.Action).map(a => ({ resource: r, action: a }))),
};
