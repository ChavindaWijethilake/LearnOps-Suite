'use client';

import { useState, useEffect } from 'react';
import {
    CheckCircle,
    Activity,
    AlertTriangle,
    XCircle,
    Clock,
    Users,
    ArrowUpRight,
    Zap,
    Server,
    Database,
    ShieldCheck,
    Globe,
    Cpu,
    Lock,
    RotateCcw,
    Power,
    Settings2,
    Rocket
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useAuth } from '@/components/auth/auth-provider';
import { Role } from '@learnops/platform';

const services = [
    { name: 'Student Portal', id: 'student-portal', status: 'Operational', latency: 42, errorRate: 0.02, uptime: 99.98, icon: Globe },
    { name: 'Resource Center', id: 'resource-center', status: 'Operational', latency: 28, errorRate: 0.01, uptime: 99.99, icon: Database },
    { name: 'Billing & Finance', id: 'billing', status: 'Operational', latency: 115, errorRate: 0.05, uptime: 99.95, icon: Zap },
    { name: 'IT Service Desk', id: 'it-desk', status: 'Operational', latency: 64, errorRate: 0.03, uptime: 99.97, icon: Settings2 },
    { name: 'Auth Service', id: 'auth', status: 'Operational', latency: 12, errorRate: 0.00, uptime: 100.0, icon: ShieldCheck },
    { name: 'DB Cluster', id: 'db', status: 'Operational', latency: 4, errorRate: 0.00, uptime: 99.99, icon: Server },
    { name: 'File Storage', id: 'storage', status: 'Degraded', latency: 450, errorRate: 1.2, uptime: 99.85, icon: Lock },
    { name: 'API Gateway', id: 'gateway', status: 'Operational', latency: 8, errorRate: 0.01, uptime: 99.99, icon: Cpu },
];

export default function StatusPage() {
    const [mounted, setMounted] = useState(false);
    const [health, setHealth] = useState<any>(null);
    const { user } = useAuth();
    const isSuperAdmin = user?.role === Role.SUPER_ADMIN;

    useEffect(() => {
        setMounted(true);
        const fetchHealth = async () => {
            try {
                const res = await fetch('/api/telemetry');
                const data = await res.json();
                setHealth(data);
            } catch (e) {
                console.error("Telemetry failed", e);
            }
        };
        fetchHealth();
        const interval = setInterval(fetchHealth, 5000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="max-w-[1600px] mx-auto py-8 space-y-8 animate-fade-in pb-20">
            {/* Header / Control Cockpit Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                            Global Ops
                        </div>
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Session: {new Date().toLocaleDateString()}</span>
                    </div>
                    <h1 className="text-4xl font-black tracking-tighter text-white">ADMIN OPERATIONS HUB</h1>
                    <p className="text-slate-400 font-medium text-sm mt-1">Institutional Control Cockpit & Resource Governance</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl text-xs font-bold text-slate-300 transition-all">
                        <RotateCcw className="w-3.5 h-3.5" />
                        REFRESH TELEMETRY
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-[#0F172A] rounded-xl text-xs font-bold transition-all hover:bg-emerald-400 shadow-lg shadow-emerald-500/20">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        GLOBAL SUMMARY
                    </button>
                </div>
            </div>

            {/* 6. System Summary Widget (Top) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                <SummaryItem label="Availability" value={health?.status === 'Operational' ? '99.99%' : '98.45%'} sub="Target: 99.95%" icon={Globe} color="text-emerald-400" />
                <SummaryItem label="Active Incidents" value={health?.services?.['storage']?.status === 'Degraded' ? "1" : "0"} sub={health?.services?.['storage']?.status === 'Degraded' ? "Storage Latency" : "All Clear"} icon={AlertTriangle} color={health?.services?.['storage']?.status === 'Degraded' ? "text-amber-400" : "text-emerald-400"} />
                <SummaryItem label="Services Ops" value={health ? `${Object.values(health.services).filter((s: any) => s.status === 'Operational').length}/8` : '7/8'} sub="Real-time Pulse" icon={CheckCircle} color="text-emerald-400" />
                <SummaryItem label="Avg Latency" value={health ? `${Math.round(Object.values(health.services).reduce((acc: number, s: any) => acc + s.latency, 0) / 8)}ms` : '24ms'} sub="Nominal Pulse" icon={Zap} color="text-blue-400" />
                <SummaryItem label="Active Users" value="1,242" sub="Across Portals" icon={Users} color="text-indigo-400" />
                <SummaryItem label="Last Update" value={health ? new Date(health.lastUpdate).toLocaleTimeString() : 'Just now'} sub="v4.2.1 Stable" icon={Clock} color="text-slate-400" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 1. Service Health Matrix (LHS) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Service Health Matrix</h2>
                        <span className="text-[10px] text-slate-600 font-bold uppercase">Real-time Telemetry</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((svc) => (
                            <ServiceMatrixCard key={svc.id} svc={svc} health={health} />
                        ))}
                    </div>
                </div>

                {/* RHS Panels */}
                <div className="space-y-8">
                    {/* Performance Metrics Panel (Preview) */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Performance Metrics</h2>
                        <div className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-3xl space-y-6">
                            <MetricRow label="Throughput" value="12.4k" unit="RPM" trend="+5.2%" />
                            <MetricRow label="Error Rate" value="0.08" unit="%" trend="-0.02%" />
                            <MetricRow label="Memory Usage" value="64.2" unit="GB" trend="Nominal" />
                            <MetricRow label="CPU Load" value="22" unit="%" trend="Minimal" />
                            <div className="h-24 bg-gradient-to-t from-emerald-500/10 to-transparent border-b border-emerald-500/20 rounded-xl flex items-end px-4 gap-1">
                                {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85].map((h, i) => (
                                    <div key={i} className="flex-1 bg-emerald-500/40 rounded-t-sm" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Emergency Controls (Super Admin) */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500">Emergency Protocols</h2>
                        <div className="p-6 bg-rose-500/5 border border-rose-500/20 rounded-3xl space-y-4">
                            <EmergencyButton
                                icon={RotateCcw}
                                label="One-Click Rollback"
                                desc="Revert to v4.2.0 stable"
                                color="bg-rose-500"
                                disabled={!isSuperAdmin}
                            />
                            <EmergencyButton
                                icon={Power}
                                label="Service Restart"
                                desc="Hard reboot gateway node"
                                color="bg-orange-500"
                                disabled={!isSuperAdmin}
                            />
                            <div className="pt-4 flex items-center justify-between text-[10px] font-bold text-rose-500/60 uppercase">
                                <span className="flex items-center gap-2">
                                    <Lock className="w-3 h-3" />
                                    Super Admin Restricted
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function SummaryItem({ label, value, sub, icon: Icon, color }: any) {
    return (
        <div className="p-5 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-slate-700/50 transition-all group">
            <div className="flex items-center justify-between mb-3">
                <Icon className={cn("w-5 h-5", color)} />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors" />
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</p>
            <p className="text-2xl font-black text-white tracking-tighter mt-1">{value}</p>
            <p className="text-[10px] font-bold text-slate-600 uppercase mt-0.5">{sub}</p>
        </div>
    );
}

function ServiceMatrixCard({ svc, health }: any) {
    const liveStatus = health?.services?.[svc.id] || { status: svc.status, latency: svc.latency };
    const isError = liveStatus.status === 'Degraded' || liveStatus.status === 'Down';

    return (
        <Link
            href={`/command-center/services/${svc.id}`}
            className="p-6 bg-[#0B1120] border border-slate-800/50 rounded-3xl hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden block"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className={cn(
                        "p-2.5 rounded-xl border transition-colors",
                        isError ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500/20"
                    )}>
                        <svc.icon className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors">{svc.name}</h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={cn(
                                "w-1.5 h-1.5 rounded-full animate-pulse",
                                isError ? "bg-rose-500" : "bg-emerald-500"
                            )} />
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-widest",
                                isError ? "text-rose-500" : "text-emerald-500/70"
                            )}>{liveStatus.status}</span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Uptime</p>
                    <p className="text-sm font-black text-white">{svc.uptime}%</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Latency</span>
                        <span className={cn("text-xs font-black", liveStatus.latency > 100 ? "text-amber-500" : "text-emerald-400")}>
                            {liveStatus.latency}ms
                        </span>
                    </div>
                    <Progress value={Math.min(100, (liveStatus.latency / 200) * 100)} className="h-1" />
                </div>
                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Errors</span>
                        <span className={cn("text-xs font-black", svc.errorRate > 1 ? "text-rose-500" : "text-slate-400")}>
                            {svc.errorRate}%
                        </span>
                    </div>
                    <Progress value={svc.errorRate * 10} className="h-1" />
                </div>
            </div>

            <div className="absolute bottom-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 hover:text-emerald-400">
                <ArrowUpRight className="w-5 h-5" />
            </div>
        </Link>
    );
}

function MetricRow({ label, value, unit, trend }: any) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</span>
            <div className="flex items-center gap-3">
                <div className="text-right">
                    <span className="text-lg font-black text-white leading-none">{value}</span>
                    <span className="text-[10px] font-bold text-slate-500 ml-1 leading-none">{unit}</span>
                </div>
                <span className={cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded",
                    trend.startsWith('+') ? "text-emerald-500 bg-emerald-500/10" : "text-rose-500 bg-rose-500/10"
                )}>{trend}</span>
            </div>
        </div>
    );
}

function EmergencyButton({ icon: Icon, label, desc, color, disabled }: any) {
    return (
        <button
            disabled={disabled}
            className={cn(
                "w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-rose-500/30 transition-all group",
                disabled && "opacity-50 cursor-not-allowed hover:border-slate-800/50"
            )}
        >
            <div className={cn(
                "p-2.5 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform",
                color,
                disabled && "bg-slate-700"
            )}>
                <Icon className="w-5 h-5" />
            </div>
            <div className="text-left">
                <p className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">{label}</p>
                <div className="flex items-center gap-2">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{desc}</p>
                    {disabled && <Lock className="w-3 h-3 text-rose-500/50" />}
                </div>
            </div>
        </button>
    );
}
