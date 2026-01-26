import React, { ReactNode } from 'react';
import type { UserRole } from '@/lib/types';

interface RoleGateProps {
  children: ReactNode;
  allowedRoles: UserRole[];
  userRole: UserRole;
  fallback?: ReactNode;
}

/**
 * RoleGate Component
 * UI-only role-based content gating. Shows children only if user role matches.
 * No backend logic - purely for UI rendering.
 */
export default function RoleGate({
  children,
  allowedRoles,
  userRole,
  fallback = null,
}: RoleGateProps) {
  const isAllowed = allowedRoles.includes(userRole);

  return isAllowed ? children : fallback;
}
