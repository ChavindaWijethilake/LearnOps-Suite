interface FeatureFlags {
    enableNewDashboard: boolean;
    enableAdvancedAnalytics: boolean;
    enableEmailNotifications: boolean;
    enablePaymentGateway: boolean;
    maintenanceMode: boolean;
}

const defaultFlags: FeatureFlags = {
    enableNewDashboard: true,
    enableAdvancedAnalytics: process.env.NODE_ENV === 'production',
    enableEmailNotifications: false,
    enablePaymentGateway: false,
    maintenanceMode: process.env.MAINTENANCE_MODE === 'true',
};

export const featureFlags = {
    all() {
        return { ...defaultFlags };
    },
    get(flag: keyof FeatureFlags): boolean {
        return defaultFlags[flag];
    }
};
