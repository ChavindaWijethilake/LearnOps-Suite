'use client';

import { useAuth } from './auth-provider';
import { Role } from '@learnops/platform';

interface RoleGuardProps {
    children: React.ReactNode;
    allowedRoles: (Role | string)[];
    fallback?: React.ReactNode;
}

export function RoleGuard({ children, allowedRoles, fallback = null }: RoleGuardProps) {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return null;
    }

    // Standardize comparison by ensuring strings are compared against normalized roles
    const isAllowed = user && allowedRoles.some(role => {
        const roleStr = typeof role === 'string' ? role.toUpperCase() : role;
        return user.role === roleStr;
    });

    if (!isAllowed) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}
