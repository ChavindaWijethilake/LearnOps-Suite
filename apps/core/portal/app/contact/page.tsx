'use client';

import { useState } from 'react';
import {
    ArrowLeft,
    Mail,
    MessageSquare,
    Globe,
    Send,
    CheckCircle2,
    Loader2,
    Shield,
    Terminal,
    Zap
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Enterprise Solutions',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate secure transmission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6 animate-fade-in text-slate-400">
                <div className="max-w-md w-full bg-slate-900 border-2 border-emerald-500/30 p-12 text-center space-y-8 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">
                    <div className="relative mx-auto w-24 h-24">
                        <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse" />
                        <div className="relative w-full h-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">Transmission <span className="text-emerald-400">Verified</span>.</h1>
                        <p className="text-xs font-bold uppercase tracking-widest leading-loose text-slate-500">Secure packet received at Central Command. High-priority response cycle initialized (ETA {'<'} 24h).</p>
                    </div>
                    <Link href="/portals" className="flex items-center justify-center gap-3 w-full py-5 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-500 transition-all shadow-[4px_4px_0px_0px_rgba(16,185,129,0.2)] active:translate-y-0.5">
                        Return to Control Nexus
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-400 font-sans selection:bg-indigo-500/30">
            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-500/5 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-16 animate-fade-in">
                <Link href="/portals" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-indigo-400 transition-all group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Abort / Return to Nexus
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5 space-y-12">
                        <header className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                <Terminal className="w-4 h-4" />
                                Secure Uplink Protocol
                            </div>
                            <h1 className="text-7xl font-black tracking-tighter text-white leading-[0.85] uppercase italic">
                                Establish <span className="text-indigo-500">Contact</span>.
                            </h1>
                            <p className="text-sm font-medium leading-relaxed text-slate-500 border-l-2 border-slate-800 pl-6 uppercase tracking-wider">
                                Requesting priority channel for enterprise deployment, security audit, or custom implementation inquiry.
                            </p>
                        </header>

                        <div className="space-y-6">
                            <div className="flex gap-6 items-center p-6 bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-all group">
                                <div className="w-14 h-14 bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-all">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">Channel Alpha</h3>
                                    <p className="text-lg font-black text-white tracking-tight">hello@learnops.local</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center p-6 bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all group">
                                <div className="w-14 h-14 bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-all">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">Field HQ</h3>
                                    <p className="text-lg font-black text-white tracking-tight leading-tight">123 Innovation Drive, SV</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-900/50 border border-slate-800 relative overflow-hidden group">
                            <Shield className="absolute -bottom-4 -right-4 w-24 h-24 text-slate-800/20 group-hover:text-indigo-500/10 transition-all rotate-12" />
                            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4">Encryption Standard</p>
                            <p className="text-[10px] font-medium text-slate-500 leading-relaxed uppercase tracking-widest">All transmissions are protected by a multi-layered military-grade RSA protocol. Metadata is scrubbed upon verification.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="bg-slate-900 border-2 border-slate-800 p-8 md:p-12 space-y-10 relative overflow-hidden shadow-2xl">
                            {isSubmitting && (
                                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md z-10 flex flex-col items-center justify-center space-y-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 animate-pulse" />
                                        <Loader2 className="w-12 h-12 text-indigo-400 animate-spin relative" />
                                    </div>
                                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em] animate-pulse">Syncing Uplink...</p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                                        <div className="w-1 h-1 bg-indigo-500" />
                                        Operator Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950 border border-slate-800 p-4 text-sm font-black text-white uppercase tracking-widest focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-800 italic"
                                        placeholder="Identification Needed"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                                        <div className="w-1 h-1 bg-indigo-500" />
                                        Return Path
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950 border border-slate-800 p-4 text-sm font-black text-white uppercase tracking-widest focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-800 italic"
                                        placeholder="address@secure.node"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                                    <div className="w-1 h-1 bg-indigo-500" />
                                    Transmission Subject
                                </label>
                                <div className="relative">
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950 border border-slate-800 p-4 text-sm font-black text-white uppercase tracking-widest appearance-none cursor-pointer focus:outline-none focus:border-indigo-500 transition-all italic"
                                    >
                                        <option>Enterprise Solutions</option>
                                        <option>Technical Support</option>
                                        <option>Partnership Opportunities</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                                        <Zap className="w-4 h-4 fill-slate-800" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                                    <div className="w-1 h-1 bg-indigo-500" />
                                    Encrypted Payload
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full bg-slate-950 border border-slate-800 p-6 text-sm font-medium text-slate-300 tracking-wide focus:outline-none focus:border-indigo-500 transition-all resize-none border-l-4"
                                    placeholder="Begin transmission..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-6 bg-indigo-600 text-white text-xs font-black uppercase tracking-[0.4em] hover:bg-indigo-500 transition-all flex items-center justify-center gap-4 group active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(79,70,229,0.3)] disabled:opacity-50"
                            >
                                {isSubmitting ? 'Transmitting Data...' : 'Initiate Transmission'}
                                {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
