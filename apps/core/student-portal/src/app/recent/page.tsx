'use client';

import ResourceListPage from '../components/resource-list-page';
import { Clock, History, Trash2, Calendar } from 'lucide-react';

const items = [
    { id: 1, title: 'CS301 – Data Structures & Algorithms', description: 'Complete course pack including lecture notes, lab guides, and recommended reading list. Completion: 85%', course: 'Computer Science', year: '2025', semester: '1', category: 'Course Pack', format: 'PDF', date: 'Viewed 1h ago', downloads: 567, size: '25 MB' },
    { id: 2, title: 'Machine Learning Podcast – Episode 12', description: 'Faculty discussion on the future of generative AI in education. Listened: 12m / 45m', course: 'Computer Science', year: '2025', semester: '1', category: 'Podcast', format: 'MP3', date: 'Viewed 3h ago', downloads: 178, size: '45 MB' },
    { id: 3, title: 'Data Structures – Quick Revision Notes', description: 'Condensed revision notes covering all key algorithms and complexities. Read: 100%', course: 'Computer Science', year: '2025', semester: '1', category: 'Revision Notes', format: 'PDF', date: 'Viewed yesterday', downloads: 678, size: '3.2 MB' },
    { id: 4, title: 'Thermodynamics Lecture Video', description: 'Core principles of heat transfer and internal mobility. Watched: 5m / 60m', course: 'Physics', year: '2025', semester: '1', category: 'Video', format: 'MP4', date: 'Viewed Monday', downloads: 442, size: '1.2 GB' },
    { id: 5, title: 'Financial Modeling Worksheet', description: 'Advanced Excel formulas for projecting long-term university endowments.', course: 'Economics', year: '2025', semester: '1', category: 'Practical', format: 'XLSX', date: 'Viewed 3d ago', downloads: 89, size: '1.1 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Physics', 'Economics'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Course Pack', 'Podcast', 'Revision Notes', 'Video', 'Practical'],
};

export default function RecentlyAccessedPage() {
    return (
        <div className="relative">
            {/* History Control Bar */}
            <div className="max-w-7xl mx-auto px-8 pt-8 -mb-6 flex flex-wrap items-center gap-6 relative z-20">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    Period: Last 30 Days
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] hover:text-white cursor-pointer transition-colors">
                    <History className="w-3.5 h-3.5" />
                    Daily Breakdowns
                </div>
                <div className="flex-1" />
                <button className="flex items-center gap-2 text-[10px] font-black text-rose-500/70 uppercase tracking-[0.3em] hover:text-rose-400 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear History
                </button>
            </div>

            <ResourceListPage
                title="Recently Accessed"
                subtitle="Resume your studies where you left off. Track your progress across modules."
                icon={Clock}
                accentColor="#6366F1"
                items={items}
                filters={filters}
            />
        </div>
    );
}
