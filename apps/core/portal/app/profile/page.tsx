import { User, Mail, Shield, Calendar, MapPin, Edit2, Globe, Zap, Cpu } from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in pb-20">
            <header className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest w-fit">
                    Identity Management
                </div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter">User Profile</h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                    Manage your enterprise identity, security credentials, and localized system preferences.
                </p>
            </header>

            <div className="glass-card rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/5 border-blue-100/50">
                <div className="h-48 bg-slate-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                </div>

                <div className="px-10 md:px-16 pb-16">
                    <div className="relative -mt-20 mb-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
                        <div className="w-40 h-40 rounded-[2.5rem] bg-white p-2 shadow-2xl relative group">
                            <div className="w-full h-full rounded-[2rem] bg-slate-900 flex items-center justify-center text-white text-5xl font-black relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-80" />
                                <span className="relative z-10">A</span>
                            </div>
                            <button className="absolute bottom-2 right-2 p-3 bg-white rounded-2xl text-slate-900 shadow-xl hover:scale-110 transition-transform active:scale-95 border border-slate-100">
                                <Edit2 className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-2">
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Admin User</h2>
                            <p className="text-lg text-slate-500 font-bold uppercase tracking-widest flex items-center justify-center md:justify-start gap-3">
                                <Shield className="w-5 h-5 text-blue-600" />
                                System Administrator • LearnOps Suite
                            </p>
                        </div>

                        <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 active:scale-95">
                            <Edit2 className="w-4 h-4" />
                            Update Profile
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
                        <div className="space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-slate-100" />
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Contact Matrix</h3>
                                <div className="h-px flex-1 bg-slate-100" />
                            </div>

                            <div className="space-y-6">
                                <div className="group flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:border-blue-200 hover:bg-white">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-blue-600 shadow-sm transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Primary Email</p>
                                        <p className="text-lg font-black text-slate-900">admin@learnops.local</p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:border-blue-200 hover:bg-white">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-blue-600 shadow-sm transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Global Location</p>
                                        <p className="text-lg font-black text-slate-900">Colombo, Sri Lanka</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-slate-100" />
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">System Metadata</h3>
                                <div className="h-px flex-1 bg-slate-100" />
                            </div>

                            <div className="space-y-6">
                                <div className="group flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:border-blue-200 hover:bg-white">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-blue-600 shadow-sm transition-colors">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Access Level</p>
                                        <p className="text-lg font-black text-slate-900">Global Administrator</p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:border-blue-200 hover:bg-white">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-blue-600 shadow-sm transition-colors">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Provisioned Since</p>
                                        <p className="text-lg font-black text-slate-900">January 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
