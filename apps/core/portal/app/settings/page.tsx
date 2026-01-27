import { Settings, Shield, Bell, Monitor, Database, RefreshCw, User, Lock, Globe, Cpu } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in pb-20">
            <header className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest w-fit">
                    System Configuration
                </div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Suite Settings</h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                    Configure your enterprise ecosystem, manage security protocols, and orchestrate system-wide preferences.
                </p>
            </header>

            <div className="grid grid-cols-1 gap-10">
                {/* Role Management Section */}
                <section className="glass-card rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-blue-900/5 border-blue-100/50">
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/20">
                                <Shield className="w-7 h-7" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Identity & Access</h2>
                                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-1">Role-Based Access Control</p>
                            </div>
                        </div>
                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100">
                            Active Session: Admin
                        </span>
                    </div>

                    <div className="space-y-10">
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <p className="text-base text-slate-600 leading-relaxed font-medium">
                                Switch between roles to simulate different access levels and navigation rules across the LearnOps Suite. This environment is currently in <span className="text-blue-600 font-black">Simulation Mode</span>.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <button className="group relative flex flex-col items-center gap-4 p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-2xl shadow-slate-900/40 transition-all hover:scale-105 active:scale-95">
                                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                                <Shield className="w-10 h-10 text-blue-400 mb-2" />
                                <span className="text-xl font-black tracking-tight">Administrator</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Full System Access</span>
                            </button>

                            <button className="group flex flex-col items-center gap-4 p-8 bg-white border border-slate-100 rounded-[2.5rem] text-slate-700 hover:border-blue-200 hover:bg-blue-50/30 transition-all hover:scale-105 active:scale-95">
                                <User className="w-10 h-10 text-slate-400 group-hover:text-blue-500 transition-colors mb-2" />
                                <span className="text-xl font-black tracking-tight group-hover:text-slate-900 transition-colors">Staff Member</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Operational Access</span>
                            </button>

                            <button className="group flex flex-col items-center gap-4 p-8 bg-white border border-slate-100 rounded-[2.5rem] text-slate-700 hover:border-blue-200 hover:bg-blue-50/30 transition-all hover:scale-105 active:scale-95">
                                <Monitor className="w-10 h-10 text-slate-400 group-hover:text-blue-500 transition-colors mb-2" />
                                <span className="text-xl font-black tracking-tight group-hover:text-slate-900 transition-colors">System Viewer</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Read-Only Access</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* System Infrastructure Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <section className="glass-card rounded-[3rem] p-10 shadow-2xl shadow-blue-900/5 border-blue-100/50">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200">
                                <Database className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Data Integrity</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group transition-all hover:border-blue-200">
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <p className="text-lg font-black text-slate-900 mb-2">Reset Mock Infrastructure</p>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                            Purge all localized mock data and re-initialize the system with fresh enterprise seeds.
                                        </p>
                                    </div>
                                    <button className="flex items-center justify-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all active:scale-95">
                                        <RefreshCw className="w-4 h-4" />
                                        Execute System Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="glass-card rounded-[3rem] p-10 shadow-2xl shadow-blue-900/5 border-blue-100/50">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Security Audit</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group transition-all hover:border-blue-200">
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <p className="text-lg font-black text-slate-900 mb-2">Global Encryption</p>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                            Manage end-to-end encryption protocols and rotate system-wide security certificates.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">AES-256 Active</span>
                                        <button className="text-xs font-black uppercase tracking-widest text-blue-600 hover:underline">Manage Keys</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
