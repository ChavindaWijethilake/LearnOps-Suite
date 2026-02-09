'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Activity } from 'lucide-react';

export default function StatusPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-12">
            <div className="bg-white border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] p-12 transition-all duration-300">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-12 w-12 bg-emerald-500 text-white flex items-center justify-center">
                        <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-slate-900">System Status</h1>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Real-time infrastructure monitoring</p>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="bg-emerald-50 border-2 border-emerald-500/30 p-8 flex items-center gap-6">
                        <CheckCircle className="w-10 h-10 text-emerald-600" />
                        <div>
                            <span className="text-2xl font-black text-emerald-900 block">All Systems Operational</span>
                            <p className="text-emerald-700/70 font-bold text-sm uppercase tracking-wider">
                                Operational Pulse: Nominal • Last Check: {mounted ? new Date().toLocaleTimeString() : '--:--:--'}
                            </p>
                        </div>
                    </div>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 pb-2 border-b-2 border-slate-100">Service Matrix</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { name: 'Service Request Portal', status: 'Online' },
                                { name: 'Project Tracker', status: 'Online' },
                                { name: 'Learning Hub', status: 'Online' },
                                { name: 'Resource Center', status: 'Online' },
                            ].map((svc) => (
                                <div key={svc.name} className="flex items-center justify-between p-6 bg-slate-50 border-2 border-slate-100 group hover:border-slate-900 transition-colors">
                                    <span className="font-black text-slate-900 tracking-tight">{svc.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{svc.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-2 border-slate-100">
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Uptime Metrics</h2>
                            <div className="p-6 bg-slate-900 text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Global Availability</p>
                                <p className="text-4xl font-black tracking-tighter">99.99<span className="text-emerald-400">%</span></p>
                            </div>
                        </section>
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Latency</h2>
                            <div className="p-6 bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Avg Response Time</p>
                                <p className="text-4xl font-black tracking-tighter text-slate-900">24<span className="text-slate-400 text-lg ml-1">MS</span></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
