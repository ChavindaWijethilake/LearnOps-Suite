'use client'

import { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // This is a placeholder component for the legacy portal pages
  // In production, authentication should be handled by the Auth Portal
  return <>{children}</>
}
