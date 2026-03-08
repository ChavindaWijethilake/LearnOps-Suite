import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // In a real implementation, this would verify JWTs or session tokens
    // For LearnOps Suite (LocalStorage auth), frontend will need to pass the session 
    // token via Authorization: Bearer <token>

    if (req.method === 'OPTIONS') {
        return next(); // always allow preflight
    }

    const authHeader = req.headers['authorization'];

    // Allow through for now if no header, to prevent breaking the flow before frontend is updated
    // In strict mode:
    // if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });

    // We could extract session data here and attach it
    // req.headers['x-user-id'] = '...';

    next();
};
