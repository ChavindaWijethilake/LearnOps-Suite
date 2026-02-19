import {
    Search,
    Filter,
    BookOpen,
    FileText,
    Video,
    Download,
    MoreHorizontal,
    Bookmark,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const resources = [
    { id: 1, title: 'Company Branding Guidelines 2026', type: 'PDF', category: 'Marketing', author: 'Design Team', date: 'Jan 24, 2026', size: '4.2 MB' },
    { id: 2, title: 'New Employee Onboarding Video', type: 'Video', category: 'HR', author: 'People Ops', date: 'Jan 23, 2026', size: '128 MB' },
    { id: 3, title: 'API Documentation v2.4', type: 'Doc', category: 'Engineering', author: 'Dev Team', date: 'Jan 22, 2026', size: '1.5 MB' },
    { id: 4, title: 'Q1 Financial Projections', type: 'Excel', category: 'Finance', author: 'CFO Office', date: 'Jan 20, 2026', size: '2.8 MB' },
    { id: 5, title: 'Security Best Practices', type: 'PDF', category: 'Engineering', author: 'SecOps', date: 'Jan 18, 2026', size: '3.1 MB' },
    { id: 6, title: 'Product Roadmap 2026', type: 'Doc', category: 'Product', author: 'Product Team', date: 'Jan 15, 2026', size: '5.4 MB' },
];

export default function BrowsePage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Browse Resources</h1>
                    <p className="text-sm text-gray-500">Explore all documents, videos, and articles in the knowledge base.</p>
                </div>
            </header>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by title, author, or category..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                        <option>All Types</option>
                        <option>PDF</option>
                        <option>Video</option>
                        <option>Document</option>
                        <option>Excel</option>
                    </select>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Resource</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Author</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Size</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {resources.map((res) => (
                                <tr key={res.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                                                {res.type === 'PDF' ? <Download className="w-5 h-5" /> : res.type === 'Video' ? <Video className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold text-gray-900">{res.title}</span>
                                                <p className="text-xs text-gray-400 mt-0.5">{res.type}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                                            {res.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{res.author}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{res.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{res.size}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400" title="Save">
                                                <Bookmark className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Showing 1-6 of 432 resources</p>
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
