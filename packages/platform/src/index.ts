// LearnOps Platform Core — Unified Entry Point
// ═══════════════════════════════════════════════
// This package consolidates all cross-cutting platform concerns:
//   • Authentication (OTP, sessions, login/logout)
//   • RBAC (roles, permissions, guards, policy engine)
//   • Audit Logging (structured action logs)
//   • Notifications (cross-module alert system)
//   • Logging (structured JSON logger)
//   • Settings (feature flags, platform configuration)
//   • Identity (multi-organization model, enhanced sessions)

// ── Auth ──
export {
    generateOTP,
    verifyOTP,
    createSession,
    getSession,
    updateRole,
    logout,
    hasPermission,
    hasRoleLevel,
} from './auth';
export type { User, Session } from './auth';

// ── RBAC ──
export {
    Role,
    parseRole,
    isAtLeast,
    Resource,
    Action,
    can,
    canWithOwnership,
    getPermissionsForRole,
    rolePermissions,
    extractGuardContext,
    createApiGuard,
    createOwnershipGuard,
    unauthorized,
    forbidden,
} from './rbac';
export type { Permission, GuardContext } from './rbac';

// ── Audit ──
export { logAction, getAuditLogs } from './audit';
export type { AuditLogEntry } from './audit';

// ── Notifications ──
export { notifications } from './notifications';
export type { Notification, NotificationType } from './notifications';

// ── Logging ──
export { createLogger, Logger } from './logging';
export type { LogLevel, LogEntry } from './logging';

// ── Settings ──
export { settings } from './settings';
export type { PlatformSettings } from './settings';

// ── Identity ──
export * from './identity';
