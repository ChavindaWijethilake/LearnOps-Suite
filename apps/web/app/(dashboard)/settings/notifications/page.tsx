'use client';

import React, { useState, useEffect } from 'react';
import {
    Bell,
    Mail,
    Smartphone,
    Volume2,
    Zap,
    AlertCircle,
    ShieldAlert,
    Send,
    Check
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { useSettings } from '../settings-context';

export default function NotificationsSettingsPage() {
    const { setIsDirty } = useSettings();
    const [pushEnabled, setPushEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [severity, setSeverity] = useState('critical');
    const [isTesting, setIsTesting] = useState(false);
    const [testSent, setTestSent] = useState(false);

    const [initialState] = useState({
        push: true,
        email: false,
        sound: true,
        severity: 'critical'
    });

    // Track changes
    useEffect(() => {
        const hasChanges =
            pushEnabled !== initialState.push ||
            emailEnabled !== initialState.email ||
            soundEnabled !== initialState.sound ||
            severity !== initialState.severity;
        setIsDirty(hasChanges);
    }, [pushEnabled, emailEnabled, soundEnabled, severity, initialState, setIsDirty]);

    const handleTestAlert = () => {
        setIsTesting(true);
        setTimeout(() => {
            setIsTesting(false);
            setTestSent(true);
            setTimeout(() => setTestSent(false), 3000);
        }, 1500);
    };

    return (
        <div className="space-y-10 animate-fade-in">
            <div className="space-y-2">
                <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">Notification Preferences</h1>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Alert Thresholds & Channel Routing Governance</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Global Channels */}
                <div className="space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-1">Alert Channels</h2>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Primary notification nodes</p>
                            </div>
                            <Button
                                onClick={handleTestAlert}
                                disabled={isTesting}
                                className={cn(
                                    "h-10 px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all",
                                    testSent ? "bg-emerald-500 text-[#0F172A]" : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                                )}
                            >
                                {isTesting ? <Zap className="w-3.5 h-3.5 animate-spin mr-2" /> : testSent ? <Check className="w-3.5 h-3.5 mr-2" /> : <Send className="w-3.5 h-3.5 mr-2" />}
                                {testSent ? "Alert Dispatched" : "Send Test Alert"}
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <NotificationRow
                                icon={Smartphone}
                                label="Push Notifications"
                                desc="Direct binary pings to your active device"
                                checked={pushEnabled}
                                onCheckedChange={setPushEnabled}
                            />
                            <NotificationRow
                                icon={Mail}
                                label="Email Alerts"
                                desc="Critical incident reports and daily digests"
                                checked={emailEnabled}
                                onCheckedChange={setEmailEnabled}
                            />
                            <NotificationRow
                                icon={Volume2}
                                label="Audible Feedback"
                                desc="Play localized alert sounds for incidents"
                                checked={soundEnabled}
                                onCheckedChange={setSoundEnabled}
                            />
                        </div>
                    </section>

                    <div className="p-8 bg-amber-500/5 border border-amber-500/10 rounded-[2.5rem] flex items-center gap-6">
                        <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-black text-amber-500 uppercase tracking-tight">Channel Degradation</p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight leading-relaxed">
                                SMS emergency routing is currently managed by the global infrastructure registry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Severity & Logic */}
                <div className="space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-1">Severity Filtering</h2>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Trigger logic for outbound alerts</p>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Alert Ingress Level</Label>
                                <Select value={severity} onValueChange={setSeverity}>
                                    <SelectTrigger className="h-14 bg-slate-950 border-slate-800 rounded-2xl text-slate-200 font-bold focus:ring-1 focus:ring-blue-500/30">
                                        <SelectValue placeholder="Select severity level" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                                        <SelectItem value="all">ALL UPDATES (Verbose)</SelectItem>
                                        <SelectItem value="maintenance">SYSTEM MAINTENANCE + CRITICAL</SelectItem>
                                        <SelectItem value="critical">CRITICAL INCIDENTS ONLY</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="p-6 bg-slate-950/50 border border-slate-800/50 rounded-2xl space-y-4">
                                <div className="flex items-center gap-3">
                                    <ShieldAlert className={cn(
                                        "w-5 h-5",
                                        severity === 'all' ? "text-blue-400" : severity === 'maintenance' ? "text-amber-400" : "text-rose-500"
                                    )} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Current Filter Protocol</span>
                                </div>
                                <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase">
                                    {severity === 'all' && "You will receive notifications for every system event, including minor status changes and audit logs."}
                                    {severity === 'maintenance' && "Notifications will be restricted to scheduled maintenance windows and high-priority infrastructure alerts."}
                                    {severity === 'critical' && "Only P1/P0 incidents (downtime, security breaches, database failure) will trigger alerts."}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function NotificationRow({ icon: Icon, label, desc, checked, onCheckedChange }: any) {
    return (
        <div className={cn(
            "p-5 rounded-3xl border transition-all duration-300 flex items-center justify-between",
            checked ? "bg-slate-800/50 border-slate-700/50" : "bg-slate-900/20 border-transparent opacity-50"
        )}>
            <div className="flex items-center gap-4">
                <div className={cn(
                    "p-3 rounded-2xl transition-colors",
                    checked ? "bg-emerald-500/10 text-emerald-500" : "bg-slate-800 text-slate-600"
                )}>
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-[13px] font-black text-white uppercase tracking-tight">{label}</p>
                    <p className="text-[10px] font-bold text-slate-500 mt-0.5">{desc}</p>
                </div>
            </div>
            <Switch checked={checked} onCheckedChange={onCheckedChange} />
        </div>
    );
}
