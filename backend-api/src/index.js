import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/users.routes.js'
import institutionsRoutes from './routes/institutions.routes.js'
import lmsRoutes from './routes/lms.routes.js'
import feesRoutes from './routes/fees.routes.js'
import scholarshipsRoutes from './routes/scholarships.routes.js'
import analyticsRoutes from './routes/analytics.routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/institutions', institutionsRoutes)
app.use('/api/lms', lmsRoutes)
app.use('/api/fees', feesRoutes)
app.use('/api/scholarships', scholarshipsRoutes)
app.use('/api/analytics', analyticsRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
