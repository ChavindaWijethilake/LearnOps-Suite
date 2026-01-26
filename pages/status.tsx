import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">Education Portal</span>
          <nav className="flex gap-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-6">System Status</h1>

          <div className="space-y-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-green-700">All Systems Operational</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                All services are currently running normally. Last updated: {new Date().toLocaleString()}
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-medium">Service Request Portal</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-medium">Project Tracker</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-medium">Learning Hub</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-medium">Resource Center</span>
                  <span className="text-green-600">Online</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Recent Incidents</h2>
              <p className="text-gray-700 dark:text-gray-300">
                No recent incidents reported. Our infrastructure is stable and performing as expected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Performance Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/20 rounded-lg">
                  <p className="text-sm text-gray-600">Average Response Time</p>
                  <p className="text-2xl font-bold">45ms</p>
                </div>
                <div className="p-4 bg-white/20 rounded-lg">
                  <p className="text-sm text-gray-600">Uptime</p>
                  <p className="text-2xl font-bold">99.9%</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-12 bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
          {new Date().getFullYear()} Education Portal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
