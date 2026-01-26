import Link from 'next/link';
import { LogOut, Menu } from 'lucide-react';

interface NavbarProps {
  appName: string;
  appColor?: string;
  userEmail?: string;
  onLogout?: () => void;
}

export function Navbar({ appName, appColor = 'blue', userEmail, onLogout }: NavbarProps) {
  const bgClasses = {
    blue: 'bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-200/20',
    purple: 'bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-200/20',
    emerald: 'bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border-emerald-200/20',
    amber: 'bg-gradient-to-r from-amber-500/10 to-amber-600/10 border-amber-200/20',
  };

  const accentClasses = {
    blue: 'text-blue-700 dark:text-blue-400',
    purple: 'text-purple-700 dark:text-purple-400',
    emerald: 'text-emerald-700 dark:text-emerald-400',
    amber: 'text-amber-700 dark:text-amber-400',
  };

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b ${bgClasses[appColor as keyof typeof bgClasses] || bgClasses.blue} border-white/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/app"
            className={`text-xl font-bold ${accentClasses[appColor as keyof typeof accentClasses] || accentClasses.blue}`}
          >
            {appName}
          </Link>

          <div className="flex items-center gap-4">
            {userEmail && <span className="text-sm text-gray-600 dark:text-gray-400">{userEmail}</span>}
            {onLogout && (
              <button
                onClick={onLogout}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
