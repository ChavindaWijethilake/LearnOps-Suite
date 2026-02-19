export default function SettingsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="pb-6 border-b border-slate-800">
                <h1 className="text-2xl font-bold text-slate-50">Settings</h1>
                <p className="text-sm text-slate-400 mt-1">Manage your analytics preferences</p>
            </header>
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-xs font-medium text-slate-400">Module Status</span>
                </div>
                <p className="text-sm text-slate-500">Settings functionality coming soon.</p>
            </div>
        </div>
    );
}
