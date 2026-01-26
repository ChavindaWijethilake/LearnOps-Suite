import express from 'express'

const router = express.Router()

// Get scholarships
router.get('/', (req, res) => {
  res.json({ message: 'Get scholarships - implementation pending' })
})

// Get scholarship by ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Get scholarship - implementation pending' })
})

// Create scholarship application
router.post('/apply', (req, res) => {
  res.json({ message: 'Apply for scholarship - implementation pending' })
})

// Get applications
router.get('/applications', (req, res) => {
  res.json({ message: 'Get applications - implementation pending' })
})

// Approve/Reject application
router.put('/applications/:id/approve', (req, res) => {
  res.json({ message: 'Approve application - implementation pending' })
})

router.put('/applications/:id/reject', (req, res) => {
  res.json({ message: 'Reject application - implementation pending' })
})

// Get disbursements
router.get('/disbursements', (req, res) => {
  res.json({ message: 'Get disbursements - implementation pending' })
})

export default router
