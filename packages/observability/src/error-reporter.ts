export interface ErrorReport {
    message: string;
    stack?: string;
    context: Record<string, any>;
    timestamp: number;
    severity: 'low' | 'medium' | 'high' | 'critical';
}

export const errorReporter = {
    captureException(error: Error, context: Record<string, any> = {}, severity: ErrorReport['severity'] = 'high') {
        const report: ErrorReport = {
            message: error.message,
            stack: error.stack,
            context,
            timestamp: Date.now(),
            severity
        };

        // In a real system, send this to Sentry/Datadog
        console.error(`[ErrorReporter] [${severity.toUpperCase()}] Captured exception:`, report.message);

        if (severity === 'critical') {
            // Trigger critical alerts (PagerDuty etc)
            console.error('[ErrorReporter] 🚨 CRITICAL ALERT TRIGGERED');
        }
    },

    captureMessage(message: string, context: Record<string, any> = {}, severity: ErrorReport['severity'] = 'low') {
        console.warn(`[ErrorReporter] Warning: ${message}`, context);
    }
};
