export const requireRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' })
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' })
    }

    next()
  }
}

export const isAdmin = (req, res, next) => {
  return requireRole(['INSTITUTION_ADMIN', 'SUPER_ADMIN'])(req, res, next)
}

export const isTeacherOrAdmin = (req, res, next) => {
  return requireRole(['TEACHER', 'INSTITUTION_ADMIN', 'SUPER_ADMIN'])(req, res, next)
}
