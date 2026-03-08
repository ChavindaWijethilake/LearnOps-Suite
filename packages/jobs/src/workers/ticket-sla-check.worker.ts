import { systemJobQueue } from '../job-queue';

export function registerTicketSLACheckWorker() {
    systemJobQueue.register({
        id: 'worker-ticket-sla-check',
        name: 'Ticket SLA Monitor',
        intervalMs: 30 * 60 * 1000, // Every 30 minutes
        enabled: true,
        handler: async () => {
            console.log('[Worker: TicketSLA] Monitoring unassigned and open tickets against SLAs...');

            // Randomly flag an SLA breach for demo
            if (Math.random() > 0.8) {
                console.warn('[Worker: TicketSLA] ⚠️ SLA breached on ticket TKT-9912 (Response time > 4h)');
            }
        }
    });
}
