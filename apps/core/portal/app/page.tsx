import Link from 'next/link';
import {
  LayoutDashboard,
  CreditCard,
  LifeBuoy,
  BarChart3,
  GraduationCap,
  BookOpen,
  CheckSquare,
  ArrowRight,
  Activity,
  Zap,
  Shield,
  Globe,
  Cpu
} from 'lucide-react';

const modules = [
  {
    id: 'billing',
    name: 'Financial Engine',
    description: 'Next-gen invoice processing and real-time financial auditing.',
    icon: <CreditCard className="w-6 h-6" />,
    href: 'http://localhost:3001',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    type: 'Core System'
  },
  {
    id: 'service-management',
    name: 'Service Nexus',
    description: 'Unified support infrastructure with AI-driven SLA monitoring.',
    icon: <LifeBuoy className="w-6 h-6" />,
    href: 'http://localhost:3002',
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    type: 'Core System'
  },
  {
    id: 'analytics',
    name: 'Intelligence Hub',
    description: 'Deep-data visualization and predictive performance metrics.',
    icon: <BarChart3 className="w-6 h-6" />,
    href: 'http://localhost:3003',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    type: 'Core System'
  },
  {
    id: 'learning-hub',
    name: 'Skill Academy',
    description: 'Adaptive learning paths and enterprise competency tracking.',
    icon: <GraduationCap className="w-6 h-6" />,
    href: 'http://localhost:3004',
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    type: 'Support'
  },
  {
    id: 'resource-center',
    name: 'Knowledge Base',
    description: 'Centralized documentation and technical asset repository.',
    icon: <BookOpen className="w-6 h-6" />,
    href: 'http://localhost:3005',
    color: 'text-amber-600',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    type: 'Support'
  },
  {
    id: 'project-tracker',
    name: 'Project Matrix',
    description: 'Agile workflow orchestration and team velocity analysis.',
    icon: <CheckSquare className="w-6 h-6" />,
    href: 'http://localhost:3006',
    color: 'text-rose-600',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    type: 'Support'
  }
];

const recentActivity = [
  { id: 1, type: 'billing', action: 'Financial audit completed for Q1', time: '2 hours ago', status: 'success' },
  { id: 2, type: 'service', action: 'Critical patch deployed to Service Nexus', time: '4 hours ago', status: 'info' },
  { id: 3, type: 'learning', action: 'New Skill Path: "Cloud Architecture" live', time: 'Yesterday', status: 'new' },
  { id: 4, type: 'project', action: 'Project "Titan" reached Milestone 4', time: '2 days ago', status: 'milestone' }
];

export default function DashboardPage() {
  return (
    <div className="space-y-16 animate-fade-in pb-20">
      {/* Premium Hero Section */}
      <header className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-12 md:p-20 text-white shadow-2xl shadow-slate-950/40">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />

        <div className="relative z-10 max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 animate-slide-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
            LearnOps OS v4.0.2 • Global Status: Optimal
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] animate-slide-up [animation-delay:100ms]">
              Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Center</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium max-w-xl leading-relaxed animate-slide-up [animation-delay:200ms]">
              Orchestrate your entire enterprise ecosystem from a single, high-performance interface. Real-time insights, unified control.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 animate-slide-up [animation-delay:300ms]">
            <button className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-50 hover:scale-105 transition-all shadow-xl shadow-white/10 active:scale-95">
              System Analytics
            </button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-md text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10 hover:bg-white/10 transition-all active:scale-95">
              Global Settings
            </button>
          </div>
        </div>

        {/* Floating Stats Decoration */}
        <div className="hidden xl:block absolute top-20 right-20 space-y-4 animate-float">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] w-64 shadow-2xl">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-blue-500/20 rounded-xl text-blue-400">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Core Load</span>
            </div>
            <div className="text-2xl font-black text-white">12.4%</div>
            <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[12.4%]" />
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] w-64 shadow-2xl [animation-delay:1s]">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Active Nodes</span>
            </div>
            <div className="text-2xl font-black text-white">1,204</div>
            <div className="text-[10px] font-bold text-emerald-400 mt-2">+12 since last hour</div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Module Grid */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <div className="flex items-center justify-between mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                  <div className="p-2 bg-blue-600 rounded-xl text-white">
                    <LayoutDashboard className="w-6 h-6" />
                  </div>
                  System Modules
                </h2>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Primary Enterprise Infrastructure</p>
              </div>
              <Link href="/directory" className="group flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all">
                Full Directory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <Link
                  key={module.id}
                  href={module.href}
                  className="group relative overflow-hidden bg-white border border-slate-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/5 hover:border-blue-200 animate-slide-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    {module.icon}
                  </div>

                  <div className="flex justify-between items-start mb-8">
                    <div className={cn("p-5 rounded-3xl shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3", module.bgColor, module.color)}>
                      {module.icon}
                    </div>
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border",
                      module.type.includes('Core') ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-slate-50 text-slate-500 border-slate-100"
                    )}>
                      {module.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{module.name}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-medium text-lg">{module.description}</p>

                  <div className="flex items-center text-xs font-black uppercase tracking-widest text-blue-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                    Initialize Module <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Intelligence Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          <section className="glass-card rounded-[3rem] p-10 animate-slide-up [animation-delay:800ms]">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                <Activity className="w-6 h-6 text-blue-600" />
                Live Feed
              </h2>
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </div>
            </div>

            <div className="space-y-10">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex gap-6 group cursor-pointer">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors border border-slate-100">
                      <Zap className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    {activity.id !== recentActivity.length && (
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-10 bg-slate-100" />
                    )}
                  </div>
                  <div className="pt-1">
                    <p className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{activity.action}</p>
                    <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-12 py-5 text-xs font-black uppercase tracking-widest text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200 transition-all active:scale-95">
              Access System Logs
            </button>
          </section>

          <section className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-slate-900/30 animate-slide-up [animation-delay:1000ms] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Zap className="w-20 h-20" />
            </div>
            <h2 className="text-2xl font-black mb-8 flex items-center gap-4 tracking-tight relative z-10">
              <Shield className="w-6 h-6 text-blue-400" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 gap-4 relative z-10">
              <button className="flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl text-xs font-black uppercase tracking-widest transition-all group border border-white/5">
                Generate Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl text-xs font-black uppercase tracking-widest transition-all group border border-white/5">
                Security Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl text-xs font-black uppercase tracking-widest transition-all group border border-white/5">
                User Provisioning <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
