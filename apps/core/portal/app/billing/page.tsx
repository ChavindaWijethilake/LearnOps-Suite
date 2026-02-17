'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    CreditCard,
    Receipt,
    History,
    AlertCircle,
    ArrowRight,
    Download,
    Plus,
    Settings,
    HelpCircle,
    MessageSquare,
    TrendingUp,
    ShieldCheck,
    Calendar,
    Filter,
    Search,
    ChevronDown,
    Layers,
    LayoutDashboard,
    Briefcase,
    GraduationCap,
    Lock,
    Zap
} from 'lucide-react';

export default function BillingPortalPage() {
    const [lastSynced, setLastSynced] = useState<string>('');
    const [activeTab, setActiveTab] = useState<'overview' | 'fees' | 'history' | 'installments' | 'support'>('overview');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    useEffect(() => {
        setLastSynced(new Date().toLocaleTimeString());
    }, []);

    const transactions = [
        { id: 1, type: 'Tuition', desc: 'Spring 2026 Semester Tuition', amount: 3500.00, date: 'Jan 15, 2026', method: 'Visa •••• 4242', status: 'Completed' },
        { id: 2, type: 'Fee', desc: 'Laboratory & Material Fees', amount: 250.00, date: 'Jan 18, 2026', method: 'Visa •••• 4242', status: 'Completed' },
        { id: 3, type: 'Refund', desc: 'Financial Aid Adjustment', amount: -450.00, date: 'Feb 02, 2026', method: 'Bank Account', status: 'Pending' },
        { id: 4, type: 'Tuition', desc: 'Vocal Performance Module', amount: 850.00, date: 'Feb 10, 2026', method: 'Mastercard •••• 5555', status: 'Completed' },
    ];

    const feeBreakdown = [
        { category: 'Academic', item: 'Tuition Fees (Full Time)', amount: 12000.00, scholarship: 4000.00, status: 'Paid' },
        { category: 'Academic', item: 'Registration & Enrollment', amount: 500.00, scholarship: 0, status: 'Paid' },
        { category: 'Campus', item: 'Hostel Accommodation (Premium)', amount: 2500.00, scholarship: 0, status: 'Outstanding' },
        { category: 'Services', item: 'Library & Digital Content', amount: 350.00, scholarship: 0, status: 'Outstanding' },
        { category: 'Exams', item: 'Semester Examination Fees', amount: 450.00, scholarship: 0, status: 'Upcoming' },
    ];

    const installments = [
        { id: 1, date: 'Jan 15, 2026', amount: 1500.00, status: 'Paid' },
        { id: 2, date: 'Feb 15, 2026', amount: 1500.00, status: 'Paid' },
        { id: 3, date: 'Mar 15, 2026', amount: 1500.00, status: 'Outstanding' },
        { id: 4, date: 'Apr 15, 2026', amount: 1500.00, status: 'Upcoming' },
    ];

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-400 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
            {/* Background Depth */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full opacity-100" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
                <div className="absolute top-[40%] -left-[5%] w-[45%] h-[45%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12">
                {/* ── Header ── */}
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <div
                                className="w-10 h-10 flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(135deg,#10B981,#6366F1)',
                                    borderRadius: '12px',
                                    padding: '1.5px',
                                }}
                            >
                                <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-white tracking-tight">Financial Command</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Institutional Billing Protocol</span>
                            <span className="w-1 h-1 bg-slate-700 rounded-full" />
                            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Active Session: {lastSynced || '--:--:--'}</span>
                        </div>
                    </div>

                    <nav className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl">
                        {[
                            { id: 'overview', label: 'Overview', icon: LayoutDashboard },
                            { id: 'fees', label: 'Fees', icon: Receipt },
                            { id: 'history', label: 'History', icon: History },
                            { id: 'installments', label: 'Installments', icon: Layers },
                            { id: 'support', label: 'Support', icon: MessageSquare },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all text-[11px] font-black uppercase tracking-widest ${activeTab === tab.id ? 'bg-emerald-500 text-[#0F172A]' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="hidden md:inline">{tab.label}</span>
                            </button>
                        ))}
                    </nav>
                </header>

                <div className="grid grid-cols-12 gap-10">
                    {/* ── Main Content Area ── */}
                    <div className="col-span-12 lg:col-span-9">
                        {activeTab === 'overview' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                {/* 1. BALANCE HERO */}
                                <section
                                    className="relative overflow-hidden group"
                                    style={{
                                        borderRadius: '32px',
                                        padding: '56px',
                                        background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(99,102,241,0.1), transparent)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        boxShadow: '0 30px 60px rgba(0,0,0,0.40)',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl -z-1" />
                                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-1000">
                                        <TrendingUp className="w-64 h-64 text-emerald-400" />
                                    </div>

                                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Aggregate Outstanding</p>
                                            <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-6">$4,500<span className="text-4xl text-slate-500">.00</span></h2>
                                            <div className="flex flex-wrap items-center gap-4">
                                                <div className="flex items-center gap-3 px-5 py-2.5 bg-rose-500/15 border border-rose-500/20 rounded-xl">
                                                    <AlertCircle className="w-4 h-4 text-rose-400" />
                                                    <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest leading-none">Due: March 15, 2026</span>
                                                </div>
                                                <div className="flex items-center gap-3 px-5 py-2.5 bg-emerald-500/15 border border-emerald-500/20 rounded-xl text-emerald-400">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Installment Plan Active</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5">
                                            <button
                                                className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-1.5 active:scale-95 shadow-2xl shadow-emerald-500/30 group/btn"
                                                style={{ padding: '24px 40px', borderRadius: '18px' }}
                                                onClick={() => setIsPaymentModalOpen(true)}
                                            >
                                                PAY BALANCE <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                            </button>
                                            <button
                                                className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-1 active:scale-95 shadow-xl"
                                                style={{ padding: '24px 40px', borderRadius: '18px' }}
                                            >
                                                DOWNLOAD INVOICE <Download className="w-5 h-5 text-emerald-400" />
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                {/* 2. QUICKS STATS */}
                                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        { label: 'Total Billed', value: '$15,300', sub: 'Academic Year 2026', icon: Receipt, accent: '#10B981' },
                                        { label: 'Scholarships', value: '$4,000', sub: 'Merit-Based Excellence', icon: GraduationCap, accent: '#6366F1' },
                                        { label: 'Paid to Date', value: '$6,800', sub: '68% Completion Rate', icon: History, accent: '#F59E0B' },
                                    ].map((stat, i) => (
                                        <div key={i} className="p-8 bg-white/3 border border-white/5 rounded-3xl hover:bg-white/5 transition-all duration-500 group">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-500 group-hover:text-white transition-colors">
                                                    <stat.icon className="w-6 h-6" style={{ color: stat.accent + '80' }} />
                                                </div>
                                                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">MTD Sync</span>
                                            </div>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                                            <h4 className="text-3xl font-black text-white tracking-tight group-hover:text-emerald-300 transition-colors">{stat.value}</h4>
                                            <p className="text-[10px] font-medium text-slate-600 mt-2 uppercase tracking-widest">{stat.sub}</p>
                                        </div>
                                    ))}
                                </section>

                                {/* 3. AI INTELLIGENCE & NOTIFICATIONS */}
                                <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {/* AI Insights */}
                                    <div className="p-10 bg-slate-900 border border-emerald-500/20 rounded-[32px] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <Zap className="w-32 h-32 text-emerald-400" />
                                        </div>
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
                                                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.2em]">Alpha-AI Protocol</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white tracking-tight">Financial Intelligence</h3>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-emerald-500">
                                                <p className="text-[11px] text-slate-400 leading-relaxed">
                                                    Your payment behavior is in the <span className="text-emerald-400 font-bold">top 5%</span> of students. Predictable risk scoring suggests a <span className="text-emerald-400 font-bold">0.02%</span> delinquency probability.
                                                </p>
                                            </div>
                                            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-indigo-500">
                                                <p className="text-[11px] text-slate-400 leading-relaxed">
                                                    <span className="text-indigo-400 font-bold italic">AI Suggestion:</span> Consolidate your April and May installments to unlock a <span className="text-indigo-400 font-bold">$120 早割 (Early Bird) credit</span>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* System Notifications */}
                                    <div className="p-10 bg-white/3 border border-white/5 rounded-[32px] space-y-8">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-bold text-white tracking-tight">Priority Alerts</h3>
                                            <HelpCircle className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { text: 'Tuition Payment Confirmed', time: '2h ago', icon: ShieldCheck, type: 'success' },
                                                { text: 'New Installment Plan Request Approved', time: '1d ago', icon: Layers, type: 'info' },
                                                { text: 'Reminder: Academic Excellence Scholarship applied', time: '3d ago', icon: GraduationCap, type: 'info' },
                                            ].map((note, i) => (
                                                <div key={i} className="flex items-start gap-5 p-4 bg-white/2 hover:bg-white/5 border border-white/5 rounded-2xl transition-all group cursor-pointer">
                                                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${note.type === 'success' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]'}`} />
                                                    <div className="flex-1">
                                                        <p className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{note.text}</p>
                                                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-1 block">{note.time}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="w-full py-4 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.25em] transition-colors border-t border-white/5">View All Announcements</button>
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === 'fees' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                <section className="p-10 bg-white/3 border border-white/5 rounded-[32px] shadow-2xl">
                                    <div className="flex items-center justify-between mb-10">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">Itemized Fee Breakdown</h3>
                                            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-1">Sessonal Assessment 2025/2026</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                                                <Filter className="w-4 h-4" /> Filter
                                            </button>
                                            <button className="px-5 py-2.5 bg-emerald-500 text-[#0F172A] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center gap-2">
                                                <Download className="w-4 h-4" /> Export CSV
                                            </button>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead className="bg-[#0F172A] border-b border-white/10">
                                                <tr>
                                                    <th className="px-8 py-5 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Category</th>
                                                    <th className="px-8 py-5 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Institutional Item</th>
                                                    <th className="px-8 py-5 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] text-right">Gross Amount</th>
                                                    <th className="px-8 py-5 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] text-right">Scholarship</th>
                                                    <th className="px-8 py-5 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] text-center">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {feeBreakdown.map((fee, i) => (
                                                    <tr key={i} className="hover:bg-white/2 transition-colors group">
                                                        <td className="px-8 py-6 text-[10px] font-black text-emerald-500 uppercase tracking-widest">{fee.category}</td>
                                                        <td className="px-8 py-6">
                                                            <div className="text-[13px] font-bold text-white group-hover:text-emerald-300 transition-colors">{fee.item}</div>
                                                        </td>
                                                        <td className="px-8 py-6 text-right text-[14px] font-black text-white">${fee.amount.toLocaleString()}</td>
                                                        <td className="px-8 py-6 text-right text-[14px] font-bold text-indigo-400">-${fee.scholarship.toLocaleString()}</td>
                                                        <td className="px-8 py-6 text-center">
                                                            <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border ${fee.status === 'Paid' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : fee.status === 'Outstanding' ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-slate-500/10 border-slate-500/20 text-slate-400'}`}>
                                                                {fee.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-10 pt-10 border-t border-white/5 flex justify-end">
                                        <div className="w-80 space-y-4">
                                            <div className="flex justify-between text-[11px] font-black text-slate-500 uppercase tracking-widest text-right">
                                                <span>Sub-Total Payable</span>
                                                <span className="text-white">$15,800.00</span>
                                            </div>
                                            <div className="flex justify-between text-[11px] font-black text-indigo-400 uppercase tracking-widest text-right">
                                                <span>Aggregate Scholarship</span>
                                                <span>-$4,000.00</span>
                                            </div>
                                            <div className="flex justify-between text-[11px] font-black text-rose-400 uppercase tracking-widest text-right">
                                                <span>Miscellaneous Adjustments</span>
                                                <span>-$300.00</span>
                                            </div>
                                            <div className="pt-4 border-t border-white/10 flex justify-between">
                                                <span className="text-xs font-black text-white uppercase tracking-[0.2em]">Net Owed Liability</span>
                                                <span className="text-2xl font-black text-white tracking-tighter">$11,500.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="p-10 bg-emerald-500/5 border border-emerald-500/10 rounded-[32px] flex flex-col md:flex-row items-center gap-10">
                                    <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center">
                                        <Lock className="w-10 h-10 text-emerald-400" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h4 className="text-lg font-bold text-white tracking-tight mb-2">Authenticated Settlement Protocol</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">All financial calculations are verified against the central student registry and subject to institutional audit. For discrepancies, please raise a formal dispute under the Support tab.</p>
                                    </div>
                                    <button className="px-8 py-4 bg-white text-[#0F172A] font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-lg active:scale-95">Verify Calculations</button>
                                </section>
                            </div>
                        )}

                        {activeTab === 'history' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                <section className="p-10 bg-white/3 border border-white/5 rounded-[32px]">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">Financial Transaction Ledger</h3>
                                            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-1">Historical Audit Log & Receipt Archive</p>
                                        </div>
                                        <div className="flex items-center gap-3 bg-[#0F172A] p-1 rounded-xl border border-white/10">
                                            {['All', 'Payments', 'Refunds'].map(f => (
                                                <button key={f} className="px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all">
                                                    {f}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {transactions.map((tx) => (
                                            <div
                                                key={tx.id}
                                                className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-[#0F172A] hover:bg-white/3 border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                                                style={{ borderRadius: '24px' }}
                                            >
                                                <div className="flex items-center gap-8">
                                                    <div
                                                        className="w-16 h-16 flex items-center justify-center"
                                                        style={{
                                                            borderRadius: '20px',
                                                            background: tx.amount < 0 ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.03)',
                                                            border: '1px solid rgba(255,255,255,0.05)'
                                                        }}
                                                    >
                                                        {tx.amount < 0 ? <Plus className="w-7 h-7 text-emerald-400 rotate-45" /> : <Receipt className="w-7 h-7 text-emerald-400" />}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[17px] font-bold text-white group-hover:text-emerald-300 transition-colors">{tx.desc}</h4>
                                                        <div className="flex items-center gap-4 mt-2">
                                                            <div className="flex items-center gap-2">
                                                                <Calendar className="w-3.5 h-3.5 text-slate-600" />
                                                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{tx.date}</span>
                                                            </div>
                                                            <span className="w-1 h-1 bg-slate-800 rounded-full" />
                                                            <div className="flex items-center gap-2">
                                                                <CreditCard className="w-3.5 h-3.5 text-slate-600" />
                                                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{tx.method}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-6 md:mt-0 flex items-center gap-10 justify-between md:justify-end">
                                                    <div className="text-right">
                                                        <span className={`text-2xl font-black tracking-tighter ${tx.amount < 0 ? 'text-emerald-400' : 'text-white'}`}>
                                                            {tx.amount < 0 ? `+ $${Math.abs(tx.amount).toFixed(2)}` : `- $${tx.amount.toFixed(2)}`}
                                                        </span>
                                                        <div className={`text-[9px] font-black uppercase mt-2 px-3 py-1 rounded-full border w-fit ml-auto ${tx.status === 'Completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}`}>
                                                            {tx.status}
                                                        </div>
                                                    </div>
                                                    <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-500 hover:text-[#0F172A] transition-all group/dl shadow-lg">
                                                        <Download className="w-5 h-5 group-hover/dl:scale-110 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-10 py-6 border-2 border-dashed border-white/5 hover:border-white/10 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.3em] transition-all rounded-3xl">Load Archive Transactions From 2024-2025</button>
                                </section>
                            </div>
                        )}

                        {activeTab === 'installments' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                <section className="p-12 bg-indigo-500/5 border border-indigo-500/10 rounded-[40px] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-1000">
                                        <Layers className="w-64 h-64 text-indigo-400" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
                                            <div>
                                                <div className="inline-block px-4 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-xl mb-4">
                                                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Plan: Institutional-6-Flex</span>
                                                </div>
                                                <h3 className="text-3xl font-bold text-white tracking-tight">Staggered Payment Architecture</h3>
                                                <p className="text-slate-500 text-sm mt-3 max-w-xl font-medium leading-relaxed">System-calculated installments optimized for student liquidity. All plans are subject to quarterly review and credit assessment.</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Plan Utilization</p>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-3xl font-black text-white">50%</span>
                                                    <div className="w-32 h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                                        <div className="w-1/2 h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {installments.map((inst) => (
                                                <div key={inst.id} className={`p-8 rounded-3xl border transition-all duration-500 ${inst.status === 'Paid' ? 'bg-emerald-500/10 border-emerald-500/20' : inst.status === 'Outstanding' ? 'bg-indigo-500/10 border-indigo-500/20 shadow-2xl shadow-indigo-500/10' : 'bg-white/3 border-white/5'}`}>
                                                    <div className="flex items-center justify-between mb-8">
                                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${inst.status === 'Paid' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-black/20 text-slate-500'}`}>
                                                            {inst.status === 'Paid' ? <ShieldCheck className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
                                                        </div>
                                                        <span className={`text-[10px] font-black uppercase tracking-widest ${inst.status === 'Paid' ? 'text-emerald-500' : 'text-slate-600'}`}>{inst.status}</span>
                                                    </div>
                                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Installment {inst.id}</p>
                                                    <h4 className="text-2xl font-black text-white tracking-tighter mb-4">${inst.amount.toLocaleString()}</h4>
                                                    <div className="pt-4 border-t border-white/5 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                                                        {inst.date}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-16 flex flex-col md:flex-row items-center gap-10 p-8 bg-black/20 border border-white/5 rounded-3xl">
                                            <div className="flex-1 text-center md:text-left">
                                                <h4 className="text-sm font-bold text-white tracking-[0.05em] mb-2 uppercase">Request Installment Extension</h4>
                                                <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-widest">Eligible students can apply for a <span className="text-indigo-400 font-bold">30-day grace period</span> based on academic standing and credit history.</p>
                                            </div>
                                            <button className="px-10 py-4 bg-indigo-500 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-indigo-500 transition-all shadow-xl active:scale-95 whitespace-nowrap">File Extension Request</button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === 'support' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="p-10 bg-white/3 border border-white/5 rounded-[40px] space-y-10">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">Billing Resolution Hub</h3>
                                            <p className="text-sm text-slate-500 mt-2 font-medium">Dispute charges, verify payments, or contact the bursary.</p>
                                        </div>

                                        <div className="space-y-4">
                                            {[
                                                { label: 'Raise Billing Dispute', icon: HelpCircle, color: '#EF4444' },
                                                { label: 'Submit Payment/Remittance Proof', icon: Plus, color: '#10B981' },
                                                { label: 'Apply for Fee Waiver', icon: GraduationCap, color: '#6366F1' },
                                                { label: 'Contact Finance Office', icon: MessageSquare, color: '#F59E0B' },
                                            ].map((opt, i) => (
                                                <button key={i} className="w-full group p-6 bg-[#0F172A] hover:bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between transition-all duration-300">
                                                    <div className="flex items-center gap-5">
                                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white transition-all text-slate-500 group-hover:text-[#0F172A]">
                                                            <opt.icon className="w-6 h-6" />
                                                        </div>
                                                        <span className="text-[13px] font-bold text-white">{opt.label}</span>
                                                    </div>
                                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-emerald-400" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="p-10 bg-emerald-500/5 border border-emerald-500/10 rounded-[40px] relative overflow-hidden group">
                                            <div className="absolute -bottom-10 -right-10 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <HelpCircle className="w-32 h-32 text-emerald-400" />
                                            </div>
                                            <h4 className="text-lg font-bold text-white tracking-tight mb-4">Frequently Asked Questions</h4>
                                            <div className="space-y-6">
                                                {[
                                                    'How do I update my primary credit card?',
                                                    'When is the late fee assessed?',
                                                    'Are there student loan integrations available?',
                                                    'How to download my 1098-T tax form?'
                                                ].map((q, i) => (
                                                    <div key={i} className="flex gap-4 group cursor-pointer">
                                                        <ChevronDown className="w-4 h-4 mt-0.5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                                                        <span className="text-xs text-slate-400 font-bold group-hover:text-white transition-colors">{q}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <Link href="/help">
                                                <button className="mt-10 py-4 px-8 border border-emerald-500/20 rounded-xl text-[10px] font-black text-emerald-400 uppercase tracking-widest hover:bg-emerald-500 hover:text-[#0F172A] transition-all">Go to Full KB</button>
                                            </Link>
                                        </div>

                                        <div className="p-10 bg-[#0F172A] border border-white/10 rounded-[40px] flex items-center gap-8">
                                            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center">
                                                <HelpCircle className="w-8 h-8 text-slate-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white tracking-[0.05em] uppercase">Emergency Support</h4>
                                                <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mt-1">Available 24/7 for account locks</p>
                                                <div className="text-xs text-emerald-400 font-bold mt-2">+1 (555) 900-FINANCE</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>

                    {/* ── Sidebar: Global Financial Health ── */}
                    <div className="col-span-12 lg:col-span-3 space-y-10">
                        {/* Security Indicators */}
                        <section className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl space-y-6">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-black text-white uppercase tracking-widest leading-none mb-1">Vault Security</h4>
                                    <p className="text-[9px] text-emerald-500/70 font-black uppercase tracking-widest">TLS 1.3 Active</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Encrypted Pipe</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">AES-256 Storage</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                </div>
                            </div>
                        </section>

                        {/* Payment Methods Quick View */}
                        <section className="space-y-6">
                            <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                                Authorized Cards
                                <div className="h-px flex-1 bg-white/5" />
                            </h4>
                            <div className="space-y-3">
                                {[
                                    { label: 'Visa •••• 4242', exp: '08/2027', icon: CreditCard, color: 'emerald' },
                                    { label: 'MC •••• 5555', exp: '02/2026', icon: CreditCard, color: 'indigo' },
                                ].map((card, i) => (
                                    <div key={i} className="p-5 flex items-center justify-between group cursor-pointer bg-white/2 hover:bg-white/5 border border-white/5 rounded-2xl transition-all">
                                        <div className="flex items-center gap-4">
                                            <card.icon className={`w-5 h-5 ${card.color === 'emerald' ? 'text-emerald-400' : 'text-indigo-400'}`} />
                                            <div>
                                                <p className="text-xs font-bold text-white tracking-tight">{card.label}</p>
                                                <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-0.5">{card.exp}</p>
                                            </div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full border border-white/20" />
                                    </div>
                                ))}
                                <button className="w-full p-5 border-2 border-dashed border-white/5 hover:border-emerald-500/30 rounded-2xl flex items-center justify-center gap-3 group transition-all">
                                    <Plus className="w-4 h-4 text-slate-600 group-hover:text-emerald-400" />
                                    <span className="text-[10px] font-black text-slate-600 group-hover:text-white uppercase tracking-widest">Connect New Node</span>
                                </button>
                            </div>
                        </section>

                        {/* Recent Activity Mini-Feed */}
                        <section className="space-y-6">
                            <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                                Real-time Stream
                                <div className="h-px flex-1 bg-white/5" />
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { text: 'Invoice Generated: #INV-0024', status: 'delivered' },
                                    { text: 'Payment Method: MC added', status: 'verified' },
                                    { text: 'Session Heartbeat', status: 'active' },
                                ].map((sys, i) => (
                                    <div key={i} className="flex gap-4 p-3 bg-white/2 border border-white/5 rounded-xl">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
                                        <div className="flex-1">
                                            <p className="text-[10px] font-bold text-slate-500 tracking-tight leading-none mb-1">{sys.text}</p>
                                            <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">{sys.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* ── Footer Navigation (Industrial) ── */}
                <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-center flex-wrap justify-center gap-10">
                        {['Dashboard', 'Billing Hub', 'Enrollment', 'Audit Logs', 'API Access'].map((f) => (
                            <Link key={f} href="#" className="text-[10px] font-black text-slate-600 uppercase tracking-[0.25em] hover:text-emerald-400 transition-colors">
                                {f}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="text-[9px] font-black text-slate-700 uppercase tracking-[0.4em]">
                            LearnOps Financial Infrastructure © 2026
                        </div>
                        <div className="flex items-center gap-3 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Core-Alpha Status: Nominal</span>
                        </div>
                    </div>
                </footer>
            </div>

            {/* ── Secure Payment Modal ── */}
            {isPaymentModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setIsPaymentModalOpen(false)} />

                    <div
                        className="relative w-full max-w-2xl bg-slate-900 border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 overflow-hidden"
                        style={{ borderRadius: '40px' }}
                    >
                        {/* Modal Header */}
                        <div className="p-10 border-b border-white/5 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-black text-white tracking-tight">Authorized Settlement</h3>
                                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mt-1">Transaction ID: TX-7729-ALPHA</p>
                            </div>
                            <button
                                onClick={() => setIsPaymentModalOpen(false)}
                                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all"
                            >
                                <span className="text-2xl leading-none">×</span>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-10 space-y-10">
                            {/* Summary Card */}
                            <div className="p-8 bg-white/3 border border-white/5 rounded-3xl">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Amount to Remit</span>
                                    <span className="text-4xl font-black text-white tracking-tighter">$4,500.00</span>
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div className="space-y-6">
                                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest px-1">Select Funding Source</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { id: 'visa', label: 'Visa •••• 4242', meta: 'Primary Method', icon: CreditCard, active: true },
                                        { id: 'mc', label: 'MC •••• 5555', meta: 'Secondary Account', icon: CreditCard, active: false },
                                        { id: 'bank', label: 'Bank Transfer', meta: 'Direct Remittance', icon: ShieldCheck, active: false },
                                        { id: 'wallet', label: 'Digital Wallet', meta: 'Quick Settlement', icon: Zap, active: false },
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            className={`p-6 flex flex-col gap-4 text-left rounded-3xl transition-all duration-300 border ${opt.active ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-white/2 border-white/5 hover:bg-white/5'}`}
                                        >
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${opt.active ? 'bg-emerald-500 text-[#0F172A]' : 'bg-white/5 text-slate-500'}`}>
                                                <opt.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className={`text-xs font-black uppercase text-white ${opt.active ? 'text-emerald-400' : ''}`}>{opt.label}</p>
                                                <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-1">{opt.meta}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-start gap-5">
                                <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed italic uppercase tracking-wider">
                                    Your session is being monitored for security. By initiating this transaction, you authorize LearnOps Financial to debit the selected source for the amount indicated.
                                </p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-10 bg-slate-900/50 border-t border-white/5 flex gap-4">
                            <button
                                onClick={() => setIsPaymentModalOpen(false)}
                                className="flex-1 py-5 bg-white/5 hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl transition-all"
                            >
                                ABORT TRANSACTION
                            </button>
                            <button
                                className="flex-[1.5] py-5 bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-emerald-500/20"
                                onClick={() => {
                                    alert('Authenticating Transaction... (Demo)');
                                    setIsPaymentModalOpen(false);
                                }}
                            >
                                AUTHORIZE SETTLEMENT
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
