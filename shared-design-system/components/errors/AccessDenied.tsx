import React from 'react';
import { Lock } from 'lucide-react';
import type { UserRole } from '@/lib/types';

interface AccessDeniedProps {
  userRole: UserRole;
  requestedResource?: string;
}

const roleDisplayNames: Record<UserRole, string> = {
  student: 'Student',
  teacher: 'Teacher',
  institution_admin: 'Institution Administrator',
  super_admin: 'Super Administrator',
};

export default function AccessDenied({
  userRole,
  requestedResource = 'this resource',
}: AccessDeniedProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-amber-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-8">
          Your account role ({roleDisplayNames[userRole]}) does not have permission to access
          {' '}{requestedResource}. If you believe this is an error, contact your institution
          administrator.
        </p>

        <div className="space-y-3">
          <a
            href="/dashboard"
            className="block w-full px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Dashboard
          </a>
          <a
            href="/"
            className="block w-full px-6 py-2.5 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            Return Home
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Current Role: <span className="font-semibold">{roleDisplayNames[userRole]}</span>
        </p>
      </div>
    </div>
  );
}
