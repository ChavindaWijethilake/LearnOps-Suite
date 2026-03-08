export const authConfig = {
    session: {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        updateAge: 24 * 60 * 60, // 24 hours (in seconds for cookies)
        cookieName: 'learnops_session',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'dev-secret-do-not-use-in-production',
        expiresIn: '1d'
    },
    otp: {
        length: 6,
        expiresInMs: 5 * 60 * 1000, // 5 minutes
    }
};
