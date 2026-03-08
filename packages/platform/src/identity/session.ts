import { User, Session as AuthSession } from '../auth';
import { getOrganization } from './organization';
import { getUserRolesInOrg } from './role-assignment';

// Enhanced User model
export interface IdentityUser extends User {
    // Other identity fields could go here (avatar, timezone, etc.)
}

export interface EnhancedSession extends AuthSession {
    user: IdentityUser;
    activeOrganizationId: string | null;
}

// Simulated active sessions
const sessions = new Map<string, EnhancedSession>();

export function createEnhancedSession(baseSession: AuthSession, defaultOrgId: string | null = null): EnhancedSession {
    const session: EnhancedSession = {
        ...baseSession,
        activeOrganizationId: defaultOrgId
    };
    sessions.set(session.token, session);

    if (typeof window !== "undefined") {
        localStorage.setItem("learnops_session_enhanced", JSON.stringify(session));
    }

    return session;
}

export function switchOrganization(sessionToken: string, organizationId: string): EnhancedSession | null {
    let session = sessions.get(sessionToken);

    // Check localStorage if not in memory
    if (!session && typeof window !== "undefined") {
        const stored = localStorage.getItem("learnops_session_enhanced");
        if (stored) session = JSON.parse(stored);
    }

    if (!session) return null;

    // Verify user belongs to organization
    const roleAssignment = getUserRolesInOrg(session.user.id, organizationId);
    if (!roleAssignment) {
        throw new Error('User does not belong to this organization');
    }

    // Update active organization and role on the session itself for backward compatibility
    session.activeOrganizationId = organizationId;
    session.user.role = roleAssignment.role as string;

    sessions.set(sessionToken, session);

    if (typeof window !== "undefined") {
        localStorage.setItem("learnops_session_enhanced", JSON.stringify(session));

        // Update basic session for components that don't know about enhanced sessions yet
        const baseSessionStr = localStorage.getItem("learnops_session");
        if (baseSessionStr) {
            const baseSession = JSON.parse(baseSessionStr);
            baseSession.user.role = roleAssignment.role;
            localStorage.setItem("learnops_session", JSON.stringify(baseSession));
        }
    }

    return session;
}

export function getActiveOrganization(sessionToken: string) {
    const session = sessions.get(sessionToken);
    if (!session || !session.activeOrganizationId) return null;
    return getOrganization(session.activeOrganizationId);
}
