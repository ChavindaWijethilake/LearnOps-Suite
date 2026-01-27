import {
    BarChart3,
    Search,
    Filter,
    Download,
    FileText,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const reports = [
    { id: 'REP-001', name: 'Monthly Revenue Summary', category: 'Financial', author: 'System', date: 'Jan 24, 2026', format: 'PDF' },
    { id: 'REP-002', name: 'User Engagement Analysis', category: 'Usage', author: 'Admin', date: 'Jan 23, 2026', format: 'Excel' },
    { id: 'REP-003', name: 'SLA Compliance Report', category: 'Service', author: 'System', date: 'Jan 22, 2026', format: 'PDF' },
    { id: 'REP-004', name: 'Course Completion Rates', category: 'Learning', author: 'LMS Bot', date: 'Jan 20, 2026', format: 'CSV' },
    { id: 'REP-005', name: 'Customer Satisfaction Survey', category: 'Service', author: 'Admin', date: 'Jan 18, 2026', format: 'PDF' },
    { id: 'REP-006', name: 'Infrastructure Health Log', category: 'System', author: 'DevOps', date: 'Jan 15, 2026', format: 'JSON' },
];

export default function ReportsPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
                    <p className="text-sm text-gray-500">Access and download generated reports and data exports.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <Plus className="w-4 h-4" />
                    Generate Report
                </button>
            </header>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search reports by name, category, or author..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                        <option>All Categories</option>
                        <option>Financial</option>
                        <option>Usage</option>
                        <option>Service</option>
                        <option>Learning</option>
                    </select>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Report Name</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Author</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Format</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold text-gray-900">{report.name}</span>
                                                <p className="text-xs text-gray-400 mt-0.5">{report.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                                            {report.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{report.author}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{report.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${report.format === 'PDF' ? 'bg-red-50 text-red-600 border-red-100' :
                                                report.format === 'Excel' ? 'bg-green-50 text-green-600 border-green-100' :
                                                    'bg-blue-50 text-blue-600 border-blue-100'
                                            }`}>
                                            {report.format}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400" title="Download">
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Showing 1-6 of 128 reports</p>
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

function Plus({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}
