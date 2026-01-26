import { cn } from '../utils/cn';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  appColor?: 'blue' | 'purple' | 'emerald' | 'amber';
  children: React.ReactNode;
}

export function GlassButton({
  variant = 'primary',
  size = 'md',
  appColor = 'blue',
  className,
  children,
  ...props
}: GlassButtonProps) {
  const baseClasses = 'backdrop-blur-md border border-white/30 rounded-lg font-medium transition-all duration-200 active:scale-95';

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: {
      blue: 'bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-500/30 shadow-lg shadow-blue-500/20',
      purple:
        'bg-purple-500/20 text-purple-700 dark:text-purple-300 hover:bg-purple-500/30 shadow-lg shadow-purple-500/20',
      emerald:
        'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/30 shadow-lg shadow-emerald-500/20',
      amber: 'bg-amber-500/20 text-amber-700 dark:text-amber-300 hover:bg-amber-500/30 shadow-lg shadow-amber-500/20',
    },
    secondary: {
      blue: 'bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/20',
      purple: 'bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/20',
      emerald: 'bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/20',
      amber: 'bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/20',
    },
    danger: {
      blue: 'bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30 shadow-lg shadow-red-500/20',
      purple: 'bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30 shadow-lg shadow-red-500/20',
      emerald: 'bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30 shadow-lg shadow-red-500/20',
      amber: 'bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30 shadow-lg shadow-red-500/20',
    },
  };

  const validVariant = variant && variantClasses[variant] ? variant : 'primary';
  const validColor = appColor && variantClasses[validVariant][appColor] ? appColor : 'blue';
  const colorClasses = variantClasses[validVariant][validColor];

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        colorClasses,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
