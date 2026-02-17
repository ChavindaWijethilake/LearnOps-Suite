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
    Shield
} from 'lucide-react';
import Link from 'next/link';

export default function SupportRequestPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        priority: 'Low',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6 text-slate-200 selection:bg-emerald-500/30 font-sans">
                <div className="max-w-md w-full bg-slate-900 border border-emerald-500/20 p-12 rounded-[40px] text-center space-y-8 animate-in zoom-in-95 duration-500 shadow-2xl shadow-emerald-500/10">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-black text-white tracking-tight leading-none">Protocol Transferred</h1>
                        <p className="text-slate-400 font-medium">Your support ticket has been logged in the system. A technician will respond within 4 academic hours.</p>
                    </div>
                    <Link href="/portals" className="block w-full py-4 bg-emerald-500 text-[#0F172A] font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-emerald-400 transition-all">
                        Return to Command Center
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-200 selection:bg-emerald-500/30 font-sans p-6 md:p-12 overflow-x-hidden">
            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                {/* Back Link */}
                <Link href="/portals" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Abort to Portals
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* LHS: Manifesto */}
                    <div className="lg:col-span-5 space-y-10 py-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-none text-[10px] font-black uppercase tracking-[0.2em]">
                                <MessageSquare className="w-4 h-4" />
                                Support Transmission
                            </div>
                            <h1 className="text-6xl font-black tracking-tighter text-white leading-[0.9]">
                                Submit <span className="text-blue-500">Query</span>.
                            </h1>
                            <p className="text-xl text-slate-400 font-medium leading-relaxed">
                                Our support infrastructure is engineered for rapid resolution. Direct your technical or academic queries to our dedicated response units.
                            </p>
                        </div>

                        <div className="space-y-6 pt-10">
                            {[
                                { label: 'Response Target', value: '< 4hrs', icon: Shield },
                                { label: 'Active Nodes', value: 'Global', icon: Briefcase },
                                { label: 'Encryption', value: 'AES-256', icon: User },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-5 p-5 bg-white/2 border border-white/5 rounded-2xl group hover:bg-white/5 transition-all">
                                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <stat.icon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                                        <p className="text-sm font-bold text-white tracking-widest">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RHS: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-slate-900 border border-white/10 rounded-[40px] p-12 shadow-2xl shadow-blue-500/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Legal Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-6 py-5 bg-white/3 border border-white/5 focus:bg-white/5 focus:border-blue-500/50 focus:outline-none transition-all rounded-2xl font-bold text-white placeholder:text-slate-700"
                                            placeholder="John Academic"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Auth Email</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full px-6 py-5 bg-white/3 border border-white/5 focus:bg-white/5 focus:border-blue-500/50 focus:outline-none transition-all rounded-2xl font-bold text-white placeholder:text-slate-700"
                                            placeholder="john@learnops.local"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Query Category</label>
                                    <select
                                        className="w-full px-6 py-5 bg-white/3 border border-white/5 focus:bg-white/5 focus:border-blue-500/50 focus:outline-none transition-all rounded-2xl font-bold text-slate-300 appearance-none cursor-pointer"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                        <option className="bg-slate-900 border-none">Technical Support</option>
                                        <option className="bg-slate-900 border-none">Academic Records</option>
                                        <option className="bg-slate-900 border-none">Billing Inquiries</option>
                                        <option className="bg-slate-900 border-none">System Access</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Response Priority</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {['Low', 'Medium', 'Critical'].map((p) => (
                                            <button
                                                key={p}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, priority: p })}
                                                className={`py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${formData.priority === p
                                                        ? 'bg-blue-500 border-blue-600 text-[#0F172A]'
                                                        : 'bg-white/2 border-white/5 text-slate-500 hover:bg-white/5'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Transmission Content</label>
                                    <textarea
                                        required
                                        rows={5}
                                        className="w-full px-6 py-5 bg-white/3 border border-white/5 focus:bg-white/5 focus:border-blue-500/50 focus:outline-none transition-all rounded-3xl font-medium text-white placeholder:text-slate-700 resize-none"
                                        placeholder="Detail the technical or administrative block..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-4 group"
                                >
                                    Initiate Transmission
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
