import { cn } from '@/lib/utils'

interface RoleBadgeProps {
  role: 'Student' | 'Teacher' | 'Institution Admin' | 'Super Admin'
  size?: 'sm' | 'md' | 'lg'
}

export function RoleBadge({ role, size = 'md' }: RoleBadgeProps) {
  const roleStyles = {
    Student: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Teacher: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Institution Admin': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'Super Admin': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  }

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs font-semibold rounded',
    md: 'px-3 py-1 text-sm font-semibold rounded-md',
    lg: 'px-4 py-1.5 text-base font-semibold rounded-lg',
  }

  return (
    <span
      className={cn(
        'inline-block',
        roleStyles[role],
        sizeStyles[size]
      )}
    >
      {role}
    </span>
  )
}
