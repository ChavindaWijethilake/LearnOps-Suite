"use client";

import * as React from 'react';
import { useState } from 'react';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

interface SharedLayoutProps {
    children: React.ReactNode;
    navItems: any[];
    appName: string;
    userEmail?: string;
}

export function SharedLayout({
    children,
    navItems,
    appName,
    userEmail = "operator@learnops.local"
}: SharedLayoutProps) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 transition-all duration-300">
            <Navbar
                appName={appName}
                userEmail={userEmail}
                onMenuClick={toggleSidebar}
            />
            <div className="flex flex-1 overflow-hidden relative">
                <Sidebar
                    items={navItems}
                    collapsed={isSidebarCollapsed}
                />
                <main className="flex-1 overflow-y-auto px-6 py-12 transition-all duration-500 animate-slide-up">
                    <div className="max-w-[1440px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
