import { BarChart3, Users } from 'lucide-react';

export default function PerformancePage() {
  const performanceData = [
    { subject: 'Mathematics', avgGrade: 3.67, passRate: 95, students: 120 },
    { subject: 'Physics', avgGrade: 3.42, passRate: 88, students: 95 },
    { subject: 'Chemistry', avgGrade: 3.55, passRate: 92, students: 110 },
    { subject: 'English', avgGrade: 3.78, passRate: 97, students: 130 },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="pb-6 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-md mb-3">
          <BarChart3 className="w-3.5 h-3.5" /> Academic Metrics
        </div>
        <h1 className="text-2xl font-bold text-slate-50">Performance Analytics</h1>
        <p className="text-sm text-slate-400 mt-1">Subject-wise performance metrics</p>
      </header>

      <div className="space-y-4">
        {performanceData.map((data, idx) => (
          <div key={idx}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/60 hover:border-emerald-500/20 transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: `${idx * 80}ms` }}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-50 group-hover:text-emerald-400 transition-colors">{data.subject}</h3>
                <span className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">{data.avgGrade.toFixed(2)} GPA</span>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">Pass Rate</span>
                  <span className="text-sm font-bold text-slate-200">{data.passRate}%</span>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 group-hover:bg-emerald-400 transition-all duration-500 rounded-full"
                    style={{ width: `${data.passRate}%` }} />
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <Users className="w-4 h-4" />
                <span className="text-xs">{data.students} students enrolled</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
