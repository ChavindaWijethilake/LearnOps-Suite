'use client';

import { User, Shield, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Role } from '@learnops/shared';

interface RoleSelectorProps {
    selectedRole: Role;
    onSelect: (role: Role) => void;
}

export function RoleSelector({ selectedRole, onSelect }: RoleSelectorProps) {
    const roles: { id: Role; label: string; icon: React.ElementType }[] = [
        { id: 'student', label: 'Student', icon: User },
        { id: 'professor', label: 'Professor', icon: GraduationCap },
        { id: 'admin', label: 'Admin', icon: Shield },
    ];

    return (
        <div className="w-full bg-gray-100 p-1 rounded-xl border border-gray-200 flex gap-1 mb-6">
            {roles.map((role) => {
                const isSelected = selectedRole === role.id;
                const Icon = role.icon;

                return (
                    <button
                        key={role.id}
                        onClick={() => onSelect(role.id)}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                            isSelected
                                ? "bg-blue-600 text-white shadow-md"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        )}
                        type="button"
                    >
                        <Icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{role.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
