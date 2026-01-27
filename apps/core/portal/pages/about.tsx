import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">Education Portal</span>
          <nav className="flex gap-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/status" className="text-gray-700 hover:text-gray-900">
              Status
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-6">About Education Portal</h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Education Portal is a modern learning platform designed to facilitate seamless collaboration and learning management. Our platform combines cutting-edge technology with an intuitive user experience to support educational institutions and individual learners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Our Mission</h2>
            <p>
              To empower learners and educators by providing accessible, user-friendly tools for managing courses, projects, resources, and service requests in a modern, glass-morphism designed interface.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service Request Portal - Submit and track service requests</li>
              <li>Project Tracker - Manage projects and tasks efficiently</li>
              <li>Learning Hub - Access courses and educational content</li>
              <li>Resource Center - Discover and organize learning resources</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Technology</h2>
            <p>
              Built with Next.js, React, and modern web technologies, our platform features a beautiful glass-morphism design with smooth animations and responsive layouts.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              For more information, please contact us at support@eduportal.com
            </p>
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
