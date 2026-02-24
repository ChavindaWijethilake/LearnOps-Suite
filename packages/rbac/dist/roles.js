"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
exports.parseRole = parseRole;
var Role;
(function (Role) {
    Role["STUDENT"] = "STUDENT";
    Role["PROFESSOR"] = "PROFESSOR";
    Role["ADMIN"] = "ADMIN";
    Role["FINANCE_ADMIN"] = "FINANCE_ADMIN";
    Role["SUPPORT_AGENT"] = "SUPPORT_AGENT";
    Role["SUPER_ADMIN"] = "SUPER_ADMIN";
})(Role || (exports.Role = Role = {}));
function parseRole(role) {
    const r = role.toUpperCase();
    if (Object.values(Role).includes(r)) {
        return r;
    }
    return Role.STUDENT; // Default fallback
}
