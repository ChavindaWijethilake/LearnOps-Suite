import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | LearnOps Suite',
    description: 'Secure access to the specialized portal.',
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full bg-white flex flex-col">
            {children}
        </div>
    );
}
