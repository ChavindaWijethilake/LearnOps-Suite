import type { Metadata } from 'next';
import PortalLayout from '@/components/layout/portal-layout';

export const metadata: Metadata = {
    title: 'Dashboard | LearnOps Suite',
    description: 'Command Center Dashboard',
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PortalLayout>
            {children}
        </PortalLayout>
    );
}
