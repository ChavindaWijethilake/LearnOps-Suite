import {
  LifeBuoy,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Plus,
  Search,
  Filter,
  ShieldCheck,
  BarChart3,
  Activity,
  Zap,
  Server
} from 'lucide-react';

const slaData = [
  { name: 'Mon', value: 98 },
  { name: 'Tue', value: 99 },
  { name: 'Wed', value: 97 },
  { name: 'Thu', value: 99 },
  { name: 'Fri', value: 100 },
  { name: 'Sat', value: 99 },
  { name: 'Sun', value: 100 },
];

const stats = [
  { label: 'Active Requests', value: '42', change: '+5', trendingUp: true, icon: <LifeBuoy className="w-5 h-5" />, color: 'text-blue-600', bgColor: 'bg-blue-500/10' },
  { label: 'Avg. Response Time', value: '1.2h', change: '-15m', trendingUp: false, icon: <Clock className="w-5 h-5" />, color: 'text-amber-600', bgColor: 'bg-amber-500/10' },
  { label: 'SLA Compliance', value: '98.5%', change: '+0.2%', trendingUp: true, icon: <CheckCircle2 className="w-5 h-5" />, color: 'text-emerald-600', bgColor: 'bg-emerald-500/10' },
  { label: 'Critical Issues', value: '2', change: '0', trendingUp: false, icon: <AlertCircle className="w-5 h-5" />, color: 'text-rose-600', bgColor: 'bg-rose-500/10' },
];

const activeRequests = [
  { id: 'REQ-042', title: 'System Access Request', priority: 'High', status: 'In Progress', assignee: 'John Doe', updated: '10m ago' },
  { id: 'REQ-041', title: 'Software Installation', priority: 'Medium', status: 'New', assignee: 'Unassigned', updated: '1h ago' },
  { id: 'REQ-040', title: 'Hardware Replacement', priority: 'Low', status: 'Pending', assignee: 'Jane Smith', updated: '3h ago' },
  { id: 'REQ-039', title: 'Network Connectivity Issue', priority: 'Critical', status: 'In Progress', assignee: 'Mike Ross', updated: '5m ago' },
];

export default function ServiceDashboard() {
  return (
    <div className="space-y-8 animate-slide-up pb-10">
      <div className="px-8 pt-8">
        <h1 className="text-4xl font-black tracking-tight mb-2 flex items-center gap-3 text-slate-900">
          <ShieldCheck className="h-10 w-10 text-slate-900" />
          Service Command
        </h1>
        <p className="text-slate-500 font-medium">Operational support and SLA monitoring.</p>
      </div>

      <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border p-6 space-y-2 hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">{stat.label}</span>
              <div className={cn("p-2 bg-secondary rounded-none", stat.color)}>
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-xs text-muted-foreground">
              <span className={cn("font-bold", stat.trendingUp ? "text-emerald-600" : "text-rose-600")}>{stat.change}</span> vs last week
            </div>
          </div>
        ))}
      </div>

      <div className="px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* SLA Chart */}
          <div className="bg-card border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold flex items-center gap-2">
                <Activity className="h-4 w-4" />
                SLA Performance
              </h3>
              <select className="bg-background border text-xs p-1">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[200px] w-full">
              <div className="flex items-end justify-between h-full gap-2 px-4">
                {slaData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 hover:from-emerald-700 hover:to-emerald-500 transition-all duration-300 rounded-t-sm"
                      style={{ height: `${item.value}%` }}
                      title={`${item.name}: ${item.value}%`}
                    />
                    <span className="text-xs text-muted-foreground font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card border overflow-hidden">
            <div className="px-6 py-4 border-b flex justify-between items-center bg-secondary/20">
              <h2 className="text-sm font-black text-foreground uppercase tracking-widest flex items-center gap-2">
                <LifeBuoy className="h-4 w-4" />
                Active Requests
              </h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="divide-y">
              {activeRequests.map((request) => (
                <div key={request.id} className="p-6 hover:bg-secondary/10 transition-all group flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-secondary text-xs font-mono font-bold">{request.id}</div>
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{request.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">Assigned to: <span className="font-medium text-foreground">{request.assignee}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-wider px-2 py-1 border",
                      request.priority === 'Critical' ? "bg-rose-50 text-rose-700 border-rose-200" :
                        request.priority === 'High' ? "bg-orange-50 text-orange-700 border-orange-200" :
                          "bg-blue-50 text-blue-700 border-blue-200"
                    )}>
                      {request.priority}
                    </span>
                    <div className="text-right">
                      <div className="text-xs font-bold">{request.status}</div>
                      <div className="text-[10px] text-muted-foreground">{request.updated}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-card border p-6">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <Server className="h-4 w-4 text-primary" />
              System Status
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-muted-foreground">API Gateway</span>
                  <span className="text-emerald-600">Operational</span>
                </div>
                <div className="h-1.5 w-full bg-secondary">
                  <div className="bg-emerald-500 h-full w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-muted-foreground">Database Shards</span>
                  <span className="text-emerald-600">Operational</span>
                </div>
                <div className="h-1.5 w-full bg-secondary">
                  <div className="bg-emerald-500 h-full w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-muted-foreground">Search Index</span>
                  <span className="text-amber-600">Degraded</span>
                </div>
                <div className="h-1.5 w-full bg-secondary">
                  <div className="bg-amber-500 h-full w-[80%] animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          <section className="bg-slate-950 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative z-10">
              <Zap className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Priority Support</h3>
              <p className="text-sm text-slate-400 mb-6">
                Direct line to Level 3 engineering for critical outages.
              </p>
              <button className="w-full py-3 bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
                Initiate Sev-1 Protocol
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
