'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Search,
    Filter,
    ArrowLeft,
    Download,
    Eye,
    Clock,
    ChevronDown,
    FileText,
    Star,
    BookOpen,
} from 'lucide-react';

/* ─── Types ─── */
export interface ResourceItem {
    id: number;
    title: string;
    description: string;
    course: string;
    year: string;
    semester: string;
    category: string;
    format: string;
    date: string;
    downloads: number;
    size?: string;
    author?: string;
}

export interface FilterConfig {
    courses: string[];
    years: string[];
    semesters: string[];
    categories: string[];
    formats?: string[];
}

interface ResourceListPageProps {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    accentColor?: string;
    items: ResourceItem[];
    filters: FilterConfig;
}

/* ─── Reusable Page Template ─── */
export default function ResourceListPage({
    title,
    subtitle,
    icon: Icon,
    accentColor = '#10B981',
    items,
    filters,
}: ResourceListPageProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('All');
    const [selectedYear, setSelectedYear] = useState('All');
    const [selectedSemester, setSelectedSemester] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filtered = items.filter((item) => {
        const matchSearch =
            !searchQuery ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchCourse = selectedCourse === 'All' || item.course === selectedCourse;
        const matchYear = selectedYear === 'All' || item.year === selectedYear;
        const matchSemester = selectedSemester === 'All' || item.semester === selectedSemester;
        const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchSearch && matchCourse && matchYear && matchSemester && matchCategory;
    });

    return (
        <div
            className="min-h-screen"
            style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', background: '#0F172A', color: '#94A3B8' }}
        >
            {/* Background depth */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full" style={{ background: `radial-gradient(circle, ${accentColor}15 0%, transparent 70%)` }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-2">
                    <Link href="/resource-center" className="flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors" style={{ borderRadius: '8px', padding: '6px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <ArrowLeft className="w-4 h-4" /> Back
                    </Link>
                </div>

                <div className="flex items-center gap-5 mb-2 mt-6">
                    <div className="w-14 h-14 flex items-center justify-center" style={{ borderRadius: '18px', background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}>
                        <Icon className="w-7 h-7" style={{ color: accentColor }} />
                    </div>
                    <div>
                        <h1 className="text-[28px] font-bold text-white tracking-tight">{title}</h1>
                        <p className="text-sm text-slate-500 mt-1 font-medium">{subtitle}</p>
                    </div>
                </div>

                {/* Search & Filters Bar */}
                <div className="mt-8 mb-10 space-y-5">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            placeholder={`Search ${title.toLowerCase()}...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', padding: '16px 24px 16px 56px' }}
                            onFocus={(e) => { e.currentTarget.style.boxShadow = `0 0 0 3px ${accentColor}20`; e.currentTarget.style.borderColor = `${accentColor}40`; }}
                            onBlur={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                        />
                    </div>

                    {/* Filter chips */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 text-[11px] font-black text-slate-500 uppercase tracking-widest">
                            <Filter className="w-4 h-4" /> Filters:
                        </div>
                        <SelectFilter label="Course" value={selectedCourse} options={filters.courses} onChange={setSelectedCourse} />
                        <SelectFilter label="Year" value={selectedYear} options={filters.years} onChange={setSelectedYear} />
                        <SelectFilter label="Semester" value={selectedSemester} options={filters.semesters} onChange={setSelectedSemester} />
                        <SelectFilter label="Category" value={selectedCategory} options={filters.categories} onChange={setSelectedCategory} />
                    </div>
                </div>

                {/* Results count */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">{filtered.length} results found</span>
                </div>

                {/* Items grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                            style={{ borderRadius: '18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${accentColor}30`; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.25)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
                        >
                            <div className="p-7">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1" style={{ color: accentColor, background: `${accentColor}10`, borderRadius: '8px', border: `1px solid ${accentColor}20` }}>
                                        {item.category}
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-1.5">
                                        <Clock className="w-3 h-3" /> {item.date}
                                    </span>
                                </div>

                                <h3 className="text-[17px] font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 leading-tight">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-5">{item.description}</p>

                                <div className="flex flex-wrap gap-3 mb-5">
                                    <MetaChip label={item.course} />
                                    <MetaChip label={item.year} />
                                    <MetaChip label={`Sem ${item.semester}`} />
                                    <MetaChip label={item.format} />
                                </div>

                                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                                        {item.downloads} downloads {item.size ? `· ${item.size}` : ''}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <button className="p-2 text-slate-500 hover:text-emerald-400 transition-colors" style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.04)' }}>
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-slate-500 hover:text-emerald-400 transition-colors" style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.04)' }}>
                                            <Download className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-slate-500 hover:text-amber-400 transition-colors" style={{ borderRadius: '8px', background: 'rgba(255,255,255,0.04)' }}>
                                            <Star className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <BookOpen className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                        <p className="text-lg font-bold text-slate-500">No resources found</p>
                        <p className="text-sm text-slate-600 mt-1">Try adjusting your filters or search query.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ─── Sub-Components ─── */
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

function MetaChip({ label }: { label: string }) {
    return (
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2.5 py-1" style={{ borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {label}
        </span>
    );
}
