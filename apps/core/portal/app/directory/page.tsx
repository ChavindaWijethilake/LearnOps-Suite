import { Search, Filter, ArrowRight, CreditCard, LifeBuoy, BarChart3, GraduationCap, BookOpen, CheckSquare, Globe, Cpu, Zap } from 'lucide-react';
import Link from 'next/link';

const allModules = [
    {
        id: 'billing',
        name: 'Financial Engine',
        category: 'Core System',
        description: 'Next-gen invoice processing and real-time financial auditing.',
        icon: <CreditCard className="w-6 h-6" />,
        href: 'http://localhost:3001',
        status: 'Active',
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-500/10'
    },
    {
        id: 'service-management',
        name: 'Service Nexus',
        category: 'Core System',
        description: 'Unified support infrastructure with AI-driven SLA monitoring.',
        icon: <LifeBuoy className="w-6 h-6" />,
        href: 'http://localhost:3002',
        status: 'Active',
        color: 'text-blue-600',
        bgColor: 'bg-blue-500/10'
    },
    {
        id: 'analytics',
        name: 'Intelligence Hub',
        category: 'Core System',
        description: 'Deep-data visualization and predictive performance metrics.',
        icon: <BarChart3 className="w-6 h-6" />,
        href: 'http://localhost:3003',
        status: 'Active',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-500/10'
    },
    {
        id: 'learning-hub',
        name: 'Skill Academy',
        category: 'Support',
        description: 'Adaptive learning paths and enterprise competency tracking.',
        icon: <GraduationCap className="w-6 h-6" />,
        href: 'http://localhost:3004',
        status: 'Active',
        color: 'text-purple-600',
        bgColor: 'bg-purple-500/10'
    },
    {
        id: 'resource-center',
        name: 'Knowledge Base',
        category: 'Support',
        description: 'Centralized documentation and technical asset repository.',
        icon: <BookOpen className="w-6 h-6" />,
        href: 'http://localhost:3005',
        status: 'Active',
        color: 'text-amber-600',
        bgColor: 'bg-amber-500/10'
    },
    {
        id: 'project-tracker',
        name: 'Project Matrix',
        category: 'Support',
        description: 'Agile workflow orchestration and team velocity analysis.',
        icon: <CheckSquare className="w-6 h-6" />,
        href: 'http://localhost:3006',
        status: 'Active',
        color: 'text-rose-600',
        bgColor: 'bg-rose-500/10'
    }
];

export default function DirectoryPage() {
    return (
        <div className="space-y-12 animate-fade-in pb-20">
            <header className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest w-fit">
                    Enterprise Asset Catalog
                </div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Module Directory</h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                    Explore and orchestrate the full suite of LearnOps enterprise modules.
                </p>
            </header>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-card p-6 rounded-[2.5rem] border-blue-100/50">
                <div className="relative flex-1 w-full group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search modules by name, category, or functionality..."
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-base font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-200 transition-all placeholder:text-slate-400"
                    />
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <button className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 hover:bg-slate-50 hover:border-blue-200 transition-all active:scale-95">
                        <Filter className="w-4 h-4" />
                        Refine
                    </button>
                    <select className="px-6 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-200 transition-all appearance-none cursor-pointer">
                        <option>All Infrastructures</option>
                        <option>Core Systems</option>
                        <option>Support Frameworks</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {allModules.map((module, index) => (
                    <div
                        key={module.id}
                        className="group glass-card rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center gap-8 flex-1">
                            <div className={cn("w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3", module.bgColor, module.color)}>
                                {module.icon}
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-4">
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{module.name}</h3>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                                        {module.category}
                                    </span>
                                </div>
                                <p className="text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
                                    {module.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end border-t border-slate-50 md:border-t-0 pt-6 md:pt-0">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Operational Status</span>
                                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    {module.status}
                                </div>
                            </div>
                            <Link
                                href={module.href}
                                className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-blue-600/30 active:scale-95"
                            >
                                Launch
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
