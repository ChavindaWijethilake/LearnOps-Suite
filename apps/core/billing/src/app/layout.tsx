import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar, Sidebar, Footer } from '@learnops/ui';
import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  Settings,
  CreditCard,
  ArrowRightLeft,
  Wallet,
  PieChart,
  GraduationCap
} from 'lucide-react';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnOps Suite | Billing Nexus',
  description: 'Enterprise financial orchestration and intelligence',
};

const navItems = [
  { href: '/', label: 'Nexus Dashboard', icon: <LayoutDashboard className="w-4 h-4" />, active: true },
  { href: '/invoices', label: 'Invoices', icon: <FileText className="w-4 h-4" /> },
  { href: '/customers', label: 'Customers', icon: <Users className="w-4 h-4" /> },
  { href: '/payments', label: 'Payments', icon: <Wallet className="w-4 h-4" /> },
  { href: '/disbursements', label: 'Disbursements', icon: <ArrowRightLeft className="w-4 h-4" /> },
  { href: '/scholarships', label: 'Scholarships', icon: <GraduationCap className="w-4 h-4" /> },
  { href: '/reports', label: 'Intelligence', icon: <PieChart className="w-4 h-4" /> },
  { href: '/settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-app="billing">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50/50 selection:bg-emerald-500/10 selection:text-emerald-600`}>
        <Navbar
          appName="Billing Nexus"
          appLogo={<CreditCard className="w-6 h-6 text-white" />}
          userEmail="admin@learnops.local"
        />
        <div className="flex-1 flex max-w-[1600px] mx-auto w-full">
          <Sidebar items={navItems} />
          <main className="flex-1 p-8 md:p-12">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
