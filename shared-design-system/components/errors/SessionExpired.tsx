'use client';

import React from 'react';
import { Clock } from 'lucide-react';

interface SessionExpiredProps {
  onReturnHome: () => void;
}

export default function SessionExpired({ onReturnHome }: SessionExpiredProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <Clock className="w-8 h-8 text-red-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Session Expired</h1>
        <p className="text-gray-600 mb-8">
          Your session has expired for security reasons. Please log in again to continue.
        </p>

        <button
          onClick={onReturnHome}
          className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Login
        </button>

        <p className="text-xs text-gray-500 mt-6">
          If you continue to experience issues, contact support.
        </p>
      </div>
    </div>
  );
}
