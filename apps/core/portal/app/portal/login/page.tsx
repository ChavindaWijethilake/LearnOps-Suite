import { LoginForm } from '@/components/auth/login-form';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <>
            {/* Header */}
            <header className="w-full border-b border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">LearnOps Suite</h1>
                            <p className="text-xs text-gray-500">Command Center Portal</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600">
                        Need help? <Link href="/support/request" className="text-blue-600 hover:text-blue-700 font-medium">Contact Support</Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6">
                <LoginForm allowedRoles={['student', 'professor']} />
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-sm text-gray-600">
                            © 2026 LearnOps Suite. All rights reserved.
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
