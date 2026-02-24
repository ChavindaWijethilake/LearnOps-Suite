'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Upload,
  FileText,
  ChevronDown,
  Tag,
  Plus,
  X,
  CheckCircle,
} from 'lucide-react';

const courseOptions = ['Computer Science', 'Mathematics', 'Physics', 'Business', 'Engineering', 'Chemistry', 'Design', 'General'];
const yearOptions = ['2025', '2024', '2023', '2022'];
const categoryOptions = ['Lecture Notes', 'Tutorial', 'Lab Manual', 'Past Paper', 'Coursework', 'Project', 'Presentation', 'Video', 'Audio', 'Dataset', 'Template', 'Other'];

export default function SubmitResourcePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (t: string) => setTags(tags.filter(x => x !== t));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', background: '#0F172A' }}>
        <div className="text-center">
          <div className="w-20 h-20 mx-auto flex items-center justify-center mb-6" style={{ borderRadius: '9999px', background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.30)' }}>
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Resource Submitted!</h2>
          <p className="text-slate-500 mb-8">Your contribution will be reviewed and published shortly.</p>
          <Link href="/" className="text-sm font-bold text-emerald-400 hover:text-white transition-colors" style={{ padding: '14px 32px', borderRadius: '12px', background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.20)' }}>
            Return to Resource Center
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', background: '#0F172A', color: '#94A3B8' }}>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors mb-6" style={{ borderRadius: '8px', padding: '6px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <div className="flex items-center gap-5 mb-8">
          <div className="w-14 h-14 flex items-center justify-center" style={{ borderRadius: '18px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.30)' }}>
            <Upload className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-[28px] font-bold text-white tracking-tight">Submit Resource</h1>
            <p className="text-sm text-slate-500 mt-1 font-medium">Upload a new resource to the knowledge base.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* File Upload */}
          <div className="cursor-pointer group" style={{ borderRadius: '18px', border: '2px dashed rgba(255,255,255,0.10)', padding: '48px', textAlign: 'center' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.30)'; e.currentTarget.style.background = 'rgba(16,185,129,0.03)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.background = 'transparent'; }}
          >
            <Upload className="w-10 h-10 text-slate-600 mx-auto mb-3 group-hover:text-emerald-400 transition-colors" />
            <p className="text-base font-bold text-white mb-1">Drop your file here or click to browse</p>
            <p className="text-sm text-slate-500">PDF, DOCX, PPTX, MP4, MP3, ZIP (max 200MB)</p>
          </div>

          {/* Title */}
          <div>
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-2">Resource Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter resource title..." required className="w-full text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 20px' }}
              onFocus={(e) => { e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.15)'; }}
              onBlur={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-2">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the resource..." rows={4} required className="w-full text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all resize-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 20px' }}
              onFocus={(e) => { e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.15)'; }}
              onBlur={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            />
          </div>

          {/* Selects */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-2">Category</label>
              <div className="relative">
                <select value={category} onChange={(e) => setCategory(e.target.value)} required className="w-full appearance-none cursor-pointer text-sm font-bold text-white focus:outline-none transition-all pl-4 pr-8 py-3.5" style={{ borderRadius: '12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <option value="" style={{ background: '#1E293B' }}>Select...</option>
                  {categoryOptions.map(o => <option key={o} value={o} style={{ background: '#1E293B' }}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-2">Course</label>
              <div className="relative">
                <select value={course} onChange={(e) => setCourse(e.target.value)} required className="w-full appearance-none cursor-pointer text-sm font-bold text-white focus:outline-none transition-all pl-4 pr-8 py-3.5" style={{ borderRadius: '12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <option value="" style={{ background: '#1E293B' }}>Select...</option>
                  {courseOptions.map(o => <option key={o} value={o} style={{ background: '#1E293B' }}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-2">Academic Year</label>
              <div className="relative">
                <select value={year} onChange={(e) => setYear(e.target.value)} required className="w-full appearance-none cursor-pointer text-sm font-bold text-white focus:outline-none transition-all pl-4 pr-8 py-3.5" style={{ borderRadius: '12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <option value="" style={{ background: '#1E293B' }}>Select...</option>
                  {yearOptions.map(o => <option key={o} value={o} style={{ background: '#1E293B' }}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-2">Tags</label>
            <div className="flex items-center gap-3 mb-3">
              <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }} placeholder="Add a tag..." className="flex-1 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px 20px' }} />
              <button type="button" onClick={addTag} className="p-3 text-emerald-400 hover:bg-emerald-500/10 transition-colors" style={{ borderRadius: '12px', border: '1px solid rgba(16,185,129,0.20)' }}>
                <Plus className="w-5 h-5" />
              </button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="text-[11px] font-bold text-emerald-300 flex items-center gap-2 px-3 py-1.5 cursor-pointer" style={{ borderRadius: '8px', background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.20)' }} onClick={() => removeTag(t)}>
                    {t} <X className="w-3 h-3" />
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <button type="submit" className="w-full text-[#0F172A] font-bold text-sm flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-95 transition-all duration-500" style={{ padding: '18px', borderRadius: '14px', background: '#10B981', boxShadow: '0 10px 20px rgba(16,185,129,0.30)', letterSpacing: '0.1em' }}>
            <Upload className="w-5 h-5" /> SUBMIT RESOURCE
          </button>
        </form>
      </div>
    </div>
  );
}
