import {
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter
} from 'lucide-react';

const metrics = [
  { label: 'Total Users', value: '12,843', change: '+8.4%', trendingUp: true, icon: <Users className="w-5 h-5" /> },
  { label: 'Active Sessions', value: '1,240', change: '+12.1%', trendingUp: true, icon: <TrendingUp className="w-5 h-5" /> },
  { label: 'Avg. Session Time', value: '18m 42s', change: '-2m', trendingUp: false, icon: <Clock className="w-5 h-5" /> },
  { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', trendingUp: true, icon: <BarChart3 className="w-5 h-5" /> },
];

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-sm text-gray-500">Real-time insights and performance metrics.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
            <Filter className="w-4 h-4" />
            Filter Data
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                {metric.icon}
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${metric.trendingUp ? 'text-green-600' : 'text-red-600'}`}>
                {metric.trendingUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {metric.change}
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500 mb-1">{metric.label}</p>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold text-gray-900">User Growth</h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs text-gray-500">New Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200" />
                <span className="text-xs text-gray-500">Returning</span>
              </div>
            </div>
          </div>

          <div className="h-64 flex items-end gap-3 px-4">
            {[30, 55, 40, 80, 65, 50, 75, 55, 85, 70, 60, 80].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-gray-50 rounded-t-lg relative h-full flex items-end">
                  <div
                    className="w-full bg-primary/20 group-hover:bg-primary/40 transition-all rounded-t-lg"
                    style={{ height: `${height * 0.6}%` }}
                  />
                  <div
                    className="w-full bg-primary rounded-t-lg absolute bottom-0 transition-all"
                    style={{ height: `${height}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                  {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-8">Top Modules</h2>
          <div className="space-y-6">
            {[
              { name: 'Billing', value: 85, color: 'bg-teal-500' },
              { name: 'Service Mgmt', value: 72, color: 'bg-purple-500' },
              { name: 'Learning Hub', value: 64, color: 'bg-sky-500' },
              { name: 'Resource Center', value: 48, color: 'bg-amber-500' },
            ].map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">{item.name}</span>
                  <span className="text-gray-900 font-bold">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-900 rounded-2xl text-white">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">AI Insight</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              User engagement is up 15% in the Billing module after the latest UI update.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
