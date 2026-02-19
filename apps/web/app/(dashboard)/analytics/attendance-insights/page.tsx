import { CheckCircle } from 'lucide-react';

export default function AttendanceInsightsPage() {
  const attendanceCorrelation = [
    { course: 'Mathematics 101', avgAttendance: 90, avgGrade: 3.67, correlation: 'strong' },
    { course: 'Physics Advanced', avgAttendance: 83, avgGrade: 3.42, correlation: 'moderate' },
    { course: 'Chemistry Lab', avgAttendance: 94, avgGrade: 3.55, correlation: 'strong' },
    { course: 'English Composition', avgAttendance: 87, avgGrade: 3.78, correlation: 'strong' },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="pb-6 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-md mb-3">
          <CheckCircle className="w-3.5 h-3.5" /> Correlation Analysis
        </div>
        <h1 className="text-2xl font-bold text-slate-50">Attendance Insights</h1>
        <p className="text-sm text-slate-400 mt-1">Attendance and academic performance correlation</p>
      </header>

      <div className="space-y-4">
        {attendanceCorrelation.map((data, idx) => (
          <div key={idx}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/60 hover:border-emerald-500/20 transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: `${idx * 80}ms` }}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-slate-50 group-hover:text-emerald-400 transition-colors">{data.course}</h3>
                <div className="mt-4 grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Attendance</p>
                    <p className="text-xl font-bold text-slate-50 mt-1">{data.avgAttendance}%</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Avg Grade</p>
                    <p className="text-xl font-bold text-slate-50 mt-1">{data.avgGrade.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Correlation</p>
                    <p className="text-xl font-bold text-slate-50 mt-1 capitalize">{data.correlation}</p>
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md ml-4 self-start">Positive</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
