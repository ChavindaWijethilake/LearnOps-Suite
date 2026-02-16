'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Search,
    ArrowLeft,
    ChevronDown,
    Filter,
    BookOpen,
    FileText,
    Video,
    Download,
    Clock,
    Eye,
    Star,
} from 'lucide-react';

const allResults = [
    { id: 1, title: 'Advanced Data Structures Study Guide', description: 'Comprehensive notes covering trees, graphs, and hash tables.', resourceType: 'Text', course: 'Computer Science', year: '2025', lecturer: 'Dr. Silva', tags: ['Algorithms', 'Trees', 'Graphs'], format: 'PDF', date: '2 days ago', downloads: 234 },
    { id: 2, title: 'Introduction to Neural Networks – Lecture 1', description: 'Full recorded lecture covering perceptrons and backpropagation.', resourceType: 'Video', course: 'Computer Science', year: '2025', lecturer: 'Prof. Mendez', tags: ['AI', 'Neural Networks', 'Deep Learning'], format: 'MP4', date: '1 day ago', downloads: 456 },
    { id: 3, title: 'Machine Learning Podcast – Episode 12', description: 'Faculty discussion on the future of generative AI in education.', resourceType: 'Audio', course: 'Computer Science', year: '2025', lecturer: 'Dr. Perera', tags: ['AI', 'Podcast', 'GenAI'], format: 'MP3', date: '3 days ago', downloads: 178 },
    { id: 4, title: 'Cloud Computing Architecture Overview', description: 'Presentation on cloud service models and deployment strategies.', resourceType: 'Slides', course: 'Computer Science', year: '2025', lecturer: 'Dr. Silva', tags: ['Cloud', 'Architecture', 'AWS'], format: 'PPTX', date: '1 week ago', downloads: 312 },
    { id: 5, title: 'Data Structures – Final 2024', description: 'Final examination paper covering trees, dynamic programming, and graph algorithms.', resourceType: 'Text', course: 'Computer Science', year: '2024', lecturer: 'Dr. Silva', tags: ['Exam', 'Past Paper', 'Algorithms'], format: 'PDF', date: 'Archived', downloads: 892 },
    { id: 6, title: 'Linear Algebra Formula Sheet', description: 'Quick reference guide for matrices, eigenvalues, and vector spaces.', resourceType: 'Text', course: 'Mathematics', year: '2025', lecturer: 'Prof. Kumar', tags: ['Matrices', 'Formulas', 'Quick Reference'], format: 'PDF', date: '1 week ago', downloads: 189 },
];

const resourceTypes = ['Text', 'Video', 'Audio', 'Slides', 'Download'];
const courses = ['Computer Science', 'Mathematics', 'Physics', 'Business', 'Engineering', 'Chemistry'];
const years = ['2025', '2024', '2023', '2022'];
const lecturers = ['Dr. Silva', 'Prof. Mendez', 'Dr. Perera', 'Prof. Kumar'];
const allTags = ['AI', 'Algorithms', 'Cloud', 'Exam', 'Neural Networks', 'Matrices', 'Podcast'];
const formats = ['PDF', 'MP4', 'MP3', 'PPTX', 'ZIP', 'DOCX'];

export default function AdvancedSearchPage() {
    const [query, setQuery] = useState('');
    const [selType, setSelType] = useState('All');
    const [selCourse, setSelCourse] = useState('All');
    const [selYear, setSelYear] = useState('All');
    const [selLecturer, setSelLecturer] = useState('All');
    const [selTag, setSelTag] = useState('All');
    const [selFormat, setSelFormat] = useState('All');

    const filtered = allResults.filter((r) => {
        const q = query.toLowerCase();
        const matchQ = !q || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.tags.some(t => t.toLowerCase().includes(q));
        const matchType = selType === 'All' || r.resourceType === selType;
        const matchCourse = selCourse === 'All' || r.course === selCourse;
        const matchYear = selYear === 'All' || r.year === selYear;
        const matchLecturer = selLecturer === 'All' || r.lecturer === selLecturer;
        const matchTag = selTag === 'All' || r.tags.includes(selTag);
        const matchFormat = selFormat === 'All' || r.format === selFormat;
        return matchQ && matchType && matchCourse && matchYear && matchLecturer && matchTag && matchFormat;
    });

    return (
        <div className="min-h-screen" style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', background: '#0F172A', color: '#94A3B8' }}>
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors mb-6" style={{ borderRadius: '8px', padding: '6px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>

                <div className="flex items-center gap-5 mb-2">
                    <div className="w-14 h-14 flex items-center justify-center" style={{ borderRadius: '18px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.30)' }}>
                        <Search className="w-7 h-7 text-indigo-400" />
                    </div>
                    <div>
                        <h1 className="text-[28px] font-bold text-white tracking-tight">Advanced Search</h1>
                        <p className="text-sm text-slate-500 mt-1 font-medium">Search across all resources with multi-dimensional filtering.</p>
                    </div>
                </div>

                {/* Search */}
                <div className="mt-8 mb-6 relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by title, description, or tags..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', padding: '16px 24px 16px 56px' }}
                        onFocus={(e) => { e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.20)'; }}
                        onBlur={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                    />
                </div>

                {/* Filter Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
                    <Sel label="Resource Type" value={selType} options={resourceTypes} onChange={setSelType} />
                    <Sel label="Course" value={selCourse} options={courses} onChange={setSelCourse} />
                    <Sel label="Year" value={selYear} options={years} onChange={setSelYear} />
                    <Sel label="Lecturer" value={selLecturer} options={lecturers} onChange={setSelLecturer} />
                    <Sel label="Tag" value={selTag} options={allTags} onChange={setSelTag} />
                    <Sel label="Format" value={selFormat} options={formats} onChange={setSelFormat} />
                </div>

                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-6">{filtered.length} results found</span>

                <div className="space-y-4">
                    {filtered.map((r) => (
                        <div key={r.id} className="group cursor-pointer hover:-translate-y-0.5 transition-all duration-500" style={{ borderRadius: '18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px 28px', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.30)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 text-indigo-300" style={{ borderRadius: '8px', background: 'rgba(99,102,241,0.10)', border: '1px solid rgba(99,102,241,0.20)' }}>{r.resourceType}</span>
                                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{r.format}</span>
                                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-1"><Clock className="w-3 h-3" /> {r.date}</span>
                                    </div>
                                    <h3 className="text-[17px] font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">{r.title}</h3>
                                    <p className="text-sm text-slate-500 mb-3">{r.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {r.tags.map(t => (
                                            <span key={t} className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-2 py-1" style={{ borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>{t}</span>
                                        ))}
                                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-2 py-1" style={{ borderRadius: '6px', background: 'rgba(255,255,255,0.04)' }}>{r.course}</span>
                                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-2 py-1" style={{ borderRadius: '6px', background: 'rgba(255,255,255,0.04)' }}>{r.year}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <button className="p-2 text-slate-500 hover:text-emerald-400 transition-colors" style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.04)' }}><Eye className="w-4 h-4" /></button>
                                    <button className="p-2 text-slate-500 hover:text-emerald-400 transition-colors" style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.04)' }}><Download className="w-4 h-4" /></button>
                                    <button className="p-2 text-slate-500 hover:text-amber-400 transition-colors" style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.04)' }}><Star className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <BookOpen className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                        <p className="text-lg font-bold text-slate-500">No results found</p>
                        <p className="text-sm text-slate-600 mt-1">Try adjusting your filters or search query.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function Sel({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
    return (
        <div className="relative">
            <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full appearance-none cursor-pointer text-xs font-bold text-white focus:outline-none transition-all pl-4 pr-8 py-3" style={{ borderRadius: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <option value="All" style={{ background: '#1E293B' }}>{label}: All</option>
                {options.map((o) => <option key={o} value={o} style={{ background: '#1E293B' }}>{o}</option>)}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
        </div>
    );
}
