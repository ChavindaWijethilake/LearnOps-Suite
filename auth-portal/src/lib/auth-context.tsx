'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type UserRole = 'Student' | 'Teacher' | 'Institution Admin' | 'Super Admin'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, this would check with a backend
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
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

    if (email.includes('teacher')) {
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
      institution: data.institution,
    }

    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
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
