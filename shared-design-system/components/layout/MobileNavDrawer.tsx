'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import type { NavigationItem, UserRole } from '@/lib/types';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
  userRole: UserRole;
}

export default function MobileNavDrawer({
  isOpen,
  onClose,
  navigationItems,
  userRole,
}: MobileNavDrawerProps) {
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
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
              E
            </div>
            <div>
              <p className="text-sm font-semibold">EduEco</p>
              <p className="text-xs text-slate-400">Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {filteredItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {item.icon ? (
                <span className="w-5 h-5 flex-shrink-0">{item.icon}</span>
              ) : (
                <span className="w-5 h-5 flex-shrink-0 bg-slate-600 rounded" />
              )}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-700 p-4">
          <p className="text-xs text-slate-400">Role: {userRole}</p>
        </div>
      </div>
    </>
  );
}
