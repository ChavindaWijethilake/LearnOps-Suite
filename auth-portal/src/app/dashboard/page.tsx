'use client'

import { useAuth } from '@/lib/auth-context'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { AppLayout } from '@/components/layout/app-layout'
import { RoleWidgets } from '@/components/dashboard/role-widgets'
import { RoleBadge } from '@/components/common/role-badge'
import { Card, CardContent } from '@/components/ui/card'
import { AlertCircle, Bell } from 'lucide-react'

function DashboardContent() {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <AppLayout userName={`${user.firstName} ${user.lastName}`} userRole={user.role}>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
                Welcome back, {user.firstName}
              </h1>
              <p className="text-lg text-muted-foreground">
                {user.institution}
              </p>
            </div>
            <RoleBadge role={user.role} size="lg" />
          </div>
        </div>

        {/* System Notification */}
        <Card className="border-blue-200/30 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-950/20">
          <CardContent className="pt-6 flex gap-4">
            <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-blue-900 dark:text-blue-200">System Update</p>
              <p className="text-sm text-blue-800/70 dark:text-blue-300/70">
                The analytics portal will be undergoing maintenance tomorrow at 02:00 AM UTC for 30 minutes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Role-Based Content */}
        <RoleWidgets role={user.role} />

        {/* Help & Support Card */}
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <p className="font-medium text-foreground">Need Help?</p>
                <p className="text-sm text-muted-foreground">
                  Visit our{' '}
                  <a href="#" className="text-primary hover:underline">
                    Help Center
                  </a>
                  {' '}or{' '}
                  <a href="#" className="text-primary hover:underline">
                    Contact Support
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
