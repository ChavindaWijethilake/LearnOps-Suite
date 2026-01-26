'use client'

import { ProtectedRoute } from '@/components/auth/protected-route'
import { PortalPage } from '@/components/portals/portal-page'
import { DollarSign } from 'lucide-react'

export default function FeesPortalPage() {
  return (
    <ProtectedRoute>
      <PortalPage
        portalName="Fees & Scholarship Platform"
        portalDescription="Manage your fees, payments, and scholarship applications"
        portalUrl="https://fees.example.com"
        icon={<DollarSign className="h-8 w-8" />}
        features={[
          'View fee structure and payment schedules',
          'Make online payments securely',
          'Download fee invoices and receipts',
          'Apply for scholarships and financial aid',
          'Track scholarship application status',
          'View fee payment history',
          'Request fee waivers or modifications',
          'View financial aid eligibility information',
        ]}
      />
    </ProtectedRoute>
  )
}
