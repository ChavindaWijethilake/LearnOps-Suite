'use client';

import React, { useState } from 'react';
import {
    ArrowLeft,
    LayoutGrid,
    Search,
    Filter,
    ArrowRight,
    Cpu,
    Shield,
    Globe,
    Zap,
    BookOpen,
    BarChart3
} from 'lucide-react';
import Link from 'next/link';

const allModules = [
    { name: 'Financial Engine', category: 'Core', status: 'Active', desc: 'Next-gen invoice processing and real-time financial auditing.', icon: Zap },
    { name: 'Service Nexus', category: 'Core', status: 'Active', desc: 'Unified support infrastructure with AI-driven SLA monitoring.', icon: Globe },
    { name: 'Intelligence Hub', category: 'Core', status: 'Active', desc: 'Deep-data visualization and predictive performance metrics.', icon: BarChart3 },
    { name: 'Skill Academy', category: 'Support', status: 'Active', desc: 'Adaptive learning paths and enterprise competency tracking.', icon: BookOpen },
    { name: 'Knowledge Base', category: 'Support', status: 'Active', desc: 'Centralized documentation and technical asset repository.', icon: BookOpen },
    { name: 'Project Matrix', category: 'Support', status: 'Active', desc: 'Agile workflow orchestration and team velocity analysis.', icon: Cpu },
    { name: 'Security Vault', category: 'Security', status: 'Beta', desc: 'Encrypted credential management and access log auditing.', icon: Shield },
    { name: 'Asset Manager', category: 'Infrastructure', status: 'Beta', desc: 'Hardware lifecycle tracking and procurement automation.', icon: Cpu }
];

export default function DirectoryPage() {
    const handleInitialize = (moduleName: string) => {
        alert(`Initializing Module Protocol: ${moduleName}\nStatus: Nominal\nEstablishing secure link...`);
    };

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-400 font-sans selection:bg-indigo-500/30">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_50%_50%,#1e293b,transparent)] opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-16 animate-fade-in">
                <Link href="/portals" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-indigo-400 transition-all group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Return to Control Nexus
                </Link>

                <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-indigo-500 pl-8 py-2">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                            <LayoutGrid className="w-4 h-4" />
                            System Inventory
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter text-white leading-none uppercase italic">
                            Module <span className="text-indigo-500">Registry</span>
                        </h1>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Module search..."
                                className="pl-11 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-none text-xs focus:outline-none focus:border-indigo-500 transition-all font-bold w-64 uppercase tracking-widest placeholder:text-slate-600"
                            />
                        </div>
                        <button className="px-6 py-3 bg-slate-800/50 border border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:border-indigo-500 transition-all flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Category Filter
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allModules.map((module) => (
                        <div
                            key={module.name}
                            onClick={() => handleInitialize(module.name)}
                            className="bg-slate-900/40 border border-slate-800 p-8 space-y-6 hover:border-indigo-500/50 hover:bg-slate-800/40 transition-all group cursor-pointer relative overflow-hidden shadow-2xl"
                        >
                            {/* Industrial corner accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-500/5 rotate-45 translate-x-4 -translate-y-4 group-hover:bg-indigo-500/20 transition-all" />

                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-slate-800 border border-slate-700 group-hover:border-indigo-500/50 transition-all">
                                    <module.icon className="w-5 h-5 text-indigo-400" />
                                </div>
                                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${module.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                                    {module.status}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-white tracking-tight uppercase italic group-hover:text-indigo-300 transition-colors leading-none">{module.name}</h3>
                                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{module.category} Segment</p>
                            </div>

                            <p className="text-xs text-slate-500 font-medium leading-relaxed h-12 overflow-hidden">{module.desc}</p>

                            <div className="pt-6 border-t border-slate-800 flex items-center justify-between group-hover:border-indigo-500/20 transition-all">
                                <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-indigo-400/60 group-hover:text-indigo-400 transition-all">
                                    Initialize <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-1 h-3 bg-slate-800" />
                                    <div className="w-1 h-3 bg-slate-800" />
                                    <div className="w-1 h-3 bg-slate-800 group-hover:bg-indigo-500 transition-all" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Industrial Placeholder */}
                    <div className="hidden lg:block bg-slate-900/20 border border-dashed border-slate-800 p-8 flex flex-col items-center justify-center text-center opacity-50 space-y-4">
                        <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center animate-spin-slow">
                            <Zap className="w-6 h-6 text-slate-700" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-700">Awaiting Expansion</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
