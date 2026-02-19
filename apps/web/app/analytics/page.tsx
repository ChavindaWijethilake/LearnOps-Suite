import { ArrowLeft, BarChart3, TrendingUp, Activity, Zap, Server, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AnalyticsPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-12 py-12 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-none text-[10px] font-black uppercase tracking-[0.2em]">
                        <BarChart3 className="w-4 h-4" />
                        Intelligence Briefing
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 leading-none">
                        System <span className="text-blue-600">Analytics</span>.
                    </h1>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        Last 24 Hours
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                        Export Report
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'System Uptime', value: '99.99%', icon: Server, color: 'text-emerald-500', trend: '+0.01%' },
                    { label: 'Request Latency', value: '42ms', icon: Zap, color: 'text-blue-500', trend: '-4ms' },
                    { label: 'Active Nodes', value: '1,204', icon: Activity, color: 'text-indigo-500', trend: '+12' },
                    { label: 'Security Score', value: '98/100', icon: ShieldCheck, color: 'text-purple-500', trend: 'Stable' }
                ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-slate-200/60 p-8 space-y-4 shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className={`p-3 bg-slate-50 ${stat.color} rounded-none`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{stat.trend}</span>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                            <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white border border-slate-200/60 p-10 space-y-8 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase tracking-widest">Performance Matrix</h2>
                        <TrendingUp className="w-5 h-5 text-slate-300" />
                    </div>
                    <div className="h-64 w-full bg-slate-50 border border-slate-100 flex items-end p-6 gap-4">
                        {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-blue-600/20 relative group">
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-blue-600 transition-all duration-1000 group-hover:bg-blue-400"
                                    style={{ height: `${h}%` }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>23:59</span>
                    </div>
                </div>

                <div className="bg-slate-950 p-10 text-white space-y-8 shadow-2xl">
                    <h2 className="text-xl font-black tracking-tight uppercase tracking-widest text-blue-400">Node Distribution</h2>
                    <div className="space-y-6">
                        {[
                            { region: 'North America', count: 452, percentage: 38 },
                            { region: 'Europe', count: 384, percentage: 32 },
                            { region: 'Asia Pacific', count: 268, percentage: 22 },
                            { region: 'Other', count: 100, percentage: 8 }
                        ].map((r) => (
                            <div key={r.region} className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-slate-400 uppercase tracking-widest">{r.region}</span>
                                    <span>{r.count}</span>
                                </div>
                                <div className="h-1 w-full bg-white/10">
                                    <div className="h-full bg-blue-500" style={{ width: `${r.percentage}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full py-4 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                        View Global Map
                    </button>
                </div>
            </div>
        </div>
    );
}
