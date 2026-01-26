'use client'

import React from "react"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  BookOpen,
  DollarSign,
  BarChart3,
  User,
  Lock,
  Settings,
  LogOut,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SidebarLink {
  label: string
  href: string
  icon: React.ReactNode
  roles?: string[]
  category?: 'portal' | 'settings' | 'main'
}

const sidebarLinks: SidebarLink[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="h-5 w-5" />,
    category: 'main',
  },
  {
    label: 'Learning Management System',
    href: '/portals/lms',
    icon: <BookOpen className="h-5 w-5" />,
    category: 'portal',
  },
  {
    label: 'Fees & Scholarship',
    href: '/portals/fees',
    icon: <DollarSign className="h-5 w-5" />,
    category: 'portal',
  },
  {
    label: 'Academic Analytics',
    href: '/portals/analytics',
    icon: <BarChart3 className="h-5 w-5" />,
    category: 'portal',
  },
  {
    label: 'Profile Management',
    href: '/profile',
    icon: <User className="h-5 w-5" />,
    category: 'settings',
  },
  {
    label: 'Security & Sessions',
    href: '/security',
    icon: <Lock className="h-5 w-5" />,
    category: 'settings',
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <Settings className="h-5 w-5" />,
    category: 'settings',
  },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
  userRole?: string
}

export function Sidebar({ isOpen = true, onClose, userRole = 'Student' }: SidebarProps) {
  const pathname = usePathname()

  const getFilteredLinks = () => {
    return sidebarLinks.filter((link) => {
      if (link.roles && !link.roles.includes(userRole)) {
        return false
      }
      return true
    })
  }

  const mainLinks = getFilteredLinks().filter((l) => l.category === 'main')
  const portalLinks = getFilteredLinks().filter((l) => l.category === 'portal')
  const settingsLinks = getFilteredLinks().filter((l) => l.category === 'settings')

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-screen w-64 border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-transform duration-300 md:relative md:z-auto md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-screen flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-sidebar-border px-6 py-4">
            <h2 className="text-lg font-semibold">Navigation</h2>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            {/* Main */}
            {mainLinks.length > 0 && (
              <div className="mb-8">
                <p className="mb-3 px-2 text-xs font-semibold uppercase text-sidebar-foreground/60">
                  Main
                </p>
                <div className="space-y-1">
                  {mainLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        isActive(link.href)
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent'
                      )}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Connected Portals */}
            {portalLinks.length > 0 && (
              <div className="mb-8">
                <p className="mb-3 px-2 text-xs font-semibold uppercase text-sidebar-foreground/60">
                  Connected Portals
                </p>
                <div className="space-y-1">
                  {portalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        isActive(link.href)
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent'
                      )}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Settings */}
            {settingsLinks.length > 0 && (
              <div>
                <p className="mb-3 px-2 text-xs font-semibold uppercase text-sidebar-foreground/60">
                  Account
                </p>
                <div className="space-y-1">
                  {settingsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        isActive(link.href)
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent'
                      )}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>

          {/* Footer */}
          <div className="border-t border-sidebar-border px-4 py-4">
            <Button
              variant="outline"
              className="w-full justify-start text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent bg-transparent"
              onClick={() => {
                // Handle logout
                onClose?.()
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
