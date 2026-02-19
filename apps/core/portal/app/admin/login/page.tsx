import { LoginForm } from '@/components/auth/login-form';
import Link from 'next/link';

export default function AdminLoginPage() {
    return (
        <>
            {/* Header */}
            <header className="w-full border-b border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">LearnOps Admin</h1>
                            <p className="text-xs text-gray-500">System Administration</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6 bg-slate-50">
                <div className="w-full max-w-[420px]">
                    <div className="mb-6 text-center">
                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium border border-slate-200 mb-4">
                            Authorized Personnel Only
                        </span>
                    </div>
                    <LoginForm allowedRoles={['admin']} />
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="text-center text-sm text-gray-500">
                        <p className="mb-2">Admin access is monitored and logged.</p>
                        <p>© 2026 LearnOps Suite. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
