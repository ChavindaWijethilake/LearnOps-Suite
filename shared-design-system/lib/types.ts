import type { ReactNode } from 'react';

export type UserRole = 'student' | 'teacher' | 'institution_admin' | 'super_admin';

export interface NavigationItem {
  label: string;
  href: string;
  icon?: ReactNode;
  allowedRoles?: UserRole[];
  children?: NavigationItem[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  institution?: string;
  avatar?: string;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  };
}

export interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export interface FormFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => ReactNode;
  width?: string;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  loading?: boolean;
  emptyMessage?: string;
}

export type StatusBadgeType =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'paid'
  | 'unpaid'
  | 'draft';

export interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface ModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children?: ReactNode;
  actions?: {
    primary?: {
      label: string;
      onClick: () => void;
      loading?: boolean;
    };
    secondary?: {
      label: string;
      onClick: () => void;
    };
  };
}

export interface PortalConfig {
  name: string;
  slug: string;
  icon?: ReactNode;
  description: string;
  url: string;
  requiredRoles: UserRole[];
}
