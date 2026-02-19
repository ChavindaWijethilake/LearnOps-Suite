import { ArrowRightLeft, Calendar, Tag, ArrowRight, Zap, Shield, Activity } from 'lucide-react';

export default function DisbursementsPage() {
  const disbursements = [
    { id: 1, amount: '$2,000', type: 'Merit Scholarship', date: '2025-09-10', status: 'processed', color: 'text-emerald-600', bgColor: 'bg-emerald-500/10' },
    { id: 2, amount: '$1,500', type: 'Need-Based Grant', date: '2025-10-15', status: 'processed', color: 'text-blue-600', bgColor: 'bg-blue-500/10' },
    { id: 3, amount: '$2,500', type: 'STEM Excellence', date: '2026-01-20', status: 'pending', color: 'text-amber-600', bgColor: 'bg-amber-500/10' },
  ]

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            Capital Outflow
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Disbursements</h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Orchestrate and track scholarship allocations and grant distributions across the enterprise.
          </p>
        </div>
        <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 active:scale-95">
          <ArrowRightLeft className="w-4 h-4" />
          Initialize Batch
        </button>
      </header>

      <div className="space-y-8">
        {disbursements.map((disbursement, index) => (
          <div
            key={disbursement.id}
            className="group glass-card rounded-[3rem] p-10 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 animate-slide-up border-slate-100/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex flex-col md:flex-row items-center gap-10 flex-1">
                <div className={cn("w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3", disbursement.bgColor, disbursement.color)}>
                  <ArrowRightLeft className="w-10 h-10" />
                </div>

                <div className="space-y-6 flex-1 text-center md:text-left">
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors">{disbursement.amount}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Allocation Type</p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-slate-600">
                        <Tag className="w-4 h-4 text-slate-400" />
                        {disbursement.type}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Execution Date</p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-slate-600">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {disbursement.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-6">
                <span className={cn(
                  "status-badge px-6 py-2 text-xs",
                  disbursement.status === 'processed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                )}>
                  {disbursement.status === 'processed' ? 'Fully Executed' : 'Awaiting Settlement'}
                </span>
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all group/btn">
                  View Manifest
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
