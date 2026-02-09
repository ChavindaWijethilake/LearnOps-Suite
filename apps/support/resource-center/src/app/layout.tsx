import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SharedLayout } from '@learnops/ui';
import {
  LayoutDashboard,
  Search,
  Bookmark,
  BookOpen,
  Settings
} from 'lucide-react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnOps Suite | Resource Center',
  description: 'Internal knowledge base and documentation repository',
};

const navItems = [
  { href: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" />, active: true },
  { href: '/browse', label: 'Browse Resources', icon: <Search className="w-4 h-4" /> },
  { href: '/saved', label: 'Saved Items', icon: <Bookmark className="w-4 h-4" /> },
  { href: '/collections', label: 'Collections', icon: <BookOpen className="w-4 h-4" /> },
  { href: '/settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-app="resource-center">
      <body className={`${inter.className} min-h-screen bg-slate-50`}>
        <SharedLayout
          appName="Resource Center"
          navItems={navItems}
        >
          {children}
        </SharedLayout>
      </body>
    </html>
  );
}
