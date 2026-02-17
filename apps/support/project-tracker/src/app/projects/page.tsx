import {
    Briefcase,
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    Users,
    Clock,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const projects = [
    { id: 1, name: 'LearnOps Suite Refactor', progress: 85, status: 'Active', team: 4, deadline: 'Feb 15, 2026', category: 'Engineering' },
    { id: 2, name: 'Mobile App Development', progress: 45, status: 'Active', team: 6, deadline: 'Mar 30, 2026', category: 'Product' },
    { id: 3, name: 'Infrastructure Migration', progress: 10, status: 'Planning', team: 3, deadline: 'Apr 10, 2026', category: 'DevOps' },
    { id: 4, name: 'Q1 Security Audit', progress: 100, status: 'Completed', team: 2, deadline: 'Jan 20, 2026', category: 'Security' },
    { id: 5, name: 'Customer Portal v2', progress: 60, status: 'Active', team: 5, deadline: 'Feb 28, 2026', category: 'Engineering' },
    { id: 6, name: 'Brand Identity Refresh', progress: 25, status: 'Active', team: 3, deadline: 'Mar 15, 2026', category: 'Design' },
];

export default function ProjectsPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
                    <p className="text-sm text-gray-500">Manage and monitor all ongoing and planned projects.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <Plus className="w-4 h-4" />
                    New Project
                </button>
            </header>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search projects by name, category, or status..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                        <option>All Statuses</option>
                        <option>Active</option>
                        <option>Planning</option>
                        <option>Completed</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${project.status === 'Completed' ? 'bg-green-50 text-green-600 border-green-100' :
                                    project.status === 'Active' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                        'bg-gray-50 text-gray-500 border-gray-100'
                                }`}>
                                {project.status}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                        <p className="text-xs text-gray-400 font-medium mb-6">{project.category}</p>

                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-xs font-bold">
                                <span className="text-gray-400 uppercase tracking-widest">Progress</span>
                                <span className="text-primary">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                                <div className={`h-1.5 rounded-full transition-all duration-500 ${project.status === 'Completed' ? 'bg-green-500' : 'bg-primary'}`} style={{ width: `${project.progress}%` }} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5" />
                                {project.team} members
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {project.deadline}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
