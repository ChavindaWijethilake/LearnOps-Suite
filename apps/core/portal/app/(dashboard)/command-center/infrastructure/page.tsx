'use client';

import { useState, useEffect } from 'react';
import {
    Database,
    Server,
    Cpu,
    HardDrive,
    Activity,
    Layers,
    Zap,
    ArrowUpRight,
    ArrowDownRight,
    TrendingUp,
    Shield,
    RotateCcw,
    Settings2,
    ChevronRight,
    Box,
    Cloud,
    BarChart3,
    Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';

export default function InfrastructurePage() {
    const [cpuUsage, setCpuUsage] = useState(24);
    const [memoryUsage, setMemoryUsage] = useState(62);
    const [diskUsage, setDiskUsage] = useState(45);

    // Simulate fluctuation
    useEffect(() => {
        const interval = setInterval(() => {
            setCpuUsage(prev => Math.min(100, Math.max(0, prev + (Math.random() * 4 - 2))));
            setMemoryUsage(prev => Math.min(100, Math.max(0, prev + (Math.random() * 0.4 - 0.2))));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-[1600px] mx-auto py-8 space-y-10 animate-fade-in pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter text-white uppercase">Infrastructure Control</h1>
                    <p className="text-slate-400 font-medium text-sm mt-1 uppercase tracking-wider">Compute, Storage & High-Availability Governance</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-xs font-bold text-slate-300 transition-all hover:bg-slate-800">
                        <Activity className="w-3.5 h-3.5" />
                        SYNC NODES
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500 text-[#0F172A] rounded-xl text-xs font-bold transition-all hover:bg-emerald-400">
                        <Settings2 className="w-3.5 h-3.5" />
                        PROVISION RESOURCES
                    </button>
                </div>
            </div>

            {/* Top Stats: Hardware Pulse */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <HardwareCard label="CPU Utilization" value={`${cpuUsage.toFixed(1)}%`} status="Optimal" icon={Cpu} color="text-blue-400" progress={cpuUsage} />
                <HardwareCard label="System Memory" value={`${memoryUsage.toFixed(1)}%`} status="Stable" icon={BarChart3} color="text-emerald-400" progress={memoryUsage} />
                <HardwareCard label="Persistent Storage" value={`${diskUsage}%`} status="Ample" icon={HardDrive} color="text-indigo-400" progress={diskUsage} />
                <HardwareCard label="Load Average" value="0.42" status="Nominal" icon={Layers} color="text-violet-400" progress={42} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main: DB & scaling */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Database Clusters */}
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-1">Database Cluster Health</h2>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Active connections & IOPS</p>
                            </div>
                            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">PRIMARY CLUSTER: ON-SITE</Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <DBStat label="Active Connections" value="482" trend="+12" icon={Users} />
                            <DBStat label="Avg Query Time" value="4.2ms" trend="-0.1ms" icon={Zap} />
                            <DBStat label="Sync Status" value="Healthy" trend="In Sync" icon={Shield} />
                        </div>

                        <div className="p-6 bg-slate-950/50 border border-slate-800/50 rounded-2xl flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <RotateCcw className="w-5 h-5 text-slate-500" />
                                <div>
                                    <p className="text-xs font-bold text-slate-300">Automated Backup Schedule</p>
                                    <p className="text-[10px] font-bold text-slate-600 uppercase">Daily @ 02:00 UTC • Last backup: 14h ago</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/50 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest transition-all">
                                Trigger Manual Backup
                            </button>
                        </div>
                    </section>

                    {/* Infrastructure Fleet */}
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Instance Fleet Status</h2>
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-950/30 border border-slate-800/50 rounded-2xl hover:border-slate-700 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                                            <Server className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-200 uppercase tracking-tight">K8S-APP-NODE-0{i}</p>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">EC2 t3.large • US-EAST-1A</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-10">
                                        <div className="text-right hidden md:block">
                                            <p className="text-[10px] font-bold text-slate-600 uppercase">CPU / MEM</p>
                                            <p className="text-xs font-bold text-slate-400 lowercase">12% / 3.4gb</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Running</span>
                                        </div>
                                        <button className="p-2 text-slate-600 hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-all">
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* RHS: Auto-Scaling & Quotas */}
                <div className="space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[3rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-violet-500 mb-2">Scaling & Quotas</h2>
                            <p className="text-slate-500 text-xs font-bold uppercase">Dynamic resource allocation</p>
                        </div>

                        <div className="space-y-6">
                            <ScalingToggle label="Enable Auto-Scaling" active={true} desc="Horizontal pod autoscaler active" />
                            <div className="space-y-4 pt-4">
                                <QuotaRow label="Min Instances" value="2" />
                                <QuotaRow label="Max Instances" value="12" />
                                <QuotaRow label="Scale-Up Trigger" value="75% CPU" />
                            </div>
                            <div className="grid grid-cols-2 gap-3 pt-4">
                                <button className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-white transition-all">
                                    Manual Scale Down
                                </button>
                                <button className="px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:bg-emerald-500/20 transition-all">
                                    Manual Scale Up
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[3rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <Cloud className="w-4 h-4 text-blue-500" />
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Cloud Provider</h3>
                        </div>
                        <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-3xl text-center">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Estimated Monthly Burn</p>
                            <p className="text-4xl font-black text-white">$2,482<span className="text-slate-600 text-lg ml-1">.00</span></p>
                            <p className="text-[10px] font-bold text-emerald-400 mt-2 uppercase tracking-widest">On track for budget</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function HardwareCard({ label, value, status, icon: Icon, color, progress }: any) {
    return (
        <div className="p-6 bg-[#0B1120] border border-slate-800/50 rounded-[2rem] space-y-4 hover:border-slate-700 transition-all group">
            <div className="flex items-center justify-between">
                <div className={cn("p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-xl", color)}>
                    <Icon className="w-5 h-5" />
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</p>
                    <p className="text-2xl font-black text-white tracking-tighter">{value}</p>
                </div>
            </div>
            <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-slate-600">Usage</span>
                    <span className={cn(progress > 80 ? "text-rose-500" : "text-emerald-500")}>{status}</span>
                </div>
                <Progress value={progress} className="h-1.5" />
            </div>
        </div>
    );
}

function DBStat({ label, value, trend, icon: Icon }: any) {
    return (
        <div className="p-4 bg-slate-950/30 border border-slate-800/50 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
                <Icon className="w-4 h-4 text-slate-600" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
            </div>
            <div className="flex items-end justify-between">
                <p className="text-2xl font-black text-white tracking-tighter">{value}</p>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    {trend.includes('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {trend}
                </div>
            </div>
        </div>
    );
}

function ScalingToggle({ label, active, desc }: any) {
    return (
        <div className="flex items-center justify-between">
            <div className="text-left">
                <p className="text-xs font-bold text-slate-200">{label}</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{desc}</p>
            </div>
            <Switch checked={active} />
        </div>
    );
}

function QuotaRow({ label, value }: any) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-slate-800/50 last:border-0">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
            <span className="text-sm font-black text-white">{value}</span>
        </div>
    );
}

function Badge({ children, className }: any) {
    return (
        <span className={cn("px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest", className)}>
            {children}
        </span>
    );
}
