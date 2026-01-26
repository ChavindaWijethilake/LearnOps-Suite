import React, { ReactNode } from 'react';
import SessionExpired from '@/components/errors/SessionExpired';
import AccessDenied from '@/components/errors/AccessDenied';
import type { UserRole } from '@/lib/types';

interface ProtectedLayoutProps {
  children: ReactNode;
  isAuthenticated: boolean;
  userRole?: UserRole;
  requiredRoles?: UserRole[];
  onLogout?: () => void;
}

/**
 * ProtectedLayout Component
 * Placeholder for checking authentication status and role-based access.
 * Shows appropriate error UI based on auth state.
 */
export default function ProtectedLayout({
  children,
  isAuthenticated,
  userRole,
  requiredRoles,
  onLogout,
}: ProtectedLayoutProps) {
  // Check authentication
  if (!isAuthenticated) {
    return <SessionExpired onReturnHome={() => (window.location.href = '/')} />;
  }

  // Check role-based access
  if (
    requiredRoles &&
    userRole &&
    !requiredRoles.includes(userRole)
  ) {
    return <AccessDenied userRole={userRole} />;
  }

  return <>{children}</>;
}
