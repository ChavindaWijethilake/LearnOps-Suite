'use client';

import { useState } from 'react';
import {
    Flag,
    Zap,
    Users,
    Globe,
    Clock,
    Shield,
    Search,
    Filter,
    CheckCircle2,
    XCircle,
    ChevronRight,
    Lock,
    Settings2,
    Save,
    Calendar,
    ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

interface FeatureFlag {
    id: string;
    key: string;
    description: string;
    status: boolean;
    roles: string[];
    envs: string[];
    scheduled: boolean;
}

const initialFlags: FeatureFlag[] = [
    { id: '1', key: 'ai-tutor-beta', description: 'Enable LLM-powered academic assistant for students', status: true, roles: ['student', 'professor'], envs: ['STG', 'DEV'], scheduled: false },
    { id: '2', key: 'v3-billing-engine', description: 'Switch to the new performant financial processing core', status: false, roles: ['admin'], envs: ['PROD', 'STG'], scheduled: true },
    { id: '3', key: 'maintenance-mode', description: 'Redirect all non-admin traffic to maintenance landing', status: false, roles: ['all'], envs: ['PROD', 'STG', 'DEV'], scheduled: false },
    { id: '4', key: 'dark-mode-v2', description: 'Experimental high-contrast slate theme support', status: true, roles: ['all'], envs: ['DEV'], scheduled: false },
];

export default function FeatureFlagsPage() {
    const [flags, setFlags] = useState<FeatureFlag[]>(initialFlags);

    return (
        <div className="max-w-[1400px] mx-auto py-8 space-y-10 animate-fade-in pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic">Feature Flags System</h1>
                    <p className="text-slate-400 font-medium text-sm mt-1 uppercase tracking-wider">Dynamic Capability Orchestration & Scheduling</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-xs font-bold text-slate-300 transition-all hover:bg-slate-800">
                        <Calendar className="w-3.5 h-3.5" />
                        AUDIT SCHEDULES
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all hover:bg-indigo-500 shadow-lg shadow-indigo-500/20">
                        <Flag className="w-3.5 h-3.5" />
                        CREATE NEW FLAG
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* LHS: Filters & Stats */}
                <div className="space-y-6">
                    <div className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-[2rem] space-y-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                placeholder="Search keys..."
                                className="w-full pl-11 pr-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-xl text-xs focus:ring-1 focus:ring-indigo-500/50 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Global Coverage</h3>
                            <CoverageStat label="Active Globally" value="2" total="4" color="bg-emerald-500" />
                            <CoverageStat label="Scheduled" value="1" total="4" color="bg-amber-500" />
                        </div>

                        <div className="pt-4 border-t border-slate-800/50">
                            <p className="text-[10px] font-bold text-slate-600 uppercase leading-relaxed text-center">
                                All changes are propagating via local-cache first. Distributed state may take up to 2 seconds to sync.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RHS: Flags List */}
                <div className="lg:col-span-3 space-y-4">
                    {flags.map((flag) => (
                        <div key={flag.id} className="p-8 bg-[#0B1120] border border-slate-800/50 rounded-[2.5rem] hover:border-indigo-500/30 transition-all duration-500 group">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "p-2 rounded-lg transition-colors",
                                            flag.status ? "bg-indigo-500/10 text-indigo-400" : "bg-slate-800 text-slate-600"
                                        )}>
                                            <Flag className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-black text-white tracking-tight">{flag.key}</h3>
                                    </div>
                                    <p className="text-slate-400 text-sm font-medium">{flag.description}</p>

                                    <div className="flex flex-wrap gap-4 pt-2">
                                        <div className="space-y-1.5">
                                            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Active Roles</p>
                                            <div className="flex gap-1.5">
                                                {flag.roles.map(r => <Badge key={r} className="bg-slate-900 text-slate-500 border-slate-800 text-[9px] uppercase">{r}</Badge>)}
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Environments</p>
                                            <div className="flex gap-1.5">
                                                {flag.envs.map(e => <Badge key={e} className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20 text-[9px] font-black">{e}</Badge>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex md:flex-col items-center md:items-end justify-between gap-6">
                                    <div className="flex items-center gap-3">
                                        <span className={cn(
                                            "text-xs font-black uppercase tracking-widest",
                                            flag.status ? "text-indigo-400" : "text-slate-600"
                                        )}>
                                            {flag.status ? 'ENABLED' : 'DISABLED'}
                                        </span>
                                        <Switch
                                            checked={flag.status}
                                            onCheckedChange={(val) => setFlags(flags.map(f => f.id === flag.id ? { ...f, status: val } : f))}
                                        />
                                    </div>

                                    <div className="hidden md:flex flex-col items-end gap-2">
                                        {flag.scheduled && (
                                            <div className="flex items-center gap-2 px-2 py-1 bg-amber-500/5 border border-amber-500/10 rounded-lg">
                                                <Clock className="w-3 h-3 text-amber-500" />
                                                <span className="text-[9px] font-bold text-amber-500 uppercase tracking-tighter">Sch: Next Cycle</span>
                                            </div>
                                        )}
                                        <button className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-1 group/btn">
                                            Edit Policy <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CoverageStat({ label, value, total, color }: any) {
    const percentage = (parseInt(value) / parseInt(total)) * 100;
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                <span className="text-slate-500">{label}</span>
                <span className="text-slate-300">{value} / {total}</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className={cn("h-full transition-all duration-1000", color)} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
}
