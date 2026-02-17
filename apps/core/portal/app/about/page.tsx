import { ArrowLeft, Info, Target, Users, Shield } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-16 py-12 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            <header className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-none text-[10px] font-black uppercase tracking-[0.2em]">
                    <Info className="w-4 h-4" />
                    About LearnOps Suite
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-slate-900 leading-none">
                    Orchestrating the <span className="text-blue-600">Future</span> of Enterprise.
                </h1>
                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                    LearnOps Suite is a next-generation enterprise operating system designed to unify complex digital ecosystems into a single, high-performance interface.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section className="space-y-6 p-10 bg-white border border-slate-200/60 shadow-sm">
                    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center">
                        <Target className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Our Mission</h2>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        To empower organizations with real-time intelligence and unified control, enabling them to navigate the complexities of modern digital transformation with precision and speed.
                    </p>
                </section>

                <section className="space-y-6 p-10 bg-white border border-slate-200/60 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center">
                        <Users className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">The Team</h2>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Built by a global collective of engineers, designers, and data scientists dedicated to pushing the boundaries of enterprise software aesthetics and functionality.
                    </p>
                </section>
            </div>

            <section className="bg-slate-950 p-12 text-white space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Shield className="w-32 h-32" />
                </div>
                <h2 className="text-3xl font-black tracking-tight relative z-10">Enterprise-Grade DNA</h2>
                <p className="text-slate-400 font-medium leading-relaxed max-w-2xl relative z-10">
                    Every component of the LearnOps Suite is engineered for scale, security, and performance. We believe that enterprise software should be as beautiful as it is powerful.
                </p>
                <div className="flex gap-8 pt-4 relative z-10">
                    <div>
                        <div className="text-3xl font-black text-blue-400">99.99%</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Uptime SLA</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-emerald-400">256-bit</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Encryption</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-purple-400">Global</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Deployment</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
