// LearnOps Suite - Event Log System
"use client";

export interface ActivityEvent {
    id: string;
    type: string;
    app: string;
    user: string;
    description: string;
    timestamp: number;
    metadata?: Record<string, any>;
}

class EventLog {
    private storageKey = "learnops_events";
    private maxEvents = 100;

    private getEvents(): ActivityEvent[] {
        if (typeof window === "undefined") return [];

        const stored = localStorage.getItem(this.storageKey);
        if (!stored) return [];

        try {
            return JSON.parse(stored);
        } catch {
            return [];
        }
    }

    private saveEvents(events: ActivityEvent[]): void {
        if (typeof window === "undefined") return;
        localStorage.setItem(this.storageKey, JSON.stringify(events));
    }

    log(event: Omit<ActivityEvent, "id" | "timestamp">): void {
        const events = this.getEvents();

        const newEvent: ActivityEvent = {
            ...event,
            id: Math.random().toString(36).substring(7),
            timestamp: Date.now(),
        };

        events.unshift(newEvent);

        // Keep only the most recent events
        if (events.length > this.maxEvents) {
            events.splice(this.maxEvents);
        }

        this.saveEvents(events);
    }

    getRecent(limit: number = 10): ActivityEvent[] {
        return this.getEvents().slice(0, limit);
    }

    getByApp(app: string, limit: number = 10): ActivityEvent[] {
        return this.getEvents()
            .filter(event => event.app === app)
            .slice(0, limit);
    }

    clear(): void {
        if (typeof window === "undefined") return;
        localStorage.removeItem(this.storageKey);
    }
}

export const eventLog = new EventLog();
