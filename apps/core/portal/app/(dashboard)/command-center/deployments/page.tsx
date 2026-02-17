'use client';

import { useState } from 'react';
import {
    Rocket,
    Ship,
    History,
    RotateCcw,
    CheckCircle2,
    XCircle,
    Clock,
    GitBranch,
    Terminal,
    Play,
    Pause,
    ArrowUpRight,
    Search,
    Filter,
    Layers,
    Github
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const recentDeployments = [
    { id: 'DP-9921', version: 'v4.2.1', status: 'Production', environment: 'PROD', hash: '8f2a11b', time: '4h ago', author: 'admin_sys', success: true },
    { id: 'DP-9920', version: 'v4.2.1-rc2', status: 'Staging', environment: 'STG', hash: '3e1c092', time: '1d ago', author: 'dev_lead', success: true },
    { id: 'DP-9919', version: 'v4.2.0', status: 'Legacy', environment: 'PROD', hash: 'c55d21a', time: '3d ago', author: 'system_bot', success: true },
    { id: 'DP-9918', version: 'v4.1.9-beta', status: 'Failed', environment: 'STG', hash: 'a11b8cc', time: '4d ago', author: 'dev_alex', success: false },
];

export default function DeploymentCenterPage() {
    return (
        <div className="max-w-[1600px] mx-auto py-8 space-y-10 animate-fade-in pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic">Deployment Center</h1>
                    <p className="text-slate-400 font-medium text-sm mt-1 uppercase tracking-wider">CI/CD Pipeline Governance & Orchestration</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-xs font-bold text-slate-300 transition-all hover:bg-slate-800">
                        <Terminal className="w-3.5 h-3.5" />
                        PIPELINE LOGS
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold transition-all hover:bg-blue-500 shadow-lg shadow-blue-500/20">
                        <Play className="w-3.5 h-3.5" />
                        TRIGGER MANUAL BUILD
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LHS: Pipeline Status */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Active Pipeline Card */}
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Rocket className="w-32 h-32" />
                        </div>

                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-500 animate-pulse">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Global CICD Status</h2>
                                    <p className="text-xl font-black text-white tracking-tight">System v4.2.2-stable Building...</p>
                                </div>
                            </div>
                            <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30 font-black">92% COMPLETE</Badge>
                        </div>

                        <div className="space-y-8">
                            {/* Pipeline Steps */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <PipelineStep label="Fetch Source" status="complete" />
                                <PipelineStep label="Run Linting" status="complete" />
                                <PipelineStep label="Unit Tests" status="complete" />
                                <PipelineStep label="Docker Build" status="active" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    <span>Building Image: learnops/portal-v2:latest</span>
                                    <span>24s elapsed</span>
                                </div>
                                <Progress value={92} className="h-2" />
                            </div>
                        </div>
                    </section>

                    {/* Deployment History */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Deployment History</h2>
                            <div className="flex items-center gap-2">
                                <Search className="w-4 h-4 text-slate-700" />
                                <span className="text-[10px] font-bold text-slate-700 uppercase">Search by Version or Hash</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {recentDeployments.map((deploy) => (
                                <div key={deploy.id} className="p-5 bg-[#0B1120] border border-slate-800/50 rounded-3xl hover:border-slate-700 transition-all group flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className={cn(
                                            "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs border",
                                            deploy.success ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-rose-500/10 border-rose-500/20 text-rose-500"
                                        )}>
                                            {deploy.success ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <p className="font-black text-slate-200 tracking-tight">{deploy.version}</p>
                                                <Badge className="bg-slate-800 text-slate-500 border-slate-700 text-[8px]">{deploy.environment}</Badge>
                                            </div>
                                            <div className="flex items-center gap-4 mt-1">
                                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                                    <Clock className="w-3 h-3" /> {deploy.time}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                                                    <Github className="w-3 h-3" /> {deploy.hash}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="text-right hidden md:block">
                                            <p className="text-[10px] font-bold text-slate-600 uppercase">Deployed by</p>
                                            <p className="text-xs font-bold text-slate-400">{deploy.author}</p>
                                        </div>
                                        <button className="px-4 py-2 bg-slate-800/50 hover:bg-rose-500/10 hover:text-rose-500 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest transition-all">
                                            Rollback
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* RHS: Metrics & Rollback */}
                <div className="space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[3rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-2">Build Health</h2>
                            <p className="text-slate-500 text-xs font-bold uppercase">Success metric analytics</p>
                        </div>

                        <div className="space-y-6">
                            <BuildMetric label="Mean Time To Recover" value="12m 42s" color="text-emerald-500" />
                            <BuildMetric label="Build Success Rate" value="98.2%" color="text-blue-500" />
                            <BuildMetric label="Avg Build Duration" value="4m 12s" color="text-slate-400" />
                        </div>
                    </section>

                    <section className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] space-y-6">
                        <div className="flex items-center gap-3">
                            <RotateCcw className="w-4 h-4 text-rose-500" />
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500">Emergency Protocol</h3>
                        </div>
                        <div className="p-6 bg-slate-950/20 border border-slate-800/50 rounded-3xl text-center">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 leading-relaxed">
                                Immediate rollback will bypass standard CI/CD checks and revert all core gateways to the last verified stable image (v4.2.0).
                            </p>
                            <button className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-rose-600/20 transition-all active:scale-95">
                                REVERT TO STABLE v4.2.0
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function PipelineStep({ label, status }: { label: string, status: 'complete' | 'active' | 'pending' }) {
    return (
        <div className={cn(
            "p-3 rounded-2xl border text-center transition-all",
            status === 'complete' && "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
            status === 'active' && "bg-blue-500/10 border-blue-500/30 text-blue-400 border-dashed animate-pulse",
            status === 'pending' && "bg-slate-900/50 border-slate-800/50 text-slate-700",
        )}>
            <p className="text-[10px] font-black uppercase tracking-widest mb-1">{label}</p>
            <div className="flex justify-center">
                {status === 'complete' ? <CheckCircle2 className="w-3.5 h-3.5" /> : status === 'active' ? <Clock className="w-3.5 h-3.5" /> : null}
            </div>
        </div>
    );
}

function BuildMetric({ label, value, color }: any) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
            <span className={cn("text-lg font-black tracking-tight", color)}>{value}</span>
        </div>
    );
}
