'use client'

import React from "react"

import { useState } from 'react'
import { Header } from './header'
import { Sidebar } from './sidebar'

interface AppLayoutProps {
  children: React.ReactNode
  userName?: string
  userRole?: 'Student' | 'Teacher' | 'Institution Admin' | 'Super Admin'
}

export function AppLayout({ children, userName = 'John Doe', userRole = 'Student' }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        userRole={userRole}
      />
      <div className="flex flex-1 flex-col">
        <Header
          userName={userName}
          userRole={userRole}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 overflow-auto">
          <div className="p-6 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
