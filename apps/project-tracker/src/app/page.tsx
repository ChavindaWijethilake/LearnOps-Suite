'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, CheckCircle, Calendar } from 'lucide-react';
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-purple-600" />
            <span className="text-xl font-bold text-purple-700">Project Tracker</span>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition">
              Home
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-gray-900 transition">
              Features
            </Link>
          </nav>
          <div className="flex gap-3">
            {isLoggedIn ? (
              <>
                <Link href="/app">
                  <GlassButton appColor="purple">Dashboard</GlassButton>
                </Link>
                <Link href="/api/auth/logout">
                  <GlassButton variant="outline" appColor="purple">
                    Logout
                  </GlassButton>
                </Link>
              </>
            ) : (
              <Link href="/login">
                <GlassButton appColor="purple">
                  Sign In <ArrowRight className="w-4 h-4" />
                </GlassButton>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
            Project Tracker
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Manage projects, organize tasks, and track progress with an intuitive kanban-style board
          </p>
          {!isLoggedIn && (
            <Link href="/login">
              <GlassButton size="lg" appColor="purple">
                Get Started <ArrowRight className="w-5 h-5" />
              </GlassButton>
            </Link>
          )}
        </div>

        {/* Features Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-purple-400/50 transition">
            <Layers className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Project Management</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Create and manage multiple projects with detailed descriptions and status tracking
            </p>
          </div>

          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-purple-400/50 transition">
            <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Task Organization</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Break down projects into tasks and organize them across To Do, In Progress, and Done columns
            </p>
          </div>

          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-purple-400/50 transition">
            <Calendar className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Drag and drop tasks between columns to update status and track project completion
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
