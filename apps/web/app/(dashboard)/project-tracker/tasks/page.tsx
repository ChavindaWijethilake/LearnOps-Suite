import {
    CheckSquare,
    Search,
    Plus,
    Filter,
    MoreHorizontal,
    User,
    Calendar,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const tasks = [
    { id: 'TSK-101', title: 'Implement Shared Auth', status: 'Done', priority: 'High', assignee: 'John Doe', project: 'LearnOps Suite Refactor' },
    { id: 'TSK-102', title: 'Update UI Components', status: 'In Progress', priority: 'Medium', assignee: 'Jane Smith', project: 'LearnOps Suite Refactor' },
    { id: 'TSK-103', title: 'Setup Billing Module', status: 'Todo', priority: 'High', assignee: 'Mike Ross', project: 'LearnOps Suite Refactor' },
    { id: 'TSK-104', title: 'Configure Analytics Data', status: 'Todo', priority: 'Low', assignee: 'Sarah Connor', project: 'LearnOps Suite Refactor' },
    { id: 'TSK-105', title: 'Design Mobile Mockups', status: 'In Progress', priority: 'High', assignee: 'Gary Simon', project: 'Mobile App Development' },
    { id: 'TSK-106', title: 'API Integration', status: 'Todo', priority: 'Medium', assignee: 'John Doe', project: 'Mobile App Development' },
    { id: 'TSK-107', title: 'Database Migration Script', status: 'Done', priority: 'Critical', assignee: 'DevOps Bot', project: 'Infrastructure Migration' },
];

export default function TasksPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
                    <p className="text-sm text-gray-500">Manage your individual tasks and team assignments.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <Plus className="w-4 h-4" />
                    New Task
                </button>
            </header>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search tasks by title, ID, or assignee..."
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
                        <option>Todo</option>
                        <option>In Progress</option>
                        <option>Done</option>
                    </select>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Task</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Project</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Priority</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Assignee</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {tasks.map((task) => (
                                <tr key={task.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-2 h-2 rounded-full ${task.status === 'Done' ? 'bg-green-500' :
                                                    task.status === 'In Progress' ? 'bg-blue-500' :
                                                        'bg-gray-300'
                                                }`} />
                                            <div>
                                                <span className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{task.title}</span>
                                                <p className="text-xs text-gray-400 mt-0.5">{task.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{task.project}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${task.status === 'Done' ? 'bg-green-50 text-green-600 border-green-100' :
                                                task.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                    'bg-gray-50 text-gray-500 border-gray-100'
                                            }`}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${task.priority === 'Critical' ? 'bg-red-50 text-red-600 border-red-100' :
                                                task.priority === 'High' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                                    task.priority === 'Medium' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                        'bg-gray-50 text-gray-500 border-gray-100'
                                            }`}>
                                            {task.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                <User className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-sm text-gray-600 font-medium">{task.assignee}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Showing 1-7 of 156 tasks</p>
                    <div className="flex gap-2">
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
