'use client';

import {
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  Plus,
  Zap,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Shield,
  Activity
} from 'lucide-react';
import { BillingService } from '@learnops/api/src/billing/billing.service';
import { useState } from 'react';

const revenueData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 48 },
  { name: 'Mar', value: 35 },
  { name: 'Apr', value: 52 },
  { name: 'May', value: 30 },
  { name: 'Jun', value: 42 },
  { name: 'Jul', value: 68 },
];

const stats = [
  {
    label: 'Total Revenue',
    value: '$128,430',
    change: '+12.5%',
    trendingUp: true,
    icon: <DollarSign className="w-6 h-6" />,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10'
  },
  {
    label: 'Pending Invoices',
    value: '24',
    change: '-2',
    trendingUp: false,
    icon: <Clock className="w-6 h-6" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10'
  },
  {
    label: 'Paid This Month',
    value: '$42,150',
    change: '+8.2%',
    trendingUp: true,
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-500/10'
  },
  {
    label: 'Overdue',
    value: '3',
    change: '+1',
    trendingUp: true,
    icon: <AlertCircle className="w-6 h-6" />,
    color: 'text-rose-600',
    bgColor: 'bg-rose-500/10'
  },
];

const recentInvoices = [
  { id: 'INV-001', customer: 'Acme Corp', amount: '$1,500.00', status: 'Paid', date: 'Jan 24, 2026' },
  { id: 'INV-002', customer: 'Global Tech', amount: '$2,340.00', status: 'Pending', date: 'Jan 23, 2026' },
  { id: 'INV-003', customer: 'Starlight Inc', amount: '$850.00', status: 'Overdue', date: 'Jan 15, 2026' },
  { id: 'INV-004', customer: 'Nexus Ltd', amount: '$3,100.00', status: 'Paid', date: 'Jan 20, 2026' },
];

export default function BillingDashboard() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNewInvoice = () => {
    setIsProcessing(true);
    try {
      BillingService.createInvoice({
        customerId: 'cust_seed_001',
        amount: Math.floor(Math.random() * 5000) + 500,
        status: 'pending',
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        issuedDate: new Date().toISOString(),
        items: JSON.stringify([{ description: 'Platform Services', quantity: 1, price: 500 }]),
      });
      // In a real app, we would refresh the data here
      alert('Invoice created & event published successfully!');
    } catch (error) {
      console.error(error);
    }
    setIsProcessing(false);
  };

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Page Header */}
      <div className="px-8 pt-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2 text-slate-900">Financial Engine</h1>
          <p className="text-slate-500 font-medium">Real-time revenue orchestration.</p>
        </div>
        <button
          onClick={handleNewInvoice}
          disabled={isProcessing}
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
          {isProcessing ? 'Processing' : 'New Invoice'}
        </button>
      </div>

      <div className="px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white border-industrial p-8 space-y-3 shadow-industrial hover:shadow-industrial-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{stat.label}</span>
              <div className={cn("h-10 w-10 flex items-center justify-center border-2 border-slate-900 bg-slate-50", stat.color)}>
                {stat.icon}
              </div>
            </div>
            <div className="text-3xl font-black tracking-tighter">{stat.value}</div>
            <div className={cn(
              "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider",
              stat.trendingUp ? "text-emerald-600" : "text-rose-600"
            )}>
              {stat.trendingUp ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-8">
          {/* Revenue Chart */}
          <div className="bg-card border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold">Revenue Trends</h3>
              <select className="bg-background border text-xs p-1">
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <div className="flex items-end justify-between h-full gap-3 px-4">
                {revenueData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 hover:from-emerald-600 hover:to-emerald-500 transition-all duration-300 rounded-t-sm"
                      style={{ height: `${item.value}%` }}
                      title={`${item.name}: ${item.value}%`}
                    />
                    <span className="text-xs text-muted-foreground font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="bg-white border-industrial shadow-industrial">
            <div className="px-8 py-6 border-b-2 border-slate-900 flex justify-between items-center bg-slate-50">
              <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-3">
                <Activity className="h-5 w-5 text-emerald-600" />
                Ledger: Recent Activity
              </h3>
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors">
                Extract All Data →
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-8 py-4">Serial ID</th>
                    <th className="px-8 py-4">Client</th>
                    <th className="px-8 py-4">Volume</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Timestamp</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-slate-100">
                  {recentInvoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-slate-50 transition-all duration-300 group">
                      <td className="px-8 py-6 text-xs font-black text-slate-900 uppercase tracking-wider">{invoice.id}</td>
                      <td className="px-8 py-6 text-xs font-bold text-slate-600">{invoice.customer}</td>
                      <td className="px-8 py-6 text-sm font-black text-slate-900">{invoice.amount}</td>
                      <td className="px-8 py-6">
                        <span className={cn(
                          "px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] border-2",
                          invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-500/20' :
                            invoice.status === 'Pending' ? 'bg-blue-50 text-blue-700 border-blue-500/20' :
                              'bg-rose-50 text-rose-700 border-rose-500/20'
                        )}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{invoice.date}</td>
                      <td className="px-8 py-6 text-right">
                        <button className="p-2 border-2 border-transparent hover:border-slate-900 hover:bg-white transition-all">
                          <MoreHorizontal className="h-4 w-4 text-slate-400 group-hover:text-slate-900" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Intelligence Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-white border-industrial p-8 shadow-industrial">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              Efficiency Metrics
            </h3>
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-400">Collection Velocity</span>
                  <span className="text-slate-900">94.8%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 border border-slate-200">
                  <div className="h-full bg-slate-900 w-[94%] transition-all duration-1000 shadow-[2px_0_0_0_rgba(16,185,129,1)]" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-400">Settlement Delta</span>
                  <span className="text-slate-900">4.2 Days</span>
                </div>
                <div className="h-3 w-full bg-slate-100 border border-slate-200">
                  <div className="h-full bg-indigo-600 w-[60%] transition-all duration-1000 shadow-[2px_0_0_0_rgba(99,102,241,1)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 text-white p-10 shadow-industrial border-2 border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full translate-x-16 -translate-y-16 blur-2xl group-hover:bg-teal-500/20 transition-all duration-700" />
            <div className="flex items-center gap-5 mb-8 relative z-10">
              <div className="h-14 w-14 bg-teal-500/20 flex items-center justify-center border-2 border-teal-500/50">
                <Shield className="h-7 w-7 text-teal-400" />
              </div>
              <div>
                <h3 className="font-black text-xs uppercase tracking-[0.2em]">Optimization Engine</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-1">Autonomous reconciliation</p>
              </div>
            </div>
            <button className="w-full py-4 bg-white text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-teal-400 transition-all duration-300 shadow-lg relative z-10">
              Engage Protocol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
