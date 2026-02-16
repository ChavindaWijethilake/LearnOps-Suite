"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../utils/cn';

interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface SidebarProps {
  items: NavItem[];
  collapsed?: boolean;
}

export function Sidebar({ items, collapsed = false }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex-shrink-0 bg-slate-50 border-r-2 border-slate-200 min-h-[calc(100vh-64px)] sticky top-16 transition-all duration-500 overflow-hidden hidden md:block shadow-sm",
        collapsed ? "w-[80px]" : "w-[280px]"
      )}
    >
      <div className="p-4 h-full flex flex-col">
        {!collapsed && (
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 px-4">
            System Navigation
          </div>
        )}

        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={cn(
                  'flex items-center px-4 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 relative group border-2',
                  collapsed ? "justify-center" : "gap-4",
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.15)] translate-x-[2px] translate-y-[-2px]'
                    : 'bg-white/50 border-transparent text-slate-500 hover:bg-slate-200/80 hover:text-slate-900 hover:border-slate-300'
                )}
              >
                {item.icon && (
                  <span className={cn(
                    "h-4 w-4 transition-all duration-300 shrink-0",
                    isActive ? "text-emerald-400 scale-110" : "text-slate-400 group-hover:text-slate-900 group-hover:scale-110"
                  )}>
                    {item.icon}
                  </span>
                )}
                {!collapsed && <span className="truncate">{item.label}</span>}
                {isActive && !collapsed && (
                  <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-emerald-500 animate-pulse" />
                )}
                {isActive && collapsed && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-8 border-t-2 border-slate-200">
          <div className={cn(
            "flex items-center gap-3 px-4 transition-all duration-300",
            collapsed ? "justify-center" : "bg-white border-2 border-slate-200 p-3 hover:border-slate-900 hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] cursor-default"
          )}>
            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)] shrink-0" />
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-none">Node: Active</span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tight mt-1">Uptime: 100% stable</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
