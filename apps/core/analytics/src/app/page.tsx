import {
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  PieChart as PieChartIcon
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
  { name: 'Desktop', value: 65, color: '#3b82f6' },
  { name: 'Mobile', value: 25, color: '#10b981' },
  { name: 'Tablet', value: 10, color: '#f59e0b' },
];

const metrics = [
  { label: 'Total Users', value: '12,843', change: '+8.4%', trendingUp: true, icon: <Users className="w-5 h-5" />, color: 'text-blue-600', bgColor: 'bg-blue-500/10' },
  { label: 'Active Sessions', value: '1,240', change: '+12.1%', trendingUp: true, icon: <TrendingUp className="w-5 h-5" />, color: 'text-emerald-600', bgColor: 'bg-emerald-500/10' },
  { label: 'Avg. Session Time', value: '18m 42s', change: '-2m', trendingUp: false, icon: <Clock className="w-5 h-5" />, color: 'text-amber-600', bgColor: 'bg-amber-500/10' },
  { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', trendingUp: true, icon: <BarChart3 className="w-5 h-5" />, color: 'text-purple-600', bgColor: 'bg-purple-500/10' },
];

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-12 animate-fade-in pb-10">
      <div className="px-8 pt-8 flex justify-between items-end border-b pb-8 border-slate-200">
        <div className="space-y-1">
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Analytics Dashboard</h1>
          <p className="text-slate-500 font-medium text-lg">Real-time insights and performance metrics.</p>
        </div>
        <div className="flex gap-3 pb-2">
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 bg-white hover:bg-slate-900 hover:text-white text-xs font-black uppercase tracking-widest transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 text-xs font-black uppercase tracking-widest transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-card border p-6 space-y-2 hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">{metric.label}</span>
              <div className={cn("p-2 bg-secondary rounded-none", metric.color)}>
                {metric.icon}
              </div>
            </div>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="text-xs text-muted-foreground">
              <span className={cn("font-bold", metric.trendingUp ? "text-emerald-600" : "text-rose-600")}>{metric.change}</span> vs last week
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card border p-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-foreground">User Growth</h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-none bg-primary" />
                <span className="text-xs font-bold uppercase text-muted-foreground">New Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-none bg-emerald-500" />
                <span className="text-xs font-bold uppercase text-muted-foreground">Returning</span>
              </div>
            </div>
          </div>

          <div className="h-[300px] w-full">
            <div className="space-y-4">
              {userGrowthData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-muted-foreground">New: {item.new} | Returning: {item.returning}</span>
                  </div>
                  <div className="flex gap-1 h-8">
                    <div className="bg-blue-500 hover:bg-blue-600 transition-colors" style={{ width: `${(item.new / 1200) * 100}%` }} title={`New: ${item.new}`} />
                    <div className="bg-emerald-500 hover:bg-emerald-600 transition-colors" style={{ width: `${(item.returning / 1200) * 100}%` }} title={`Returning: ${item.returning}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card border p-8 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-6">Device Distribution</h2>
            <div className="h-[200px] w-full">
              <div className="space-y-4">
                {deviceData.map((device) => (
                  <div key={device.name} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium">{device.name}</span>
                      <span className="font-bold">{device.value}%</span>
                    </div>
                    <div className="h-6 bg-muted overflow-hidden">
                      <div
                        className="h-full transition-all duration-500 hover:opacity-80"
                        style={{ width: `${device.value}%`, backgroundColor: device.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {deviceData.map((device) => (
                <div key={device.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: device.color }} />
                    <span className="text-muted-foreground">{device.name}</span>
                  </div>
                  <span className="font-bold">{device.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
