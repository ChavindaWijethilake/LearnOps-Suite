'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
    User,
    Mail,
    Building2,
    FileText,
    Camera,
    Check,
    RefreshCw,
    AlertCircle,
    Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useSettings } from '../settings-context';

export default function ProfileSettingsPage() {
    const { setIsDirty } = useSettings();
    const [isVerifying, setIsVerifying] = useState(false);
    const [emailVerified, setEmailVerified] = useState(true);

    const [formState, setFormState] = useState({
        name: 'John Doe',
        organization: 'LearnOps University Network',
        email: 'john.doe@learnops.edu',
        bio: 'Primary system overseer for the LearnOps platform. Responsible for infrastructure governance and security protocols.'
    });

    const [initialState] = useState({ ...formState });

    // Track changes
    useEffect(() => {
        const hasChanges = JSON.stringify(formState) !== JSON.stringify(initialState);
        setIsDirty(hasChanges);
    }, [formState, initialState, setIsDirty]);

    const handleChange = (field: string, value: string) => {
        setFormState(prev => ({ ...prev, [field]: value }));
    };

    const triggerVerification = () => {
        setIsVerifying(true);
        setTimeout(() => {
            setIsVerifying(false);
            setEmailVerified(true);
        }, 2000);
    };

    return (
        <div className="space-y-10 animate-fade-in">
            <div className="space-y-2">
                <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">Profile Information</h1>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Operator Identity & Organizational Association</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
                {/* Profile Photo / Meta */}
                <div className="xl:col-span-1 space-y-6">
                    <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[3rem] text-center space-y-6 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative inline-block mt-4">
                            <Avatar className="w-32 h-32 border-4 border-slate-800 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                                <AvatarImage src="/avatars/01.png" />
                                <AvatarFallback className="bg-slate-950 text-slate-300 text-3xl font-black uppercase">JD</AvatarFallback>
                            </Avatar>
                            <button className="absolute bottom-0 right-0 p-3 bg-emerald-500 text-[#0F172A] rounded-2xl shadow-xl hover:bg-emerald-400 transition-all active:scale-95 group/upload">
                                <Camera className="w-5 h-5 group-hover/upload:rotate-12 transition-transform" />
                            </button>
                        </div>

                        <div className="space-y-2 relative">
                            <p className="text-lg font-black text-white uppercase tracking-tight">{formState.name}</p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                                ID: <span className="text-emerald-500/80">OPS-928-DELTA</span>
                            </p>
                            <div className="flex justify-center pt-2">
                                <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] py-0.5 px-3">
                                    SUPER ADMIN
                                </Badge>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-800/50 relative">
                            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-tight text-center">
                                Recommended: 400x400px • Max 2MB
                            </p>
                            <Button variant="ghost" className="w-full mt-4 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white">
                                Remove Picture
                            </Button>
                        </div>
                    </div>

                    <div className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] flex items-center gap-4 group">
                        <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Security Clearance</p>
                            <p className="text-sm font-black text-white uppercase tracking-tight leading-tight">Tier 4 Override</p>
                        </div>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="xl:col-span-3 space-y-8">
                    <div className="p-10 bg-slate-900/50 border border-slate-800/50 rounded-[3rem] space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Operator Name */}
                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Operator Name</Label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-emerald-500 transition-colors" />
                                    <Input
                                        value={formState.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        className="bg-slate-950 border-slate-800 pl-11 h-12 text-slate-200 font-bold focus:ring-1 focus:ring-emerald-500/30 rounded-2xl"
                                    />
                                </div>
                            </div>

                            {/* Organization */}
                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Organization</Label>
                                <div className="relative group">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-emerald-500 transition-colors" />
                                    <Input
                                        value={formState.organization}
                                        onChange={(e) => handleChange('organization', e.target.value)}
                                        className="bg-slate-950 border-slate-800 pl-11 h-12 text-slate-200 font-bold focus:ring-1 focus:ring-emerald-500/30 rounded-2xl"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="space-y-3 md:col-span-2">
                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">System Email Address</Label>
                                <div className="flex gap-4">
                                    <div className="relative flex-1 group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-emerald-500 transition-colors" />
                                        <Input
                                            value={formState.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            className="bg-slate-950 border-slate-800 pl-11 h-12 text-slate-200 font-bold focus:ring-1 focus:ring-emerald-500/30 rounded-2xl"
                                        />
                                        {emailVerified && formState.email === initialState.email ? (
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                                                <Check className="w-3 h-3 text-emerald-500" />
                                                <span className="text-[8px] font-black text-emerald-500 uppercase">Verified</span>
                                            </div>
                                        ) : (
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-md">
                                                <AlertCircle className="w-3 h-3 text-amber-500" />
                                                <span className="text-[8px] font-black text-amber-500 uppercase">Awaiting verification</span>
                                            </div>
                                        )}
                                    </div>
                                    <Button
                                        onClick={triggerVerification}
                                        disabled={isVerifying || (emailVerified && formState.email === initialState.email)}
                                        className="h-12 bg-slate-800/50 hover:bg-slate-800 border-slate-700/50 px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-300 gap-2"
                                    >
                                        {isVerifying ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
                                        Verify Email
                                    </Button>
                                </div>
                            </div>

                            {/* Bio / Description */}
                            <div className="space-y-3 md:col-span-2">
                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Operator Bio / Status Note</Label>
                                <div className="relative group">
                                    <FileText className="absolute left-4 top-5 w-4 h-4 text-slate-600 group-focus-within:text-emerald-500 transition-colors" />
                                    <Textarea
                                        placeholder="Enter status description or operator bio..."
                                        value={formState.bio}
                                        onChange={(e) => handleChange('bio', e.target.value)}
                                        className="bg-slate-950 border-slate-800 pl-11 min-h-[140px] text-slate-200 font-bold focus:ring-1 focus:ring-emerald-500/30 rounded-[2rem] pt-5 leading-relaxed"
                                    />
                                </div>
                                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-tight ml-1 leading-relaxed">
                                    Used for internal incident reporting and operator logs. Max 500 characters.
                                </p>
                            </div>
                        </div>

                        <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-[2.5rem] flex items-center gap-6">
                            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-black text-blue-400 uppercase tracking-tight">Identity Governance</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight leading-relaxed">
                                    Updating your organization or primary name will trigger an audit log entry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
