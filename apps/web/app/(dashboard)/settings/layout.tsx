'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    User,
    Bell,
    Shield,
    Zap,
    ChevronRight,
    Save,
    Undo2,
    Home,
    RotateCcw,
    AlertTriangle,
    Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SettingsProvider, useSettings } from './settings-context';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const settingsNav = [
    { href: '/settings/profile', label: 'Profile Information', icon: User, desc: 'Personal details & identity' },
    { href: '/settings/preferences', label: 'General Preferences', icon: Settings, desc: 'Interface, theme & regional' },
    { href: '/settings/notifications', label: 'Notifications', icon: Bell, desc: 'Alert preferences & routing' },
    { href: '/settings/security', label: 'Security & Privacy', icon: Shield, desc: 'Auth, sessions & 2FA' },
    { href: '/settings/performance', label: 'Performance', icon: Zap, desc: 'Sync & cache optimization' },
];

function SettingsFooter() {
    const { isDirty, saveChanges, resetChanges } = useSettings();
    const [isSaving, setIsSaving] = useState(false);
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await saveChanges();
        } finally {
            setIsSaving(false);
        }
    };

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div className={cn(
                "fixed bottom-0 left-64 right-0 p-4 bg-[#0B1120]/80 backdrop-blur-xl border-t border-slate-800/50 z-30 transition-all duration-500",
                isDirty ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            )}>
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-tighter">Unsaved changes detected</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            onClick={() => setShowResetConfirm(true)}
                            className="text-slate-400 hover:text-white hover:bg-slate-800/50 gap-2 text-xs font-bold uppercase tracking-widest"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            Reset All
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => window.location.reload()}
                            className="text-slate-400 hover:text-white hover:bg-slate-800/50 gap-2 text-xs font-bold uppercase tracking-widest"
                        >
                            <Undo2 className="w-3.5 h-3.5" />
                            Discard
                        </Button>
                        <Button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] gap-2 px-8 text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20"
                        >
                            {isSaving ? <Zap className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                            Save Configuration
                        </Button>
                    </div>
                </div>
            </div>

            <AlertDialog open={showResetConfirm} onOpenChange={setShowResetConfirm}>
                <AlertDialogContent className="bg-slate-900 border-slate-800">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                            Reset to System Defaults?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-slate-400">
                            This action will revert all configuration settings in this module to their original factory states. This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700">Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={resetChanges}
                            className="bg-rose-500 hover:bg-rose-600 text-white border-none"
                        >
                            Reset Defaults
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <SettingsProvider>
            <div className="max-w-[1400px] mx-auto py-6 space-y-6 animate-fade-in min-h-[calc(100vh-120px)] flex flex-col">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
                    <Link href="/status" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
                        <Home className="w-3 h-3" />
                        Hub
                    </Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/settings" className="hover:text-emerald-500 transition-colors">Settings</Link>
                    {mounted && pathname && settingsNav.find(item => pathname.startsWith(item.href)) && (
                        <>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-emerald-500">{settingsNav.find(item => pathname.startsWith(item.href))?.label}</span>
                        </>
                    )}
                </nav>

                <div className="flex flex-col lg:flex-row gap-8 flex-1">
                    {/* Local Settings Sidebar */}
                    <aside className="w-full lg:w-72 space-y-2">
                        <div className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-[2rem] space-y-1 sticky top-6">
                            <h2 className="px-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-4">Command Settings</h2>
                            {settingsNav.map((item) => {
                                const isActive = pathname && pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex flex-col gap-0.5 px-4 py-3 rounded-2xl transition-all duration-300 group",
                                            isActive
                                                ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                                                : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className={cn("w-4 h-4", isActive ? "text-emerald-400" : "text-slate-500 group-hover:text-emerald-400")} />
                                            <span className="text-xs font-black uppercase tracking-tight">{item.label}</span>
                                        </div>
                                        <span className="text-[10px] font-medium text-slate-600 ml-7 group-hover:text-slate-500 transition-colors">{item.desc}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Main Settings Content */}
                    <main className="flex-1 min-w-0 pb-24">
                        {children}
                    </main>
                </div>

                <SettingsFooter />
            </div>
        </SettingsProvider>
    );
}
