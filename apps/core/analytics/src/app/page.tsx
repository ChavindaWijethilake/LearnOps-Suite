import {
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  Activity,
  Zap
} from 'lucide-react';

const userGrowthData = [
  { name: 'Jan', new: 400, returning: 240 },
  { name: 'Feb', new: 300, returning: 139 },
  { name: 'Mar', new: 200, returning: 980 },
  { name: 'Apr', new: 278, returning: 390 },
  { name: 'May', new: 189, returning: 480 },
  { name: 'Jun', new: 239, returning: 380 },
  { name: 'Jul', new: 349, returning: 430 },
];

const deviceData = [
  { name: 'Desktop', value: 65, color: '#10b981' },
  { name: 'Mobile', value: 25, color: '#3b82f6' },
  { name: 'Tablet', value: 10, color: '#f59e0b' },
];

const metrics = [
  { label: 'Total Users', value: '12,843', change: '+8.4%', trendingUp: true, icon: <Users className="w-5 h-5" /> },
  { label: 'Active Sessions', value: '1,240', change: '+12.1%', trendingUp: true, icon: <Activity className="w-5 h-5" /> },
  { label: 'Avg. Session Time', value: '18m 42s', change: '-2m', trendingUp: false, icon: <Clock className="w-5 h-5" /> },
  { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', trendingUp: true, icon: <Zap className="w-5 h-5" /> },
];

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-slate-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-md">
            <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Live Dashboard
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50">Analytics Overview</h1>
          <p className="text-sm text-slate-400">Real-time insights and performance metrics</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:border-slate-600 text-xs font-medium rounded-lg transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 text-white hover:bg-emerald-600 text-xs font-medium rounded-lg transition-all shadow-lg shadow-emerald-500/20">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-medium text-slate-400">{metric.label}</span>
              <div className="p-2 bg-slate-700/50 rounded-lg text-slate-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all">
                {metric.icon}
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-50 mb-2">{metric.value}</div>
            <div className="flex items-center gap-2">
              {metric.trendingUp ? (
                <div className="flex items-center gap-1 text-emerald-400">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">{metric.change}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-rose-400">
                  <ArrowDownRight className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">{metric.change}</span>
                </div>
              )}
              <span className="text-xs text-slate-500">vs last week</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Growth Chart */}
        <div className="lg:col-span-2 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/20 transition-all">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-700/50">
            <h2 className="text-sm font-bold text-slate-50">User Growth</h2>
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                <span className="text-xs text-slate-400">New Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
                <span className="text-xs text-slate-400">Returning</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {userGrowthData.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">{item.name}</span>
                  <span className="text-slate-500">New: {item.new} | Returning: {item.returning}</span>
                </div>
                <div className="flex gap-0.5 h-6 rounded overflow-hidden">
                  <div
                    className="bg-emerald-500/80 hover:bg-emerald-500 transition-colors rounded-l"
                    style={{ width: `${(item.new / 1200) * 100}%` }}
                    title={`New: ${item.new}`}
                  />
                  <div
                    className="bg-blue-500/60 hover:bg-blue-500 transition-colors rounded-r"
                    style={{ width: `${(item.returning / 1200) * 100}%` }}
                    title={`Returning: ${item.returning}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Distribution */}
        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/20 transition-all">
          <h2 className="text-sm font-bold text-slate-50 mb-6 pb-4 border-b border-slate-700/50">
            Device Distribution
          </h2>

          <div className="space-y-4">
            {deviceData.map((device) => (
              <div key={device.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">{device.name}</span>
                  <span className="text-sm font-bold text-slate-50">{device.value}%</span>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${device.value}%`, backgroundColor: device.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-5 mt-5 border-t border-slate-700/50 space-y-3">
            {deviceData.map((device) => (
              <div key={device.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: device.color }} />
                  <span className="text-xs text-slate-400">{device.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-50">{device.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
