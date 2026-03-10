import { LoginForm } from '@/components/auth/login-form';
import Link from 'next/link';
import { Shield, Lock, Terminal, Activity, ChevronRight, Zap } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#0F172A] flex flex-col font-sans text-slate-200 selection:bg-indigo-500/30">
            {/* Header / Security Banner */}
            <header className="w-full border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 group">
                        <div className="h-10 w-10 bg-indigo-600 rounded-none flex items-center justify-center shadow-[4px_4px_0_0_rgba(79,70,229,0.2)] group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6 text-white fill-white/20" />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-white tracking-tighter uppercase italic">LearnOps <span className="text-indigo-500">Suite</span></h1>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">Security Provisioning Node</p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                            <Activity className="w-3 h-3 animate-pulse" />
                            System Online
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content / Secure Access Terminal */}
            <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
                    <Terminal className="w-full h-full scale-150 rotate-12" />
                </div>

                <div className="w-full max-w-md relative z-10 animate-fade-in">
                    <div className="bg-slate-900 border-2 border-slate-800 p-1 rounded-none shadow-2xl">
                        <div className="p-8 md:p-10 bg-slate-900 border border-slate-800">
                            <div className="mb-10 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 border-2 border-slate-700 text-indigo-500 mb-6 group">
                                    <Lock className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                </div>
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">Secure Uplink</h2>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2">Initialize Credentials to Proceed</p>
                            </div>

                            <LoginForm allowedRoles={['student', 'professor']} />

                            <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-loose">
                                    Encountering Access Anomalies? <br />
                                    <Link href="/support/request" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-400/30">Lodge Support Protocol</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer / System Payload Details */}
            <footer className="w-full border-t border-slate-800 bg-slate-900/30 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-1 text-center md:text-left">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">© 2026 LearnOps Suite Strategic Systems</p>
                            <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.2em]">All Session Data Encrypted // AES-256 Enabled</p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
                            <Link href="/privacy" className="text-[10px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-widest transition-colors">Privacy</Link>
                            <Link href="/terms" className="text-[10px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-widest transition-colors">Terms</Link>
                            <Link href="/documentation" className="text-[10px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-widest transition-colors">Documentation</Link>
                            <Link href="/support/request" className="text-[10px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-widest transition-colors">Support</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
