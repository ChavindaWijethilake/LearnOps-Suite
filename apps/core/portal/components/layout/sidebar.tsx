'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Activity,
    FileText,
    Bell,
    Shield,
    Database,
    Rocket,
    Flag,
    LayoutDashboard,
    ChevronRight,
    Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    {
        title: 'Monitoring',
        items: [
            { href: '/status', label: 'System Overview', icon: Activity },
            { href: '/command-center/logs', label: 'Live Logs', icon: FileText },
            { href: '/command-center/alerts', label: 'Alert Config', icon: Bell },
        ]
    },
    {
        title: 'Governance',
        items: [
            { href: '/command-center/security', label: 'Security & Auth', icon: Shield },
        ]
    },
    {
        title: 'Engineering',
        items: [
            { href: '/command-center/infrastructure', label: 'Infrastructure', icon: Database },
            { href: '/command-center/deployments', label: 'Deployments', icon: Rocket },
            { href: '/command-center/feature-flags', label: 'Feature Flags', icon: Flag },
        ]
    },
    {
        title: 'System Configuration',
        items: [
            { href: '/settings', label: 'Command Settings', icon: Settings },
        ]
    }
];

const Sidebar = () => {
    const pathname = usePathname();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#0B1120] border-r border-slate-800/50 overflow-y-auto z-40 transition-all duration-300">
            <div className="p-4 pt-6">
                <nav className="space-y-8">
                    {/* Back to Hub */}
                    <div className="px-2 pb-4 border-b border-slate-800/50 mb-2">
                        <Link
                            href="/portals"
                            className="flex items-center gap-3 px-3 py-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-widest group"
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            <span>Portal Hub</span>
                            <ChevronRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>

                    {navItems.map((group) => (
                        <div key={group.title} className="space-y-1">
                            <h3 className="px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
                                {group.title}
                            </h3>
                            {group.items.map((item) => {
                                const isActive = mounted && (pathname === item.href || (item.href !== '/status' && pathname.startsWith(item.href)));
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group relative",
                                            isActive
                                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                                : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent"
                                        )}
                                    >
                                        {isActive && (
                                            <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-1.5 h-6 bg-emerald-500 rounded-r-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                        )}
                                        <item.icon className={cn(
                                            "h-5 w-5 transition-transform duration-500 group-hover:scale-110",
                                            isActive ? "text-emerald-400" : "text-slate-500 group-hover:text-emerald-400"
                                        )} />
                                        <span className="text-sm font-semibold tracking-tight">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </nav>
            </div>

            {/* System Version Pin */}
            <div className="absolute bottom-6 left-0 right-0 px-6">
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/50 text-center">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">LearnOps Ops v4.2</p>
                    <div className="flex items-center justify-center gap-1.5 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] text-emerald-500/80 font-bold tracking-tight">ENFORCED</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
