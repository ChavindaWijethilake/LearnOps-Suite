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
  Cpu,
  FileText,
  ShieldCheck,
  UserPlus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const activityData = [
  { day: 'Mon', value: 65 },
  { day: 'Tue', value: 45 },
  { day: 'Wed', value: 35 },
  { day: 'Thu', value: 52 },
  { day: 'Fri', value: 28 },
  { day: 'Sat', value: 38 },
  { day: 'Sun', value: 58 },
];


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
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Page Header */}
      <div className="px-8 pt-8">
        <h1 className="text-4xl font-black tracking-tight mb-2 text-slate-900">Command Center</h1>
        <p className="text-slate-500 font-medium">System-wide operational overview.</p>
      </div>

      <div className="px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-8">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border-industrial p-8 space-y-3 shadow-industrial hover:shadow-industrial-hover hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Active Users</span>
                <UserPlus className="h-4 w-4 text-slate-900" />
              </div>
              <div className="text-4xl font-black tracking-tighter">12,453</div>
              <div className="text-[10px] font-black text-emerald-600 flex items-center gap-1.5 uppercase tracking-wider">
                <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                +14% from last week
              </div>
            </div>
            <div className="bg-card border-industrial p-8 space-y-3 shadow-industrial hover:shadow-industrial-hover hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">System Load</span>
                <Cpu className="h-4 w-4 text-slate-900" />
              </div>
              <div className="text-4xl font-black tracking-tighter">24%</div>
              <div className="w-full bg-slate-100 h-2 mt-4 border border-slate-200">
                <div className="bg-slate-900 h-full w-[24%] transition-all duration-1000" />
              </div>
            </div>
            <div className="bg-card border-industrial p-8 space-y-3 shadow-industrial hover:shadow-industrial-hover hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Response Time</span>
                <Zap className="h-4 w-4 text-slate-900" />
              </div>
              <div className="text-4xl font-black tracking-tighter">45<span className="text-lg text-slate-400 ml-1 uppercase">ms</span></div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Global Average</div>
            </div>
          </div>

          {/* Application Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <a
                key={module.id}
                href={module.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border-industrial p-10 shadow-industrial hover:shadow-industrial-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Background Accent */}
                <div className={cn("absolute top-0 right-0 w-32 h-32 opacity-5 translate-x-8 -translate-y-8 transition-all duration-500 group-hover:opacity-10 group-hover:scale-110", module.color)}>
                  {module.icon}
                </div>

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className={cn("h-14 w-14 flex items-center justify-center border-2 border-slate-900 bg-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm", module.color)}>
                    {module.icon}
                  </div>
                  <ArrowRight className="h-6 w-6 text-slate-300 group-hover:text-slate-900 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-2 tracking-tight transition-colors group-hover:text-emerald-600">{module.name}</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 leading-relaxed bg-slate-50 p-3 border-l-2 border-slate-200 group-hover:border-slate-900 group-hover:bg-white transition-all">
                    {module.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <span className={cn(
                      "text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1.5 border-2",
                      module.type.includes('Core') ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-900 border-slate-900"
                    )}>
                      {module.type}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                      Initialize Link →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Analytics Chart */}
          <div className="bg-card border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold">Traffic Overview</h3>
              <select className="bg-background border text-xs p-1">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <div className="flex items-end justify-between h-full gap-3 px-4">
                {activityData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 rounded-t-sm"
                      style={{ height: `${item.value}%` }}
                      title={`${item.day}: ${item.value}%`}
                    />
                    <span className="text-xs text-muted-foreground font-medium">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Panel */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-card border p-6">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              Live Audit Log
            </h3>
            <div className="space-y-6">
              {recentActivity.map((activity) => {
                const iconMap = {
                  billing: CreditCard,
                  service: LifeBuoy,
                  learning: GraduationCap,
                  project: CheckSquare
                };
                const Icon = iconMap[activity.type as keyof typeof iconMap] || Zap;

                return (
                  <div key={activity.id} className="flex gap-4 group cursor-pointer relative pl-6 border-l ml-2">
                    <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 bg-background border-2 border-muted-foreground group-hover:border-primary rounded-full transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{activity.action}</p>
                      <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="w-full mt-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors border border-dashed">
              View Full Logs
            </button>
          </div>

          <div className="bg-slate-950 text-white p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security Actions
            </h3>
            <div className="space-y-2">
              {[
                { name: 'Rotate API Keys', icon: FileText },
                { name: 'Run Security Scan', icon: ShieldCheck },
                { name: 'Manage Access', icon: UserPlus }
              ].map((action) => (
                <button key={action.name} className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-colors border border-transparent hover:border-white/20">
                  <span className="flex items-center gap-2">
                    <action.icon className="h-4 w-4 text-blue-400" />
                    {action.name}
                  </span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
