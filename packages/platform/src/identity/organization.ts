export type OrganizationType = 'university' | 'enterprise' | 'individual';

export interface Organization {
    id: string;
    name: string;
    slug: string;
    type: OrganizationType;
    plan: string;
    createdAt: number;
}

// Simulated persistence
const organizations = new Map<string, Organization>();

// Seed data
organizations.set('org-1', {
    id: 'org-1',
    name: 'LearnOps Default',
    slug: 'learnops-default',
    type: 'university',
    plan: 'enterprise',
    createdAt: Date.now()
});

export function createOrganization(data: Omit<Organization, 'id' | 'createdAt'>): Organization {
    const org: Organization = {
        ...data,
        id: `org-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        createdAt: Date.now()
    };
    organizations.set(org.id, org);
    return org;
}

export function getOrganization(id: string): Organization | null {
    return organizations.get(id) || null;
}

export function listOrganizations(): Organization[] {
    return Array.from(organizations.values());
}
