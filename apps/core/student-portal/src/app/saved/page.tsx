'use client';

import ResourceListPage from '../components/resource-list-page';
import { Bookmark, FolderOpen, Tag, Info } from 'lucide-react';

const items = [
    { id: 1, title: 'Advanced Data Structures Study Guide', description: 'Comprehensive notes covering trees, graphs, and hash tables. Includes complexity analysis.', course: 'Computer Science', year: '2025', semester: '1', category: 'Theory', format: 'PDF', date: 'Saved 2d ago', downloads: 234, size: '4.2 MB' },
    { id: 2, title: 'Calculus Formula Cheat Sheet', description: 'One-page formula reference for derivatives, integrals, and series. Essential for Midterms.', course: 'Mathematics', year: '2025', semester: '1', category: 'Summary', format: 'PDF', date: 'Saved 1w ago', downloads: 890, size: '0.5 MB' },
    { id: 3, title: 'React.js Crash Course', description: 'Hands-on tutorial building a complete project management application from scratch.', course: 'Computer Science', year: '2025', semester: '2', category: 'Practical', format: 'MP4', date: 'Saved 3d ago', downloads: 523, size: '1.5 GB' },
    { id: 4, title: 'Macroeconomics Case Study: 2024', description: 'In-depth analysis of global trade patterns and their impact on emerging markets.', course: 'Economics', year: '2025', semester: '1', category: 'Case Study', format: 'PDF', date: 'Saved 5d ago', downloads: 145, size: '2.8 MB' },
    { id: 5, title: 'Introduction to Organic Chemistry Lab Manual', description: 'Pre-lab assignments and safety protocols for experiment series A-F.', course: 'Chemistry', year: '2025', semester: '1', category: 'Lab Manual', format: 'PDF', date: 'Saved yesterday', downloads: 67, size: '5.1 MB' },
    { id: 6, title: 'Modern Physics Past Paper: Winter 2024', description: 'Official past paper with high-quality scan and handwritten solution set.', course: 'Physics', year: '2024', semester: '2', category: 'Past Paper', format: 'PDF', date: 'Saved 4d ago', downloads: 312, size: '3.4 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Physics', 'Economics', 'Chemistry'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Theory', 'Summary', 'Practical', 'Case Study', 'Lab Manual', 'Past Paper'],
};

export default function SavedResourcesPage() {
    return (
        <div className="relative">
            {/* Collection Tabs / Info Bar */}
            <div className="max-w-7xl mx-auto px-8 pt-8 -mb-6 flex flex-wrap items-center gap-6 relative z-20">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <FolderOpen className="w-3.5 h-3.5 text-emerald-500" />
                    Collection: All Bookmarks
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] hover:text-white cursor-pointer transition-colors">
                    <Tag className="w-3.5 h-3.5" />
                    Exam Prep (12)
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] hover:text-white cursor-pointer transition-colors">
                    <Tag className="w-3.5 h-3.5" />
                    Research (5)
                </div>
                <div className="flex-1" />
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
                    <Info className="w-3.5 h-3.5" />
                    Synchronized across all academic devices
                </div>
            </div>

            <ResourceListPage
                title="Saved Resources"
                subtitle="Your personal academic repository of bookmarked materials."
                icon={Bookmark}
                accentColor="#F59E0B"
                items={items}
                filters={filters}
            />
        </div>
    );
}
