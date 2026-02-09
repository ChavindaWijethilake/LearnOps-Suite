'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Bell, Search, Menu } from 'lucide-react';

export function TopNav() {
    const pathname = usePathname();
    const pageName = pathname === '/' ? 'Dashboard' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

    return (
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-card px-6 shadow-sm md:ml-64 lg:ml-72">
            <button className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground">
                <Menu className="h-5 w-5" />
            </button>

            <div className="flex flex-1 items-center gap-4">
                <h1 className="text-lg font-semibold md:text-xl text-foreground hidden sm:block">
                    {pageName}
                </h1>
                <div className="flex-1 md:ml-auto md:flex-none">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search courses, assignments..."
                            className="h-9 w-full rounded-lg border border-input bg-background pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary md:w-[300px] lg:w-[400px]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative rounded-full p-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-card" />
                </button>

                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                    JS
                </div>
            </div>
        </header>
    );
}
