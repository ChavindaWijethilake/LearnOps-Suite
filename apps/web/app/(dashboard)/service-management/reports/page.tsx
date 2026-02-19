import {
    BarChart3,
    TrendingUp,
    Clock,
    CheckCircle2,
    AlertCircle,
    Download,
    Calendar
} from 'lucide-react';

export default function ReportsPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">SLA Reports</h1>
                    <p className="text-sm text-gray-500">Analyze service performance and compliance metrics.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
                        <Calendar className="w-4 h-4" />
                        Last 7 Days
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        <Download className="w-4 h-4" />
                        Export Report
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            Resolution Performance
                        </h2>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary" />
                                <span className="text-xs text-gray-500">Resolved</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-200" />
                                <span className="text-xs text-gray-500">New</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-64 flex items-end gap-2 px-4">
                        {[60, 85, 70, 95, 80, 65, 90].map((height, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="w-full bg-gray-50 rounded-t-lg relative h-full flex items-end">
                                    <div
                                        className="w-full bg-primary/20 group-hover:bg-primary/40 transition-all rounded-t-lg"
                                        style={{ height: `${height * 0.7}%` }}
                                    />
                                    <div
                                        className="w-full bg-primary rounded-t-lg absolute bottom-0 transition-all"
                                        style={{ height: `${height}%` }}
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-500" />
                            Response Times
                        </h2>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Critical</span>
                                <span className="text-sm font-bold text-red-600">12m</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                                <div className="bg-red-500 h-1.5 rounded-full w-[95%]" />
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">High</span>
                                <span className="text-sm font-bold text-orange-600">45m</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                                <div className="bg-orange-500 h-1.5 rounded-full w-[80%]" />
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Medium</span>
                                <span className="text-sm font-bold text-blue-600">2.4h</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                                <div className="bg-blue-500 h-1.5 rounded-full w-[60%]" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-primary uppercase tracking-widest">SLA Score</p>
                                <p className="text-2xl font-bold text-gray-900">98.5%</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            Your team is performing above the target SLA of 95% for this period.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
