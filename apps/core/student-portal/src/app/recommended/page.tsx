'use client';

import ResourceListPage from '../components/resource-list-page';
import { Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const items = [
    { id: 1, title: 'Introduction to Machine Learning Notes', description: 'Recommended based on your enrollment in CS301 and interest in AI research.', course: 'Computer Science', year: '2025', semester: '1', category: 'Trending', format: 'PDF', date: 'Recommended', downloads: 312, size: '6.1 MB' },
    { id: 2, title: 'Cloud Computing Architecture Overview', description: 'Because you viewed "Infrastructure Protocol V2" — top-rated in your department.', course: 'Computer Science', year: '2025', semester: '1', category: 'Popular', format: 'PPTX', date: 'Recommended', downloads: 312, size: '18 MB' },
    { id: 3, title: 'Full Stack Project Boilerplate', description: 'Based on your recent search for "React Setup" — official university starter code.', course: 'Computer Science', year: '2025', semester: '1', category: 'For You', format: 'ZIP', date: 'Recommended', downloads: 567, size: '45 MB' },
    { id: 4, title: 'Linear Algebra Formula Sheet', description: 'Frequently downloaded by students in your Calculus study group.', course: 'Mathematics', year: '2025', semester: '2', category: 'Trending', format: 'PDF', date: 'Recommended', downloads: 189, size: '1.8 MB' },
    { id: 5, title: 'Quantum Mechanics: Semester 1 Review', description: 'New upload in Physics. 80% match with your historical study patterns.', course: 'Physics', year: '2025', semester: '1', category: 'New', format: 'PDF', date: 'Recommended', downloads: 45, size: '12 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Physics'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Trending', 'Popular', 'For You', 'New'],
};

export default function RecommendedPage() {
    return (
        <div className="relative">
            {/* Recommendation Context Bar */}
            <div className="max-w-7xl mx-auto px-8 pt-8 -mb-6 flex flex-wrap items-center gap-6 relative z-20">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    Departmental Trending
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] hover:text-white cursor-pointer transition-colors">
                    <Users className="w-3.5 h-3.5" />
                    Peer Recommendations
                </div>
                <div className="flex-1" />
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    AI Insights: Active
                </div>
            </div>

            <ResourceListPage
                title="Recommended For You"
                subtitle="Smart academic suggestions tailored to your learning journey."
                icon={Sparkles}
                accentColor="#10B981"
                items={items}
                filters={filters}
            />
        </div>
    );
}
