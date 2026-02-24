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
    Zap,
    CheckCircle2,
    X,
    Loader2,
    Wallet,
    Landmark
} from 'lucide-react';

export default function BillingPortalPage() {
    const [lastSynced, setLastSynced] = useState<string>('');
    const [activeTab, setActiveTab] = useState<'overview' | 'fees' | 'history' | 'installments' | 'support'>('fees'); // Default to fees for easier testing
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Fee Selection State
    const [selectedFees, setSelectedFees] = useState<string[]>(['fee-1', 'fee-3', 'fee-4']); // Default selected required items
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

    // Payment Flow State
    const [paymentStep, setPaymentStep] = useState(1); // 1: Review, 2: Method, 3: Processing, 4: Success
    const [selectedMethod, setSelectedMethod] = useState('visa');

    useEffect(() => {
        setLastSynced(new Date().toLocaleTimeString());
    }, []);

    // -- Mock Data --

    const transactions = [
        { id: 1, type: 'Tuition', desc: 'Spring 2026 Semester Tuition', amount: 3500.00, date: 'Jan 15, 2026', method: 'Visa •••• 4242', status: 'Completed' },
        { id: 2, type: 'Fee', desc: 'Laboratory & Material Fees', amount: 250.00, date: 'Jan 18, 2026', method: 'Visa •••• 4242', status: 'Completed' },
        { id: 3, type: 'Refund', desc: 'Financial Aid Adjustment', amount: -450.00, date: 'Feb 02, 2026', method: 'Bank Account', status: 'Pending' },
        { id: 4, type: 'Tuition', desc: 'Vocal Performance Module', amount: 850.00, date: 'Feb 10, 2026', method: 'Mastercard •••• 5555', status: 'Completed' },
    ];

    const feeBreakdown = [
        { id: 'fee-1', category: 'Academic', item: 'Tuition Fees (Full Time)', amount: 12000.00, scholarship: 4000.00, status: 'Outstanding', required: true },
        { id: 'fee-2', category: 'Academic', item: 'Registration & Enrollment', amount: 500.00, scholarship: 0, status: 'Paid', required: true },
        { id: 'fee-3', category: 'Campus', item: 'Hostel Accommodation (Premium)', amount: 2500.00, scholarship: 0, status: 'Outstanding', required: true },
        { id: 'fee-4', category: 'Services', item: 'Library & Digital Content', amount: 350.00, scholarship: 0, status: 'Outstanding', required: true },
        { id: 'fee-5', category: 'Exams', item: 'Semester Examination Fees', amount: 450.00, scholarship: 0, status: 'Upcoming', required: true },
    ];

    const optionalAddons = [
        { id: 'add-1', name: 'Campus Gym Access', desc: 'Full semester access to fitness center', amount: 150.00, icon: Zap },
        { id: 'add-2', name: 'Parking Permit (Zone A)', desc: 'Premium parking near academic block', amount: 200.00, icon: Briefcase },
        { id: 'add-3', name: 'Extra Printing Credits', desc: '500 additional pages for library printers', amount: 25.00, icon: Receipt },
        { id: 'add-4', name: 'Student Union Membership', desc: 'Access to exclusive events and discounts', amount: 50.00, icon: Users },
    ];

    const installments = [
        { id: 1, date: 'Jan 15, 2026', amount: 1500.00, status: 'Paid' },
        { id: 2, date: 'Feb 15, 2026', amount: 1500.00, status: 'Paid' },
        { id: 3, date: 'Mar 15, 2026', amount: 1500.00, status: 'Outstanding' },
        { id: 4, date: 'Apr 15, 2026', amount: 1500.00, status: 'Upcoming' },
    ];

    // -- Logic --

    const toggleFee = (id: string) => {
        setSelectedFees(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    const toggleAddon = (id: string) => {
        setSelectedAddons(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    const calculateTotal = () => {
        let total = 0;
        feeBreakdown.forEach(fee => {
            if (selectedFees.includes(fee.id) && fee.status === 'Outstanding') {
                total += (fee.amount - fee.scholarship);
            }
        });
        optionalAddons.forEach(addon => {
            if (selectedAddons.includes(addon.id)) {
                total += addon.amount;
            }
        });
        return total;
    };

    const handlePayment = () => {
        setPaymentStep(3); // Processing
        setTimeout(() => {
            setPaymentStep(4); // Success
            // Here you would typically call an API
        }, 3000);
    };

    if (!mounted) {
        return <div className="min-h-screen bg-[#0F172A]" />;
    }

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
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 p-[1.5px]">
                                <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-white tracking-tight">Financial Command</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] bg-emerald-500/10 px-2 py-0.5 rounded">Billing Protocol V4</span>
                            <span className="w-1 h-1 bg-slate-700 rounded-full" />
                            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Synced: {lastSynced || '--:--'}</span>
                        </div>
                    </div>

                    <nav className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl overflow-x-auto">
                        {[
                            { id: 'overview', label: 'Overview', icon: LayoutDashboard },
                            { id: 'fees', label: 'Pay Fees', icon: Receipt },
                            { id: 'history', label: 'History', icon: History },
                            { id: 'installments', label: 'Plans', icon: Layers },
                            { id: 'support', label: 'Support', icon: MessageSquare },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all text-[11px] font-black uppercase tracking-widest whitespace-nowrap ${activeTab === tab.id ? 'bg-emerald-500 text-[#0F172A]' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
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

                        {/* ── PAY FEES TAB (New Interactive Version) ── */}
                        {activeTab === 'fees' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">

                                {/* Outstanding Items Section */}
                                <section className="p-8 bg-white/3 border border-white/5 rounded-[32px] shadow-2xl">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">Outstanding Balance</h3>
                                            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-1">Select items to settle</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Selected</p>
                                            <p className="text-3xl font-black text-emerald-400 tracking-tighter">${calculateTotal().toLocaleString()}</p>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-2xl border border-white/5">
                                        <div className="grid grid-cols-12 bg-[#0F172A] border-b border-white/10 px-6 py-4">
                                            <div className="col-span-1"></div>
                                            <div className="col-span-5 text-[10px] font-black text-slate-600 uppercase tracking-widest">Item Description</div>
                                            <div className="col-span-2 text-right text-[10px] font-black text-slate-600 uppercase tracking-widest">Amount</div>
                                            <div className="col-span-2 text-right text-[10px] font-black text-slate-600 uppercase tracking-widest">Scholarship</div>
                                            <div className="col-span-2 text-center text-[10px] font-black text-slate-600 uppercase tracking-widest">Status</div>
                                        </div>

                                        <div className="divide-y divide-white/5 bg-slate-900/20">
                                            {feeBreakdown.map((fee) => (
                                                <div key={fee.id} className={`grid grid-cols-12 items-center px-6 py-5 transition-colors ${selectedFees.includes(fee.id) ? 'bg-emerald-500/5' : 'hover:bg-white/2'}`}>
                                                    <div className="col-span-1 flex items-center justify-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedFees.includes(fee.id)}
                                                            onChange={() => fee.status === 'Outstanding' && toggleFee(fee.id)}
                                                            disabled={fee.status !== 'Outstanding'}
                                                            className={`w-5 h-5 rounded-md border-2 border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500/50 focus:ring-offset-0 transition-all ${fee.status !== 'Outstanding' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-emerald-500'}`}
                                                        />
                                                    </div>
                                                    <div className="col-span-5">
                                                        <div className="text-xs font-bold text-white mb-0.5">{fee.item}</div>
                                                        <div className="text-[10px] text-emerald-500 uppercase tracking-widest">{fee.category}</div>
                                                    </div>
                                                    <div className="col-span-2 text-right text-sm font-bold text-slate-300">
                                                        ${fee.amount.toLocaleString()}
                                                    </div>
                                                    <div className="col-span-2 text-right text-sm font-bold text-indigo-400">
                                                        {fee.scholarship > 0 ? `-$${fee.scholarship.toLocaleString()}` : '-'}
                                                    </div>
                                                    <div className="col-span-2 text-center">
                                                        <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${fee.status === 'Paid' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                                                            fee.status === 'Outstanding' ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' :
                                                                'bg-amber-500/10 border-amber-500/20 text-amber-400'
                                                            }`}>
                                                            {fee.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {/* Optional Add-ons Section */}
                                <section className="p-8 bg-indigo-500/5 border border-indigo-500/10 rounded-[32px]">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-indigo-500/20 rounded-xl">
                                            <Plus className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white tracking-tight">Optional Add-ons</h3>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Enhance your campus experience</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {optionalAddons.map((addon) => (
                                            <div
                                                key={addon.id}
                                                onClick={() => toggleAddon(addon.id)}
                                                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${selectedAddons.includes(addon.id)
                                                    ? 'bg-indigo-500/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                                                    : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <addon.icon className={`w-5 h-5 ${selectedAddons.includes(addon.id) ? 'text-indigo-300' : 'text-slate-500'}`} />
                                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedAddons.includes(addon.id) ? 'bg-indigo-500 border-indigo-500' : 'border-slate-600'
                                                        }`}>
                                                        {selectedAddons.includes(addon.id) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                                    </div>
                                                </div>
                                                <h4 className="font-bold text-sm mb-1">{addon.name}</h4>
                                                <p className="text-xs opacity-70 mb-3 line-clamp-1">{addon.desc}</p>
                                                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                                                    <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Price</span>
                                                    <span className="font-bold text-sm">${addon.amount}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Action Bar */}
                                <div className="sticky bottom-6 p-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center justify-between z-40">
                                    <div className="flex items-center gap-4 px-2">
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Items Selected</p>
                                            <p className="text-lg font-bold text-white">{selectedFees.filter(id => feeBreakdown.find(f => f.id === id && f.status === 'Outstanding')).length + selectedAddons.length}</p>
                                        </div>
                                        <div className="h-8 w-px bg-white/10"></div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Payable</p>
                                            <p className="text-xl font-black text-emerald-400">${calculateTotal().toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setPaymentStep(1);
                                            setIsPaymentModalOpen(true);
                                        }}
                                        disabled={calculateTotal() === 0}
                                        className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-[#0F172A] font-black text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 active:scale-95 flex items-center gap-2"
                                    >
                                        Proceed to Payment <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ── OVERVIEW TAB (Existing Content Refined) ── */}
                        {activeTab === 'overview' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                {/* Balance Hero - updated to point to Fees tab */}
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
                                    {/* ... Existing Hero Content ... */}
                                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Aggregate Outstanding</p>
                                            <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-6">$8,800<span className="text-4xl text-slate-500">.00</span></h2>
                                            {/* ... Tags ... */}
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-5">
                                            <button
                                                className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-1.5 active:scale-95 shadow-2xl shadow-emerald-500/30 group/btn"
                                                style={{ padding: '24px 40px', borderRadius: '18px' }}
                                                onClick={() => setActiveTab('fees')}
                                            >
                                                PAY BALANCE <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                {/* ... Other Overview Sections ... */}
                            </div>
                        )}

                        {/* ── HISTORY TAB ── */}
                        {activeTab === 'history' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                <section className="p-10 bg-white/3 border border-white/5 rounded-[32px]">
                                    <h3 className="text-2xl font-bold text-white tracking-tight mb-8">Transaction Archive</h3>
                                    <div className="space-y-4">
                                        {transactions.map((tx) => (
                                            <div key={tx.id} className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#0F172A] hover:bg-white/3 border border-white/5 rounded-2xl transition-all">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                                                        {tx.amount < 0 ? <Plus className="w-5 h-5 text-emerald-400 rotate-45" /> : <Receipt className="w-5 h-5 text-emerald-400" />}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-white">{tx.desc}</h4>
                                                        <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">{tx.date}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`text-base font-black tracking-tighter ${tx.amount < 0 ? 'text-emerald-400' : 'text-white'}`}>
                                                        {tx.amount < 0 ? `+ $${Math.abs(tx.amount).toFixed(2)}` : `- $${tx.amount.toFixed(2)}`}
                                                    </span>
                                                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-1">{tx.status}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        )}

                        {/* ── INSTALLMENTS TAB ── */}
                        {activeTab === 'installments' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                {/* ... Simplified Installments View ... */}
                                <section className="p-10 bg-indigo-500/5 border border-indigo-500/10 rounded-[40px]">
                                    <h3 className="text-2xl font-bold text-white tracking-tight mb-8">Installment Plan</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {installments.map((inst) => (
                                            <div key={inst.id} className={`p-6 rounded-2xl border ${inst.status === 'Outstanding' ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-white/3 border-white/5'}`}>
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Installment {inst.id}</span>
                                                    <span className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest ${inst.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-indigo-500/10 text-indigo-400'}`}>{inst.status}</span>
                                                </div>
                                                <p className="text-xl font-black text-white">${inst.amount.toLocaleString()}</p>
                                                <p className="text-xs text-slate-500 mt-2">Due: {inst.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>

                    {/* ── Sidebar: Global Financial Health ── */}
                    <div className="col-span-12 lg:col-span-3 space-y-10">
                        {/* ... Existing Sidebar Content ... */}
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
                        </section>

                        {/* Quick Actions */}
                        <section className="space-y-4">
                            <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Quick Actions</h4>
                            <button className="w-full p-4 bg-white/5 border border-white/5 hover:bg-white/10 rounded-xl flex items-center gap-3 transition-all group text-left">
                                <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                                <span className="text-xs font-bold text-slate-300 group-hover:text-white">Tax Forms (1098-T)</span>
                            </button>
                            <button className="w-full p-4 bg-white/5 border border-white/5 hover:bg-white/10 rounded-xl flex items-center gap-3 transition-all group text-left">
                                <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-indigo-400" />
                                <span className="text-xs font-bold text-slate-300 group-hover:text-white">Apply for Aid</span>
                            </button>
                        </section>
                    </div>
                </div>
            </div>

            {/* ── Secure Payment Modal ── */}
            {isPaymentModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setIsPaymentModalOpen(false)} />

                    <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 overflow-hidden" style={{ borderRadius: '40px' }}>

                        {/* Step 1: Review */}
                        {paymentStep === 1 && (
                            <>
                                <div className="p-8 border-b border-white/5 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white tracking-tight">Review Transaction</h3>
                                    <button onClick={() => setIsPaymentModalOpen(false)}><X className="w-6 h-6 text-slate-500 hover:text-white" /></button>
                                </div>
                                <div className="p-8 max-h-[60vh] overflow-y-auto space-y-6">
                                    <div className="space-y-3">
                                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Selected Fees</h4>
                                        {feeBreakdown.filter(f => selectedFees.includes(f.id)).map(f => (
                                            <div key={f.id} className="flex justify-between text-sm">
                                                <span className="text-slate-300">{f.item}</span>
                                                <span className="font-bold text-white">${(f.amount - f.scholarship).toLocaleString()}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {selectedAddons.length > 0 && (
                                        <div className="space-y-3 pt-4 border-t border-white/5">
                                            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Add-ons</h4>
                                            {optionalAddons.filter(a => selectedAddons.includes(a.id)).map(a => (
                                                <div key={a.id} className="flex justify-between text-sm">
                                                    <span className="text-slate-300">{a.name}</span>
                                                    <span className="font-bold text-white">${a.amount.toLocaleString()}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 flex justify-between items-center">
                                        <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Total Payable</span>
                                        <span className="text-3xl font-black text-white tracking-tighter">${calculateTotal().toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="p-8 border-t border-white/5 flex gap-4">
                                    <button onClick={() => setIsPaymentModalOpen(false)} className="flex-1 py-4 text-xs font-bold text-slate-500 hover:text-white uppercase tracking-widest">Cancel</button>
                                    <button onClick={() => setPaymentStep(2)} className="flex-[2] py-4 bg-emerald-500 text-[#0F172A] font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-emerald-400 transition-all">Confirm Amount</button>
                                </div>
                            </>
                        )}

                        {/* Step 2: Method */}
                        {paymentStep === 2 && (
                            <>
                                <div className="p-8 border-b border-white/5 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white tracking-tight">Select Payment Method</h3>
                                    <button onClick={() => setPaymentStep(1)} className="text-xs text-slate-500 hover:text-white uppercase tracking-widest">Back</button>
                                </div>
                                <div className="p-8 grid gap-4">
                                    {[
                                        { id: 'visa', name: 'Visa •••• 4242', icon: CreditCard, type: 'Card' },
                                        { id: 'bank', name: 'Chase Checking •••• 9889', icon: Landmark, type: 'ACH' },
                                        { id: 'new', name: 'Add New Method', icon: Plus, type: '' }
                                    ].map(method => (
                                        <div
                                            key={method.id}
                                            onClick={() => setSelectedMethod(method.id)}
                                            className={`p-5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${selectedMethod === method.id ? 'bg-indigo-500/20 border-indigo-500 text-white' : 'bg-white/2 border-white/5 hover:bg-white/5 text-slate-400'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <method.icon className="w-5 h-5" />
                                                <span className="font-bold text-sm">{method.name}</span>
                                            </div>
                                            {selectedMethod === method.id && <CheckCircle2 className="w-5 h-5 text-indigo-400" />}
                                        </div>
                                    ))}
                                </div>
                                <div className="p-8 border-t border-white/5">
                                    <button onClick={handlePayment} className="w-full py-4 bg-indigo-500 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-400 transition-all shadow-xl shadow-indigo-500/20">Authorize Charge</button>
                                </div>
                            </>
                        )}

                        {/* Step 3: Processing */}
                        {paymentStep === 3 && (
                            <div className="p-20 flex flex-col items-center justify-center text-center">
                                <div className="relative w-24 h-24 mb-8">
                                    <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
                                    <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>
                                    <ShieldCheck className="absolute inset-0 m-auto w-8 h-8 text-emerald-500 animate-pulse" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Verifying Security Token</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-widest">Contacting Bank Gateway via TLS 1.3</p>
                            </div>
                        )}

                        {/* Step 4: Success */}
                        {paymentStep === 4 && (
                            <div className="p-20 flex flex-col items-center justify-center text-center animate-in zoom-in-90 duration-300">
                                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                                    <CheckCircle2 className="w-10 h-10 text-[#0F172A]" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Payment Successful</h3>
                                <p className="text-slate-400 mb-8 max-w-xs text-sm">Transaction TX-9928 has been authorized. A receipt has been sent to your student email.</p>
                                <button onClick={() => { setIsPaymentModalOpen(false); setPaymentStep(1); }} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all">Close Window</button>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </div>
    );
}

// -- Helpers --
function Users(props: any) { return <div {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div> }
