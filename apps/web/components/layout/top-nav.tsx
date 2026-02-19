'use client';

import Link from 'next/link';
import { Bell, User, LogOut } from 'lucide-react';

const TopNav = () => {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-[#0F172A] border-b border-[#1F2937] z-50 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
                {/* Logo or Brand Name could go here */}
                <Link href="/" className="text-xl font-bold text-[#E5E7EB] tracking-tight">
                    Command Center
                </Link>
            </div>

            <div className="flex items-center gap-4">
                {/* Notification Icon */}
                <Link
                    href="/notifications"
                    className="p-2 text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937] rounded-lg transition-colors relative"
                >
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-[#2563EB] rounded-full ring-2 ring-[#0F172A]" />
                </Link>

                {/* Profile Icon */}
                <Link
                    href="/profile"
                    className="p-2 text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937] rounded-lg transition-colors"
                    title="Profile"
                >
                    <div className="h-8 w-8 rounded-full bg-[#1F2937] flex items-center justify-center border border-[#374151]">
                        <User className="h-5 w-5" />
                    </div>
                </Link>

                {/* Logout Button */}
                <button
                    onClick={() => {
                        // Clear session (mock)
                        if (typeof window !== 'undefined') {
                            localStorage.removeItem('learnops_session');
                        }
                        // Redirect to login
                        window.location.href = '/login';
                    }}
                    className="p-2 text-[#9CA3AF] hover:text-[#EF4444] hover:bg-[#1F2937] rounded-lg transition-colors"
                    title="Sign out"
                >
                    <LogOut className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
};

export default TopNav;
