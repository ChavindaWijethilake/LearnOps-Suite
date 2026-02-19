import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-16 py-12 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            <header className="space-y-6 border-b border-slate-100 pb-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-none text-[10px] font-black uppercase tracking-[0.2em]">
                    <ShieldCheck className="w-4 h-4" />
                    Privacy Protocol v4.0
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-slate-900 leading-none">
                    Data <span className="text-emerald-600">Sovereignty</span>.
                </h1>
                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                    Your data is your most valuable asset. LearnOps Suite is built on a foundation of absolute privacy and user sovereignty.
                </p>
            </header>

            <div className="space-y-12">
                {[
                    { title: 'Data Collection', icon: Eye, content: 'We only collect the minimum amount of data required to provide our enterprise services. All data is anonymized and encrypted at the source.' },
                    { title: 'Encryption Standards', icon: Lock, content: 'All data in transit and at rest is protected by military-grade AES-256 encryption. We employ zero-knowledge architecture where possible.' },
                    { title: 'User Control', icon: FileText, content: 'You have full control over your data. Export, delete, or modify your information at any time through the Intelligence Hub.' }
                ].map((section) => (
                    <section key={section.title} className="flex gap-8 items-start">
                        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <section.icon className="w-7 h-7" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">{section.title}</h2>
                            <p className="text-slate-500 font-medium leading-relaxed text-lg">{section.content}</p>
                        </div>
                    </section>
                ))}
            </div>

            <div className="p-10 bg-slate-50 border border-slate-200 space-y-6">
                <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase tracking-widest">Compliance Matrix</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['GDPR', 'CCPA', 'SOC2', 'HIPAA'].map((c) => (
                        <div key={c} className="px-4 py-3 bg-white border border-slate-200 text-center text-xs font-black text-slate-400 uppercase tracking-widest">
                            {c} Certified
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
