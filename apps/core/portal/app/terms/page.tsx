'use client';

import { ArrowLeft, Scale, FileText, AlertCircle, CheckCircle, ChevronRight, Terminal, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
    const handleDownload = () => {
        alert('Legal Protocol Engaged: Downloading Encrypted Terms PDF (v4.0.2)...');
    };

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-200 selection:bg-amber-500/30 font-sans p-6 md:p-12 overflow-x-hidden">
            <div className="max-w-6xl mx-auto space-y-16 relative z-10 animate-fade-in">
                <Link href="/portals" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-amber-500 transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Command Center
                </Link>

                <header className="space-y-8 border-b-2 border-slate-800 pb-12">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.2em]">
                        <Scale className="w-4 h-4" />
                        Legal Operational Framework v4.0.2
                    </div>
                    <h1 className="text-7xl font-black tracking-tighter text-white leading-[0.85] uppercase italic">
                        Terms of <span className="text-amber-500">Operation</span>.
                    </h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-3xl border-l-2 border-slate-800 pl-8">
                        By accessing the LearnOps OS, you agree to adhere to our enterprise operational standards and absolute security protocols. Failure to comply results in immediate node termination.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Acceptable Use', icon: CheckCircle, content: 'LearnOps Suite is intended for professional enterprise use. Any unauthorized access or malicious utilization of system resources is strictly prohibited and monitored.', color: 'text-emerald-500' },
                        { title: 'SLA Guarantee', icon: FileText, content: 'We guarantee 99.99% uptime for core infrastructure. Scheduled maintenance will be communicated 48 hours in advance via the Command Nexus.', color: 'text-amber-500' },
                        { title: 'Liability Vector', icon: AlertCircle, content: 'LearnOps Engineering is not liable for data loss resulting from improper module configuration or unauthorized third-party node integrations.', color: 'text-rose-500' }
                    ].map((section) => (
                        <section key={section.title} className="p-10 bg-slate-900 border-2 border-slate-800 hover:border-amber-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/2 opacity-[0.03] rotate-45 translate-x-12 -translate-y-12" />
                            <div className={`w-14 h-14 bg-slate-800 border border-slate-700 ${section.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                                <section.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic">{section.title}</h3>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-loose">{section.content}</p>
                        </section>
                    ))}
                </div>

                <div className="p-12 bg-slate-950 border-2 border-amber-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                        <Shield className="w-48 h-48" />
                    </div>

                    <div className="max-w-2xl space-y-8 relative z-10">
                        <div className="flex items-center gap-3 text-amber-500">
                            <Terminal className="w-5 h-5" />
                            <h3 className="text-lg font-black tracking-widest uppercase italic">Compliance Protocol 01-A</h3>
                        </div>
                        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] leading-loose">
                            Unauthorized reproduction of the LearnOps source code or architectural patterns is a breach of federal enterprise intellectual property law. All sessions are logged and cryptographically signed.
                        </p>
                        <button
                            onClick={handleDownload}
                            className="inline-flex items-center gap-4 px-8 py-5 bg-amber-600 text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-amber-500 transition-all shadow-[8px_8px_0_0_rgba(245,158,11,0.2)] active:translate-y-1 active:shadow-none"
                        >
                            Download Full Legal PDF
                            <FileText className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <footer className="text-center py-10 opacity-50">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">LearnOps Legal Repository // Node Checksum: 0x8F2A...E921</p>
                </footer>
            </div>
        </div>
    );
}
