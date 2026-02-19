'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Layers, LogOut, Plus, FolderOpen } from 'lucide-react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (!response.ok) {
          router.push('/login');
        }
      } catch (e) {
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-950 dark:to-slate-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-r border-white/20 p-6 overflow-y-auto">
        <div className="flex items-center gap-2 mb-8">
          <Layers className="w-6 h-6 text-purple-600" />
          <span className="text-xl font-bold text-purple-700">Project Tracker</span>
        </div>

        <nav className="space-y-4">
          <Link
            href="/app"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-400/30 text-purple-700 font-medium"
          >
            <FolderOpen className="w-5 h-5" />
            Dashboard
          </Link>

          <Link
            href="/app/projects/new"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/20 transition"
          >
            <Plus className="w-5 h-5" />
            New Project
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/20">
          <Link
            href="/api/auth/logout"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-500/20 transition w-full"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
