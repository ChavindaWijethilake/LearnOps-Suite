'use client';

import { useParams } from 'next/navigation';
import {
    Activity,
    Globe,
    Zap,
    AlertCircle,
    Clock,
    ArrowLeft,
    Server,
    Database,
    Shield,
    BarChart3,
    Layers,
    Terminal,
    Settings2,
    RefreshCw
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function ServiceDetailsPage() {
    const params = useParams();
    const serviceName = params.name as string;

    return (
        <div className="max-w-[1400px] mx-auto py-8 space-y-8 animate-fade-in pb-20">
            {/* Breadcrumb / Back */}
            <Link
                href="/status"
                className="flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-[2rem] text-emerald-500 shadow-2xl shadow-emerald-500/10">
                        <Server className="w-10 h-10" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">{serviceName.replace('-', ' ')}</h1>
                            <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30">OPERATIONAL</Badge>
                        </div>
                        <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mt-2">UUID: srv_{Math.random().toString(36).substr(2, 9)} • Cluster: us-east-multi</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-white transition-all">
                        <Terminal className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-white transition-all">
                        <Settings2 className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-rose-500 transition-all hover:text-white">
                        <RefreshCw className="w-4 h-4" />
                        Restart Service
                    </button>
                </div>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DetailStat label="Latency (P99)" value="42ms" sub="Within SLA" icon={Zap} color="text-emerald-500" />
                <DetailStat label="Error Rate" value="0.02%" sub="Nominal" icon={AlertCircle} color="text-blue-500" />
                <DetailStat label="Uptime (30d)" value="99.98%" sub="High Availability" icon={Clock} color="text-indigo-500" />
                <DetailStat label="Throughput" value="1.2k" sub="Req / Sec" icon={Activity} color="text-violet-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Performance Chart Placeholder */}
                <div className="lg:col-span-2 p-8 bg-slate-900/50 border border-slate-800/50 rounded-[3rem] space-y-6 flex flex-col items-center justify-center min-h-[400px]">
                    <BarChart3 className="w-16 h-16 text-slate-800 mb-4" />
                    <div className="text-center">
                        <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Real-Time Telemetry Stream</p>
                        <p className="text-[10px] font-bold text-slate-700 uppercase mt-2">Connecting to Prometheus Exporter Node...</p>
                    </div>
                </div>

                {/* Service Metadata & Instances */}
                <div className="space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[3rem] space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Instance Distribution</h3>
                        <div className="space-y-4">
                            <InstanceRow name="worker-01" status="healthy" region="US-EAST-1" />
                            <InstanceRow name="worker-02" status="healthy" region="US-EAST-1" />
                            <InstanceRow name="worker-03" status="degraded" region="EU-WEST-2" />
                        </div>
                    </section>

                    <section className="p-8 bg-[#0B1120] border border-slate-800/50 rounded-[3rem] space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Resource Profile</h3>
                        <div className="space-y-6 pt-2">
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                                    <span>Allocated Memory</span>
                                    <span className="text-slate-300">2.4 / 4.0 GB</span>
                                </div>
                                <Progress value={60} className="h-1.5" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                                    <span>CPU Load</span>
                                    <span className="text-slate-300">12%</span>
                                </div>
                                <Progress value={12} className="h-1.5" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function DetailStat({ label, value, sub, icon: Icon, color }: any) {
    return (
        <div className="p-6 bg-slate-900/40 border border-slate-800/50 rounded-[2rem] hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3 mb-4">
                <div className={cn("p-2 rounded-xl bg-slate-950 border border-slate-800", color)}>
                    <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</span>
            </div>
            <p className="text-3xl font-black text-white tracking-tighter">{value}</p>
            <p className="text-[10px] font-bold text-slate-600 uppercase mt-1">{sub}</p>
        </div>
    );
}

function InstanceRow({ name, status, region }: any) {
    return (
        <div className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800/50 rounded-2xl">
            <div className="flex items-center gap-3">
                <div className={cn(
                    "w-2 h-2 rounded-full",
                    status === 'healthy' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-amber-500 animate-pulse"
                )} />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-tight">{name}</span>
            </div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">{region}</span>
        </div>
    );
}
