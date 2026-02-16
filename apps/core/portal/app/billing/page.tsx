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
    Lock
} from 'lucide-react';

export default function BillingPortalPage() {
    const [lastSynced, setLastSynced] = useState<string>('');
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        setLastSynced(new Date().toLocaleTimeString());
    }, []);

    const transactions = [
        { id: 1, type: 'Tuition', desc: 'Spring 2026 Semester Tuition', amount: 3500.00, date: 'Jan 15, 2026', method: 'Visa •••• 4242', status: 'Completed' },
        { id: 2, type: 'Fee', desc: 'Laboratory & Material Fees', amount: 250.00, date: 'Jan 18, 2026', method: 'Visa •••• 4242', status: 'Completed' },
        { id: 3, type: 'Refund', desc: 'Financial Aid Adjustment', amount: -450.00, date: 'Feb 02, 2026', method: 'Bank Account', status: 'Pending' },
        { id: 4, type: 'Tuition', desc: 'Vocal Performance Module', amount: 850.00, date: 'Feb 10, 2026', method: 'Mastercard •••• 5555', status: 'Completed' },
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
                            <h1 className="text-3xl font-bold text-white tracking-tight">Billing & Payments</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Institutional Financial HQ</span>
                            <span className="w-1 h-1 bg-slate-700 rounded-full" />
                            <span className="text-[11px] font-medium text-slate-500">Last Synced: {lastSynced || '--:--:--'}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all p-3 rounded-xl group"
                            title="Financial Settings"
                        >
                            <Settings className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        </button>
                        <button className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-xl flex items-center gap-3 group hover:bg-emerald-500/20 transition-all">
                            <ShieldCheck className="w-5 h-5 text-emerald-400" />
                            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Security: SSL Verified</span>
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-10">
                    {/* ── Left Column: Main Actions ── */}
                    <div className="col-span-12 lg:col-span-8 space-y-10">

                        {/* 1. HERO: Current Balance */}
                        <section
                            className="relative overflow-hidden group"
                            style={{
                                borderRadius: '24px',
                                padding: '48px',
                                background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(99,102,241,0.08), transparent)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.30)',
                            }}
                        >
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl -z-1" />
                            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-400/10 blur-[120px] animate-pulse" />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                                <div>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Total Outstanding Balance</p>
                                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">$4,500.00</h2>
                                    <div className="flex items-center gap-3 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full w-fit">
                                        <AlertCircle className="w-4 h-4 text-rose-400" />
                                        <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Next Due: March 15, 2026</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <button
                                        className="bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] font-bold text-sm tracking-[0.1em] uppercase flex items-center justify-center gap-3 transition-all duration-500 hover:-translate-y-1 active:scale-95 shadow-lg shadow-emerald-500/20"
                                        style={{ padding: '20px 48px', borderRadius: '14px' }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                        PAY NOW
                                    </button>
                                    <button
                                        className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-sm tracking-[0.1em] uppercase flex items-center justify-center gap-3 transition-all duration-500"
                                        style={{ padding: '18px 48px', borderRadius: '14px' }}
                                    >
                                        <History className="w-5 h-5 text-emerald-400" />
                                        VIEW STATEMENT
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* 2. TRANSACTION HISTORY */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">Transaction History</h3>
                                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-black">Audit Log & Receipts</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                                        <Search className="w-4 h-4 text-slate-500" />
                                        <input type="text" placeholder="Search log..." className="bg-transparent border-none text-xs text-white focus:outline-none placeholder:text-slate-600 w-24 md:w-40" />
                                    </div>
                                    <button className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {transactions.map((tx) => (
                                    <div
                                        key={tx.id}
                                        className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/2 hover:bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                                        style={{ borderRadius: '20px' }}
                                    >
                                        <div className="flex items-center gap-6">
                                            <div
                                                className="w-14 h-14 flex items-center justify-center"
                                                style={{
                                                    borderRadius: '16px',
                                                    background: tx.amount < 0 ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.03)',
                                                    border: '1px solid rgba(255,255,255,0.05)'
                                                }}
                                            >
                                                {tx.amount < 0 ? <Plus className="w-6 h-6 text-emerald-400 rotate-45" /> : <Receipt className="w-6 h-6 text-emerald-400" />}
                                            </div>
                                            <div>
                                                <h4 className="text-[16px] font-bold text-white group-hover:text-emerald-300 transition-colors">{tx.desc}</h4>
                                                <div className="flex items-center gap-3 mt-1.5">
                                                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{tx.date}</span>
                                                    <span className="w-1 h-1 bg-slate-700 rounded-full" />
                                                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{tx.method}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-0 flex items-center gap-8 justify-between md:justify-end">
                                            <div className="text-right">
                                                <span className={`text-xl font-bold tracking-tighter ${tx.amount < 0 ? 'text-emerald-400' : 'text-white'}`}>
                                                    {tx.amount < 0 ? `+ $${Math.abs(tx.amount).toFixed(2)}` : `- $${tx.amount.toFixed(2)}`}
                                                </span>
                                                <div className="flex items-center justify-end gap-2 mt-1">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                                    <span className="text-[9px] font-black uppercase text-slate-500">Status: {tx.status}</span>
                                                </div>
                                            </div>
                                            <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:text-emerald-400 transition-colors">
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 3. INSTALLMENT PLANS */}
                        <section
                            className="p-10 relative overflow-hidden group"
                            style={{
                                borderRadius: '24px',
                                background: 'rgba(99,102,241,0.03)',
                                border: '1px solid rgba(99,102,241,0.1)'
                            }}
                        >
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Layers className="w-32 h-32 text-indigo-400" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">Active Payment Plan</h3>
                                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mt-1">03/06 Installments Paid</p>
                                    </div>
                                    <button className="text-[11px] font-black text-white uppercase tracking-widest bg-indigo-500/20 hover:bg-indigo-500/30 px-6 py-3 rounded-xl transition-all">
                                        Modify Plan
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[1, 2, 3].map((step) => (
                                        <div key={step} className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl relative overflow-hidden group/card shadow-lg shadow-black/20">
                                            <div className={`absolute top-0 left-0 bottom-0 w-1 ${step === 1 ? 'bg-emerald-500' : 'bg-slate-700'}`} />
                                            <h5 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">March Installment</h5>
                                            <p className="text-2xl font-bold text-white mb-2">$1,500.00</p>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3 h-3 text-slate-600" />
                                                <span className="text-[9px] font-black uppercase text-slate-600">Due: 03/15/2026</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* ── Right Column: Secondary Management ── */}
                    <div className="col-span-12 lg:col-span-4 space-y-10">

                        {/* 1. PAYMENT METHODS */}
                        <section className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-white tracking-tight">Payment Methods</h3>
                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-1">Authorized Sources</p>
                            </div>
                            <div className="space-y-4">
                                <div
                                    className="p-6 flex items-center justify-between group cursor-pointer"
                                    style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center font-black text-indigo-400 text-lg">V</div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Visa **** 4242</p>
                                            <p className="text-[10px] font-black text-slate-600 uppercase mt-1 tracking-widest">Expires 08/2027</p>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                </div>
                                <div
                                    className="p-6 flex items-center justify-between group cursor-pointer border-dashed"
                                    style={{ borderRadius: '20px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                                            <Plus className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                                        </div>
                                        <p className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">Add New Method</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. SUPPORT & HELP */}
                        <section
                            className="p-8 space-y-6 overflow-hidden relative group"
                            style={{ borderRadius: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                        >
                            <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <HelpCircle className="w-24 h-24 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white tracking-tight">Need Assistance?</h3>
                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-1">Billing Support Team</p>
                            </div>
                            <div className="flex flex-col gap-3 relative z-10">
                                <button className="w-full p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 flex items-center gap-4 transition-all group/btn">
                                    <MessageSquare className="w-5 h-5 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                                    <span className="text-xs font-bold text-slate-300">Start Live Chat</span>
                                </button>
                                <button className="w-full p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 flex items-center gap-4 transition-all group/btn">
                                    <HelpCircle className="w-5 h-5 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                                    <span className="text-xs font-bold text-slate-300">View Billing FAQs</span>
                                </button>
                            </div>
                        </section>

                        {/* 3. SECURITY & VERIFICATION */}
                        <section className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl flex items-center gap-6">
                            <Lock className="w-12 h-12 text-emerald-400/30" />
                            <div>
                                <h4 className="text-[11px] font-black text-emerald-400/80 uppercase tracking-widest mb-1 leading-none">Safe & Secure</h4>
                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed">All payments are encrypted using AES-256 protocols and handled via PCI-compliant gateways.</p>
                            </div>
                        </section>
                    </div>
                </div>

                {/* ── Footer Navigation (Lean) ── */}
                <footer className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-10">
                        <Link href="/" className="text-[10px] font-black text-slate-600 uppercase tracking-widest hover:text-emerald-400 transition-colors">Dashboard</Link>
                        <Link href="/billing" className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Billing</Link>
                        <Link href="/enrollment" className="text-[10px] font-black text-slate-600 uppercase tracking-widest hover:text-emerald-400 transition-colors">Enrollment</Link>
                        <Link href="/settings" className="text-[10px] font-black text-slate-600 uppercase tracking-widest hover:text-emerald-400 transition-colors">Settings</Link>
                    </div>
                    <div className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em]">
                        LearnOps Financial System © 2026
                    </div>
                </footer>
            </div>
        </div>
    );
}
