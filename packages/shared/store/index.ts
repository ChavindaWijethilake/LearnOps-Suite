// LearnOps Suite - Mock Data Store
"use client";

// Generic store interface
interface StoreData {
    invoices?: any[];
    customers?: any[];
    payments?: any[];
    requests?: any[];
    dashboards?: any[];
    reports?: any[];
    courses?: any[];
    articles?: any[];
    files?: any[];
    projects?: any[];
    tasks?: any[];
}

class MockStore {
    private data: StoreData = {};
    private storageKey = "learnops_store";

    constructor() {
        if (typeof window !== "undefined") {
            this.load();
        }
    }

    private load(): void {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
            try {
                this.data = JSON.parse(stored);
            } catch (e) {
                console.error("Failed to load store", e);
            }
        }
    }

    private save(): void {
        if (typeof window !== "undefined") {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        }
    }

    get<K extends keyof StoreData>(key: K): StoreData[K] {
        return this.data[key];
    }

    set<K extends keyof StoreData>(key: K, value: StoreData[K]): void {
        this.data[key] = value;
        this.save();
    }

    add<K extends keyof StoreData>(key: K, item: any): void {
        if (!this.data[key]) {
            this.data[key] = [];
        }
        (this.data[key] as any[]).push(item);
        this.save();
    }

    update<K extends keyof StoreData>(key: K, id: string, updates: any): void {
        const items = this.data[key] as any[];
        if (!items) return;

        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items[index] = { ...items[index], ...updates };
            this.save();
        }
    }

    remove<K extends keyof StoreData>(key: K, id: string): void {
        const items = this.data[key] as any[];
        if (!items) return;

        this.data[key] = items.filter(item => item.id !== id) as any;
        this.save();
    }

    clear(): void {
        this.data = {};
        this.save();
    }

    seed(): void {
        this.data = {
            invoices: [
                { id: "inv-001", customerId: "cust-001", amount: 1500, status: "Paid", date: "2026-01-15" },
                { id: "inv-002", customerId: "cust-002", amount: 2300, status: "Unpaid", date: "2026-01-20" },
            ],
            customers: [
                { id: "cust-001", name: "Acme Corp", email: "contact@acme.com", status: "Active" },
                { id: "cust-002", name: "TechStart Inc", email: "hi@techstart.com", status: "Active" },
            ],
            requests: [
                { id: "req-001", title: "System Access Request", status: "New", priority: "High", assignee: null },
                { id: "req-002", title: "Data Update Request", status: "In Progress", priority: "Medium", assignee: "staff@example.com" },
            ],
            courses: [
                { id: "course-001", title: "Introduction to TypeScript", progress: 60, instructor: "Dr. Smith" },
                { id: "course-002", title: "Advanced React Patterns", progress: 30, instructor: "Prof. Johnson" },
            ],
            articles: [
                { id: "article-001", title: "Getting Started Guide", tags: ["guide", "beginner"], views: 1250 },
                { id: "article-002", title: "API Documentation", tags: ["api", "reference"], views: 890 },
            ],
            projects: [
                { id: "proj-001", name: "Portal Redesign", status: "In Progress", completion: 45 },
                { id: "proj-002", name: "API Migration", status: "Planning", completion: 10 },
            ],
        };
        this.save();
    }
}

export const store = new MockStore();

// Seed on first load
if (typeof window !== "undefined" && !localStorage.getItem("learnops_store")) {
    store.seed();
}
