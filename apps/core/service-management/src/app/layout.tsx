import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SharedLayout } from '@learnops/ui';
import {
  LayoutDashboard,
  LifeBuoy,
  GitBranch,
  BarChart3,
  Settings
} from 'lucide-react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnOps Suite | Service Management',
  description: 'Enterprise service request and SLA tracking',
};

const navItems = [
  { href: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" />, active: true },
  { href: '/requests', label: 'Requests', icon: <LifeBuoy className="w-4 h-4" /> },
  { href: '/workflows', label: 'Workflows', icon: <GitBranch className="w-4 h-4" /> },
  { href: '/reports', label: 'SLA Reports', icon: <BarChart3 className="w-4 h-4" /> },
  { href: '/settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-app="service-management">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900`}>
        <SharedLayout
          appName="Service Management"
          navItems={navItems}
        >
          {children}
        </SharedLayout>
      </body>
    </html>
  );
}
