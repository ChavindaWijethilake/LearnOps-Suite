// LearnOps Platform — Authentication Module
"use client";

import { can, parseRole, isAtLeast, Role, Resource, Action } from "../rbac";

// Re-export RBAC types for convenience
export { Role, type Resource, type Action } from "../rbac";

export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

export interface Session {
    user: User;
    token: string;
    expiresAt: number;
}

// Simulated OTP storage (dev only)
const otpStore = new Map<string, string>();

// Generate a mock OTP
export function generateOTP(email: string): string {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(email, otp);
    console.log(`[DEV OTP] Email: ${email}, Code: ${otp}`);
    return otp;
}

// Verify OTP
export function verifyOTP(email: string, code: string): boolean {
    const storedOTP = otpStore.get(email);
    if (storedOTP === code) {
        otpStore.delete(email);
        return true;
    }
    return false;
}

// Create session
export function createSession(email: string, role: string = "student"): Session {
    const validatedRole = parseRole(role);

    const user: User = {
        id: Math.random().toString(36).substring(7),
        email,
        name: email.split("@")[0],
        role: validatedRole,
    };

    const session: Session = {
        user,
        token: Math.random().toString(36).substring(2),
        expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    };

    if (typeof window !== "undefined") {
        localStorage.setItem("learnops_session", JSON.stringify(session));
    }

    return session;
}

// Get current session
export function getSession(): Session | null {
    if (typeof window === "undefined") return null;

    const sessionStr = localStorage.getItem("learnops_session");
    if (!sessionStr) return null;

    const session: Session = JSON.parse(sessionStr);

    // Check expiration
    if (session.expiresAt < Date.now()) {
        localStorage.removeItem("learnops_session");
        return null;
    }

    return session;
}

// Update role (dev feature)
export function updateRole(role: string): void {
    const session = getSession();
    if (!session) return;

    session.user.role = parseRole(role);
    localStorage.setItem("learnops_session", JSON.stringify(session));
}

// Logout
export function logout(): void {
    if (typeof window !== "undefined") {
        localStorage.removeItem("learnops_session");
    }
}

/**
 * Check if the current user has permission for a resource + action.
 * Uses the RBAC permission matrix.
 */
export function hasPermission(resource: Resource, action: Action): boolean {
    const session = getSession();
    if (!session) return false;
    return can(parseRole(session.user.role), resource, action);
}

/**
 * Legacy permission check — checks if user's role is at or above the required level.
 * @deprecated Use hasPermission(resource, action) instead for granular checks.
 */
export function hasRoleLevel(requiredRole: string): boolean {
    const session = getSession();
    if (!session) return false;
    return isAtLeast(session.user.role, parseRole(requiredRole));
}
