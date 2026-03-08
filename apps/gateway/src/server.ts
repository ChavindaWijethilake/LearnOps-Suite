import express from 'express';
import cors from 'cors';
import { setupRoutes } from './routes';
import { requestLogger } from './middleware/logger';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(requestLogger);

// Note: http-proxy-middleware needs raw body for some things, 
// so we don't apply express.json() globally before the proxy routes.

// Setup Routes (Proxy & Health)
setupRoutes(app);

// Start server
app.listen(PORT, () => {
    console.log(`[API Gateway] 🚀 Gateway is running on http://localhost:${PORT}`);
    console.log(`[API Gateway] Proxying UI: /dashboard, /billing, /services, /analytics, /learning`);
    console.log(`[API Gateway] Proxying APIs: /api/*`);
});
