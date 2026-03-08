import { Role } from '../rbac';

export interface RoleAssignment {
    id: string;
    userId: string;
    organizationId: string;
    role: Role | string;
    assignedAt: number;
}

// Simulated persistence
const assignments = new Map<string, RoleAssignment>();

export function assignRole(userId: string, organizationId: string, role: Role | string): RoleAssignment {
    // Check if assignment already exists
    const existingKey = Array.from(assignments.keys()).find(
        key => assignments.get(key)?.userId === userId && assignments.get(key)?.organizationId === organizationId
    );

    if (existingKey) {
        // Update existing assignment (user can only have one primary role per org in this system)
        const updated = assignments.get(existingKey)!;
        updated.role = role;
        return updated;
    }

    const assignment: RoleAssignment = {
        id: `ra-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        userId,
        organizationId,
        role,
        assignedAt: Date.now()
    };

    assignments.set(assignment.id, assignment);
    return assignment;
}

export function revokeRole(assignmentId: string): boolean {
    return assignments.delete(assignmentId);
}

export function getUserRolesInOrg(userId: string, organizationId: string): RoleAssignment | null {
    const matching = Array.from(assignments.values()).find(
        a => a.userId === userId && a.organizationId === organizationId
    );
    return matching || null;
}

export function getUserOrganizations(userId: string): RoleAssignment[] {
    return Array.from(assignments.values()).filter(a => a.userId === userId);
}
