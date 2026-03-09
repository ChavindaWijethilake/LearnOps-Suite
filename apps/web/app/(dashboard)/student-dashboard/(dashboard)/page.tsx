import { BookOpen, FileText, Briefcase, GraduationCap, ArrowRight, Activity, Calendar, Award } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Courses Enrolled",
    value: "4",
    trend: "+1 from last semester",
    trendUp: true,
    icon: BookOpen,
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-500/10",
    textLight: "text-cyan-400",
  },
  {
    title: "Assignments Due",
    value: "12",
    trend: "3 critical this week",
    trendUp: false,
    icon: FileText,
    color: "from-rose-500 to-orange-400",
    bgLight: "bg-rose-500/10",
    textLight: "text-rose-400",
  },
  {
    title: "Projects Pending",
    value: "2",
    trend: "Active team syncs",
    trendUp: true,
    icon: Briefcase,
    color: "from-purple-500 to-indigo-400",
    bgLight: "bg-purple-500/10",
    textLight: "text-purple-400",
  },
  {
    title: "Current GPA",
    value: "3.8",
    trend: "Top 10% of class",
    trendUp: true,
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-400",
    bgLight: "bg-emerald-500/10",
    textLight: "text-emerald-400",
  },
];

const activities = [
  { id: 1, type: 'grade', title: 'Grade Posted', course: 'Advanced Algorithms', time: '2 hours ago', score: 'A-' },
  { id: 2, type: 'submit', title: 'Assignment Submitted', course: 'Machine Learning', time: 'Yesterday', score: 'System Design Docs' },
  { id: 3, type: 'announce', title: 'New Announcement', course: 'Cloud Architecture', time: '2 days ago', score: 'Midterm schedule updated' },
];

const deadlines = [
  { id: 1, title: 'Final Project Proposal', course: 'Machine Learning', date: 'Tomorrow, 11:59 PM', priority: 'High' },
  { id: 2, title: 'Weekly Quiz 4', course: 'Advanced Algorithms', date: 'Fri, 8:00 AM', priority: 'Medium' },
  { id: 3, title: 'Case Study Draft', course: 'Cloud Architecture', date: 'Next Mon, 5:00 PM', priority: 'Low' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-slate-200 pb-12 animate-fade-in font-sans selection:bg-indigo-500/30">

      {/* Dynamic Header Section */}
      <div className="relative mb-10 overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Term In Progress
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-2">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Student</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl font-medium">
              You have 3 assignments due this week. Stay focused and keep up the great work!
            </p>
          </div>
          <div className="flex shrink-0">
            <Link href="#deadlines" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                View Schedule <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group relative bg-[#131B2F] border border-[#1E293B] rounded-3xl p-6 overflow-hidden hover:border-slate-700 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Hover Glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full opacity-0 blur-[50px] group-hover:opacity-20 transition-opacity duration-700 pointer-events-none translate-x-1/2 -translate-y-1/2`}></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl ${stat.bgLight} flex items-center justify-center border border-white/5`}>
                  <stat.icon className={`w-6 h-6 ${stat.textLight}`} />
                </div>
                <div className={`text-xs font-bold px-2.5 py-1 rounded-full border bg-[#0A0F1C]/50 backdrop-blur-md ${stat.trendUp ? 'text-emerald-400 border-emerald-500/20' : 'text-rose-400 border-rose-500/20'}`}>
                  {stat.trend}
                </div>
              </div>
              <h3 className="text-slate-400 text-sm font-semibold tracking-wide uppercase mb-1">{stat.title}</h3>
              <div className="text-4xl font-black text-white tracking-tighter">
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Activity Section */}
        <div className="lg:col-span-7 bg-[#131B2F] border border-[#1E293B] rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

          <div className="flex items-center justify-between mb-8 relative z-10">
            <h2 className="text-xl font-bold flex items-center gap-3 text-white">
              <Activity className="w-5 h-5 text-indigo-400" />
              Recent Activity
            </h2>
            <button className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
              View All
            </button>
          </div>

          <div className="space-y-6 relative z-10">
            {activities.map((activity, idx) => (
              <div key={activity.id} className="group/item flex gap-4 items-start">
                <div className="relative flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full border-[3px] border-[#131B2F] ring-2 z-10 ${activity.type === 'grade' ? 'bg-emerald-400 ring-emerald-500/30' :
                      activity.type === 'submit' ? 'bg-purple-400 ring-purple-500/30' :
                        'bg-blue-400 ring-blue-500/30'
                    }`}></div>
                  {idx !== activities.length - 1 && (
                    <div className="absolute top-3 bottom-[-24px] w-px bg-slate-800"></div>
                  )}
                </div>

                <div className="flex-1 bg-[#0F172A] border border-slate-800/50 rounded-2xl p-4 transition-all hover:bg-slate-800/50 hover:border-slate-700">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-200">{activity.title}</h4>
                    <span className="text-xs font-medium text-slate-500">{activity.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-slate-400 font-medium">{activity.course}</p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300">
                      {activity.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines Section */}
        <div id="deadlines" className="lg:col-span-5 bg-[#131B2F] border border-[#1E293B] rounded-3xl p-8 relative overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-8 relative z-10">
            <h2 className="text-xl font-bold flex items-center gap-3 text-white">
              <Calendar className="w-5 h-5 text-rose-400" />
              Deadlines
            </h2>
          </div>

          <div className="flex-1 space-y-4 relative z-10">
            {deadlines.map((deadline) => (
              <div key={deadline.id} className="relative overflow-hidden bg-[#0A0F1C] border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors group">
                {deadline.priority === 'High' && (
                  <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                )}
                {deadline.priority === 'Medium' && (
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                )}
                <div className="ml-2">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors">{deadline.title}</h4>
                    {deadline.priority === 'High' && (
                      <span className="flex h-2 w-2 relative mt-1.5 ml-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 font-medium mb-3">{deadline.course}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {deadline.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800/50">
            <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-sm font-bold text-white transition-all hover:border-slate-600">
              <Award className="w-4 h-4 text-amber-400" />
              View Full Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
