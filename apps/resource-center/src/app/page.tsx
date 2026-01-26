'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Library, Bookmark, Filter } from 'lucide-react';
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Library className="w-6 h-6 text-amber-600" />
            <span className="text-xl font-bold text-amber-700">Resource Center</span>
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
                  <GlassButton appColor="amber">Dashboard</GlassButton>
                </Link>
                <Link href="/api/auth/logout">
                  <GlassButton variant="outline" appColor="amber">
                    Logout
                  </GlassButton>
                </Link>
              </>
            ) : (
              <Link href="/login">
                <GlassButton appColor="amber">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-900 bg-clip-text text-transparent">
            Resource Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Access a comprehensive collection of educational resources, documents, and learning materials organized by category and tags
          </p>
          {!isLoggedIn && (
            <Link href="/login">
              <GlassButton size="lg" appColor="amber">
                Get Started <ArrowRight className="w-5 h-5" />
              </GlassButton>
            </Link>
          )}
        </div>

        {/* Features Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-amber-400/50 transition">
            <Library className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Rich Content Library</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Access a diverse collection of resources including documents, links, and multimedia materials
            </p>
          </div>

          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-amber-400/50 transition">
            <Filter className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Smart Filtering</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Find resources easily with powerful search, category filtering, and tag-based organization
            </p>
          </div>

          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-amber-400/50 transition">
            <Bookmark className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Bookmark Resources</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Save your favorite resources for quick access and personalized learning collections
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
