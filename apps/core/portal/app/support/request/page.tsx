'use client';

import { useState } from 'react';
import {
    ArrowLeft,
    MessageSquare,
    Send,
    User,
    Mail,
    Briefcase,
    CheckCircle2,
    Shield,
    Terminal,
    AlertTriangle,
    Clock,
    Zap
} from 'lucide-react';
import Link from 'next/link';

export default function SupportRequestPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        priority: 'Low',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Protocol Sync
        await new Promise(resolve => setTimeout(resolve, 1800));

        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6 text-slate-200 selection:bg-indigo-500/30 font-sans">
                <div className="max-w-md w-full bg-slate-900 border-2 border-emerald-500/30 p-12 text-center space-y-8 animate-in zoom-in-95 duration-500 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">
                    <div className="relative mx-auto w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                        <div className="absolute inset-0 bg-emerald-500/20 blur-xl animate-pulse" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">Ticket <span className="text-emerald-500">Logged</span>.</h1>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-loose">Support protocol successfully initialized. Academic SLA verification complete. Dispatch ETA: {'<'} 4 Hours.</p>
                    </div>
                    <Link href="/portals" className="block w-full py-5 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-500 transition-all shadow-[4px_4px_0_0_rgba(16,185,129,0.2)] active:translate-y-0.5">
                        Return to Control Nexus
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-200 selection:bg-indigo-500/30 font-sans p-6 md:p-12 overflow-x-hidden">
            {/* Structural Accents */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 opacity-50 z-50" />
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-6xl mx-auto space-y-12 relative z-10 animate-fade-in">
                <Link href="/portals" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-indigo-400 transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Cancel Uplink
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 space-y-12 py-6">
                        <header className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                <Terminal className="w-4 h-4" />
                                Support Transmission Protocol
                            </div>
                            <h1 className="text-7xl font-black tracking-tighter text-white leading-[0.85] uppercase italic">
                                Request <span className="text-indigo-500">Assistance</span>.
                            </h1>
                            <p className="text-sm font-medium leading-relaxed text-slate-500 border-l-2 border-slate-800 pl-6 uppercase tracking-wider">
                                Direct interaction with our technical response units. Priority queues are managed by the automated triage engine.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { label: 'SLA Response', value: '< 4h Academic', icon: Clock, color: 'text-emerald-400' },
                                { label: 'Active Clusters', value: 'Multi-Node', icon: Briefcase, color: 'text-indigo-400' },
                                { label: 'Security Level', value: 'Level 5 (Enc)', icon: Shield, color: 'text-purple-400' },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-5 p-6 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group">
                                    <div className={`w-12 h-12 bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-all ${stat.color}`}>
                                        <stat.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                                        <p className="text-sm font-bold text-white tracking-widest uppercase italic">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-rose-500/5 border border-rose-500/20 flex gap-4 items-start">
                            <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                            <p className="text-[10px] font-bold text-rose-500/80 uppercase tracking-widest leading-relaxed">
                                CRITICAL: Use high priority only for total system failures or security breaches. Frivolous high-priority tickets may result in protocol suspension.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-slate-900 border-2 border-slate-800 p-8 md:p-12 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rotate-45 translate-x-16 -translate-y-16" />

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Legal Entity Identification</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-slate-950 border border-slate-800 p-4 text-sm font-black text-white uppercase tracking-widest focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-800 italic"
                                            placeholder="Requester Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Secure Return Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-slate-950 border border-slate-800 p-4 text-sm font-black text-white uppercase tracking-widest focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-800 italic"
                                            placeholder="address@secure.node"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Triage Classification</label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-slate-950 border border-slate-800 p-4 text-sm font-black text-white uppercase tracking-widest appearance-none cursor-pointer focus:outline-none focus:border-indigo-500 transition-all italic"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        >
                                            <option>Technical Support</option>
                                            <option>Academic Records</option>
                                            <option>Billing Inquiries</option>
                                            <option>System Access</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                                            <Zap className="w-4 h-4 fill-slate-800" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Response Priority Vector</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {['Low', 'Medium', 'Critical'].map((p) => (
                                            <button
                                                key={p}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, priority: p })}
                                                className={`py-4 border-2 text-[10px] font-black uppercase tracking-widest transition-all ${formData.priority === p
                                                    ? p === 'Critical' ? 'bg-rose-500 border-rose-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]' : 'bg-indigo-500 border-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                                                    : 'bg-slate-950 border-slate-800 text-slate-600 hover:border-slate-700'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Transmission Payload</label>
                                    <textarea
                                        required
                                        rows={6}
                                        className="w-full bg-slate-950 border border-slate-800 p-6 text-sm font-medium text-slate-300 tracking-wide focus:outline-none focus:border-indigo-500 transition-all resize-none border-l-4"
                                        placeholder="Detailed log of the requested assistance..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-[0.5em] transition-all flex items-center justify-center gap-4 group active:translate-y-0.5 shadow-[4px_4px_0_0_rgba(79,70,229,0.3)] disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Syncing Protocol...' : 'Initiate Uplink'}
                                    {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
