'use client';

import React, { useState, useEffect } from 'react';
import {
    Zap,
    Cpu,
    Database,
    CloudLightning,
    Trash2,
    RefreshCw,
    Gauge,
    Timer,
    Check,
    AlertCircle,
    ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from '@/components/ui/badge';
import { useSettings } from '../settings-context';

export default function PerformanceSettingsPage() {
    const { setIsDirty } = useSettings();
    const [lowLatency, setLowLatency] = useState(true);
    const [prefetching, setPrefetching] = useState(false);
    const [lazyLoading, setLazyLoading] = useState(true);
    const [hardwareAccel, setHardwareAccel] = useState(true);
    const [showClearCache, setShowClearCache] = useState(false);
    const [isClearing, setIsClearing] = useState(false);
    const [clearSuccess, setClearSuccess] = useState(false);

    const [initialState] = useState({
        lowLatency: true,
        prefetching: false,
        lazyLoading: true,
        hardwareAccel: true
    });

    // Track changes
    useEffect(() => {
        const hasChanges =
            lowLatency !== initialState.lowLatency ||
            prefetching !== initialState.prefetching ||
            lazyLoading !== initialState.lazyLoading ||
            hardwareAccel !== initialState.hardwareAccel;
        setIsDirty(hasChanges);
    }, [lowLatency, prefetching, lazyLoading, hardwareAccel, initialState, setIsDirty]);

    const handleClearCache = () => {
        setIsClearing(true);
        setTimeout(() => {
            setIsClearing(false);
            setClearSuccess(true);
            setTimeout(() => setClearSuccess(false), 3000);
        }, 2000);
    };

    return (
        <div className="space-y-10 animate-fade-in">
            <div className="space-y-2">
                <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">System Performance</h1>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Resource Allocation & Optimization Governance</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Real-time Metrics */}
                <div className="xl:col-span-1 space-y-6">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-1">Operational Metrics</h2>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Real-time resource ingestion</p>
                        </div>

                        <div className="space-y-8">
                            <MetricGauge icon={Cpu} label="Core Load" value={24} color="text-cyan-400" />
                            <MetricGauge icon={Database} label="Registry Memory" value={68} color="text-emerald-400" />
                            <MetricGauge icon={CloudLightning} label="Network Ingress" value={12} color="text-amber-400" />
                        </div>

                        <div className="pt-4 border-t border-slate-800/50">
                            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                                <span className="flex items-center gap-1.5">
                                    <Timer className="w-3.5 h-3.5" />
                                    Uptime:
                                </span>
                                <span className="text-emerald-500">99.98%</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Optimization Controls */}
                <div className="xl:col-span-2 space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-1">Enhancement Toggles</h2>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Interface & core acceleration</p>
                            </div>
                            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] py-1 px-4">
                                OPTIMIZED
                            </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <PerformanceRow
                                icon={Zap}
                                label="Low Latency Mode"
                                desc="Prioritize binary response speed over visual fidelity"
                                checked={lowLatency}
                                onCheckedChange={setLowLatency}
                            />
                            <PerformanceRow
                                icon={ArrowUpRight}
                                label="Global Prefetching"
                                desc="Ingest predictive data packets during idle states"
                                checked={prefetching}
                                onCheckedChange={setPrefetching}
                            />
                            <PerformanceRow
                                icon={Gauge}
                                label="Hardware Acceleration"
                                desc="Utilize local GPU nodes for mesh rendering"
                                checked={hardwareAccel}
                                onCheckedChange={setHardwareAccel}
                            />
                            <PerformanceRow
                                icon={RefreshCw}
                                label="Lazy Loading"
                                desc="Delay component ingestion until viewport intersection"
                                checked={lazyLoading}
                                onCheckedChange={setLazyLoading}
                            />
                        </div>
                    </section>

                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-1">State Registry Management</h2>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Flush temporary operational buffers</p>
                            </div>
                            <Button
                                onClick={() => setShowClearCache(true)}
                                variant="outline"
                                className={cn(
                                    "h-12 border-slate-800 bg-slate-900/50 hover:bg-rose-500/10 hover:text-rose-500 hover:border-rose-500/30 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-2xl gap-2 px-8 transition-all",
                                    clearSuccess && "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                                )}
                            >
                                {clearSuccess ? <Check className="w-4 h-4" /> : <Trash2 className="w-4 h-4" />}
                                {clearSuccess ? "Registry Flushed" : "Clear Client Cache"}
                            </Button>
                        </div>

                        <div className="p-6 bg-slate-950/60 border border-slate-800/30 rounded-[2rem] flex items-center gap-6">
                            <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-500">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-black text-white uppercase tracking-tight">Cache Volatility Warning</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed max-w-xl">
                                    Clearing the cache will remove all locally stored session shards, pending configuration changes, and cached metadata. This operation cannot be reversed.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <AlertDialog open={showClearCache} onOpenChange={setShowClearCache}>
                <AlertDialogContent className="bg-slate-900 border-slate-800 rounded-[2rem] max-w-md text-center">
                    <AlertDialogHeader className="space-y-4">
                        <div className="mx-auto p-4 bg-rose-500/10 rounded-2xl text-rose-500 w-fit">
                            <Trash2 className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <AlertDialogTitle className="text-xl font-black text-white uppercase tracking-tight italic">Purge Registry Cache?</AlertDialogTitle>
                            <AlertDialogDescription className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                                This will force a full system re-ingestion of metadata. All active temporary states will be dissolved.
                            </AlertDialogDescription>
                        </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-3 mt-6">
                        <AlertDialogCancel className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 border-none rounded-2xl h-12 text-[10px] font-black uppercase tracking-widest">
                            Abort
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleClearCache}
                            className="flex-1 bg-rose-600 hover:bg-rose-500 text-white border-none rounded-2xl h-12 text-[10px] font-black uppercase tracking-widest"
                        >
                            {isClearing ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Initiate Purge"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

function MetricGauge({ icon: Icon, label, value, color }: any) {
    return (
        <div className="space-y-3 group">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors", color)}>
                        <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
                </div>
                <span className={cn("text-xs font-black tracking-tight", color)}>{value}%</span>
            </div>
            <Progress value={value} className="h-1.5 bg-slate-950 overflow-hidden" indicatorClassName={cn("transition-all duration-1000", color.replace('text-', 'bg-'))} />
        </div>
    );
}

function PerformanceRow({ icon: Icon, label, desc, checked, onCheckedChange }: any) {
    return (
        <div className={cn(
            "p-6 rounded-[2rem] border transition-all duration-300 flex items-start justify-between gap-4",
            checked ? "bg-slate-800/40 border-slate-700/50" : "bg-slate-950/20 border-transparent opacity-50"
        )}>
            <div className="flex gap-4">
                <div className={cn(
                    "p-3 rounded-xl transition-colors",
                    checked ? "bg-emerald-500/10 text-emerald-500" : "bg-slate-800 text-slate-600"
                )}>
                    <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                    <p className="text-[13px] font-black text-white uppercase tracking-tight">{label}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed tracking-tight group-hover:text-slate-400">
                        {desc}
                    </p>
                </div>
            </div>
            <Switch checked={checked} onCheckedChange={onCheckedChange} />
        </div>
    );
}
