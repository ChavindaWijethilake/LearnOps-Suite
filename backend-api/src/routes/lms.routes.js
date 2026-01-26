import express from 'express'

const router = express.Router()

// Courses
router.get('/courses', (req, res) => {
  res.json({ message: 'Get courses - implementation pending' })
})

router.post('/courses', (req, res) => {
  res.json({ message: 'Create course - implementation pending' })
})

// Assignments
router.get('/assignments', (req, res) => {
  res.json({ message: 'Get assignments - implementation pending' })
})

router.post('/assignments', (req, res) => {
  res.json({ message: 'Create assignment - implementation pending' })
})

// Attendance
router.get('/attendance', (req, res) => {
  res.json({ message: 'Get attendance - implementation pending' })
})

router.post('/attendance', (req, res) => {
  res.json({ message: 'Record attendance - implementation pending' })
})

// Exams
router.get('/exams', (req, res) => {
  res.json({ message: 'Get exams - implementation pending' })
})

router.post('/exams', (req, res) => {
  res.json({ message: 'Create exam - implementation pending' })
})

export default router
