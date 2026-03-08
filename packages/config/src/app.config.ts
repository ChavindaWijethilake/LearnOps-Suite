export const appConfig = {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'LearnOps Suite',
    version: process.env.APP_VERSION || '1.0.0',
    env: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    gatewayUrl: process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000',
    services: {
        portal: process.env.PORTAL_URL || 'http://localhost:3000',
        billing: process.env.BILLING_URL || 'http://localhost:3001',
        serviceManagement: process.env.SERVICE_MANAGEMENT_URL || 'http://localhost:3002',
        analytics: process.env.ANALYTICS_URL || 'http://localhost:3003',
        learningHub: process.env.LEARNING_HUB_URL || 'http://localhost:3004',
    }
};
