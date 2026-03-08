import { eventBus } from '@learnops/shared/events';
import { systemJobQueue } from '../job-queue';

export function registerInvoiceReminderWorker() {
    systemJobQueue.register({
        id: 'worker-invoice-reminder',
        name: 'Invoice Reminder Worker',
        intervalMs: 120 * 60 * 1000, // Every 2 hours
        enabled: true,
        handler: async () => {
            console.log('[Worker: InvoiceReminder] Checking for overdue invoices...');
            // In a real system, this would query the DB for unpaid invoices past due date
            // Simulated functionality:

            // Randomly simulate an overdue invoice event for demo purposes
            if (Math.random() > 0.7) {
                const simulatedInvoiceId = `INV-${Math.floor(Math.random() * 10000)}`;
                console.log(`[Worker: InvoiceReminder] Found overdue invoice: ${simulatedInvoiceId}`);

                eventBus.publish('invoice.overdue', {
                    invoiceId: simulatedInvoiceId,
                    customerId: 'cust-demo'
                }, 'jobs');
            }
        }
    });
}
