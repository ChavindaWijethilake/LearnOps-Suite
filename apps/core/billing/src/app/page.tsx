import {
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  Plus,
  Zap,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Shield,
  Activity
} from 'lucide-react';

const stats = [
  {
    label: 'Total Revenue',
    value: '$128,430',
    change: '+12.5%',
    trendingUp: true,
    icon: <DollarSign className="w-6 h-6" />,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10'
  },
  {
    label: 'Pending Invoices',
    value: '24',
    change: '-2',
    trendingUp: false,
    icon: <Clock className="w-6 h-6" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10'
  },
  {
    label: 'Paid This Month',
    value: '$42,150',
    change: '+8.2%',
    trendingUp: true,
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-500/10'
  },
  {
    label: 'Overdue',
    value: '3',
    change: '+1',
    trendingUp: true,
    icon: <AlertCircle className="w-6 h-6" />,
    color: 'text-rose-600',
    bgColor: 'bg-rose-500/10'
  },
];

const recentInvoices = [
  { id: 'INV-001', customer: 'Acme Corp', amount: '$1,500.00', status: 'Paid', date: 'Jan 24, 2026' },
  { id: 'INV-002', customer: 'Global Tech', amount: '$2,340.00', status: 'Pending', date: 'Jan 23, 2026' },
  { id: 'INV-003', customer: 'Starlight Inc', amount: '$850.00', status: 'Overdue', date: 'Jan 15, 2026' },
  { id: 'INV-004', customer: 'Nexus Ltd', amount: '$3,100.00', status: 'Paid', date: 'Jan 20, 2026' },
];

export default function BillingDashboard() {
  return (
    <div className="space-y-16 animate-fade-in pb-20">
      {/* Premium Hero Section */}
      <header className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-12 md:p-16 text-white shadow-2xl shadow-slate-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] animate-pulse" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-8 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 animate-slide-up">
              <Zap className="w-4 h-4" />
              Financial Nexus v4.2 • Real-time Auditing Active
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] animate-slide-up [animation-delay:100ms]">
                Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Intelligence</span>
              </h1>
              <p className="text-lg text-slate-400 font-medium leading-relaxed animate-slide-up [animation-delay:200ms]">
                Orchestrate your enterprise revenue streams with precision. Real-time invoice tracking, automated disbursements, and predictive financial insights.
              </p>
            </div>
          </div>

          <button className="group relative flex items-center gap-4 px-10 py-6 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-emerald-400 hover:scale-105 transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 animate-slide-up [animation-delay:300ms]">
            <Plus className="w-6 h-6" />
            Create New Invoice
            <div className="absolute inset-0 rounded-[2rem] bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="glass-card rounded-[2.5rem] p-8 group animate-slide-up border-slate-100/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-8">
              <div className={cn("p-4 rounded-2xl shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3", stat.bgColor, stat.color)}>
                {stat.icon}
              </div>
              <div className={cn(
                "flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                stat.trendingUp ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              )}>
                {stat.trendingUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
            <p className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Recent Invoices Table */}
        <div className="lg:col-span-8 glass-card rounded-[3rem] border-slate-100/50 overflow-hidden animate-slide-up [animation-delay:400ms]">
          <div className="px-10 py-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-900 rounded-xl text-white">
                <Activity className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Recent Transactions</h2>
            </div>
            <button className="group flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-all">
              Full Ledger <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Identifier</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Entity</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Volume</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Timestamp</th>
                  <th className="px-10 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentInvoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-10 py-6 text-sm font-black text-slate-900">{invoice.id}</td>
                    <td className="px-10 py-6 text-sm font-bold text-slate-600">{invoice.customer}</td>
                    <td className="px-10 py-6 text-sm font-black text-slate-900">{invoice.amount}</td>
                    <td className="px-10 py-6">
                      <span className={cn(
                        "status-badge",
                        invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                          invoice.status === 'Pending' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                            'bg-rose-50 text-rose-600 border-rose-100'
                      )}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-sm font-bold text-slate-400">{invoice.date}</td>
                    <td className="px-10 py-6 text-right">
                      <button className="p-3 hover:bg-white hover:shadow-lg rounded-2xl transition-all text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-100">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Intelligence Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          <div className="glass-card rounded-[3rem] p-10 animate-slide-up [animation-delay:600ms] border-slate-100/50">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-10 flex items-center gap-4">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              Performance
            </h2>
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Collection Velocity</span>
                  <span className="text-sm font-black text-slate-900">94%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-[94%] shadow-lg shadow-emerald-500/20" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Settlement Latency</span>
                  <span className="text-sm font-black text-slate-900">4.2 Days</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full w-[60%] shadow-lg shadow-blue-500/20" />
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Shield className="w-16 h-16" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-emerald-400">Optimization Engine</p>
              <p className="text-base font-bold leading-relaxed relative z-10">
                Automate your recurring revenue cycles to reduce operational overhead by <span className="text-emerald-400 font-black">24%</span>.
              </p>
              <button className="mt-8 w-full py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-50 transition-all active:scale-95 relative z-10">
                Initialize Automation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
