import { GraduationCap, Calendar, DollarSign, ArrowRight, Zap, Shield, Activity } from 'lucide-react';

export default function ScholarshipsPage() {
  const scholarships = [
    { id: 1, name: 'Merit Scholarship', amount: '$2,000', status: 'awarded', term: 'Spring 2026', color: 'text-emerald-600', bgColor: 'bg-emerald-500/10' },
    { id: 2, name: 'Need-Based Grant', amount: '$1,500', status: 'applied', term: 'Fall 2025', color: 'text-blue-600', bgColor: 'bg-blue-500/10' },
    { id: 3, name: 'STEM Excellence', amount: '$2,500', status: 'available', term: 'Fall 2025', color: 'text-indigo-600', bgColor: 'bg-indigo-500/10' },
  ]

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            Financial Aid Nexus
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Scholarships</h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Discover and manage specialized financial aid programs and academic merit awards.
          </p>
        </div>
        <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-900/20 active:scale-95">
          <Shield className="w-4 h-4" />
          Eligibility Check
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scholarships.map((scholarship, index) => (
          <div
            key={scholarship.id}
            className="group glass-card rounded-[3rem] p-10 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 animate-slide-up border-slate-100/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-10">
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3", scholarship.bgColor, scholarship.color)}>
                <GraduationCap className="w-8 h-8" />
              </div>
              <span className={cn(
                "status-badge px-4 py-1.5 text-[10px]",
                scholarship.status === 'awarded' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                  scholarship.status === 'applied' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                    'bg-amber-50 text-amber-600 border-amber-100'
              )}>
                {scholarship.status}
              </span>
            </div>

            <div className="space-y-6 mb-10">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors leading-tight">{scholarship.name}</h3>
              <div className="space-y-2">
                <p className="text-4xl font-black text-slate-900 tracking-tighter">{scholarship.amount}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <Calendar className="w-4 h-4" />
                  Term: {scholarship.term}
                </div>
              </div>
            </div>

            {scholarship.status === 'available' ? (
              <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 flex items-center justify-center gap-2">
                Initialize Application
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button className="w-full py-4 bg-slate-50 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 flex items-center justify-center gap-2">
                View Details
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
