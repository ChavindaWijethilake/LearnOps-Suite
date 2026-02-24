'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { Role } from '@learnops/shared';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { PasswordInput } from '@/components/ui/password-input';
import { RoleSelector } from './role-selector';
import { useAuth } from './auth-provider';

const loginSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(1, { message: 'Password is required.' }),
    rememberMe: z.boolean().default(false),
});

interface LoginFormProps {
    allowedRoles?: Role[];
}

export function LoginForm({ allowedRoles }: LoginFormProps) {
    const router = useRouter();
    const { login } = useAuth();
    // Default to the first allowed role if provided, otherwise 'student'
    const [role, setRole] = useState<Role>(allowedRoles ? allowedRoles[0] : Role.STUDENT);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        setIsLoading(true);
        setError(null);

        try {
            await login({ ...values, role });
        } catch (err: any) {
            setError(err.message || 'Failed to login');
            setIsLoading(false);
        }
    }

    if (!mounted) {
        return <div className="w-full max-w-[400px] glass-panel rounded-3xl p-8 shadow-2xl relative z-10" />;
    }

    return (
        <div className="w-full max-w-[400px] glass-panel rounded-3xl p-8 shadow-2xl animate-fade-in relative z-10">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20 mb-4 transition-transform duration-500 hover:scale-105">
                    <div className="text-white font-bold text-2xl">L</div>
                </div>
                <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Welcome Back
                </h1>
                <p className="text-slate-400 text-xs font-normal">
                    Sign in to your LearnOps account
                </p>
            </div>

            <RoleSelector selectedRole={role} onSelect={setRole} allowedRoles={allowedRoles} />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-slate-300 text-xs font-semibold pl-1">Email Address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={role === Role.STUDENT ? 'student@university.edu' : 'professor@university.edu'}
                                        {...field}
                                        className="bg-slate-900/40 border-slate-700/50 h-11 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all text-sm"
                                    />
                                </FormControl>
                                <FormMessage className="text-rose-400 font-medium text-[11px]" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center justify-between mb-1 pl-1">
                                    <FormLabel className="text-slate-300 text-xs font-semibold">Password</FormLabel>
                                    <a href="#" className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors">
                                        Forgot Password?
                                    </a>
                                </div>
                                <FormControl>
                                    <PasswordInput
                                        {...field}
                                        showStrength={role === Role.ADMIN || role === Role.PROFESSOR}
                                        className="bg-slate-900/40 border-slate-700/50 h-11 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all text-sm"
                                    />
                                </FormControl>
                                <FormMessage className="text-rose-400 font-medium text-[11px]" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-3 space-y-0 py-1">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="border-slate-700 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-xs text-slate-400 font-normal cursor-pointer hover:text-slate-300 transition-colors">
                                        Keep me signed in
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />

                    {error && (
                        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-bold text-center uppercase tracking-wider animate-in fade-in slide-in-from-top-1">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white h-12 font-semibold rounded-xl shadow-lg transition-all duration-300 active:scale-[0.98] text-sm"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </Button>

                    <p className="text-center text-[9px] font-bold text-slate-500 uppercase tracking-widest pt-4 border-t border-slate-800/50">
                        System Policy: <a href="#" className="text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Privacy</a> & <a href="#" className="text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Terms</a>
                    </p>
                </form>
            </Form>
        </div>
    );
}
