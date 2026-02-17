import { ArrowLeft, Mail, MessageSquare, Globe, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-16 py-12 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
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
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-100">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 tracking-tight">General Inquiries</h3>
                                <p className="text-slate-500 font-medium">hello@learnops.local</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-emerald-600 border border-slate-100">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 tracking-tight">Global Headquarters</h3>
                                <p className="text-slate-500 font-medium">123 Innovation Drive, Silicon Valley, CA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <form className="bg-white border border-slate-200/60 p-12 space-y-8 shadow-2xl shadow-slate-200/40">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                                <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold" placeholder="John Doe" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold" placeholder="john@company.com" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</label>
                            <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold appearance-none">
                                <option>Enterprise Solutions</option>
                                <option>Technical Support</option>
                                <option>Partnership Opportunities</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                            <textarea rows={5} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold" placeholder="How can we help?"></textarea>
                        </div>
                        <button className="w-full py-5 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-blue-600/20">
                            Transmit Message
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
