import { ArrowLeft, LayoutGrid, Search, Filter, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const allModules = [
    { name: 'Financial Engine', category: 'Core', status: 'Active', desc: 'Next-gen invoice processing and real-time financial auditing.' },
    { name: 'Service Nexus', category: 'Core', status: 'Active', desc: 'Unified support infrastructure with AI-driven SLA monitoring.' },
    { name: 'Intelligence Hub', category: 'Core', status: 'Active', desc: 'Deep-data visualization and predictive performance metrics.' },
    { name: 'Skill Academy', category: 'Support', status: 'Active', desc: 'Adaptive learning paths and enterprise competency tracking.' },
    { name: 'Knowledge Base', category: 'Support', status: 'Active', desc: 'Centralized documentation and technical asset repository.' },
    { name: 'Project Matrix', category: 'Support', status: 'Active', desc: 'Agile workflow orchestration and team velocity analysis.' },
    { name: 'Security Vault', category: 'Security', status: 'Beta', desc: 'Encrypted credential management and access log auditing.' },
    { name: 'Asset Manager', category: 'Infrastructure', status: 'Beta', desc: 'Hardware lifecycle tracking and procurement automation.' }
];

export default function DirectoryPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-16 py-12 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-none text-[10px] font-black uppercase tracking-[0.2em]">
                        <LayoutGrid className="w-4 h-4" />
                        Module Directory
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter text-slate-900 leading-none">
                        System <span className="text-blue-600">Inventory</span>.
                    </h1>
                </div>
                <div className="flex gap-4">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                        <input type="text" placeholder="Filter modules..." className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-none text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold w-64" />
                    </div>
                    <button className="px-6 py-3 bg-slate-50 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-100 transition-all flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        Categories
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {allModules.map((module) => (
                    <div key={module.name} className="bg-white border border-slate-200/60 p-8 space-y-6 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group cursor-pointer">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-50 text-slate-500 border border-slate-100">
                                {module.category}
                            </span>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${module.status === 'Active' ? 'text-emerald-500' : 'text-amber-500'}`}>
                                {module.status}
                            </span>
                        </div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{module.name}</h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{module.desc}</p>
                        <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-blue-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                            Initialize <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
