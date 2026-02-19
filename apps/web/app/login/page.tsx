import { LoginForm } from '@/components/auth/login-form';
import { LoginBackground } from '@/components/auth/login-background';
import Link from 'next/link';
import { Headphones } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-6 bg-[#0F172A]">
            <LoginBackground />

            {/* Top Bar - Minimalist */}
            <div className="absolute top-0 left-0 right-0 h-20 px-10 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-3 animate-fade-in pointer-events-auto">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <span className="font-bold text-white text-xl">L</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-white tracking-tight leading-none mb-1">LearnOps</h1>
                        <p className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.1em] leading-none">Management Suite</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 animate-fade-in pointer-events-auto">
                    <Link href="/support/request" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">
                        <Headphones className="w-4 h-4" />
                        System Support
                    </Link>
                </div>
            </div>

            {/* Main Center Form */}
            <main className="relative z-10 w-full flex items-center justify-center py-20">
                <LoginForm allowedRoles={['student', 'professor']} />
            </main>


            {/* Decorative Side Elements */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-20 z-10 hidden xl:flex animate-fade-in">
                <div className="w-px h-64 bg-gradient-to-b from-transparent via-slate-800 to-transparent" />
                <div className="[writing-mode:vertical-lr] text-[10px] font-medium text-slate-500 uppercase tracking-[0.3em] rotate-180">
                    LearnOps Integrated Systems
                </div>
            </div>

            <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-20 z-10 hidden xl:flex animate-fade-in">
                <div className="[writing-mode:vertical-lr] text-[10px] font-medium text-slate-500 uppercase tracking-[0.3em]">
                    Enterprise Portal Interface
                </div>
                <div className="w-px h-64 bg-gradient-to-t from-transparent via-slate-800 to-transparent" />
            </div>
        </div>
    );
}
