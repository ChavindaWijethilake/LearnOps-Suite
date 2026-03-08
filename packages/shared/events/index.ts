// LearnOps Shared — Typed Event Bus
// Pub/Sub system for cross-module communication
// Replaces the old EventLog with a proper domain event system

"use client";

// ── Domain Event Types ──

export interface EnhancedEventMetadata {
    eventId?: string;
    aggregateId?: string;
    aggregateType?: string;
    actorId?: string;
    correlationId?: string;
}

export type DomainEvent =
    | { type: 'invoice.created'; payload: { invoiceId: string; customerId: string; amount: number } }
    | { type: 'invoice.paid'; payload: { invoiceId: string; amount: number } }
    | { type: 'invoice.overdue'; payload: { invoiceId: string; customerId: string } }
    | { type: 'ticket.created'; payload: { ticketId: string; title: string; priority: string } }
    | { type: 'ticket.assigned'; payload: { ticketId: string; assignee: string } }
    | { type: 'ticket.resolved'; payload: { ticketId: string; resolvedBy: string } }
    | { type: 'course.created'; payload: { courseId: string; title: string; instructor: string } }
    | { type: 'course.completed'; payload: { courseId: string; studentId: string } }
    | { type: 'student.enrolled'; payload: { courseId: string; studentId: string } }
    | { type: 'payment.received'; payload: { invoiceId: string; amount: number } }
    | { type: 'user.login'; payload: { userId: string; email: string } }
    | { type: 'user.logout'; payload: { userId: string } };

export type EventType = DomainEvent['type'];
export type EventPayload<T extends EventType> = Extract<DomainEvent, { type: T }>['payload'];

type EventHandler<T extends EventType> = (payload: EventPayload<T>) => void;

// ── Persisted Event Record ──

export interface EventRecord {
    id: string; // Legacy ID
    type: EventType;
    payload: any;
    timestamp: number;
    module: string;
}

export interface EnhancedEventRecord extends EventRecord {
    metadata: Required<Omit<EnhancedEventMetadata, 'correlationId'>> & { correlationId?: string };
}

// ── Event Bus ──

class EventBus {
    private handlers = new Map<string, Set<Function>>();
    private storageKey = "learnops_events";
    private maxEvents = 200;

    /** Subscribe to a domain event */
    subscribe<T extends EventType>(eventType: T, handler: EventHandler<T>): () => void {
        if (!this.handlers.has(eventType)) {
            this.handlers.set(eventType, new Set());
        }
        this.handlers.get(eventType)!.add(handler);

        // Return unsubscribe function
        return () => {
            this.handlers.get(eventType)?.delete(handler);
        };
    }

    /** Publish a domain event with optional DDD metadata */
    publish<T extends EventType>(
        eventType: T,
        payload: EventPayload<T>,
        moduleOrMetadata: string | EnhancedEventMetadata = 'system',
        legacyMetadata?: EnhancedEventMetadata
    ): void {
        let module = 'system';
        let metadata: EnhancedEventMetadata = {};

        if (typeof moduleOrMetadata === 'string') {
            module = moduleOrMetadata;
            metadata = legacyMetadata || {};
        } else {
            metadata = moduleOrMetadata;
            // Guess module based on event type if not provided explicitly
            module = eventType.split('.')[0] || 'system';
        }

        // Persist the event
        this.persistEvent(eventType, payload, module, metadata);

        // Notify all subscribers
        const handlers = this.handlers.get(eventType);
        if (handlers) {
            handlers.forEach(handler => {
                try {
                    (handler as EventHandler<T>)(payload);
                } catch (error) {
                    console.error(`[EventBus] Error in handler for ${eventType}:`, error);
                }
            });
        }
    }

    /** Get recent events from the event log */
    getRecentEvents(limit: number = 20): EventRecord[] {
        return this.loadEvents().slice(0, limit);
    }

    /** Get events filtered by type */
    getEventsByType(type: EventType, limit: number = 20): EventRecord[] {
        return this.loadEvents()
            .filter(e => e.type === type)
            .slice(0, limit);
    }

    /** Get events filtered by module */
    getEventsByModule(module: string, limit: number = 20): EnhancedEventRecord[] {
        return this.loadEvents()
            .filter(e => e.module === module)
            .slice(0, limit);
    }

    /** Replay events for a specific aggregate */
    getEventsByAggregate(aggregateType: string, aggregateId: string): EnhancedEventRecord[] {
        return this.loadEvents()
            .filter(e => e.metadata.aggregateType === aggregateType && e.metadata.aggregateId === aggregateId)
            .sort((a, b) => a.timestamp - b.timestamp); // Sort ascending for replay
    }

    /** Get events by actor/user */
    getEventsByActor(actorId: string): EnhancedEventRecord[] {
        return this.loadEvents()
            .filter(e => e.metadata.actorId === actorId)
            .sort((a, b) => b.timestamp - a.timestamp); // Sort descending (newest first)
    }

    /** Clear the event log */
    clearHistory(): void {
        if (typeof window === "undefined") return;
        localStorage.removeItem(this.storageKey);
    }

    // ── Private Helpers ──

    private persistEvent(type: string, payload: any, module: string, md: EnhancedEventMetadata = {}): void {
        const events = this.loadEvents();
        const eventId = md.eventId || `evt-${Date.now()}-${Math.random().toString(36).substring(7)}`;
        const timestamp = Date.now();

        const record: EnhancedEventRecord = {
            id: eventId,
            type: type as EventType,
            payload,
            timestamp,
            module,
            metadata: {
                eventId,
                aggregateId: md.aggregateId || payload.id || payload.invoiceId || payload.ticketId || payload.courseId || payload.userId || 'unknown-aggregate',
                aggregateType: md.aggregateType || type.split('.')[0] || 'Unknown',
                actorId: md.actorId || 'system',
                correlationId: md.correlationId,
            }
        };

        events.unshift(record);
        if (events.length > this.maxEvents) {
            events.splice(this.maxEvents);
        }

        this.saveEvents(events);
    }

    private loadEvents(): EnhancedEventRecord[] {
        if (typeof window === "undefined") return [];
        const stored = localStorage.getItem(this.storageKey);
        if (!stored) return [];
        try {
            const parsed = JSON.parse(stored);
            // Migrate old events to new format if needed
            return parsed.map((e: any) => {
                if (!e.metadata) {
                    return {
                        ...e,
                        metadata: {
                            eventId: e.id,
                            aggregateId: e.payload?.id || 'unknown',
                            aggregateType: e.type?.split('.')[0] || 'Unknown',
                            actorId: 'system'
                        }
                    };
                }
                return e;
            });
        } catch {
            return [];
        }
    }

    private saveEvents(events: EnhancedEventRecord[]): void {
        if (typeof window === "undefined") return;
        localStorage.setItem(this.storageKey, JSON.stringify(events));
    }
}

// Singleton instance
export const eventBus = new EventBus();

// ── Legacy Compatibility ──
// Keep the old eventLog API working while encouraging migration to eventBus

export const eventLog = {
    log(event: { type: string; app: string; user: string; description: string; metadata?: Record<string, any> }) {
        eventBus.publish(event.type as EventType, event as any, event.app);
    },
    getRecent(limit?: number) {
        return eventBus.getRecentEvents(limit);
    },
    getByApp(app: string, limit?: number) {
        return eventBus.getEventsByModule(app, limit);
    },
    clear() {
        eventBus.clearHistory();
    },
};
