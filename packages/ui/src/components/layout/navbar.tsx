"use client";

import Link from 'next/link';
import { LogOut, User, Settings, Search, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  appName: string;
  appLogo?: React.ReactNode;
  showBackToPortal?: boolean;
  userEmail?: string;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
}

export function Navbar({
  appName,
  appLogo,
  showBackToPortal = true,
  userEmail,
  onLogout,
  onSearch
}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 h-16 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="http://localhost:3000" className="flex items-center gap-3 group">
            {appLogo || (
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                L
              </div>
            )}
            <span className="text-xl font-extrabold tracking-tight text-gray-900 group-hover:text-primary transition-colors">
              {appName}
            </span>
          </Link>

          {showBackToPortal && (
            <Link
              href="http://localhost:3000"
              className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-all hover:translate-x-[-4px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portal
            </Link>
          )}
        </div>

        <div className="flex-1 max-w-lg mx-12 hidden md:block">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder={`Search ${appName}...`}
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/50 focus:bg-white transition-all"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-50/50 border border-gray-200/50">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-bold text-gray-700">{userEmail || 'User'}</span>
          </div>

          <div className="flex items-center gap-2 border-l border-gray-200 pl-6">
            <Link
              href="/settings"
              className="p-2.5 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </Link>
            <button
              onClick={onLogout}
              className="p-2.5 text-gray-500 hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all"
              title="Sign out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
