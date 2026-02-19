import { ArrowLeft, HelpCircle, Search, Book, MessageSquare, LifeBuoy } from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-16 py-12 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            <header className="text-center space-y-8 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-none text-[10px] font-black uppercase tracking-[0.2em] mx-auto">
                    <HelpCircle className="w-4 h-4" />
                    Support Nexus
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-slate-900 leading-none">
                    How can we <span className="text-blue-600">Assist</span> you?
                </h1>
                <div className="relative group max-w-xl mx-auto pt-4">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search documentation, guides, and FAQs..."
                        className="w-full pl-16 pr-6 py-5 bg-white border border-slate-200 shadow-xl shadow-slate-200/20 rounded-none text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                    />
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'Documentation', icon: Book, desc: 'Deep-dive into system architecture and module configurations.' },
                    { title: 'Live Support', icon: MessageSquare, desc: 'Connect with our engineering team for real-time troubleshooting.' },
                    { title: 'System Status', icon: LifeBuoy, desc: 'Monitor global node performance and scheduled maintenance.' }
                ].map((item) => (
                    <div key={item.title} className="p-10 bg-white border border-slate-200/60 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group cursor-pointer">
                        <div className="w-14 h-14 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-8 transition-all">
                            <item.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <section className="bg-white border border-slate-200/60 p-12">
                <h2 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-8">
                    {[
                        'How do I provision new user access?',
                        'Where can I find real-time financial audits?',
                        'How to configure AI-driven SLA monitoring?',
                        'What are the system requirements for LearnOps OS?'
                    ].map((q) => (
                        <div key={q} className="pb-8 border-b border-slate-100 last:border-0 last:pb-0 group cursor-pointer">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{q}</span>
                                <ArrowLeft className="w-5 h-5 text-slate-300 group-hover:text-blue-600 rotate-180 transition-all" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
