import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200/60 py-16 mt-auto">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                L
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">LearnOps Suite</span>
            </div>
            <p className="text-base text-gray-500 leading-relaxed max-w-sm">
              A learning-focused, realistic enterprise-style digital services suite designed for modern, data-driven organizations.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/5 hover:scale-110 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/5 hover:scale-110 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/5 hover:scale-110 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Resources</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                About Us
              </Link>
              <Link href="/help" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                Help Center
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                Contact
              </Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Legal</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/privacy" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                Security
              </Link>
            </nav>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium">
              Get the latest updates on new features and resources.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button className="px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-400">
              &copy; {currentYear} LearnOps Suite.
            </p>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden md:block" />
            <p className="text-sm font-medium text-gray-400">
              Built with precision.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider">System Status: Optimal</span>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 bg-gray-50 text-gray-400 rounded-lg border border-gray-200/50 uppercase tracking-wider">v1.2.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
