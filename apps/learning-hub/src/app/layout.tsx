import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Learning Hub',
  description: 'Learn and enroll in courses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-slate-950 dark:to-slate-900">
        {children}
      </body>
    </html>
  );
}
