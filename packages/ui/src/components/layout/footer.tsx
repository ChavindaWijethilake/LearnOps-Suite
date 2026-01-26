import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border-t border-white/20 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <nav className="space-y-2">
              <Link href="/app" className="text-sm hover:text-gray-700 transition">
                Dashboard
              </Link>
              <Link href="/app/resources" className="text-sm hover:text-gray-700 transition">
                Resources
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <nav className="space-y-2">
              <Link href="/about" className="text-sm hover:text-gray-700 transition">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-gray-700 transition">
                Contact
              </Link>
              <Link href="/status" className="text-sm hover:text-gray-700 transition">
                Status
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <nav className="space-y-2">
              <Link href="/privacy" className="text-sm hover:text-gray-700 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-gray-700 transition">
                Terms of Service
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600">support@eduportal.com</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            {new Date().getFullYear()} Education Portal. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">Modern Learning Platform</p>
        </div>
      </div>
    </footer>
  );
}
