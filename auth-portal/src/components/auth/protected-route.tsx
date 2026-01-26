'use client'

import { useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth, type UserRole } from '@/lib/auth-context'

interface ProtectedRouteProps {
  children: ReactNode
  requiredRoles?: UserRole[]
  redirectTo?: string
}

export function ProtectedRoute({
  children,
  requiredRoles,
  redirectTo = '/login',
}: ProtectedRouteProps) {
  const router = useRouter()
  const { isAuthenticated, isLoading, user } = useAuth()

  useEffect(() => {
    if (isLoading) return

    if (!isAuthenticated) {
      router.push(redirectTo)
      return
    }

    // Check role-based access
    if (requiredRoles && user && !requiredRoles.includes(user.role)) {
      router.push('/access-denied')
    }
  }, [isAuthenticated, isLoading, user, requiredRoles, redirectTo, router])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
            <div className="h-8 w-8 rounded-full border-4 border-border border-t-primary animate-spin"></div>
          </div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  if (requiredRoles && user && !requiredRoles.includes(user.role)) {
    return null
  }

  return <>{children}</>
}
