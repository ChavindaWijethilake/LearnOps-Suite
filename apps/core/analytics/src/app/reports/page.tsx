'use client';

import { useState } from 'react';
import {
    BarChart3,
    Search,
    Filter,
    Download,
    FileText,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    Plus,
    X,
    FileSpreadsheet,
    FileType
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
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All Categories');
    const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState('PDF');
    const [isGenerating, setIsGenerating] = useState(false);

    const filteredReports = reports.filter(report => {
        const matchesSearch = report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            report.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            report.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = categoryFilter === 'All Categories' || report.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    const handleGenerate = () => {
        setIsGenerating(true);
        // Simulate generation
        setTimeout(() => {
            setIsGenerating(false);
            setIsGenerateModalOpen(false);
            alert(`Report generated in ${selectedFormat} format successfully!`);
        }, 1500);
    };

    return (
        <div className="space-y-8 relative">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
                    <p className="text-sm text-gray-500">Access and download generated reports and data exports.</p>
                </div>
                <button
                    onClick={() => setIsGenerateModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
                >
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
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-900/20 transition-all cursor-pointer"
                    >
                        <option>All Categories</option>
                        <option>Financial</option>
                        <option>Usage</option>
                        <option>Service</option>
                        <option>Learning</option>
                        <option>System</option>
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
                            {filteredReports.map((report) => (
                                <tr key={report.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-all">
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
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-slate-900" title="Download">
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {filteredReports.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        No reports found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Showing {filteredReports.length} of {reports.length} reports</p>
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

            {/* Generate Report Modal */}
            {isGenerateModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Generate Report</h2>
                            <button
                                onClick={() => setIsGenerateModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Format</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['PDF', 'Excel', 'CSV', 'Docs'].map((format) => (
                                        <button
                                            key={format}
                                            onClick={() => setSelectedFormat(format)}
                                            className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${selectedFormat === format
                                                ? 'border-slate-900 bg-slate-50'
                                                : 'border-slate-200 hover:border-slate-400'
                                                }`}
                                        >
                                            <div className={`p-2 rounded-lg ${format === 'PDF' ? 'bg-red-100 text-red-600' :
                                                format === 'Excel' ? 'bg-green-100 text-green-600' :
                                                    format === 'CSV' ? 'bg-blue-100 text-blue-600' :
                                                        'bg-indigo-100 text-indigo-600'
                                                }`}>
                                                {format === 'PDF' && <FileText className="w-5 h-5" />}
                                                {format === 'Excel' && <FileSpreadsheet className="w-5 h-5" />}
                                                {format === 'CSV' && <FileType className="w-5 h-5" />}
                                                {format === 'Docs' && <FileText className="w-5 h-5" />}
                                            </div>
                                            <span className="font-medium text-gray-900">{format}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                            <button
                                onClick={() => setIsGenerateModalOpen(false)}
                                className="flex-1 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleGenerate}
                                disabled={isGenerating}
                                className="flex-1 px-4 py-2.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                            >
                                {isGenerating ? (
                                    <>Processing...</>
                                ) : (
                                    <>
                                        <Download className="w-4 h-4" />
                                        Generate
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
