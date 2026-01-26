'use client';

import React, { ReactNode } from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  type: AlertType;
  title?: string;
  message: string;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const iconMap: Record<AlertType, ReactNode> = {
  info: <Info className="w-5 h-5" />,
  success: <CheckCircle2 className="w-5 h-5" />,
  warning: <AlertTriangle className="w-5 h-5" />,
  error: <AlertCircle className="w-5 h-5" />,
};

const styleMap: Record<AlertType, string> = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-800',
  error: 'bg-red-50 border-red-200 text-red-800',
};

const iconColorMap: Record<AlertType, string> = {
  info: 'text-blue-600',
  success: 'text-emerald-600',
  warning: 'text-amber-600',
  error: 'text-red-600',
};

export default function Alert({
  type,
  title,
  message,
  onClose,
  action,
}: AlertProps) {
  return (
    <div className={`border border-current rounded-lg p-4 ${styleMap[type]}`}>
      <div className="flex gap-3">
        <div className={`flex-shrink-0 ${iconColorMap[type]}`}>{iconMap[type]}</div>

        <div className="flex-1">
          {title && <h3 className="font-semibold text-sm mb-1">{title}</h3>}
          <p className="text-sm opacity-90">{message}</p>

          {action && (
            <button
              onClick={action.onClick}
              className="mt-3 text-sm font-medium hover:opacity-75 transition-opacity"
            >
              {action.label}
            </button>
          )}
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Close alert"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
