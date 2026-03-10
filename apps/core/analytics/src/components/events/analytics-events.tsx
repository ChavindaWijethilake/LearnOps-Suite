'use client';

import { useEffect } from 'react';
import { eventBus } from '@learnops/shared/events';

/**
 * AnalyticsEvents Component
 * Subscribes to domain events to track system-wide KPIs.
 * In a real production system, this would feed into a time-series DB or aggregator.
 */
export const AnalyticsEvents = () => {
    useEffect(() => {
        console.log('[Analytics] 📊 Monitoring Domain Intelligence...');

        const handleEvent = (type: string, payload: any) => {
            console.log(`[Analytics] 📈 KPI Updated for ${type}:`, payload);
            // In this mock, we just log. In a real app, we'd update a state or send to a tracker.

            // Example persistent tracking logic:
            const stats = JSON.parse(localStorage.getItem('learnops_analytics_counters') || '{}');
            stats[type] = (stats[type] || 0) + 1;
            localStorage.setItem('learnops_analytics_counters', JSON.stringify(stats));
        };

        const unsubscribers = [
            eventBus.subscribe('student.enrolled', (p) => handleEvent('enrollments', p)),
            eventBus.subscribe('invoice.paid', (p) => handleEvent('revenue_events', p)),
            eventBus.subscribe('user.login', (p) => handleEvent('logins', p)),
            eventBus.subscribe('ticket.created', (p) => handleEvent('tickets', p))
        ];

        return () => unsubscribers.forEach(unsub => unsub());
    }, []);

    return null;
};
