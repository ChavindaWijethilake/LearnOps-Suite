import {
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    LifeBuoy,
    ChevronLeft,
    ChevronRight,
    User,
    Clock
} from 'lucide-react';

const requests = [
    { id: 'REQ-042', title: 'System Access Request', priority: 'High', status: 'In Progress', assignee: 'John Doe', created: 'Jan 24, 2026', type: 'Access' },
    { id: 'REQ-041', title: 'Software Installation', priority: 'Medium', status: 'New', assignee: 'Unassigned', created: 'Jan 23, 2026', type: 'Software' },
    { id: 'REQ-040', title: 'Hardware Replacement', priority: 'Low', status: 'Pending', assignee: 'Jane Smith', created: 'Jan 15, 2026', type: 'Hardware' },
    { id: 'REQ-039', title: 'Network Connectivity Issue', priority: 'Critical', status: 'In Progress', assignee: 'Mike Ross', created: 'Jan 20, 2026', type: 'Network' },
    { id: 'REQ-038', title: 'Email Configuration', priority: 'Low', status: 'Resolved', assignee: 'Sarah Connor', created: 'Jan 18, 2026', type: 'Access' },
    { id: 'REQ-037', title: 'VPN Access Setup', priority: 'High', status: 'In Progress', assignee: 'John Doe', created: 'Jan 12, 2026', type: 'Access' },
    { id: 'REQ-036', title: 'Monitor Flickering Issue', priority: 'Medium', status: 'New', assignee: 'Unassigned', created: 'Jan 05, 2026', type: 'Hardware' },
];

export default function RequestsPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Service Requests</h1>
                    <p className="text-sm text-gray-500">View and manage all active and historical service requests.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <Plus className="w-4 h-4" />
                    New Request
                </button>
            </header>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by request ID, title, or assignee..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                        <option>All Priorities</option>
                        <option>Critical</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Request</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Priority</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Assignee</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Created</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {requests.map((request) => (
                                <tr key={request.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                                                <LifeBuoy className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-primary">{request.id}</span>
                                                    <span className="text-sm font-bold text-gray-900">{request.title}</span>
                                                </div>
                                                <p className="text-xs text-gray-400 mt-0.5">{request.type}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${request.priority === 'Critical' ? 'bg-red-50 text-red-600 border-red-100' :
                                                request.priority === 'High' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                                    request.priority === 'Medium' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                        'bg-gray-50 text-gray-500 border-gray-100'
                                            }`}>
                                            {request.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${request.status === 'Resolved' ? 'bg-green-50 text-green-600 border-green-100' :
                                                request.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                    request.status === 'New' ? 'bg-purple-50 text-purple-600 border-purple-100' :
                                                        'bg-amber-50 text-amber-600 border-amber-100'
                                            }`}>
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                <User className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-sm text-gray-600 font-medium">{request.assignee}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Clock className="w-3.5 h-3.5" />
                                            {request.created}
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
                    <p className="text-sm text-gray-500">Showing 1-7 of 42 requests</p>
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
