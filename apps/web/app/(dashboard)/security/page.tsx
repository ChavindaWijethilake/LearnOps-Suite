'use client';

import { ArrowLeft, Shield, Lock, Zap, ShieldAlert, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SecurityPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-12 py-8 animate-fade-in pb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors group">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            <header className="space-y-6 border-b border-[#334155] pb-12">
                <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-md text-[10px] font-bold uppercase tracking-[0.2em]">
                    <Shield className="w-3 h-3" />
                    Security Operations Center
                </div>
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-100 leading-none">
                    Fortified <span className="text-blue-500">Intelligence</span>.
                </h1>
                <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                    LearnOps Suite employs a multi-layered security architecture to protect your enterprise assets from evolving digital threats.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { title: 'Zero Trust Architecture', icon: Lock, desc: 'Every request is verified, authorized, and encrypted. No implicit trust is granted to any node or user.' },
                    { title: 'Real-time Threat Detection', icon: Zap, desc: 'AI-driven monitoring identifies and neutralizes anomalies before they can impact system integrity.' },
                    { title: 'Identity Management', icon: ShieldAlert, desc: 'Advanced multi-factor authentication and role-based access control ensure precise user provisioning.' },
                    { title: 'Continuous Auditing', icon: ShieldCheck, desc: 'Automated security audits provide real-time visibility into your compliance posture and risk profile.' }
                ].map((item) => (
                    <div key={item.title} className="p-8 bg-[#1e293b] border border-[#334155] hover:border-blue-500/50 transition-colors space-y-4 rounded-lg group">
                        <div className="w-10 h-10 bg-[#0f172a] text-blue-500 border border-[#334155] group-hover:border-blue-500/50 flex items-center justify-center rounded-md transition-colors">
                            <item.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 tracking-tight">{item.title}</h3>
                        <p className="text-slate-400 font-medium leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            <section className="bg-blue-600 p-10 md:p-12 text-white space-y-8 relative overflow-hidden rounded-xl border border-blue-500/20">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Shield className="w-64 h-64" />
                </div>
                <div className="relative z-10 space-y-2">
                    <h2 className="text-3xl font-black tracking-tight">Global Security Status: Optimal</h2>
                    <p className="text-blue-100 font-medium leading-relaxed max-w-2xl text-lg">
                        Our security operations center monitors the global LearnOps network 24/7. Current threat level: <strong className="text-white">Minimal</strong>.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 relative z-10">
                    <Button className="bg-white text-blue-700 hover:bg-blue-50 font-bold uppercase tracking-wider text-xs h-10 px-6">
                        View Security Logs
                    </Button>
                    <Button variant="outline" className="border-blue-400 text-blue-100 hover:bg-blue-700 hover:text-white font-bold uppercase tracking-wider text-xs h-10 px-6">
                        Report Vulnerability
                    </Button>
                </div>
            </section>
        </div>
    );
}
