import { eventBus } from '@learnops/shared/events';

interface TicketMetricsReadModel {
    totalCreated: number;
    totalResolved: number;
    resolutionTimeSumMs: number;
    averageResolutionTimeMs: number | null;
    lastUpdated: number;
}

// In a real CQRS system, projections might use a DB. Here we use in-memory state.
export class TicketMetricsProjection {
    private static model: TicketMetricsReadModel = {
        totalCreated: 0,
        totalResolved: 0,
        resolutionTimeSumMs: 0,
        averageResolutionTimeMs: null,
        lastUpdated: Date.now()
    };

    // Track creation times for calculating resolution
    private static creationTimes = new Map<string, number>();

    static initialize() {
        console.log('[Analytics] Initializing Ticket Metrics Projection...');

        const createdEvents = eventBus.getEventsByType('ticket.created', 1000);
        const resolvedEvents = eventBus.getEventsByType('ticket.resolved', 1000);

        this.model.totalCreated = 0;
        this.model.totalResolved = 0;
        this.model.resolutionTimeSumMs = 0;
        this.model.averageResolutionTimeMs = null;
        this.creationTimes.clear();

        for (const e of createdEvents) {
            this.applyTicketCreated(e.payload.ticketId, e.timestamp);
        }

        for (const e of resolvedEvents) {
            this.applyTicketResolved(e.payload.ticketId, e.timestamp);
        }

        eventBus.subscribe('ticket.created', (payload) => this.applyTicketCreated(payload.ticketId, Date.now()));
        eventBus.subscribe('ticket.resolved', (payload) => this.applyTicketResolved(payload.ticketId, Date.now()));
    }

    private static applyTicketCreated(ticketId: string, timestamp: number) {
        this.model.totalCreated += 1;
        this.creationTimes.set(ticketId, timestamp);
        this.model.lastUpdated = Date.now();
    }

    private static applyTicketResolved(ticketId: string, resolvedAt: number) {
        this.model.totalResolved += 1;

        const createdAt = this.creationTimes.get(ticketId);
        if (createdAt) {
            this.model.resolutionTimeSumMs += (resolvedAt - createdAt);
            this.model.averageResolutionTimeMs = this.model.resolutionTimeSumMs / this.model.totalResolved;
            this.creationTimes.delete(ticketId);
        }

        this.model.lastUpdated = Date.now();
    }

    static getReadModel(): TicketMetricsReadModel {
        return { ...this.model };
    }
}
