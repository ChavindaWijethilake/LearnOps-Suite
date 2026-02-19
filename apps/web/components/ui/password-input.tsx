'use client';

import * as React from 'react';
import { Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    showStrength?: boolean;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, showStrength = false, onChange, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
        const [capsLockActive, setCapsLockActive] = React.useState(false);
        const [strength, setStrength] = React.useState(0);

        const checkCapsLock = (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.getModifierState('CapsLock')) {
                setCapsLockActive(true);
            } else {
                setCapsLockActive(false);
            }
        };

        const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            if (showStrength) {
                let score = 0;
                if (val.length > 8) score += 25;
                if (/[A-Z]/.test(val)) score += 25;
                if (/[0-9]/.test(val)) score += 25;
                if (/[^A-Za-z0-9]/.test(val)) score += 25;
                setStrength(score);
            }
            if (onChange) onChange(e);
        };

        return (
            <div className="relative space-y-2">
                <div className="relative">
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        className={cn("pr-10 bg-[#020617] border-[#1F2937] focus-visible:ring-[#2563EB]", className)}
                        ref={ref}
                        onKeyDown={checkCapsLock}
                        onChange={handlePasswordChange}
                        {...props}
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4" aria-hidden="true" />
                        ) : (
                            <Eye className="h-4 w-4" aria-hidden="true" />
                        )}
                        <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                    </button>
                </div>

                {capsLockActive && (
                    <div className="flex items-center gap-2 text-[#EF4444] text-xs font-medium animate-pulse">
                        <AlertTriangle className="h-3 w-3" />
                        <span>Caps Lock is on</span>
                    </div>
                )}

                {showStrength && props.value && (props.value as string).length > 0 && (
                    <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                            <span>Security Strength</span>
                            <span className={cn(
                                strength < 50 ? "text-red-500" : strength < 75 ? "text-yellow-500" : "text-emerald-500"
                            )}>
                                {strength < 50 ? "Weak" : strength < 75 ? "Medium" : "Strong"}
                            </span>
                        </div>
                        <div className="h-1 w-full bg-[#1F2937] rounded-full overflow-hidden">
                            <div
                                className={cn(
                                    "h-full transition-all duration-300",
                                    strength < 50 ? "bg-red-500" : strength < 75 ? "bg-yellow-500" : "bg-emerald-500"
                                )}
                                style={{ width: `${strength}%` }}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
);
PasswordInput.displayName = "PasswordInput";
