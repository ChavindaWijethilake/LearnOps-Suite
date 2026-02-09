import { ArrowLeft, Shield, Lock, Zap, ShieldAlert, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-16 py-12 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            <header className="space-y-6 border-b border-slate-100 pb-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600 text-white rounded-none text-[10px] font-black uppercase tracking-[0.2em]">
                    <Shield className="w-4 h-4" />
                    Security Operations Center
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-slate-900 leading-none">
                    Fortified <span className="text-blue-600">Intelligence</span>.
                </h1>
                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                    LearnOps Suite employs a multi-layered security architecture to protect your enterprise assets from evolving digital threats.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { title: 'Zero Trust Architecture', icon: Lock, desc: 'Every request is verified, authorized, and encrypted. No implicit trust is granted to any node or user.' },
                    { title: 'Real-time Threat Detection', icon: Zap, desc: 'AI-driven monitoring identifies and neutralizes anomalies before they can impact system integrity.' },
                    { title: 'Identity Management', icon: ShieldAlert, desc: 'Advanced multi-factor authentication and role-based access control ensure precise user provisioning.' },
                    { title: 'Continuous Auditing', icon: ShieldCheck, desc: 'Automated security audits provide real-time visibility into your compliance posture and risk profile.' }
                ].map((item) => (
                    <div key={item.title} className="p-10 bg-white border border-slate-200/60 shadow-sm space-y-6">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <section className="bg-blue-600 p-12 text-white space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-20">
                    <Shield className="w-48 h-48" />
                </div>
                <h2 className="text-3xl font-black tracking-tight relative z-10">Global Security Status: Optimal</h2>
                <p className="text-blue-100 font-medium leading-relaxed max-w-2xl relative z-10">
                    Our security operations center monitors the global LearnOps network 24/7. Current threat level: **Minimal**.
                </p>
                <div className="flex gap-4 relative z-10">
                    <button className="px-8 py-4 bg-white text-blue-600 text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all">
                        View Security Logs
                    </button>
                    <button className="px-8 py-4 bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all">
                        Report Vulnerability
                    </button>
                </div>
            </section>
        </div>
    );
}
