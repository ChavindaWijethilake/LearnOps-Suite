import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {
  LayoutDashboard,
  BarChart3,
  PieChart,
  TrendingUp,
  Settings,
  Bell,
  Search,
  User,
  Menu,
  ArrowLeft
} from 'lucide-react';
import { AnalyticsEvents } from '../components/events/analytics-events';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnOps Suite | Analytics',
  description: 'Enterprise data visualization and reporting',
};

const navItems = [
  { href: '/', label: 'Overview', icon: LayoutDashboard },
  { href: '/reports', label: 'Reports', icon: BarChart3 },
  { href: '/dashboards', label: 'Dashboards', icon: PieChart },
  { href: '/insights', label: 'Insights', icon: TrendingUp },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-app="analytics">
      <body className={`${inter.className} min-h-screen bg-[#0F172A] text-slate-50`}>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <nav className="sticky top-0 z-50 w-full h-16 border-b border-slate-800 bg-[#0F172A]/80 backdrop-blur-xl">
            <div className="h-full flex items-center justify-between px-6 gap-4">
              {/* Left: Brand */}
              <div className="flex items-center gap-4">
                <Link href="http://localhost:3000/portals" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] hidden sm:block">Portal</span>
                </Link>
                <div className="h-8 w-px bg-slate-800" />
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="h-9 w-9 bg-emerald-500 text-white flex items-center justify-center rounded-lg shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div className="hidden lg:block">
                    <div className="font-bold text-sm text-slate-50 leading-none">LearnOps Analytics</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Enterprise Insights</div>
                  </div>
                </Link>
              </div>

              {/* Middle: Search */}
              <div className="hidden md:flex flex-1 justify-center max-w-md mx-auto">
                <div className="relative w-full group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="search"
                    placeholder="Search analytics..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-slate-800 transition-all"
                  />
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-3">
                <button className="relative p-2 text-slate-400 hover:text-slate-50 hover:bg-slate-800 rounded-lg transition-all">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-emerald-500 rounded-full shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                </button>
                <div className="h-9 w-9 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-emerald-500/50 transition-all cursor-pointer">
                  <User className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-[240px] min-h-[calc(100vh-64px)] bg-[#0F172A] border-r border-slate-800 sticky top-16 p-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4 px-3">Navigation</div>
              <nav className="space-y-1 flex-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-400 hover:text-slate-50 hover:bg-slate-800/60 rounded-lg transition-all group"
                  >
                    <item.icon className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* System Status */}
              <div className="mt-auto pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 px-3 py-2">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">System Online</span>
                </div>
              </div>
            </aside>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto p-6 lg:p-8">
              <div className="max-w-[1400px] mx-auto animate-fade-in">
                <AnalyticsEvents />
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
