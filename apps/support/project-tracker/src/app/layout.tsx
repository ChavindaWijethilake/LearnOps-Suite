import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar, Sidebar, Footer } from '@learnops/ui';
import {
  LayoutDashboard,
  Briefcase,
  CheckSquare,
  Users,
  Settings,
  Kanban
} from 'lucide-react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnOps Suite | Project Tracker',
  description: 'Project planning and task management tool',
};

const navItems = [
  { href: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" />, active: true },
  { href: '/projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
  { href: '/tasks', label: 'Tasks', icon: <CheckSquare className="w-4 h-4" /> },
  { href: '/team', label: 'Team', icon: <Users className="w-4 h-4" /> },
  { href: '/settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-app="project-tracker">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50/50`}>
        <Navbar
          appName="Project Tracker"
          appLogo={<Kanban className="w-6 h-6 text-white" />}
          userEmail="admin@learnops.local"
        />
        <div className="flex-1 flex max-w-[1600px] mx-auto w-full">
          <Sidebar items={navItems} />
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
