import { AlertTriangle, Eye, Flag, CheckCircle } from 'lucide-react';

export default function DropoutRiskPage() {
  const riskStudents = [
    { id: 1, name: 'Student A', riskLevel: 'high', factors: 'Low attendance, unpaid fees', action: 'flag' },
    { id: 2, name: 'Student B', riskLevel: 'medium', factors: 'Missing submissions', action: 'monitor' },
    { id: 3, name: 'Student C', riskLevel: 'low', factors: 'On track', action: 'none' },
    { id: 4, name: 'Student D', riskLevel: 'high', factors: 'Low grades, absenteeism', action: 'flag' },
  ]

  const getRiskStyle = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-500/10 text-red-400';
      case 'medium': return 'bg-amber-500/10 text-amber-400';
      case 'low': return 'bg-emerald-500/10 text-emerald-400';
      default: return 'bg-slate-500/10 text-slate-400';
    }
  }

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'flag': return <Flag className="w-4 h-4 text-red-400" />;
      case 'monitor': return <Eye className="w-4 h-4 text-amber-400" />;
      default: return <CheckCircle className="w-4 h-4 text-emerald-400" />;
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="pb-6 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-widest rounded-md mb-3">
          <AlertTriangle className="w-3.5 h-3.5" /> Risk Assessment
        </div>
        <h1 className="text-2xl font-bold text-slate-50">Dropout Risk Monitoring</h1>
        <p className="text-sm text-slate-400 mt-1">Identify at-risk students and intervention opportunities</p>
      </header>

      <div className="space-y-4">
        {riskStudents.map((student, idx) => (
          <div key={student.id}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/60 hover:border-emerald-500/20 transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: `${idx * 80}ms` }}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  {getActionIcon(student.action)}
                  <h3 className="font-bold text-slate-50">{student.name}</h3>
                </div>
                <p className="text-sm text-slate-400 mt-2 ml-7">
                  <span className="text-xs text-slate-500">Risk Factors: </span>{student.factors}
                </p>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${getRiskStyle(student.riskLevel)}`}>
                {student.riskLevel.charAt(0).toUpperCase() + student.riskLevel.slice(1)} Risk
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
