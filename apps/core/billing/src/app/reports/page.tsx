import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    Calendar,
    Download,
    PieChart,
    LineChart,
    Activity,
    Zap,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

export default function ReportsPage() {
    return (
        <div className="space-y-12 animate-fade-in pb-20">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                        Financial Intelligence
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Intelligence Hub</h1>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                        Deep-data visualization and predictive performance metrics for your enterprise.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 hover:bg-slate-50 hover:border-indigo-200 transition-all active:scale-95">
                        <Calendar className="w-4 h-4" />
                        Last 30 Days
                    </button>
                    <button className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                        <Download className="w-4 h-4" />
                        Export Intelligence
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-card rounded-[3rem] p-10 border-slate-100/50 animate-slide-up">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-600">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Revenue Trajectory</h2>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Real-time Growth Metrics</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/20" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Cycle</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-slate-200" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Baseline</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-80 flex items-end gap-4 px-4">
                        {[40, 65, 45, 90, 75, 55, 85, 60, 95, 80, 70, 85].map((height, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                                <div className="w-full bg-slate-50 rounded-2xl relative h-full flex items-end overflow-hidden">
                                    <div
                                        className="w-full bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-all rounded-2xl"
                                        style={{ height: `${height * 0.8}%` }}
                                    />
                                    <div
                                        className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-2xl absolute bottom-0 transition-all duration-700 group-hover:scale-y-105 origin-bottom shadow-lg shadow-indigo-600/20"
                                        style={{ height: `${height}%` }}
                                    />
                                </div>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card rounded-[3rem] p-10 border-slate-100/50 flex flex-col animate-slide-up [animation-delay:200ms]">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-600">
                            <PieChart className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Asset Allocation</h2>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Revenue Segmentation</p>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center relative py-8">
                        <div className="w-56 h-56 rounded-full border-[20px] border-indigo-600 border-r-emerald-500 border-b-purple-500 border-l-amber-500 shadow-2xl shadow-indigo-900/10 animate-float" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-black text-slate-900 tracking-tighter">$128k</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Total Yield</span>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        <div className="group flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:border-indigo-200 hover:bg-white">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/20" />
                                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Subscriptions</span>
                            </div>
                            <span className="text-sm font-black text-slate-900">65%</span>
                        </div>
                        <div className="group flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:border-emerald-200 hover:bg-white">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20" />
                                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">One-time Fees</span>
                            </div>
                            <span className="text-sm font-black text-slate-900">18%</span>
                        </div>
                        <div className="group flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:border-purple-200 hover:bg-white">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/20" />
                                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Services</span>
                            </div>
                            <span className="text-sm font-black text-slate-900">12%</span>
                        </div>
                        <div className="group flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:border-amber-200 hover:bg-white">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/20" />
                                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Others</span>
                            </div>
                            <span className="text-sm font-black text-slate-900">5%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
