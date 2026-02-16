'use client';

import React from 'react';
import Link from 'next/link';
import {
    User,
    Bell,
    Shield,
    Zap,
    ChevronRight,
    ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const settingsCategories = [
    { href: '/settings/profile', label: 'Profile Information', icon: User, desc: 'Manage your personal identity, organization details, and operator avatar.', color: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/5' },
    { href: '/settings/notifications', label: 'Notifications', icon: Bell, desc: 'Configure how and when you receive critical system alerts and status updates.', color: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5' },
    { href: '/settings/security', label: 'Security & Privacy', icon: Shield, desc: 'Enforce multi-factor authentication, manage active sessions, and update credentials.', color: 'text-indigo-400', border: 'border-indigo-500/20', bg: 'bg-indigo-500/5' },
    { href: '/settings/performance', label: 'Performance', icon: Zap, desc: 'Optimize interface refresh rates, hardware acceleration, and local data caching.', color: 'text-violet-400', border: 'border-violet-500/20', bg: 'bg-violet-500/5' },
];

export default function SettingsDashboardPage() {
    return (
        <div className="space-y-10 animate-fade-in">
            <div className="space-y-2">
                <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic">Command Settings</h1>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest leading-relaxed max-w-2xl">
                    Configure your operational environment. These settings are specific to your operator profile and the current workstation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {settingsCategories.map((category) => (
                    <Link
                        key={category.href}
                        href={category.href}
                        className={cn(
                            "p-8 rounded-[2.5rem] border bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 group relative overflow-hidden",
                            category.border
                        )}
                    >
                        <div className={cn("absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 group-hover:scale-110")}>
                            <category.icon className="w-40 h-40" />
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className={cn("inline-flex p-4 rounded-2xl border bg-slate-950/50 shadow-xl", category.color, category.border)}>
                                <category.icon className="w-6 h-6" />
                            </div>

                            <div>
                                <h2 className="text-xl font-black text-white tracking-tight uppercase mb-2">{category.label}</h2>
                                <p className="text-sm font-medium text-slate-500 leading-relaxed border-l-2 border-slate-800/50 pl-4">
                                    {category.desc}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 duration-500">
                                Configure Category
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="p-10 bg-slate-950/40 border border-slate-800/50 rounded-[3rem] text-center space-y-4">
                <Shield className="w-10 h-10 text-slate-700 mx-auto" />
                <div className="space-y-1">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Global Governance Settings</p>
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">
                        Platform-wide organization settings are managed by the Head of Operations in the <Link href="/command-center/security" className="text-emerald-500 hover:underline">Security Hub</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
