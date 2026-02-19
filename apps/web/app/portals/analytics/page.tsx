'use client'

import { ProtectedRoute } from '@/components/auth/protected-route'
import { PortalPage } from '@/components/portals/portal-page'
import { BarChart3 } from 'lucide-react'

export default function AnalyticsPortalPage() {
  return (
    <ProtectedRoute>
      <PortalPage
        portalName="Academic Analytics"
        portalDescription="Track your performance and gain insights into your academic progress"
        portalUrl="https://analytics.example.com"
        icon={<BarChart3 className="h-8 w-8" />}
        features={[
          'View detailed performance metrics and analytics',
          'Track GPA trends over time',
          'Compare performance with class averages',
          'Analyze subject-wise performance',
          'View attendance analytics and trends',
          'Generate custom reports and exports',
          'Predictive insights for course performance',
          'Learning style analysis and recommendations',
        ]}
      />
    </ProtectedRoute>
  )
}
