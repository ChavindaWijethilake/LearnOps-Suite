'use client'

import { ProtectedRoute } from '@/components/auth/protected-route'
import { PortalPage } from '@/components/portals/portal-page'
import { BookOpen } from 'lucide-react'

export default function LMSPortalPage() {
  return (
    <ProtectedRoute>
      <PortalPage
        portalName="Learning Management System"
        portalDescription="Access your courses, assignments, grades, and learning materials"
        portalUrl="https://lms.example.com"
        icon={<BookOpen className="h-8 w-8" />}
        features={[
          'View enrolled courses and course materials',
          'Submit assignments and track progress',
          'View grades and academic performance',
          'Participate in discussions and forums',
          'Download course resources and lecture notes',
          'Calendar with important dates and deadlines',
          'Grade book and academic transcript',
          'Attendance tracking and reporting',
        ]}
      />
    </ProtectedRoute>
  )
}
