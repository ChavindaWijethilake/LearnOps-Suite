import {
    Bookmark,
    Search,
    FileText,
    Video,
    Download,
    ArrowRight,
    MoreVertical,
    Trash2
} from 'lucide-react';

const saved = [
    { id: 1, title: 'Company Branding Guidelines 2026', type: 'PDF', category: 'Marketing', date: 'Saved 2 days ago' },
    { id: 3, title: 'API Documentation v2.4', type: 'Doc', category: 'Engineering', date: 'Saved Yesterday' },
    { id: 5, title: 'Security Best Practices', type: 'PDF', category: 'Engineering', date: 'Saved 1 week ago' },
];

export default function SavedPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Saved Items</h1>
                    <p className="text-sm text-gray-500">Your personal collection of bookmarked resources.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {saved.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                                {item.type === 'PDF' ? <Download className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                            </div>
                            <button className="p-2 hover:bg-red-50 rounded-xl transition-colors text-gray-400 hover:text-red-500" title="Remove">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
                            <span className="px-2 py-0.5 bg-gray-50 rounded border border-gray-100">{item.category}</span>
                            <span>•</span>
                            <span>{item.date}</span>
                        </div>
                        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                            <button className="text-sm font-bold text-primary flex items-center gap-1 group-hover:underline">
                                Open Resource <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}

                {saved.length === 0 && (
                    <div className="col-span-full py-20 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mx-auto">
                            <Bookmark className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-lg font-bold text-gray-900">No saved items yet</p>
                            <p className="text-sm text-gray-500">Resources you bookmark will appear here for quick access.</p>
                        </div>
                        <button className="px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                            Browse Resources
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
