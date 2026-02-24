import Sidebar from '@/components/layout/sidebar';
import TopNav from '@/components/layout/top-nav';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <Sidebar />
            <div className="flex flex-col md:ml-64 lg:ml-72 min-h-screen transition-all duration-300 ease-in-out">
                <TopNav />
                <main className="flex-1 p-6 md:p-8 pt-6 max-w-7xl mx-auto w-full animate-fade-in">
                    {children}
                </main>
            </div>
        </div>
    );
}
