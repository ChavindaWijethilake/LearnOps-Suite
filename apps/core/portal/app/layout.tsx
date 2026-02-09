import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SharedLayout } from '@learnops/ui';
import {
  LayoutDashboard,
  User,
  Settings,
  Shield,
  Activity,
  History
} from 'lucide-react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnOps Suite | Portal',
  description: 'Unified enterprise digital services suite',
  icons: {
    icon: '/favicon.svg',
  },
};

const navItems = [
  { href: '/', label: 'Command Center', icon: <LayoutDashboard className="w-4 h-4" /> },
  { href: '/profile', label: 'Admin Profile', icon: <User className="w-4 h-4" /> },
  { href: '/settings', label: 'System Settings', icon: <Settings className="w-4 h-4" /> },
  { href: '/audit-logs', label: 'Operational Logs', icon: <History className="w-4 h-4" /> },
  { href: '/security', label: 'Security Matrix', icon: <Shield className="w-4 h-4" /> },
  { href: '/status', label: 'System Status', icon: <Activity className="w-4 h-4" /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-app="portal">
      <body className={`${inter.className} min-h-screen bg-slate-50`}>
        <SharedLayout
          appName="LearnOps Portal"
          navItems={navItems}
        >
          {children}
        </SharedLayout>
      </body>
    </html>
  );
}
