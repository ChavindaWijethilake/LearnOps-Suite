import { ArrowLeft, Info, Target, Users, Shield, Terminal, Globe, Cpu, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-200 selection:bg-indigo-500/30 font-sans p-6 md:p-12 overflow-x-hidden">
            <div className="max-w-6xl mx-auto space-y-16 relative z-10 animate-fade-in">
                <Link href="/portals" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-indigo-400 transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Control Nexus
                </Link>

                <header className="space-y-8">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        <Terminal className="w-4 h-4" />
                        LearnOps Suite Architectural Manifesto
                    </div>
                    <h1 className="text-7xl font-black tracking-tighter text-white leading-[0.85] uppercase italic">
                        The Future is <span className="text-indigo-500 underline decoration-indigo-500/30 underline-offset-8">Centralized</span>.
                    </h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-3xl border-l-2 border-slate-800 pl-8">
                        LearnOps Suite is a next-generation enterprise operating system designed to unify complex digital ecosystems into a single, high-performance interface. We bridge the gap between academic data and operational excellence.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section className="space-y-8 p-12 bg-slate-900 border-2 border-slate-800 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rotate-45 translate-x-16 -translate-y-16" />
                        <div className="w-14 h-14 bg-slate-800 border border-slate-700 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Target className="w-7 h-7" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-white tracking-tight uppercase italic">Strategic Mission</h2>
                            <p className="text-slate-500 font-bold uppercase text-[11px] tracking-widest leading-relaxed">
                                To empower organizations with real-time intelligence and unified control, enabling them to navigate the complexities of modern digital transformation with surgical precision and speed.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-8 p-12 bg-slate-900 border-2 border-slate-800 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rotate-45 translate-x-16 -translate-y-16" />
                        <div className="w-14 h-14 bg-slate-800 border border-slate-700 text-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Users className="w-7 h-7" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-white tracking-tight uppercase italic">Global Syndicate</h2>
                            <p className="text-slate-500 font-bold uppercase text-[11px] tracking-widest leading-relaxed">
                                Built by a global collective of engineers and data scientists dedicated to pushing the boundaries of enterprise software aesthetics and functional durability.
                            </p>
                        </div>
                    </section>
                </div>

                <section className="bg-slate-950 border-2 border-indigo-500/20 p-12 text-white space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                        <Shield className="w-64 h-64" />
                    </div>

                    <div className="space-y-6 relative z-10">
                        <h2 className="text-4xl font-black tracking-tight uppercase italic leading-none">Enterprise Registry Compliance</h2>
                        <p className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em] max-w-2xl leading-loose">
                            Every component of the LearnOps Suite is engineered for scale, security, and extreme performance. We believe software should be as beautiful as it is powerful.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-emerald-400 mb-1">
                                <Cpu className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Availability Index</span>
                            </div>
                            <div className="text-5xl font-black text-white tracking-tighter">99.99%</div>
                            <div className="text-[9px] font-black uppercase tracking-widest text-slate-600">Verified Uptime SLA</div>
                        </div>
                        <div className="space-y-2 text-indigo-400">
                            <div className="flex items-center gap-3 mb-1">
                                <Shield className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Cipher Standard</span>
                            </div>
                            <div className="text-5xl font-black text-white tracking-tighter italic">256-BIT</div>
                            <div className="text-[9px] font-black uppercase tracking-widest text-slate-600">AES Military-Grade Encryption</div>
                        </div>
                        <div className="space-y-2 text-purple-400">
                            <div className="flex items-center gap-3 mb-1">
                                <Globe className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Network Topology</span>
                            </div>
                            <div className="text-5xl font-black text-white tracking-tighter">GLOBAL</div>
                            <div className="text-[9px] font-black uppercase tracking-widest text-slate-600">Multi-Node Low Latency Deployment</div>
                        </div>
                    </div>

                    <div className="pt-8 relative z-10">
                        <Link href="/contact" className="inline-flex items-center gap-4 px-8 py-4 bg-indigo-600 text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-indigo-500 transition-all shadow-[8px_8px_0_0_rgba(79,70,229,0.2)] active:translate-y-1 active:shadow-none">
                            Enlist for Early Access
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
