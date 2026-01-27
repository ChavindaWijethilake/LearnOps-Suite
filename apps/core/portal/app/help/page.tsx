import { Book, FileText, HelpCircle, MessageCircle, ExternalLink, Search, Zap, Shield, ArrowRight } from 'lucide-react';

export default function HelpPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-16 animate-fade-in pb-20">
            <header className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mx-auto">
                    Support Infrastructure
                </div>
                <h1 className="text-6xl font-black text-slate-900 tracking-tighter">How can we help?</h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                    Search our comprehensive documentation or browse specialized categories to orchestrate your success.
                </p>
                <div className="max-w-2xl mx-auto relative mt-12 group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search documentation, guides, and technical specs..."
                        className="w-full pl-16 pr-6 py-6 bg-white border border-slate-100 rounded-[2rem] text-lg font-medium shadow-2xl shadow-blue-900/5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-200 transition-all placeholder:text-slate-400"
                    />
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group glass-card rounded-[3rem] p-10 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 animate-slide-up">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        <Book className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">Getting Started</h2>
                    <p className="text-base text-slate-500 font-medium leading-relaxed mb-8">
                        Master the fundamentals of the LearnOps Suite and orchestrate seamless navigation between enterprise modules.
                    </p>
                    <button className="text-xs font-black uppercase tracking-widest text-blue-600 flex items-center gap-3 group/btn">
                        Read Guide <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="group glass-card rounded-[3rem] p-10 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 animate-slide-up [animation-delay:100ms]">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">Account & Security</h2>
                    <p className="text-base text-slate-500 font-medium leading-relaxed mb-8">
                        Manage your enterprise profile, security protocols, and role-based access control across the entire suite.
                    </p>
                    <button className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-3 group/btn">
                        Read Guide <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="group glass-card rounded-[3rem] p-10 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 animate-slide-up [animation-delay:200ms]">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">Technical Specs</h2>
                    <p className="text-base text-slate-500 font-medium leading-relaxed mb-8">
                        Deep-dive into module-specific documentation for Financial, Service, and Intelligence Hubs.
                    </p>
                    <button className="text-xs font-black uppercase tracking-widest text-emerald-600 flex items-center gap-3 group/btn">
                        Browse Docs <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="group glass-card rounded-[3rem] p-10 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 animate-slide-up [animation-delay:300ms]">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        <MessageCircle className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-amber-600 transition-colors">Support Nexus</h2>
                    <p className="text-base text-slate-500 font-medium leading-relaxed mb-8">
                        Need direct assistance? Connect with our global support team or provide feedback on the suite.
                    </p>
                    <button className="text-xs font-black uppercase tracking-widest text-amber-600 flex items-center gap-3 group/btn">
                        Contact Support <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl shadow-slate-900/40 animate-slide-up [animation-delay:400ms]">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <HelpCircle className="w-32 h-32" />
                </div>
                <h2 className="text-4xl font-black text-white tracking-tight relative z-10">Still have questions?</h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed relative z-10">
                    Our elite support engineers are available 24/7 to ensure your enterprise operations remain optimal.
                </p>
                <div className="pt-4 relative z-10">
                    <button className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:scale-105 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                        Initialize Live Chat
                    </button>
                </div>
            </section>
        </div>
    );
}
