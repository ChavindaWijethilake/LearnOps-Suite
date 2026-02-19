'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface SettingsContextType {
    isDirty: boolean;
    setIsDirty: (dirty: boolean) => void;
    saveChanges: () => Promise<void>;
    resetChanges: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [isDirty, setIsDirty] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const saveChanges = useCallback(async () => {
        setIsSaving(true);
        // Simulate network latency & audit logging
        console.log("INITIATING CONFIGURATION SYNC...");
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsDirty(false);
        setIsSaving(false);
        console.log("CONFIGURATION PERSISTED SUCCESSFULLY. Audit log entry: SETTINGS_SYNC_SUCCESS");
    }, []);

    const resetChanges = useCallback(() => {
        console.log("REVERTING TO LAST KNOWN PERSISTED STATE...");
        setIsDirty(false);
        // In a real app, this would re-fetch or reset local store
        window.location.reload();
    }, []);

    return (
        <SettingsContext.Provider value={{ isDirty, setIsDirty, saveChanges, resetChanges }}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
}
