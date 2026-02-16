'use client';

import { useState } from 'react';
import {
    Bell,
    Settings2,
    Mail,
    Slack,
    MessageSquare,
    AlertTriangle,
    Zap,
    Activity,
    Save,
    RotateCcw,
    ChevronRight,
    Lock,
    Clock,
    Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

export default function AlertConfigPage() {
    const [latencyThreshold, setLatencyThreshold] = useState([200]);
    const [errorThreshold, setErrorThreshold] = useState([1.5]);
    const [uptimeThreshold, setUptimeThreshold] = useState([99.9]);

    return (
        <div className="max-w-[1200px] mx-auto py-8 space-y-10 animate-fade-in pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter text-white uppercase">Alert Configuration</h1>
                    <p className="text-slate-400 font-medium text-sm mt-1 uppercase tracking-wider">Threshold Engine & Notification Governance</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-xs font-bold text-slate-300 transition-all hover:bg-slate-800">
                        TEST ALERTS
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500 text-[#0F172A] rounded-xl text-xs font-bold transition-all hover:bg-emerald-400 shadow-lg shadow-emerald-500/20">
                        <Save className="w-3.5 h-3.5" />
                        COMMIT CHANGES
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Threshold Controls */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Activity className="w-32 h-32" />
                        </div>

                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-2">Telemetry Thresholds</h2>
                            <p className="text-slate-500 text-xs font-bold uppercase">Trigger critical incidents when metrics cross these bounds</p>
                        </div>

                        <div className="space-y-12">
                            {/* Latency Slider */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-200 uppercase tracking-tight">API Latency Threshold</span>
                                    </div>
                                    <span className="text-lg font-black text-white">{latencyThreshold}ms</span>
                                </div>
                                <Slider
                                    value={latencyThreshold}
                                    onValueChange={setLatencyThreshold}
                                    max={1000}
                                    step={10}
                                    className="py-4 cursor-pointer"
                                />
                                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Global average must exceed this for 3 consecutive intervals</p>
                            </div>

                            {/* Error Rate Slider */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
                                            <AlertTriangle className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-200 uppercase tracking-tight">System Error Rate</span>
                                    </div>
                                    <span className="text-lg font-black text-rose-400">{errorThreshold}%</span>
                                </div>
                                <Slider
                                    value={errorThreshold}
                                    onValueChange={setErrorThreshold}
                                    max={10}
                                    step={0.1}
                                    className="py-4 cursor-pointer"
                                />
                                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Aggregate 4xx/5xx responses across all ingress gateways</p>
                            </div>

                            {/* Uptime Slider */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                            <Activity className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-200 uppercase tracking-tight">Availability SLA</span>
                                    </div>
                                    <span className="text-lg font-black text-emerald-400">{uptimeThreshold}%</span>
                                </div>
                                <Slider
                                    value={uptimeThreshold}
                                    onValueChange={setUptimeThreshold}
                                    min={90}
                                    max={100}
                                    step={0.01}
                                    className="py-4 cursor-pointer"
                                />
                                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Warning triggered if 24h rolling uptime dips below this value</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right: Notification Channels */}
                <div className="space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-2">Notification Routing</h2>
                            <p className="text-slate-500 text-xs font-bold uppercase">Broadcast nodes for incidents</p>
                        </div>

                        <div className="space-y-4">
                            <ChannelRow icon={Mail} label="Email Digest" desc="Detailed root cause reports" active={true} />
                            <ChannelRow icon={Slack} label="Slack Operations" desc="#ops-critical immediate pings" active={true} />
                            <ChannelRow icon={MessageSquare} label="SMS Emergency" desc="Direct bridge for Super Admin" active={false} />
                            <ChannelRow icon={Shield} label="Audit Log Only" desc="Suppress external routing" active={false} />
                        </div>
                    </section>

                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-6 opacity-60">
                        <div className="flex items-center gap-3 mb-2">
                            <Lock className="w-4 h-4 text-slate-600" />
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-600">Advanced Hooks</h2>
                        </div>
                        <div className="p-4 bg-slate-950/50 border border-slate-800/50 rounded-2xl text-[10px] font-bold text-slate-500 uppercase leading-relaxed">
                            Webhooks and PagerDuty integration require Business or Enterprise tier protocols. Contact SysOps for provisioning.
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function ChannelRow({ icon: Icon, label, desc, active }: any) {
    const [isEnabled, setIsEnabled] = useState(active);

    return (
        <div className={cn(
            "p-5 rounded-3xl border transition-all duration-300 flex items-center justify-between",
            isEnabled ? "bg-slate-800/50 border-slate-700/50" : "bg-slate-900/20 border-transparent opacity-50"
        )}>
            <div className="flex items-center gap-4">
                <div className={cn(
                    "p-3 rounded-2xl transition-colors",
                    isEnabled ? "bg-emerald-500/10 text-emerald-500" : "bg-slate-800 text-slate-600"
                )}>
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-[13px] font-black text-white uppercase tracking-tight">{label}</p>
                    <p className="text-[10px] font-bold text-slate-500 mt-0.5">{desc}</p>
                </div>
            </div>
            <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
        </div>
    );
}
