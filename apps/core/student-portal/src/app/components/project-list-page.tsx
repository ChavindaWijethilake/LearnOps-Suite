'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Search,
    Filter,
    ArrowLeft,
    ExternalLink,
    Github,
    Download,
    Clock,
    ChevronDown,
    Users,
    Code,
    FolderOpen,
} from 'lucide-react';

/* ─── Types ─── */
export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    contributors: string[];
    course: string;
    year: string;
    githubUrl?: string;
    externalUrl?: string;
    hasReport: boolean;
    date: string;
    status: 'completed' | 'in-progress' | 'archived';
}

interface ProjectListPageProps {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    accentColor?: string;
    items: ProjectItem[];
    years: string[];
    courses: string[];
}

/* ─── Reusable Project Page Template ─── */
export default function ProjectListPage({
    title,
    subtitle,
    icon: Icon,
    accentColor = '#6366F1',
    items,
    years,
    courses,
}: ProjectListPageProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('All');
    const [selectedCourse, setSelectedCourse] = useState('All');

    const filtered = items.filter((item) => {
        const matchSearch =
            !searchQuery ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchYear = selectedYear === 'All' || item.year === selectedYear;
        const matchCourse = selectedCourse === 'All' || item.course === selectedCourse;
        return matchSearch && matchYear && matchCourse;
    });

    return (
        <div
            className="min-h-screen"
            style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', background: '#0F172A', color: '#94A3B8' }}
        >
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full" style={{ background: `radial-gradient(circle, ${accentColor}15 0%, transparent 70%)` }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">
                {/* Header */}
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors mb-6" style={{ borderRadius: '8px', padding: '6px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>

                <div className="flex items-center gap-5 mb-2">
                    <div className="w-14 h-14 flex items-center justify-center" style={{ borderRadius: '18px', background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}>
                        <Icon className="w-7 h-7" style={{ color: accentColor }} />
                    </div>
                    <div>
                        <h1 className="text-[28px] font-bold text-white tracking-tight">{title}</h1>
                        <p className="text-sm text-slate-500 mt-1 font-medium">{subtitle}</p>
                    </div>
                </div>

                {/* Search + Filters */}
                <div className="mt-8 mb-10 space-y-5">
                    <div className="relative">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search projects by name, technology, or description..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', padding: '16px 24px 16px 56px' }}
                            onFocus={(e) => { e.currentTarget.style.boxShadow = `0 0 0 3px ${accentColor}20`; }}
                            onBlur={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 text-[11px] font-black text-slate-500 uppercase tracking-widest">
                            <Filter className="w-4 h-4" /> Filters:
                        </div>
                        <SelectFilter label="Year" value={selectedYear} options={years} onChange={setSelectedYear} />
                        <SelectFilter label="Course" value={selectedCourse} options={courses} onChange={setSelectedCourse} />
                    </div>
                </div>

                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-6">{filtered.length} projects found</span>

                {/* Project Cards */}
                <div className="space-y-6">
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer hover:-translate-y-1 transition-all duration-500"
                            style={{ borderRadius: '18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${accentColor}30`; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className={`w-2 h-2 ${item.status === 'completed' ? 'bg-emerald-500' : item.status === 'in-progress' ? 'bg-amber-500' : 'bg-slate-600'}`} style={{ borderRadius: '9999px', boxShadow: item.status === 'completed' ? '0 0 8px rgba(16,185,129,0.5)' : 'none' }} />
                                        <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: item.status === 'completed' ? '#10B981' : item.status === 'in-progress' ? '#F59E0B' : '#64748B' }}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-1.5">
                                        <Clock className="w-3 h-3" /> {item.date}
                                    </span>
                                </div>

                                <h3 className="text-[20px] font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-3xl">{item.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {item.techStack.map((tech) => (
                                        <span key={tech} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 text-indigo-300" style={{ borderRadius: '8px', background: 'rgba(99,102,241,0.10)', border: '1px solid rgba(99,102,241,0.20)' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Contributors */}
                                <div className="flex items-center gap-3 mb-5">
                                    <Users className="w-4 h-4 text-slate-600" />
                                    <div className="flex -space-x-2">
                                        {item.contributors.slice(0, 4).map((c, i) => (
                                            <div key={i} className="w-7 h-7 bg-slate-800 overflow-hidden" style={{ borderRadius: '9999px', border: '2px solid #0F172A' }}>
                                                <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(c)}&background=1E293B&color=94A3B8&size=28`} alt={c} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.contributors.join(', ')}</span>
                                </div>

                                {/* Meta + Actions */}
                                <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="flex gap-3">
                                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-2.5 py-1" style={{ borderRadius: '6px', background: 'rgba(255,255,255,0.04)' }}>{item.course}</span>
                                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-2.5 py-1" style={{ borderRadius: '6px', background: 'rgba(255,255,255,0.04)' }}>{item.year}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {item.githubUrl && (
                                            <button className="p-2 text-slate-500 hover:text-white transition-colors" style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.04)' }}>
                                                <Github className="w-4 h-4" />
                                            </button>
                                        )}
                                        {item.externalUrl && (
                                            <button className="p-2 text-slate-500 hover:text-emerald-400 transition-colors" style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.04)' }}>
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                        )}
                                        {item.hasReport && (
                                            <button className="p-2 text-slate-500 hover:text-emerald-400 transition-colors" style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.04)' }}>
                                                <Download className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <FolderOpen className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                        <p className="text-lg font-bold text-slate-500">No projects found</p>
                        <p className="text-sm text-slate-600 mt-1">Try adjusting your filters or search query.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function SelectFilter({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="appearance-none cursor-pointer text-xs font-bold text-white focus:outline-none transition-all pl-4 pr-8 py-2.5"
                style={{ borderRadius: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
                <option value="All" style={{ background: '#1E293B' }}>{label}: All</option>
                {options.map((opt) => (
                    <option key={opt} value={opt} style={{ background: '#1E293B' }}>{opt}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
        </div>
    );
}
