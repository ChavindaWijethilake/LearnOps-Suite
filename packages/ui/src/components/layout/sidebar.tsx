import Link from 'next/link';
import { cn } from '../../utils/cn';

interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface SidebarProps {
  items: NavItem[];
  appColor?: string;
}

export function Sidebar({ items, appColor = 'blue' }: SidebarProps) {
  const hoverClasses = {
    blue: 'hover:bg-blue-500/10',
    purple: 'hover:bg-purple-500/10',
    emerald: 'hover:bg-emerald-500/10',
    amber: 'hover:bg-amber-500/10',
  };

  const activeClasses = {
    blue: 'bg-blue-500/20 text-blue-700 dark:text-blue-400 border-l-2 border-blue-500',
    purple: 'bg-purple-500/20 text-purple-700 dark:text-purple-400 border-l-2 border-purple-500',
    emerald: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-l-2 border-emerald-500',
    amber: 'bg-amber-500/20 text-amber-700 dark:text-amber-400 border-l-2 border-amber-500',
  };

  return (
    <aside className="w-64 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-r border-white/20 min-h-screen">
      <nav className="p-4 space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-4 py-2 rounded-lg transition-colors',
              item.active
                ? activeClasses[appColor as keyof typeof activeClasses] || activeClasses.blue
                : cn('text-gray-700 dark:text-gray-400', hoverClasses[appColor as keyof typeof hoverClasses] || hoverClasses.blue),
            )}
          >
            {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
