export const config = {
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d',
  },
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
}
