import Link from 'next/link';

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">1. Introduction</h2>
              <p>
                Education Portal is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">2. Information We Collect</h2>
              <p>We collect information you provide directly, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Email address and name</li>
                <li>Account information</li>
                <li>Requests and communications</li>
                <li>Device and usage information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide and improve our services</li>
                <li>Send account-related notifications</li>
                <li>Respond to your inquiries</li>
                <li>Analyze usage patterns and trends</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">5. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at support@eduportal.com
              </p>
            </section>

            <p className="text-sm text-gray-600 dark:text-gray-400 pt-6 border-t border-white/20">
              Last updated: {new Date().toLocaleDateString()}
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
