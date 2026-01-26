import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-white border border-gray-200 rounded-lg shadow-sm
        ${hover ? 'hover:shadow-md transition-shadow' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return <p className={`text-sm text-gray-600 mt-1 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg ${className}`}>
      {children}
    </div>
  );
}
