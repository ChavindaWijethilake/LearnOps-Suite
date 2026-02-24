'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <footer className="w-full border-t border-[#1F2937] p-6 bg-[#0F172A] mt-auto" />;
    }

    return (
        <footer className="w-full border-t border-[#1F2937] p-6 bg-[#0F172A] mt-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#9CA3AF]">
                <div className="flex items-center gap-6">
                    <Link href="/security" className="hover:text-[#E5E7EB] transition-colors">
                        Security Matrix
                    </Link>
                    <Link href="/docs" className="hover:text-[#E5E7EB] transition-colors">
                        Documentation
                    </Link>
                    <Link href="/support" className="hover:text-[#E5E7EB] transition-colors">
                        Support
                    </Link>
                </div>
                <div>
                    &copy; {new Date().getFullYear()} LearnOps Suite. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
