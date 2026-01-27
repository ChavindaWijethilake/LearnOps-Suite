// LearnOps Suite - Mock Auth System
"use client";

export type Role = "admin" | "staff" | "viewer";

export interface User {
    id: string;
    email: string;
    name: string;
    role: Role;
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
export function createSession(email: string, role: Role = "staff"): Session {
    const user: User = {
        id: Math.random().toString(36).substring(7),
        email,
        name: email.split("@")[0],
        role,
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
export function updateRole(role: Role): void {
    const session = getSession();
    if (!session) return;

    session.user.role = role;
    localStorage.setItem("learnops_session", JSON.stringify(session));
}

// Logout
export function logout(): void {
    if (typeof window !== "undefined") {
        localStorage.removeItem("learnops_session");
    }
}

// Check permissions
export function hasPermission(requiredRole: Role): boolean {
    const session = getSession();
    if (!session) return false;

    const roleHierarchy: Record<Role, number> = {
        viewer: 1,
        staff: 2,
        admin: 3,
    };

    return roleHierarchy[session.user.role] >= roleHierarchy[requiredRole];
}
