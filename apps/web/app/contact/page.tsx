'use client';

import { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, Globe, Send, CheckCircle2, Loader2 } from 'lucide-react';
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

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.type === 'select-one' ? 'subject' : e.target.type]: e.target.value
        });
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 animate-fade-in">
                <div className="max-w-md w-full bg-white border border-slate-200 p-12 rounded-[40px] text-center space-y-8 shadow-2xl shadow-blue-900/5">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none">Message Transmitted</h1>
                        <p className="text-slate-500 font-medium">Thank you for contacting us. Our team has received your inquiry and will respond within 24 hours.</p>
                    </div>
                    <Link href="/portals" className="block w-full py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
                        Return to Command Center
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50/50">
            <div className="max-w-6xl mx-auto space-y-16 py-12 px-6 md:px-12 animate-fade-in">
                <Link href="/portals" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Command Center
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5 space-y-10">
                        <header className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-none text-[10px] font-black uppercase tracking-[0.2em]">
                                <Mail className="w-4 h-4" />
                                Get in Touch
                            </div>
                            <h1 className="text-6xl font-black tracking-tighter text-slate-900 leading-none">
                                Let's <span className="text-blue-600">Connect</span>.
                            </h1>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                Have questions about enterprise deployment or custom module development? Our team is ready to assist.
                            </p>
                        </header>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start group">
                                <div className="w-12 h-12 bg-white flex items-center justify-center text-blue-600 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 tracking-tight">General Inquiries</h3>
                                    <p className="text-slate-500 font-medium group-hover:text-blue-600 transition-colors">hello@learnops.local</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start group">
                                <div className="w-12 h-12 bg-white flex items-center justify-center text-emerald-600 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 tracking-tight">Global Headquarters</h3>
                                    <p className="text-slate-500 font-medium group-hover:text-emerald-600 transition-colors">123 Innovation Drive, Silicon Valley, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="bg-white border border-slate-200/60 p-8 md:p-12 space-y-8 shadow-2xl shadow-slate-200/40 rounded-3xl relative overflow-hidden">
                            {isSubmitting && (
                                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
                                    <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 placeholder:text-slate-300 rounded-xl"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 placeholder:text-slate-300 rounded-xl"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</label>
                                <div className="relative">
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold appearance-none text-slate-900 rounded-xl cursor-pointer"
                                    >
                                        <option>Enterprise Solutions</option>
                                        <option>Technical Support</option>
                                        <option>Partnership Opportunities</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 placeholder:text-slate-300 rounded-xl resize-none"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-xl shadow-blue-600/20 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Transmitting...' : 'Transmit Message'}
                                {!isSubmitting && <Send className="w-4 h-4" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
