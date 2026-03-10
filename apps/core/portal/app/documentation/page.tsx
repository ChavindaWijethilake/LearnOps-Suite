'use client';

import React from 'react';
import Link from 'next/link';
import {
    Book,
    Shield,
    Zap,
    Terminal,
    ChevronRight,
    ArrowLeft,
    Activity,
    Layers,
    Cpu
} from 'lucide-react';

export default function DocumentationPage() {
    const sections = [
        {
            title: "Getting Started",
            desc: "Initialize your workspace and understand the core LearnOps architecture.",
            icon: Zap,
            links: [
                { name: "Platform Overview", href: "#overview" },
                { name: "First-Time Setup", href: "#setup" },
                { name: "Authentication Guide", href: "#auth" }
            ]
        },
        {
            title: "Security Protocols",
            desc: "Manage RBAC, encryption standards, and session security.",
            icon: Shield,
            links: [
                { name: "Role Definitions", href: "#roles" },
                { name: "Audit Logging", href: "#audit" },
                { name: "Data Privacy", href: "/privacy" }
            ]
        },
        {
            title: "Development API",
            desc: "Technical specifications for the service layer and event bus.",
            icon: Terminal,
            links: [
                { name: "Event Bus Docs", href: "#events" },
                { name: "Service Layers", href: "#services" },
                { name: "API Reference", href: "#api" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-400 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 pb-8 border-b border-slate-800">
                    <div>
                        <div className="flex items-center gap-4 mb-3">
                            <Link href="/portals" className="p-2 bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all rounded-lg group">
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </Link>
                            <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">System Documentation</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] bg-indigo-500/10 px-2 py-1 border border-indigo-500/20 text-center">Version 2.4.0-Stable</span>
                            <div className="h-1 w-1 bg-slate-700 rounded-full" />
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Global Ops Manual</p>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="col-span-12 lg:col-span-8 space-y-12">
                        {sections.map((section, idx) => (
                            <section key={idx} className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center rounded-none shadow-[4px_4px_0px_0px_rgba(99,102,241,0.1)]">
                                        <section.icon className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">{section.title}</h2>
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{section.desc}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {section.links.map((link, lIdx) => (
                                        <Link
                                            key={lIdx}
                                            href={link.href}
                                            className="group flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all shadow-lg"
                                        >
                                            <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{link.name}</span>
                                            <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Sidebar Stats */}
                    <div className="col-span-12 lg:col-span-4 space-y-8">
                        <div className="p-8 bg-slate-900 border-2 border-slate-800 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -translate-x-16 -translate-y-16 group-hover:bg-indigo-500/20 transition-all" />
                            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] mb-6">Service Health Indices</h4>

                            <div className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                        <span>API Uptime</span>
                                        <span className="text-emerald-400">99.98%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 border border-slate-700 overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-[99%]" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                        <span>Event Bus Latency</span>
                                        <span className="text-cyan-400">12ms</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 border border-slate-700 overflow-hidden">
                                        <div className="h-full bg-cyan-500 w-[85%]" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-800">
                                <div className="flex items-center gap-3 p-4 bg-slate-800/30 border border-slate-700">
                                    <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
                                    <div>
                                        <p className="text-[10px] font-black text-white uppercase">Real-Time Sync</p>
                                        <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Last Update: Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-indigo-600 rounded-none shadow-[8px_8px_0px_0px_rgba(79,70,229,0.2)]">
                            <h4 className="text-sm font-black text-white uppercase tracking-tighter italic mb-2">Need Direct Uplink?</h4>
                            <p className="text-xs text-indigo-100 mb-6 leading-relaxed">Our infrastructure team is standing by to resolve high-priority ticket escalations.</p>
                            <Link href="/support/request" className="flex items-center justify-center w-full py-3 bg-white text-indigo-600 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-lg">
                                Support Protocol
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

