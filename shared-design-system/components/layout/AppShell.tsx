'use client';

import React, { ReactNode, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import MobileNavDrawer from './MobileNavDrawer';
import type { NavigationItem, UserRole } from '@/lib/types';

interface AppShellProps {
  children: ReactNode;
  navigationItems: NavigationItem[];
  userRole: UserRole;
  userName: string;
  portalName: string;
  isAuthenticated: boolean;
}

export default function AppShell({
  children,
  navigationItems,
  userRole,
  userName,
  portalName,
  isAuthenticated,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (!isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col transition-all duration-300 bg-slate-900 text-white ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <Sidebar
          navigationItems={navigationItems}
          userRole={userRole}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </aside>

      {/* Mobile Drawer */}
      <MobileNavDrawer
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navigationItems={navigationItems}
        userRole={userRole}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <Topbar
          portalName={portalName}
          userName={userName}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="min-h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
