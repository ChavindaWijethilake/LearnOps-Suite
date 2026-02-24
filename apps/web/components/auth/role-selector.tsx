'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { User, Shield, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Role } from '@learnops/shared';

interface RoleSelectorProps {
    selectedRole: Role;
    onSelect: (role: Role) => void;
    allowedRoles?: Role[];
}

export function RoleSelector({ selectedRole, onSelect, allowedRoles }: RoleSelectorProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const allRoles: { id: Role; label: string; icon: React.ElementType }[] = [
        { id: Role.STUDENT, label: 'Student', icon: User },
        { id: Role.PROFESSOR, label: 'Professor', icon: GraduationCap },
        { id: Role.ADMIN, label: 'Admin', icon: Shield },
    ];

    const roles = allowedRoles
        ? allRoles.filter(role => allowedRoles.includes(role.id))
        : allRoles;

    if (!mounted) {
        return <div className="grid grid-cols-2 gap-3 mb-6 h-[100px]" />;
    }

    return (
        <div className="grid grid-cols-2 gap-3 mb-6">
            {roles.map((role) => {
                const isSelected = selectedRole === role.id;
                const Icon = role.icon;

                return (
                    <button
                        key={role.id}
                        onClick={() => onSelect(role.id)}
                        type="button"
                        className={cn(
                            "relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all duration-300 group overflow-hidden",
                            isSelected
                                ? "bg-blue-500/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                                : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                        )}
                    >
                        {/* Status Indicator */}
                        {isSelected && (
                            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                        )}

                        <div className={cn(
                            "p-2 rounded-lg transition-all duration-300",
                            isSelected
                                ? "bg-blue-600 text-white"
                                : "bg-slate-800 text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-700"
                        )}>
                            <Icon className="w-5 h-5" />
                        </div>

                        <div className="text-center">
                            <span className={cn(
                                "block text-xs font-bold tracking-tight transition-colors",
                                isSelected ? "text-slate-50" : "text-slate-400 group-hover:text-slate-200"
                            )}>
                                {role.label}
                            </span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
