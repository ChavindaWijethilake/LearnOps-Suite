'use client';

import { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    FileText,
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
            report.id.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = categoryFilter === 'All Categories' || report.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setIsGenerateModalOpen(false);
            alert(`Report generated in ${selectedFormat} format successfully!`);
        }, 1500);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <header className="flex justify-between items-end pb-6 border-b border-slate-800">
                <div>
                    <h1 className="text-2xl font-bold text-slate-50">Reports</h1>
                    <p className="text-sm text-slate-400 mt-1">Access and download generated reports</p>
                </div>
                <button
                    onClick={() => setIsGenerateModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 text-white text-xs font-medium rounded-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
                >
                    <Plus className="w-4 h-4" />
                    Generate Report
                </button>
            </header>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-3 items-center bg-slate-800/40 border border-slate-700/50 rounded-xl p-4">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input type="text" placeholder="Search reports..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all" />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-700/50 rounded-lg text-xs text-slate-400 hover:bg-slate-700/50 transition-all">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                    <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}
                        className="px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-xs text-slate-400 focus:outline-none cursor-pointer">
                        <option>All Categories</option>
                        <option>Financial</option><option>Usage</option><option>Service</option><option>Learning</option><option>System</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-slate-700/50">
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Report</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Author</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Format</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/30">
                        {filteredReports.map((report) => (
                            <tr key={report.id} className="hover:bg-slate-700/20 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-all">
                                            <FileText className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-slate-200">{report.name}</span>
                                            <p className="text-[10px] text-slate-500 mt-0.5">{report.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-[10px] font-medium px-2 py-1 bg-slate-700/50 text-slate-400 rounded-md">{report.category}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-400">{report.author}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{report.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${report.format === 'PDF' ? 'bg-red-500/10 text-red-400' :
                                        report.format === 'Excel' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                        {report.format}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-500 hover:text-slate-300">
                                        <Download className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="px-6 py-3 border-t border-slate-700/50 flex items-center justify-between">
                    <p className="text-xs text-slate-500">Showing {filteredReports.length} of {reports.length} reports</p>
                    <div className="flex gap-1">
                        <button className="p-2 border border-slate-700/50 rounded-lg text-slate-500 disabled:opacity-30" disabled><ChevronLeft className="w-4 h-4" /></button>
                        <button className="p-2 border border-slate-700/50 rounded-lg text-slate-400 hover:bg-slate-700/50"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isGenerateModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-lg p-6 space-y-6 shadow-2xl">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-700/50">
                            <h2 className="text-lg font-bold text-slate-50">Generate Report</h2>
                            <button onClick={() => setIsGenerateModalOpen(false)} className="p-2 hover:bg-slate-800 rounded-lg text-slate-500"><X className="w-5 h-5" /></button>
                        </div>
                        <div>
                            <label className="block text-xs text-slate-400 mb-3">Select Format</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['PDF', 'Excel', 'CSV', 'Docs'].map((format) => (
                                    <button key={format} onClick={() => setSelectedFormat(format)}
                                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${selectedFormat === format ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-700/50 hover:border-slate-600'}`}>
                                        <div className={`p-2 rounded-lg ${format === 'PDF' ? 'bg-red-500/10 text-red-400' : format === 'Excel' ? 'bg-green-500/10 text-green-400' : format === 'CSV' ? 'bg-blue-500/10 text-blue-400' : 'bg-indigo-500/10 text-indigo-400'}`}>
                                            {format === 'Excel' ? <FileSpreadsheet className="w-5 h-5" /> : format === 'CSV' ? <FileType className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                                        </div>
                                        <span className="text-sm font-medium text-slate-300">{format}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                            <button onClick={() => setIsGenerateModalOpen(false)} className="flex-1 px-4 py-2.5 border border-slate-700 text-slate-400 rounded-lg hover:bg-slate-800 transition-all text-sm">Cancel</button>
                            <button onClick={handleGenerate} disabled={isGenerating}
                                className="flex-1 px-4 py-2.5 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-500/20">
                                {isGenerating ? <>Processing...</> : <><Download className="w-4 h-4" /> Generate</>}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
