'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RoleGate from '@/components/auth/RoleGate';
import type { NavigationItem, UserRole } from '@/lib/types';

interface SidebarProps {
  navigationItems: NavigationItem[];
  userRole: UserRole;
  collapsed?: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({
  navigationItems,
  userRole,
  collapsed = false,
  onToggleCollapse,
}: SidebarProps) {
  const pathname = usePathname();

  const filterItemsByRole = (items: NavigationItem[]): NavigationItem[] => {
    return items.filter((item) => {
      if (!item.allowedRoles) return true;
      return item.allowedRoles.includes(userRole);
    });
  };

  const filteredItems = filterItemsByRole(navigationItems);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <div className="flex flex-col h-full">
      {/* Logo Section */}
      <div className="flex items-center justify-between p-6 border-b border-slate-700">
        <div className={`${collapsed ? 'hidden' : 'flex'} items-center gap-3`}>
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
            E
          </div>
          <div>
            <p className="text-sm font-semibold text-white">EduEco</p>
            <p className="text-xs text-slate-400">Portal</p>
          </div>
        </div>
        <button
          onClick={onToggleCollapse}
          className="p-1 hover:bg-slate-700 rounded transition-colors"
          aria-label="Toggle sidebar"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-slate-300" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-slate-300" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {filteredItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isActive(item.href)
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
            title={collapsed ? item.label : undefined}
          >
            {item.icon ? (
              <span className="w-5 h-5 flex-shrink-0">{item.icon}</span>
            ) : (
              <span className="w-5 h-5 flex-shrink-0 bg-slate-600 rounded" />
            )}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer Section */}
      <div className={`border-t border-slate-700 p-4 ${collapsed ? 'text-center' : ''}`}>
        <p className={`text-xs ${collapsed ? 'hidden' : 'block'} text-slate-400`}>
          Logged in as {userRole}
        </p>
      </div>
    </div>
  );
}
