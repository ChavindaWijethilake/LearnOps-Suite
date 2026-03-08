import React from 'react';

// Simulated dashboard hooks
export function useDashboardStats() {
    return {
        revenue: 45200,
        activeStudents: 1204,
        openTickets: 12,
        loading: false
    };
}

export function StatCard({ title, value, trend }: { title: string; value: string | number; trend?: string }) {
    return (
        <div className="bg-slate-800 p-6 shadow-md border border-slate-700">
            <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-emerald-400">{value}</span>
                {trend && <span className="text-sm font-medium text-emerald-500">{trend}</span>}
            </div>
        </div>
    );
}

export function ActivityFeed() {
    return (
        <div className="bg-slate-800 p-6 shadow-md border border-slate-700 h-full">
            <h3 className="text-slate-200 text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
                {/* Simulated feed items */}
                <div className="border-l-2 border-emerald-500 pl-4 py-1">
                    <p className="text-slate-300">New enrollment in <span className="text-emerald-400">Advanced React</span></p>
                    <p className="text-xs text-slate-500 mt-1">2 minutes ago</p>
                </div>
            </div>
        </div>
    );
}
