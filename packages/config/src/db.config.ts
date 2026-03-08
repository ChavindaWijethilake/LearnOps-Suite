export const dbConfig = {
    provider: process.env.DATABASE_PROVIDER || 'localstorage', // 'localstorage' | 'postgres'
    postgres: {
        url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/learnops',
        maxPoolSize: parseInt(process.env.DATABASE_MAX_POOL_SIZE || '10', 10),
        ssl: process.env.DATABASE_SSL === 'true',
    },
    redis: {
        url: process.env.REDIS_URL || 'redis://localhost:6379',
        prefix: 'learnops:'
    }
};
