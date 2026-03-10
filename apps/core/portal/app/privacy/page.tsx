'use client';

import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Terminal, ChevronRight, Activity, ShieldCircle } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
    const handleAction = (matrix: string) => {
        alert(`Privacy Protocol: Viewing Compliance Matrix for ${matrix}`);
    };

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-200 selection:bg-emerald-500/30 font-sans p-6 md:p-12 overflow-x-hidden">
            <div className="max-w-6xl mx-auto space-y-16 relative z-10 animate-fade-in">
                <Link href="/portals" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-emerald-400 transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Command Center
                </Link>

                <header className="space-y-8 border-b-2 border-slate-800 pb-12">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        <ShieldCheck className="w-4 h-4" />
                        Intelligence Privacy Protocol v4.0
                    </div>
                    <h1 className="text-7xl font-black tracking-tighter text-white leading-[0.85] uppercase italic">
                        Data <span className="text-emerald-500">Sovereignty</span>.
                    </h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-3xl border-l-2 border-slate-800 pl-8">
                        Your data is a high-value asset. LearnOps Suite is engineered on a foundation of absolute privacy and cryptographic user sovereignty. Zero-knowledge is our baseline.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Collection Loop', icon: Eye, content: 'We only intercept the minimum telemetry required to provide enterprise service. All data is anonymized and encrypted at the point of origin.', color: 'text-indigo-400' },
                        { title: 'Cipher Standards', icon: Lock, content: 'All data in transit and at rest is shielded by military-grade AES-256-GCM encryption. Private keys never leave your secure local node.', color: 'text-emerald-400' },
                        { title: 'User Authority', icon: FileText, content: 'You maintain absolute authority over your payload. Export, purge, or modify your information at any time via the Governance Nexus.', color: 'text-purple-400' }
                    ].map((section) => (
                        <section key={section.title} className="p-10 bg-slate-900 border-2 border-slate-800 hover:border-emerald-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/2 opacity-[0.03] rotate-45 translate-x-12 -translate-y-12" />
                            <div className={`w-14 h-14 bg-slate-800 border border-slate-700 ${section.color} flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white`}>
                                <section.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic">{section.title}</h3>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-loose">{section.content}</p>
                        </section>
                    ))}
                </div>

                <div className="bg-slate-900 border-2 border-slate-800 p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02]">
                        <ShieldCircle className="w-64 h-64 text-emerald-500" />
                    </div>

                    <div className="space-y-8 relative z-10">
                        <div className="flex items-center gap-3 text-emerald-500">
                            <Terminal className="w-5 h-5" />
                            <h3 className="text-lg font-black text-white tracking-[0.2em] uppercase italic">Global Compliance Matrix</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {['GDPR', 'CCPA', 'SOC2', 'HIPAA'].map((c) => (
                                <button
                                    key={c}
                                    onClick={() => handleAction(c)}
                                    className="px-6 py-5 bg-slate-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 text-center transition-all group"
                                >
                                    <p className="text-[10px] font-black text-slate-600 group-hover:text-emerald-400 uppercase tracking-widest mb-1">{c} REGIONAL</p>
                                    <p className="text-xs font-black text-white tracking-widest uppercase italic">Certified Node</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="text-center py-10 opacity-50">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">LearnOps Privacy Guard // Secure-Key Hash: 0x4BD...F02A</p>
                </footer>
            </div>
        </div>
    );
}
