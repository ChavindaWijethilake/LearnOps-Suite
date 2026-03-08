import { systemJobQueue } from '../job-queue';

export function registerNotificationDispatcherWorker() {
    systemJobQueue.register({
        id: 'worker-notification-dispatcher',
        name: 'Notification Dispatcher',
        intervalMs: 5 * 60 * 1000, // Every 5 minutes
        enabled: true,
        handler: async () => {
            console.log('[Worker: NotificationDispatcher] Checking for queued email/SMS notifications...');
            // Process queued notifications batched by user

            // Simulated processing
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    });
}
