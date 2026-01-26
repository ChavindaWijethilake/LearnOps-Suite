'use client';

import React, { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className = '' }: TableProps) {
  return (
    <div className="w-full overflow-x-auto border border-gray-200 rounded-lg">
      <table className={`w-full text-sm ${className}`}>{children}</table>
    </div>
  );
}

export function TableHeader({ children }: { children: ReactNode }) {
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>{children}</tr>
    </thead>
  );
}

export function TableHead({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`px-6 py-3 text-left font-semibold text-gray-700 text-xs uppercase tracking-wider ${className}`}
    >
      {children}
    </th>
  );
}

export function TableBody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
}

export function TableRow({
  children,
  onClick,
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <tr
      onClick={onClick}
      className={`
        hover:bg-gray-50 transition-colors
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <td className={`px-6 py-4 text-gray-900 ${className}`}>{children}</td>;
}

export function TableCaption({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <caption className={`py-3 text-sm text-gray-500 ${className}`}>{children}</caption>;
}
