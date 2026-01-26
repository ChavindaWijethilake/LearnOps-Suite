import React, { ReactNode } from 'react';
import type { StatusBadgeType } from '@/lib/types';

interface BadgeProps {
  children: ReactNode;
  variant?: StatusBadgeType | 'default';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles: Record<string, string> = {
  active: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
  inactive: 'bg-gray-50 text-gray-800 border border-gray-200',
  pending: 'bg-amber-50 text-amber-800 border border-amber-200',
  approved: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
  rejected: 'bg-red-50 text-red-800 border border-red-200',
  paid: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
  unpaid: 'bg-red-50 text-red-800 border border-red-200',
  draft: 'bg-gray-50 text-gray-800 border border-gray-200',
  default: 'bg-gray-100 text-gray-800 border border-gray-300',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs font-medium rounded',
  md: 'px-3 py-1 text-sm font-medium rounded-md',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center whitespace-nowrap
        ${variantStyles[variant] || variantStyles.default}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
