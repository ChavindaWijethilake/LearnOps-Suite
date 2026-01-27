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
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-[calc(100vh-64px)] p-4">
      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
              item.active
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-gray-600 hover:bg-white hover:text-primary hover:shadow-sm'
            )}
          >
            {item.icon && <span className={cn("flex-shrink-0", item.active ? "text-white" : "text-gray-400 group-hover:text-primary")}>{item.icon}</span>}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
