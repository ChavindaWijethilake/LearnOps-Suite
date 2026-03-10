import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PortalLayout from '@/components/layout/portal-layout';
import { AuthProvider } from '@/components/auth/auth-provider';
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
    <html lang="en" data-app="portal" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
