import { Layout, Plus, MoreVertical, ExternalLink, Users, Activity, BarChart } from 'lucide-react';

const dashboards = [
  { id: 1, name: 'Executive Overview', widgets: 12, lastViewed: '2 hours ago', icon: <Activity className="w-6 h-6" />, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10' },
  { id: 2, name: 'Marketing Performance', widgets: 8, lastViewed: 'Yesterday', icon: <BarChart className="w-6 h-6" />, color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
  { id: 3, name: 'User Retention', widgets: 6, lastViewed: '3 days ago', icon: <Users className="w-6 h-6" />, color: 'text-purple-400', bgColor: 'bg-purple-500/10' },
  { id: 4, name: 'System Health', widgets: 15, lastViewed: 'Just now', icon: <Layout className="w-6 h-6" />, color: 'text-amber-400', bgColor: 'bg-amber-500/10' },
];

export default function DashboardsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-slate-50">Custom Dashboards</h1>
          <p className="text-sm text-slate-400 mt-1">Create and manage personalized data views</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 text-white text-xs font-medium rounded-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
          <Plus className="w-5 h-5" /> New Dashboard
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dashboards.map((dashboard, index) => (
          <div key={dashboard.id}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${dashboard.bgColor} ${dashboard.color}`}>
                {dashboard.icon}
              </div>
              <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-500"><MoreVertical className="w-5 h-5" /></button>
            </div>

            <h3 className="text-base font-bold text-slate-50 group-hover:text-emerald-400 transition-colors mb-1">{dashboard.name}</h3>
            <p className="text-xs text-slate-500 mb-6">Last viewed {dashboard.lastViewed}</p>

            {/* Mini Chart */}
            <div className="h-16 mb-6 flex items-end gap-1">
              {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
                <div key={i} className="flex-1 bg-slate-700/30 group-hover:bg-emerald-500/15 transition-colors rounded-t" style={{ height: `${height}%` }} />
              ))}
            </div>

            <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Widgets</span>
                <p className="text-sm font-bold text-slate-200">{dashboard.widgets} Active</p>
              </div>
              <button className="px-3 py-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-lg flex items-center gap-1.5 hover:bg-emerald-500/20 transition-all">
                Open <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
