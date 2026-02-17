import {
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  FileText,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Activity,
  Zap
} from 'lucide-react';

const invoices = [
  { id: 'INV-001', customer: 'Acme Corp', amount: '$1,500.00', status: 'Paid', date: 'Jan 24, 2026', due: 'Feb 24, 2026' },
  { id: 'INV-002', customer: 'Global Tech', amount: '$2,340.00', status: 'Pending', date: 'Jan 23, 2026', due: 'Feb 23, 2026' },
  { id: 'INV-003', customer: 'Starlight Inc', amount: '$850.00', status: 'Overdue', date: 'Jan 15, 2026', due: 'Jan 30, 2026' },
  { id: 'INV-004', customer: 'Nexus Ltd', amount: '$3,100.00', status: 'Paid', date: 'Jan 20, 2026', due: 'Feb 20, 2026' },
  { id: 'INV-005', customer: 'Quantum Soft', amount: '$1,200.00', status: 'Pending', date: 'Jan 18, 2026', due: 'Feb 18, 2026' },
  { id: 'INV-006', customer: 'Velocity Apps', amount: '$4,500.00', status: 'Paid', date: 'Jan 12, 2026', due: 'Feb 12, 2026' },
  { id: 'INV-007', customer: 'Horizon Media', amount: '$950.00', status: 'Overdue', date: 'Jan 05, 2026', due: 'Jan 20, 2026' },
];

export default function InvoicesPage() {
  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            Ledger Management
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Invoices</h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Orchestrate and track your enterprise revenue streams with real-time auditing.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 hover:bg-slate-50 hover:border-emerald-200 transition-all active:scale-95">
            <Download className="w-4 h-4" />
            Export Data
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
            <Plus className="w-4 h-4" />
            Generate Invoice
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-card p-6 rounded-[2.5rem] border-slate-100/50">
        <div className="relative flex-1 w-full group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
          <input
            type="text"
            placeholder="Search by identifier, entity, or volume..."
            className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-base font-medium focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-200 transition-all placeholder:text-slate-400"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 hover:bg-slate-50 hover:border-emerald-200 transition-all active:scale-95">
            <Filter className="w-4 h-4" />
            Refine
          </button>
          <select className="px-6 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-200 transition-all appearance-none cursor-pointer">
            <option>All Statuses</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
        </div>
      </div>

      <div className="glass-card rounded-[3rem] border-slate-100/50 overflow-hidden animate-slide-up">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Identifier</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Entity</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Volume</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Timestamp</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Deadline</th>
                <th className="px-10 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {invoices.map((invoice, index) => (
                <tr
                  key={invoice.id}
                  className="hover:bg-slate-50/50 transition-colors group animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-all">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-black text-slate-900">{invoice.id}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-sm font-bold text-slate-600">{invoice.customer}</td>
                  <td className="px-10 py-6 text-sm font-black text-slate-900">{invoice.amount}</td>
                  <td className="px-10 py-6">
                    <span className={cn(
                      "status-badge",
                      invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                        invoice.status === 'Pending' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                          'bg-rose-50 text-rose-600 border-rose-100'
                    )}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-10 py-6 text-sm font-bold text-slate-400">{invoice.date}</td>
                  <td className="px-10 py-6 text-sm font-bold text-slate-400">{invoice.due}</td>
                  <td className="px-10 py-6 text-right">
                    <button className="p-3 hover:bg-white hover:shadow-lg rounded-2xl transition-all text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-100">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-10 py-6 border-t border-slate-50 flex items-center justify-between bg-slate-50/30">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Showing 1-7 of 24 transactions</p>
          <div className="flex gap-3">
            <button className="p-3 border border-slate-100 rounded-xl text-slate-400 hover:bg-white hover:shadow-lg transition-all disabled:opacity-50" disabled>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-3 border border-slate-100 rounded-xl text-slate-600 hover:bg-white hover:shadow-lg transition-all">
              <ChevronRight className="w-5 h-5" />
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
