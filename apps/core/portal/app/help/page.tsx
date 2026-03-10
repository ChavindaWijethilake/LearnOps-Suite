'use client';

import { useState } from 'react';
import {
    ArrowLeft,
    HelpCircle,
    Search,
    Book,
    MessageSquare,
    LifeBuoy,
    Terminal,
    ChevronRight,
    Zap,
    Activity,
    Cpu
} from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleAction = (action: string) => {
        alert(`Support Protocol Engaged: ${action}`);
    };

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-200 selection:bg-indigo-500/30 font-sans p-6 md:p-12 overflow-x-hidden">
            <div className="max-w-6xl mx-auto space-y-16 relative z-10 animate-fade-in">
                <Link href="/portals" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-indigo-400 transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Command Center
                </Link>

                <header className="text-center space-y-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mx-auto">
                        <Terminal className="w-4 h-4" />
                        Auxiliary Support Nexus
                    </div>
                    <h1 className="text-7xl font-black tracking-tighter text-white leading-[0.85] uppercase italic">
                        Query the <span className="text-indigo-500 underline decoration-indigo-500/30 underline-offset-8">Infrastructure</span>.
                    </h1>

                    <div className="relative group max-w-2xl mx-auto pt-6">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-none blur opacity-10 group-focus-within:opacity-25 transition-opacity duration-500" />
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-indigo-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="EXECUTE SEARCH: DOCUMENTATION, LOGS, FAQS..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAction(`Search: ${searchQuery}`)}
                                className="w-full pl-16 pr-6 py-6 bg-slate-900 border-2 border-slate-800 text-sm font-black text-white uppercase tracking-widest focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-700 italic"
                            />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Documentation', icon: Book, desc: 'Deep-dive into system architecture and module configurations.', color: 'text-indigo-400' },
                        { title: 'Engineering Support', icon: MessageSquare, desc: 'Connect with our engineering team for real-time troubleshooting.', color: 'text-emerald-400' },
                        { title: 'Node Status', icon: Activity, desc: 'Monitor global node performance and scheduled maintenance cycles.', color: 'text-purple-400' }
                    ].map((item) => (
                        <div
                            key={item.title}
                            onClick={() => handleAction(`Accessing ${item.title}`)}
                            className="p-10 bg-slate-900 border-2 border-slate-800 hover:border-indigo-500/30 transition-all group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/2 opacity-[0.03] rotate-45 translate-x-12 -translate-y-12" />
                            <div className={`w-14 h-14 bg-slate-800 border border-slate-700 ${item.color} flex items-center justify-center mb-10 transition-all group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic">{item.title}</h3>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                            <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-indigo-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                Initialize Uplink <ChevronRight className="w-3 h-3" />
                            </div>
                        </div>
                    ))}
                </div>

                <section className="bg-slate-900 border-2 border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02]">
                        <Cpu className="w-64 h-64" />
                    </div>

                    <h2 className="text-3xl font-black text-white mb-12 tracking-tight uppercase italic relative z-10 flex items-center gap-4">
                        <Zap className="w-8 h-8 text-indigo-500 fill-indigo-500/20" />
                        Frequent Query Resolution
                    </h2>

                    <div className="space-y-6 relative z-10">
                        {[
                            'How do I provision new user access?',
                            'Where can I find real-time financial audits?',
                            'How to configure AI-driven SLA monitoring?',
                            'What are the system requirements for LearnOps OS?'
                        ].map((q) => (
                            <button
                                key={q}
                                onClick={() => handleAction(`FAQ: ${q}`)}
                                className="w-full text-left p-6 bg-slate-950 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all group flex items-center justify-between"
                            >
                                <span className="text-sm font-black text-slate-400 group-hover:text-white uppercase tracking-widest italic">{q}</span>
                                <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-indigo-400 transition-all" />
                            </button>
                        ))}
                    </div>
                </section>

                <footer className="text-center py-10 opacity-50">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">LearnOps Suite Support Terminal v4.2.0</p>
                </footer>
            </div>
        </div>
    );
}
