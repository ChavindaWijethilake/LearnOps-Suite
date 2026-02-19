'use client';

import React, { useState, useEffect } from 'react';
import {
    Shield,
    Lock,
    Smartphone,
    LogOut,
    Eye,
    EyeOff,
    Check,
    AlertTriangle,
    SmartphoneIcon,
    Monitor,
    Globe,
    LockIcon,
    Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useSettings } from '../settings-context';
import { SecurityStrengthMeter, ReauthModal } from '../components/security-components';

const initialSessions = [
    { id: 1, device: 'MacBook Pro (Chrome)', ip: '192.168.1.10', location: 'New York, USA', time: 'Active now', current: true },
    { id: 2, device: 'iPhone 15 Pro', ip: '172.56.21.9', location: 'London, UK', time: '2 hours ago', current: false },
    { id: 3, device: 'iPad Air Safari', ip: '192.168.1.15', location: 'New York, USA', time: 'Yesterday', current: false },
];

export default function SecuritySettingsPage() {
    const { setIsDirty } = useSettings();
    const [tfaSms, setTfaSms] = useState(false);
    const [tfaApp, setTfaApp] = useState(true);
    const [visibility, setVisibility] = useState('internal');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showReauth, setShowReauth] = useState(false);
    const [sessions, setSessions] = useState(initialSessions);

    const [initialState] = useState({
        tfaSms: false,
        tfaApp: true,
        visibility: 'internal'
    });

    // Track changes
    useEffect(() => {
        const hasChanges =
            tfaSms !== initialState.tfaSms ||
            tfaApp !== initialState.tfaApp ||
            visibility !== initialState.visibility ||
            newPassword !== '' ||
            confirmPassword !== '';
        setIsDirty(hasChanges);
    }, [tfaSms, tfaApp, visibility, newPassword, confirmPassword, initialState, setIsDirty]);

    const handleLogoutAll = () => {
        setSessions(sessions.filter(s => s.current));
    };

    return (
        <div className="space-y-10 animate-fade-in">
            <div className="space-y-2">
                <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">Security & Privacy</h1>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Authentication Governance & Session Audit Registry</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                {/* Credentials Management */}
                <div className="space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-1">Credential Rotation</h2>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Update secondary authentication keys</p>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Current Password</Label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-rose-500 transition-colors" />
                                    <Input
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="bg-slate-950 border-slate-800 pl-11 h-14 text-slate-200 font-bold focus:ring-1 focus:ring-rose-500/30 rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">New Password</Label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-emerald-500 transition-colors" />
                                    <Input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="••••••••••••"
                                        className="bg-slate-950 border-slate-800 pl-11 h-14 text-slate-200 font-bold focus:ring-1 focus:ring-emerald-500/30 rounded-2xl"
                                    />
                                </div>
                                <SecurityStrengthMeter password={newPassword} />
                            </div>

                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Confirm New Password</Label>
                                <div className="relative group">
                                    <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-emerald-500 transition-colors" />
                                    <Input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="••••••••••••"
                                        className="bg-slate-950 border-slate-800 pl-11 h-14 text-slate-200 font-bold focus:ring-1 focus:ring-emerald-500/30 rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-1">Multi-Factor Authentication</h2>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Secondary verification protocols</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-5 bg-slate-950/40 border border-slate-800/50 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-black text-white uppercase tracking-tight">Authenticator App</p>
                                        <p className="text-[10px] font-bold text-slate-500 mt-0.5">Recommended binary verification</p>
                                    </div>
                                </div>
                                <Switch checked={tfaApp} onCheckedChange={setTfaApp} />
                            </div>

                            <div className="flex items-center justify-between p-5 bg-slate-950/40 border border-slate-800/50 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-800 text-slate-600">
                                        <Smartphone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-black text-white uppercase tracking-tight">SMS Authentication</p>
                                        <p className="text-[10px] font-bold text-slate-500 mt-0.5">Verification via cellular node</p>
                                    </div>
                                </div>
                                <Switch checked={tfaSms} onCheckedChange={setTfaSms} />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Session Management */}
                <div className="space-y-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-1">Active Operations</h2>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Authenticated session registry</p>
                            </div>
                            <Button
                                onClick={() => setShowReauth(true)}
                                variant="outline"
                                className="h-10 border-slate-800 bg-slate-900/50 hover:bg-rose-500/10 hover:text-rose-500 hover:border-rose-500/30 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-2xl gap-2"
                            >
                                <LogOut className="w-3.5 h-3.5" />
                                Terminate All
                            </Button>
                        </div>

                        <div className="space-y-3">
                            {sessions.map((session) => (
                                <div key={session.id} className="p-5 bg-slate-950/60 border border-slate-800/30 rounded-[2rem] flex items-center justify-between group hover:border-blue-500/20 transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-900 rounded-2xl text-slate-500 group-hover:text-blue-400 transition-colors">
                                            {session.device.includes('iPhone') ? <SmartphoneIcon className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <p className="text-[13px] font-black text-white uppercase tracking-tight">{session.device}</p>
                                                {session.current && <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[8px] font-black italic">CURRENT</Badge>}
                                            </div>
                                            <p className="text-[10px] font-bold text-slate-600 mt-0.5 uppercase">
                                                {session.ip} • {session.location} • {session.time}
                                            </p>
                                        </div>
                                    </div>
                                    {!session.current && (
                                        <Button variant="ghost" size="icon" className="text-slate-600 hover:text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all">
                                            <LogOut className="w-4 h-4" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-violet-500 mb-1">Data Visibility</h2>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Personal information propagation</p>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Privacy Level</Label>
                                <Select value={visibility} onValueChange={setVisibility}>
                                    <SelectTrigger className="h-14 bg-slate-950 border-slate-800 rounded-2xl text-slate-200 font-bold focus:ring-1 focus:ring-violet-500/30">
                                        <SelectValue placeholder="Select visibility" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                                        <SelectItem value="public">
                                            <div className="flex items-center gap-2">
                                                <Globe className="w-3.5 h-3.5 opacity-50" />
                                                <span>PUBLIC (Visible to network)</span>
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="internal">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-3.5 h-3.5 opacity-50" />
                                                <span>INTERNAL (Authorized members)</span>
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="private">
                                            <div className="flex items-center gap-2">
                                                <LockIcon className="w-3.5 h-3.5 opacity-50" />
                                                <span>PRIVATE (Encrypted/Hidden)</span>
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="p-6 bg-slate-950/50 border border-slate-800/50 rounded-2xl flex gap-4">
                                <div className="p-2 bg-violet-500/10 rounded-xl text-violet-400 h-fit">
                                    <AlertTriangle className="w-4 h-4" />
                                </div>
                                <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase">
                                    Your profile is currently <span className="text-violet-400">{visibility}</span>.
                                    {visibility === 'public' && " Every operator in the network can see your bio and identity metrics."}
                                    {visibility === 'internal' && " Only members of your specific organization node can view your operational details."}
                                    {visibility === 'private' && " Your profile is hidden from search and organizational registries."}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <ReauthModal
                open={showReauth}
                onOpenChange={setShowReauth}
                onConfirm={handleLogoutAll}
                title="Global Session Revocation"
                description="Terminate all active operational sessions except for the current node. This requires structural authorization."
            />
        </div>
    );
}
