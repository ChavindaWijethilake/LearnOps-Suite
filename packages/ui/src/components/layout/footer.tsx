import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-900 border-t-2 border-slate-900">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Footer Content */}
        <div className="px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <span className="font-black text-3xl">Lo</span>
                </div>
                <div>
                  <div className="font-black text-4xl tracking-tighter text-slate-900 leading-none">LearnOps</div>
                  <div className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mt-2">Suite</div>
                </div>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed font-bold max-w-sm">
                Industrial-grade education management for modern institutions. Built for scale, designed for precision.
              </p>

              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Github, label: 'GitHub' }
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="h-11 w-11 border-2 border-slate-900 bg-white flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="space-y-8">
                <h3 className="font-black text-xs uppercase tracking-[0.3em] text-slate-900">Product</h3>
                <ul className="space-y-4">
                  {['Features', 'Security', 'Enterprise', 'Pricing'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="font-black text-xs uppercase tracking-[0.3em] text-slate-900">Company</h3>
                <ul className="space-y-4">
                  {['About', 'Careers', 'Contact', 'Blog'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="font-black text-xs uppercase tracking-[0.3em] text-slate-900">Resources</h3>
                <ul className="space-y-4">
                  {['Documentation', 'API Reference', 'Support', 'Community'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="font-black text-xs uppercase tracking-[0.3em] text-slate-900">Legal</h3>
                <ul className="space-y-4">
                  {['Privacy', 'Terms', 'Status', 'Cookies'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-slate-900">
          <div className="px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-8 bg-white">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              © {currentYear} LearnOps Inc. All rights reserved.
            </div>

            <div className="flex items-center gap-8">
              <div className="bg-slate-50 border-2 border-slate-900 px-6 py-3 flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]">
                <span className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-900">Systems Normal</span>
              </div>

              <div className="flex items-center gap-6">
                <Link href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors">Status</Link>
                <Link href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors">Changelog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
