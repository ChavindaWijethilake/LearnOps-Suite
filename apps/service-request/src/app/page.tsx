'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { GlassButton } from '@edu/ui';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        setIsLoggedIn(response.ok);
      } catch (e) {
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-700">Service Request</span>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <Link href="/app">
                  <GlassButton appColor="blue" size="md">
                    Dashboard
                  </GlassButton>
                </Link>
                <button
                  onClick={() => {
                    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
                    setIsLoggedIn(false);
                  }}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <GlassButton appColor="blue" size="md">
                  Login
                </GlassButton>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Service Request Portal
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Submit, track, and manage your service requests efficiently. Get real-time updates and quick resolutions.
            </p>
            <div className="flex gap-4">
              {isLoggedIn ? (
                <Link href="/app">
                  <GlassButton appColor="blue" size="lg">
                    Go to Dashboard <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </GlassButton>
                </Link>
              ) : (
                <Link href="/login">
                  <GlassButton appColor="blue" size="lg">
                    Get Started <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </GlassButton>
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <AlertCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Submit Requests</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Quickly submit service requests with detailed information.</p>
            </div>

            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Track Progress</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monitor your requests in real-time with status updates.</p>
            </div>

            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Get Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Receive assistance and communicate with support team.</p>
            </div>

            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <AlertCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Fast Resolution</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Prioritized support for urgent requests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 dark:text-gray-400">Service Request Portal - Your feedback matters</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-gray-700 hover:text-gray-900 transition text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-700 hover:text-gray-900 transition text-sm">
                Terms
              </Link>
              <Link href="/status" className="text-gray-700 hover:text-gray-900 transition text-sm">
                Status
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
