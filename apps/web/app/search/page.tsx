'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/resource-center/search');
    }, [router]);

    return (
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-slate-400 font-medium tracking-tight">Accessing Advanced Search Hub...</p>
            </div>
        </div>
    );
}
