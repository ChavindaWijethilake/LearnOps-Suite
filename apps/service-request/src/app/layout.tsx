import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Service Request Portal',
  description: 'Submit and track service requests',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-950 dark:to-slate-900">
        {children}
      </body>
    </html>
  );
}
