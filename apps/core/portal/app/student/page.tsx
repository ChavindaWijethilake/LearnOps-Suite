'use client';

import React, { useState } from 'react';
import {
    GraduationCap,
    BookOpen,
    Clock,
    Calendar,
    Activity,
    ChevronRight,
    Search,
    Bell,
    Settings,
    LayoutDashboard,
    ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function StudentPortalPage() {
    const [mounted, setMounted] = useState(true);

    const handleAction = (action: string) => {
        alert(`Initializing Student Protocol: ${action}`);
    };

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-400 font-sans selection:bg-cyan-500/30">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
                {/* ── Header ── */}
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 border-b border-slate-800 pb-8">
                    <div>
                        <div className="flex items-center gap-4 mb-3">
                            <Link href="/portals" className="p-2 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all group">
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </Link>
                            <div className="w-12 h-12 bg-cyan-500 rounded-none flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(6,182,212,0.2)]">
                                <GraduationCap className="w-7 h-7 text-white" />
                            </div>
                            <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">Student Terminal</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] bg-cyan-500/10 px-2 py-1 border border-cyan-500/20">Authorized Node: S-7729</span>
                            <div className="h-1 w-1 bg-slate-700 rounded-full" />
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Environment: Academic Hub Alpha</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={() => handleAction('Notifications')} className="p-3 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all group">
                            <Bell className="w-5 h-5 group-hover:text-cyan-400" />
                        </button>
                        <button onClick={() => handleAction('System Config')} className="p-3 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all group">
                            <Settings className="w-5 h-5 group-hover:text-cyan-400" />
                        </button>
                    </div>
                </header>

                {/* ── Dashboard Grid ── */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Main Actions */}
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Courses Card */}
                        <div className="bg-slate-900/50 border-industrial p-8 group hover:bg-slate-800/50 transition-all shadow-industrial">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all">
                                    <BookOpen className="w-8 h-8 text-cyan-400" />
                                </div>
                                <Activity className="w-5 h-5 text-slate-700 animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Academic Modules</h3>
                            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">Access your registered course load, laboratory materials, and lecture archives.</p>
                            <Link
                                href="http://localhost:3004"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-600 text-white text-xs font-black uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-[4px_4px_0px_0px_rgba(8,145,178,0.3)]"
                            >
                                Enter Learning Hub
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Assignments Card */}
                        <div className="bg-slate-900/50 border-industrial p-8 group hover:bg-slate-800/50 transition-all shadow-industrial">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500/50 transition-all">
                                    <Clock className="w-8 h-8 text-amber-400" />
                                </div>
                                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">3 Pending</span>
                            </div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Deadlines & Tasks</h3>
                            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">Critical timeline monitoring for upcoming submissions and project evaluations.</p>
                            <button
                                onClick={() => handleAction('Task Ledger')}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-amber-600 text-white text-xs font-black uppercase tracking-widest hover:bg-amber-500 transition-all shadow-[4px_4px_0px_0px_rgba(217,119,6,0.3)]"
                            >
                                View Task Ledger
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Schedule Card */}
                        <div className="bg-slate-900/50 border-industrial p-8 group hover:bg-slate-800/50 transition-all shadow-industrial col-span-1 md:col-span-2">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                                    <Calendar className="w-8 h-8 text-indigo-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight">Timeline Orchestration</h3>
                                    <p className="text-sm text-slate-500 font-medium mt-1">Next: Advanced React Patterns (14:00 - Room 402)</p>
                                </div>
                                <button
                                    onClick={() => handleAction('Master Schedule')}
                                    className="px-6 py-3 border border-indigo-500/30 text-indigo-400 text-xs font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all"
                                >
                                    Full Schedule
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Status */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        <div className="bg-slate-900 border-industrial p-8 shadow-industrial relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full translate-x-16 -translate-y-16" />
                            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Efficiency Indices</h4>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                        <span>Course Completion</span>
                                        <span className="text-cyan-400">72%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 border border-slate-700">
                                        <div className="h-full bg-cyan-500 w-[72%]" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                        <span>GPA Composite</span>
                                        <span className="text-emerald-400">3.8 / 4.0</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 border border-slate-700">
                                        <div className="h-full bg-emerald-500 w-[95%]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-1 solid border-4 border-slate-900">
                            <div className="p-6 bg-slate-50 border border-slate-200">
                                <h3 className="text-lg font-black text-slate-900 uppercase italic">System Alert</h3>
                                <p className="text-xs text-slate-600 mt-2 leading-relaxed">Financial reconciliation required for Term 2. Please access the billing nexus through the main portal.</p>
                                <Link
                                    href="http://localhost:3001"
                                    className="mt-6 w-full py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
                                >
                                    Billing Nexus
                                    <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
