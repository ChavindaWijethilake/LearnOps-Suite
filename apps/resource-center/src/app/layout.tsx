import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Resource Center',
  description: 'Browse and manage educational resources',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-slate-950 dark:to-slate-900">
        {children}
      </body>
    </html>
  );
}
