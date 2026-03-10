'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    getSession,
    createSession as createPlatformSession,
    logout as logoutPlatform,
    User,
    hasPermission,
    Resource,
    Action
} from '@learnops/platform';

type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    login: (values: any) => Promise<void>;
    logout: () => Promise<void>;
    can: (resource: Resource, action: Action) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Load session from platform (localStorage)
        const session = getSession();
        if (session) {
            setUser(session.user);
        }
        setIsLoading(false);
    }, []);

    const login = async (values: any) => {
        // Still call the API for server-side validation/JWT set
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Login failed');
        }

        // Bridge to Platform: Create session in platform's store (localStorage)
        createPlatformSession(data.user.email, data.user.role);

        // Refresh local state
        const session = getSession();
        if (session) setUser(session.user);

        router.refresh();

        // Role-based redirection
        if (data.user.role === 'admin' || data.user.role === 'super-admin') {
            router.push('/admin');
        } else {
            router.push('/');
        }
    };

    const logout = async () => {
        // Logout from Platform
        logoutPlatform();

        // Logout from Server (clear cookies)
        await fetch('/api/auth/logout', { method: 'POST' });

        setUser(null);
        router.push('/portal/login');
        router.refresh();
    };

    const can = (resource: Resource, action: Action) => {
        if (!user) return false;
        return hasPermission(resource, action);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout, can }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
