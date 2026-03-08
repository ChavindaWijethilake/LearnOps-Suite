import { Express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { authMiddleware } from '../middleware/auth';
import { apiLimiter } from '../middleware/rate-limiter';

// Service mapping based on existing architecture
const SERVICES = {
    portal: 'http://localhost:3000',
    billing: 'http://localhost:3001',
    services: 'http://localhost:3002',
    analytics: 'http://localhost:3003',
    learning: 'http://localhost:3004',
};

export function setupRoutes(app: Express) {
    // Health check
    app.get('/health', (req, res) => {
        res.status(200).json({ status: 'ok', service: 'gateway', timestamp: new Date().toISOString() });
    });

    // ── API Routes (With Auth & Rate Limiting) ──

    app.use('/api/billing', apiLimiter, authMiddleware, createProxyMiddleware({
        target: SERVICES.billing,
        changeOrigin: true,
        pathRewrite: { '^/api/billing': '/api' }
    }));

    app.use('/api/services', apiLimiter, authMiddleware, createProxyMiddleware({
        target: SERVICES.services,
        changeOrigin: true,
        pathRewrite: { '^/api/services': '/api' }
    }));

    app.use('/api/analytics', apiLimiter, authMiddleware, createProxyMiddleware({
        target: SERVICES.analytics,
        changeOrigin: true,
        pathRewrite: { '^/api/analytics': '/api' }
    }));

    app.use('/api/learning', apiLimiter, authMiddleware, createProxyMiddleware({
        target: SERVICES.learning,
        changeOrigin: true,
        pathRewrite: { '^/api/learning': '/api' }
    }));

    // ── UI Proxies (Direct to Next.js apps) ──

    // Next.js handles its own /_next/static requests, but when proxied via subpaths,
    // we need to be careful. The apps are configured for root URLs, so we rewrite 
    // the root but Next.js will ask for _next.
    // An enterprise gateway usually handles domains (e.g., billing.learnops.local) 
    // or apps are configured with `basePath`.

    // Portal / dashboard routes
    app.use('/dashboard', createProxyMiddleware({
        target: SERVICES.portal,
        changeOrigin: true,
    }));

    app.use('/billing', createProxyMiddleware({ target: SERVICES.billing, changeOrigin: true }));
    app.use('/services', createProxyMiddleware({ target: SERVICES.services, changeOrigin: true }));
    app.use('/analytics', createProxyMiddleware({ target: SERVICES.analytics, changeOrigin: true }));
    app.use('/learning', createProxyMiddleware({ target: SERVICES.learning, changeOrigin: true }));

    // Fallback to portal
    app.use('/', createProxyMiddleware({
        target: SERVICES.portal,
        changeOrigin: true,
    }));
}
