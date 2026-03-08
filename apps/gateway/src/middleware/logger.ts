import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();

    // Intercept response finish
    res.on('finish', () => {
        const duration = Date.now() - start;
        const LogConfig = {
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            duration: `${duration}ms`,
            ip: req.ip
        };

        // Exclude Next.js polling noise
        if (!req.originalUrl.includes('_next/webpack-hmr')) {
            console.log(`[Gateway] ${LogConfig.method} ${LogConfig.url} ${LogConfig.status} - ${LogConfig.duration}`);
        }
    });

    next();
};
