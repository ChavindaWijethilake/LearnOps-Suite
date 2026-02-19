'use client';

import React from 'react';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface StrengthMeterProps {
    password: string;
}

export function SecurityStrengthMeter({ password }: StrengthMeterProps) {
    const calculateStrength = (pass: string) => {
        let strength = 0;
        if (pass.length > 8) strength += 25;
        if (/[A-Z]/.test(pass)) strength += 25;
        if (/[0-9]/.test(pass)) strength += 25;
        if (/[^A-Za-z0-9]/.test(pass)) strength += 25;
        return strength;
    };

    const strength = calculateStrength(password);

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {strength < 50 ? (
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
                    ) : strength < 100 ? (
                        <Shield className="w-3.5 h-3.5 text-amber-500" />
                    ) : (
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    )}
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                        Password Strength:
                        <span className={cn(
                            "ml-2",
                            strength < 50 ? "text-rose-500" : strength < 100 ? "text-amber-500" : "text-emerald-500"
                        )}>
                            {strength < 25 ? "Vulnerable" : strength < 50 ? "Weak" : strength < 75 ? "Moderate" : strength < 100 ? "Strong" : "Secure"}
                        </span>
                    </span>
                </div>
                <span className="text-[10px] font-black text-slate-600">{strength}%</span>
            </div>
            <Progress
                value={strength}
                className="h-1 bg-slate-800"
                indicatorClassName={cn(
                    "transition-all duration-500",
                    strength < 50 ? "bg-rose-500" : strength < 100 ? "bg-amber-500" : "bg-emerald-500"
                )}
            />
        </div>
    );
}
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { KeyRound, Lock, Zap } from 'lucide-react';

interface ReauthModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    title: string;
    description: string;
}

export function ReauthModal({ open, onOpenChange, onConfirm, title, description }: ReauthModalProps) {
    const [password, setPassword] = React.useState('');
    const [isVerifying, setIsVerifying] = React.useState(false);

    const handleConfirm = async () => {
        setIsVerifying(true);
        // Simulate re-auth
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsVerifying(false);
        onConfirm();
        onOpenChange(false);
        setPassword('');
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-slate-900 border-slate-800 rounded-[2rem] max-w-md">
                <DialogHeader className="space-y-4">
                    <div className="mx-auto p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 w-fit">
                        <KeyRound className="w-8 h-8" />
                    </div>
                    <div className="text-center space-y-2">
                        <DialogTitle className="text-xl font-black text-white uppercase tracking-tight">{title}</DialogTitle>
                        <DialogDescription className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            {description}
                        </DialogDescription>
                    </div>
                </DialogHeader>

                <div className="py-6 space-y-4">
                    <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Confirm Identity Password</Label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-emerald-500 transition-colors" />
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="bg-slate-950 border-slate-800 pl-11 h-14 text-slate-200 font-bold focus:ring-1 focus:ring-emerald-500/30 rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="ghost"
                        onClick={() => onOpenChange(false)}
                        className="flex-1 text-slate-400 hover:text-white hover:bg-slate-800/50 text-[10px] font-black uppercase tracking-widest h-12 rounded-2xl"
                    >
                        Abort
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        disabled={!password || isVerifying}
                        className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] text-[10px] font-black uppercase tracking-widest h-12 rounded-2xl gap-2"
                    >
                        {isVerifying ? <Zap className="w-3.5 h-3.5 animate-spin" /> : "Authorize Operation"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
