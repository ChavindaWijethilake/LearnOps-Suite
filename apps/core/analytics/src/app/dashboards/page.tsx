import { PieChart, Layout, Plus, MoreVertical, ExternalLink, Users, Activity, BarChart } from 'lucide-react';

const dashboards = [
  { id: 1, name: 'Executive Overview', widgets: 12, lastViewed: '2 hours ago', icon: <Activity className="w-6 h-6" />, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 2, name: 'Marketing Performance', widgets: 8, lastViewed: 'Yesterday', icon: <BarChart className="w-6 h-6" />, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { id: 3, name: 'User Retention', widgets: 6, lastViewed: '3 days ago', icon: <Users className="w-6 h-6" />, color: 'text-teal-600', bgColor: 'bg-teal-50' },
  { id: 4, name: 'System Health', widgets: 15, lastViewed: 'Just now', icon: <Layout className="w-6 h-6" />, color: 'text-rose-600', bgColor: 'bg-rose-50' },
];

export default function DashboardsPage() {
  return (
    <div className="space-y-10 animate-fade-in">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
            Analytics Engine v2.0
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Custom Dashboards</h1>
          <p className="text-lg text-gray-500 font-medium">Create and manage personalized data visualization views.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl text-sm font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
          <Plus className="w-5 h-5" />
          New Dashboard
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboards.map((dashboard, index) => (
          <div
            key={dashboard.id}
            className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-8">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 ${dashboard.bgColor} ${dashboard.color}`}>
                {dashboard.icon}
              </div>
              <button className="p-2.5 hover:bg-gray-50 rounded-xl transition-colors text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 mb-10">
              <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-primary transition-colors">{dashboard.name}</h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Last viewed {dashboard.lastViewed}</p>
            </div>

            {/* Mock Visualization */}
            <div className="h-24 mb-8 flex items-end gap-1.5 px-2">
              {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gray-50 rounded-t-lg group-hover:bg-primary/10 transition-colors relative overflow-hidden"
                  style={{ height: `${height}%` }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-primary/20 transition-all duration-1000 delay-300"
                    style={{ height: '0%' }}
                  // Note: In a real app, this would be controlled by state/props
                  />
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Widgets</span>
                <span className="text-base font-extrabold text-gray-900">{dashboard.widgets} Active</span>
              </div>
              <button className="px-5 py-2.5 text-sm font-bold text-primary bg-primary/5 rounded-xl flex items-center gap-2 hover:bg-primary/10 transition-all group/btn">
                Open View
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
