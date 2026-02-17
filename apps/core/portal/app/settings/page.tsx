import { ArrowLeft, Settings, User, Bell, Shield, Zap, Save } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-16 py-12 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            <header className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 text-white rounded-none text-[10px] font-black uppercase tracking-[0.2em]">
                    <Settings className="w-4 h-4" />
                    System Configuration
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-slate-900 leading-none">
                    Global <span className="text-blue-600">Settings</span>.
                </h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <aside className="lg:col-span-4 space-y-2">
                    {[
                        { name: 'Profile Information', icon: User, active: true },
                        { name: 'Notifications', icon: Bell },
                        { name: 'Security & Privacy', icon: Shield },
                        { name: 'Performance', icon: Zap }
                    ].map((item) => (
                        <button key={item.name} className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-black uppercase tracking-widest transition-all ${item.active ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'bg-white text-slate-500 hover:bg-slate-50 border border-transparent hover:border-slate-200'}`}>
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </button>
                    ))}
                </aside>

                <div className="lg:col-span-8 bg-white border border-slate-200/60 p-12 space-y-12 shadow-sm">
                    <section className="space-y-8">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Profile Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Operator Name</label>
                                <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold" defaultValue="Admin User" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold" defaultValue="admin@learnops.local" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Organization</label>
                            <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold" defaultValue="LearnOps Engineering" />
                        </div>
                    </section>

                    <section className="space-y-8 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">System Preferences</h2>
                        <div className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100">
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Dark Mode</h3>
                                <p className="text-xs text-slate-500 font-medium mt-1">Enable high-contrast dark interface</p>
                            </div>
                            <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100">
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Real-time Sync</h3>
                                <p className="text-xs text-slate-500 font-medium mt-1">Synchronize data across all active nodes</p>
                            </div>
                            <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </section>

                    <button className="w-full py-5 bg-slate-950 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-slate-950/20">
                        Save Configuration
                        <Save className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
