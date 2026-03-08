export enum Role {
    STUDENT = 'STUDENT',
    PROFESSOR = 'PROFESSOR',
    ADMIN = 'ADMIN',
    FINANCE_ADMIN = 'FINANCE_ADMIN',
    SUPPORT_AGENT = 'SUPPORT_AGENT',
    SUPER_ADMIN = 'SUPER_ADMIN',
}

export function parseRole(role: string): Role {
    const r = role.toUpperCase();
    if (Object.values(Role).includes(r as Role)) {
        return r as Role;
    }
    return Role.STUDENT; // Default fallback
}

export function isAtLeast(currentRole: string | Role, requiredRole: Role): boolean {
    const roleHierarchy: Record<Role, number> = {
        [Role.STUDENT]: 1,
        [Role.PROFESSOR]: 2,
        [Role.FINANCE_ADMIN]: 3,
        [Role.SUPPORT_AGENT]: 3,
        [Role.ADMIN]: 4,
        [Role.SUPER_ADMIN]: 5,
    };

    const current = typeof currentRole === 'string' ? parseRole(currentRole) : currentRole;
    return roleHierarchy[current] >= roleHierarchy[requiredRole];
}
