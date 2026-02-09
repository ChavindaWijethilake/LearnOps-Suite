"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, User, Settings, Search, Menu, Bell, Shield, Activity, Cpu } from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavbarProps {
  appName?: string;
  appLogo?: React.ReactNode;
  showBackToPortal?: boolean;
  userEmail?: string;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
  onMenuClick?: () => void;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export function Navbar({
  appName = "LearnOps",
  appLogo,
  showBackToPortal = true,
  userEmail,
  onLogout,
  onSearch,
  onMenuClick,
  user
}: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full h-16 border-b-2 border-slate-200 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="h-full flex items-center justify-between px-8 gap-4">

        {/* LEFT: Menu Toggle & Brand */}
        <div className="flex items-center gap-4 flex-shrink-0 max-w-[35%] overflow-hidden">
          <button
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center border-2 border-slate-200 bg-white/50 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md"
            onClick={onMenuClick}
            aria-label="Toggle Sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="flex items-center gap-3 group overflow-hidden">
            <div className="h-10 w-10 flex-shrink-0 bg-slate-900 text-white flex items-center justify-center transition-all duration-500 group-hover:bg-emerald-600 group-hover:rotate-[360deg] shadow-lg">
              <span className="font-black text-lg">LO</span>
            </div>
            <div className="hidden lg:block overflow-hidden transition-all duration-300">
              <div className="font-black text-lg tracking-tight text-slate-900 uppercase leading-none truncate group-hover:text-emerald-600 transition-colors">
                {appName}
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">Operational Protocol v4.0</div>
            </div>
          </Link>
        </div>

        {/* MIDDLE: Centered Search Bar */}
        <div className="hidden md:flex flex-1 justify-center max-w-xl mx-auto">
          <div className="relative w-full max-w-md group bg-slate-100/50 rounded-none border-2 border-transparent transition-all duration-300 focus-within:bg-white focus-within:border-slate-900 focus-within:shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] overflow-hidden">
            <div className="flex items-center h-10 px-4 gap-3">
              <Search className="h-4 w-4 text-slate-400 group-focus-within:text-slate-900 transition-all duration-300 group-focus-within:scale-110 shrink-0" />
              <input
                type="search"
                placeholder="SEARCH SYSTEM DATA..."
                className="flex-1 bg-transparent border-none text-[10px] font-black uppercase tracking-widest text-slate-900 placeholder:text-slate-400 outline-none p-0 h-full"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* RIGHT: User Actions & System Info */}
        <div className="flex items-center justify-end gap-4 flex-shrink-0">
          <div className="hidden xl:flex items-center gap-6 px-4 mr-2 border-r-2 border-slate-200 h-10">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-[9px] font-black uppercase tracking-tight text-slate-900">System Live</span>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">Node-A: Optimal</span>
            </div>
          </div>

          <div className="flex items-center bg-white/50 border-2 border-slate-200 shadow-sm">
            <button className="h-10 w-10 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all relative border-r-2 border-slate-200 group">
              <Bell className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors" />
              <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 bg-rose-500 rounded-full shadow-[0_0_5px_rgba(244,63,94,0.8)]"></span>
            </button>
            <Link
              href="/settings"
              className={cn(
                "h-10 w-10 flex items-center justify-center transition-all group",
                pathname === "/settings" ? "bg-slate-900 text-white border-slate-900" : "bg-transparent hover:bg-slate-900 hover:text-white"
              )}
            >
              <Settings className={cn("h-4 w-4 transition-colors", pathname === "/settings" ? "text-white" : "text-slate-500 group-hover:text-white")} />
            </Link>
          </div>

          <div className="flex items-center gap-3 pl-4 border-l-2 border-slate-200 h-10">
            <div className="hidden sm:block text-right leading-none space-y-0.5">
              <div className="text-[10px] font-black text-slate-900 uppercase">Administrator</div>
              <div className="text-[8px] font-bold text-slate-500 uppercase">#042-OPERATOR</div>
            </div>
            <div className="h-10 w-10 bg-slate-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,0.15)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
