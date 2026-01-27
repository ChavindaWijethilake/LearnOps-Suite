import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar, Footer } from '@learnops/ui';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnOps Suite | Portal',
  description: 'Unified enterprise digital services suite',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-app="portal">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50/50`}>
        <Navbar
          appName="LearnOps Portal"
          showBackToPortal={false}
          userEmail="admin@learnops.local"
        />
        <main className="flex-1 max-w-[1600px] mx-auto w-full px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
