import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SharedLayout } from '@learnops/ui';
import {
  LayoutDashboard,
  BarChart3,
  PieChart,
  TrendingUp,
  Settings
} from 'lucide-react';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnOps Suite | Analytics',
  description: 'Enterprise data visualization and reporting',
};

const navItems = [
  { href: '/', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
  { href: '/reports', label: 'Reports', icon: <BarChart3 className="w-4 h-4" /> },
  { href: '/dashboards', label: 'Dashboards', icon: <PieChart className="w-4 h-4" /> },
  { href: '/insights', label: 'Insights', icon: <TrendingUp className="w-4 h-4" /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-app="analytics">
      <body className={`${inter.className} min-h-screen bg-slate-50`}>
        <SharedLayout
          appName="LearnOps Analytics"
          navItems={navItems}
        >
          {children}
        </SharedLayout>
      </body>
    </html>
  );
}
