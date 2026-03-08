import { eventBus } from '@learnops/shared/events';

interface RevenueReadModel {
    totalRevenue: number;
    monthlyRevenue: Record<string, number>; // YYYY-MM
    lastUpdated: number;
}

export class RevenueProjection {
    private static model: RevenueReadModel = {
        totalRevenue: 0,
        monthlyRevenue: {},
        lastUpdated: Date.now()
    };

    static initialize() {
        console.log('[Analytics] Initializing Revenue Projection...');

        // Rebuild from event store (simulation for demo, only grabbing recent in-memory)
        const recentPayments = eventBus.getEventsByType('payment.received', 1000);
        this.model.totalRevenue = 0;
        this.model.monthlyRevenue = {};

        for (const event of recentPayments) {
            this.applyPaymentReceived(event.payload.amount, event.timestamp);
        }

        // Subscribe to live events
        eventBus.subscribe('payment.received', (payload) => {
            this.applyPaymentReceived(payload.amount, Date.now());
        });
    }

    private static applyPaymentReceived(amount: number, timestamp: number) {
        this.model.totalRevenue += amount;

        const date = new Date(timestamp);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

        if (!this.model.monthlyRevenue[monthKey]) {
            this.model.monthlyRevenue[monthKey] = 0;
        }
        this.model.monthlyRevenue[monthKey] += amount;
        this.model.lastUpdated = Date.now();
    }

    static getReadModel(): RevenueReadModel {
        return { ...this.model };
    }
}
