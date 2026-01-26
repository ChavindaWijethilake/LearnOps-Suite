import Link from 'next/link';

export default function ContactPage() {
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
            <Link href="/status" className="text-gray-700 hover:text-gray-900">
              Status
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We would love to hear from you. Whether you have questions, feedback, or need support, please reach out to us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="mailto:support@eduportal.com" className="text-blue-600 hover:text-blue-700">
                    support@eduportal.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Available Monday through Friday, 9 AM to 5 PM UTC
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Feedback</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Help us improve by sharing your feedback and suggestions
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-blue-600 hover:text-blue-700">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
