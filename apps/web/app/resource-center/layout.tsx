'use client';

export default function ResourceCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {children}
    </div>
  );
}
