export * from './job-queue';

import { registerInvoiceReminderWorker } from './workers/invoice-reminder.worker';
import { registerAnalyticsAggregationWorker } from './workers/analytics-aggregation.worker';
import { registerTicketSLACheckWorker } from './workers/ticket-sla-check.worker';
import { registerNotificationDispatcherWorker } from './workers/notification-dispatcher.worker';
import { systemJobQueue } from './job-queue';

// Register all system workers
export function initializeJobs() {
    console.log('[Jobs] Registering background workers...');
    registerInvoiceReminderWorker();
    registerAnalyticsAggregationWorker();
    registerTicketSLACheckWorker();
    registerNotificationDispatcherWorker();
}

// Start all enabled jobs
export function startAllJobs() {
    console.log('[Jobs] Starting job processing queue...');
    systemJobQueue.startAll();
}

// Stop all jobs
export function stopAllJobs() {
    console.log('[Jobs] Stopping job processing queue...');
    systemJobQueue.stopAll();
}
