import { ReactNode } from 'react';
import TopNav from './top-nav';
import Sidebar from './sidebar';
import Footer from './footer';

interface PortalLayoutProps {
    children: ReactNode;
}

const PortalLayout = ({ children }: PortalLayoutProps) => {
    return (
        <div className="min-h-screen bg-[#0F172A] text-[#E5E7EB]">
            <TopNav />
            <Sidebar />
            <main className="ml-64 pt-16 min-h-screen flex flex-col">
                <div className="flex-1 p-8">
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default PortalLayout;
