'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { can, parseRole, Resource, Action, Role, getAllowedActions } from '@learnops/rbac'

export type UserRole = 'Student' | 'Teacher' | 'Institution Admin' | 'Super Admin'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  /** Normalized RBAC role string (e.g., "student", "admin") */
  rbacRole: string
  institution: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
  /** Check if current user can perform an action on a resource */
  canAccess: (resource: Resource, action: Action) => boolean
  /** Get all allowed actions for current user on a resource */
  allowedActions: (resource: Resource) => Action[]
}

interface RegisterData {
  firstName: string
  lastName: string
  email: string
  role: UserRole
  institution: string
  password: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

/**
 * Map legacy display role names to RBAC role strings
 */
function roleToRbacRole(role: UserRole): string {
  switch (role) {
    case 'Student': return 'student'
    case 'Teacher': return 'professor'
    case 'Institution Admin': return 'admin'
    case 'Super Admin': return 'super-admin'
    default: return 'student'
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          const parsed = JSON.parse(storedUser)
          // Ensure rbacRole is set for legacy stored users
          if (!parsed.rbacRole) {
            parsed.rbacRole = roleToRbacRole(parsed.role)
          }
          setUser(parsed)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate login - map demo emails to roles
    let role: UserRole = 'Student'
    let firstName = 'Demo'
    let lastName = 'User'

    if (email.includes('teacher') || email.includes('prof')) {
      role = 'Teacher'
      firstName = 'Demo'
      lastName = 'Teacher'
    } else if (email.includes('admin')) {
      role = 'Super Admin'
      firstName = 'Demo'
      lastName = 'Admin'
    } else {
      firstName = 'Demo'
      lastName = 'Student'
    }

    const newUser: User = {
      id: `user_${Date.now()}`,
      email,
      firstName,
      lastName,
      role,
      rbacRole: roleToRbacRole(role),
      institution: 'Demo Institution',
      avatar: undefined,
    }

    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const register = async (data: RegisterData) => {
    const newUser: User = {
      id: `user_${Date.now()}`,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
      rbacRole: roleToRbacRole(data.role),
      institution: data.institution,
    }

    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  /**
   * Check if the current user can perform an action on a resource.
   * Uses the RBAC permission matrix.
   */
  const canAccess = (resource: Resource, action: Action): boolean => {
    if (!user) return false
    return can(user.rbacRole, resource, action)
  }

  /**
   * Get all allowed actions for the current user on a resource.
   */
  const allowedActionsForResource = (resource: Resource): Action[] => {
    if (!user) return []
    return getAllowedActions(user.rbacRole, resource)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        canAccess,
        allowedActions: allowedActionsForResource,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
