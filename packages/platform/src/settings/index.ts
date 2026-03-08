// LearnOps Platform — Settings Module
// Centralized platform settings and configuration

"use client";

export interface PlatformSettings {
    siteName: string;
    defaultRole: string;
    sessionDurationMs: number;
    maxNotifications: number;
    maintenanceMode: boolean;
    features: Record<string, boolean>;
}

const DEFAULT_SETTINGS: PlatformSettings = {
    siteName: "LearnOps Suite",
    defaultRole: "STUDENT",
    sessionDurationMs: 24 * 60 * 60 * 1000, // 24 hours
    maxNotifications: 50,
    maintenanceMode: false,
    features: {
        billing: true,
        serviceManagement: true,
        analytics: true,
        learningHub: true,
        resourceCenter: true,
        projectTracker: true,
    },
};

class SettingsManager {
    private storageKey = "learnops_settings";

    get(): PlatformSettings {
        if (typeof window === "undefined") return { ...DEFAULT_SETTINGS };

        const stored = localStorage.getItem(this.storageKey);
        if (!stored) return { ...DEFAULT_SETTINGS };

        try {
            return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
        } catch {
            return { ...DEFAULT_SETTINGS };
        }
    }

    update(updates: Partial<PlatformSettings>): PlatformSettings {
        const current = this.get();
        const updated = { ...current, ...updates };

        if (typeof window !== "undefined") {
            localStorage.setItem(this.storageKey, JSON.stringify(updated));
        }

        return updated;
    }

    /** Check if a feature flag is enabled */
    isFeatureEnabled(feature: string): boolean {
        const settings = this.get();
        return settings.features[feature] ?? false;
    }

    /** Toggle a feature flag */
    toggleFeature(feature: string): boolean {
        const settings = this.get();
        settings.features[feature] = !settings.features[feature];
        this.update(settings);
        return settings.features[feature];
    }

    /** Reset to defaults */
    reset(): PlatformSettings {
        if (typeof window !== "undefined") {
            localStorage.removeItem(this.storageKey);
        }
        return { ...DEFAULT_SETTINGS };
    }
}

export const settings = new SettingsManager();
