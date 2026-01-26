import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project Tracker',
  description: 'Manage projects and tasks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-950 dark:to-slate-900">
        {children}
      </body>
    </html>
  );
}
