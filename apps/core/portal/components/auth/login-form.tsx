'use client';

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
    const { login, user, isLoading: authLoading } = useAuth();
    // Default to the first allowed role if provided, otherwise 'student'
    const [role, setRole] = useState<Role>(allowedRoles ? allowedRoles[0] : Role.STUDENT);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!authLoading && user && mounted) {
            if (user.role.toUpperCase() === 'ADMIN' || user.role.toUpperCase() === 'SUPER_ADMIN') {
                router.push('/admin');
            } else {
                router.push('/');
            }
        }
    }, [user, authLoading, router, mounted]);

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
        return <div className="w-full max-w-[420px] bg-white border border-gray-200 rounded-2xl p-8 shadow-lg h-[400px]" />;
    }

    return (
        <div className="w-full max-w-[420px] bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                <p className="text-gray-600 text-sm">Sign in to continue to your account</p>
            </div>

            <RoleSelector selectedRole={role} onSelect={setRole} allowedRoles={allowedRoles} />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={role === Role.STUDENT ? 'student@university.edu' : 'admin@learnops.com'}
                                        {...field}
                                        className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400"
                                    />
                                </FormControl>
                                <FormMessage className="text-red-600" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center justify-between mb-1.5">
                                    <FormLabel className="text-gray-700 font-medium">Password</FormLabel>
                                    <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                                        Forgot password?
                                    </a>
                                </div>
                                <FormControl>
                                    <PasswordInput
                                        {...field}
                                        showStrength={role === Role.ADMIN || role === Role.PROFESSOR}
                                        className="bg-gray-50 border-gray-300 text-gray-900"
                                    />
                                </FormControl>
                                <FormMessage className="text-red-600" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="border-gray-300"
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-sm text-gray-600 font-normal cursor-pointer">
                                        Remember me for 30 days
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />

                    {error && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 font-medium"
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

                    <p className="text-center text-xs text-gray-500 pt-2">
                        By signing in, you agree to our{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-700">Terms</a>
                        {' '}and{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
                    </p>
                </form>
            </Form>
        </div>
    );
}
