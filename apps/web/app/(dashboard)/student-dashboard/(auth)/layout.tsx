import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-muted/50 p-4">
            <Link href="/" className="mb-8 flex items-center gap-2 font-semibold text-lg">
                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                    <GraduationCap className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold text-primary">EduPortal</span>
            </Link>
            <div className="w-full max-w-md space-y-4">
                {children}
            </div>
        </div>
    );
}
