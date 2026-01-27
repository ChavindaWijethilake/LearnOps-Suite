import {
  BookOpen,
  Clock,
  Trophy,
  Star,
  ArrowRight,
  Play,
  Search,
  Filter
} from 'lucide-react';

const myCourses = [
  { id: 1, title: 'Advanced React Patterns', progress: 65, instructor: 'Sarah Drasner', duration: '12h 30m', image: 'bg-blue-500' },
  { id: 2, title: 'Enterprise Architecture', progress: 30, instructor: 'Martin Fowler', duration: '24h 00m', image: 'bg-purple-500' },
  { id: 3, title: 'UI/UX Design Systems', progress: 90, instructor: 'Gary Simon', duration: '8h 15m', image: 'bg-rose-500' },
];

const recommended = [
  { id: 4, title: 'Cloud Native DevOps', rating: 4.8, students: '1.2k', level: 'Intermediate', image: 'bg-teal-500' },
  { id: 5, title: 'Data Science with Python', rating: 4.9, students: '3.5k', level: 'Beginner', image: 'bg-amber-500' },
];

export default function LearningDashboard() {
  return (
    <div className="space-y-12 animate-fade-in">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
            Learning Hub v2.4
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Learning Dashboard</h1>
          <p className="text-lg text-gray-500 font-medium">Continue your learning journey and track your progress.</p>
        </div>
        <div className="flex items-center gap-8 bg-white/50 backdrop-blur-md p-4 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="text-right">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Points</p>
            <p className="text-2xl font-black text-primary tracking-tight">2,450 XP</p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white shadow-lg shadow-primary/20 animate-float">
            <Trophy className="w-7 h-7" />
          </div>
        </div>
      </header>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Continue Learning
            </h2>
            <p className="text-sm text-gray-500 font-medium">Pick up where you left off</p>
          </div>
          <button className="px-4 py-2 text-sm font-bold text-primary bg-primary/5 rounded-xl hover:bg-primary/10 transition-all">
            View All My Courses
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {myCourses.map((course, index) => (
            <div
              key={course.id}
              className="learning-card group overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-40 ${course.image} relative rounded-2xl overflow-hidden mb-6`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-all" />
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-2xl backdrop-blur-sm">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between text-[10px] font-black text-white uppercase tracking-widest mb-2">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="progress-bar bg-white/20 border-none h-1.5">
                    <div className="progress-fill bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
                <div className="flex items-center justify-between text-xs font-bold text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <span className="text-gray-600 bg-gray-50 px-2 py-1 rounded-lg">{course.instructor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm animate-slide-up [animation-delay:400ms]">
            <div className="flex items-center justify-between mb-10">
              <div className="space-y-1">
                <h2 className="text-2xl font-extrabold text-gray-900">Recommended for You</h2>
                <p className="text-sm text-gray-500 font-medium">Based on your interests and activity</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:text-primary hover:bg-primary/5 transition-all">
                  <Filter className="w-5 h-5" />
                </button>
                <button className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:text-primary hover:bg-primary/5 transition-all">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="space-y-6">
              {recommended.map((course) => (
                <div key={course.id} className="flex items-center gap-8 p-6 rounded-3xl hover:bg-gray-50/50 border border-transparent hover:border-gray-100 transition-all group cursor-pointer">
                  <div className={`w-28 h-28 rounded-2xl ${course.image} flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform`} />
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-primary transition-colors">{course.title}</h3>
                    <div className="flex items-center gap-6 text-xs font-bold text-gray-500">
                      <div className="flex items-center gap-1.5 text-amber-500 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        {course.students} students
                      </div>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 uppercase tracking-widest text-[10px] font-black">{course.level}</span>
                    </div>
                  </div>
                  <button className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 group-hover:rotate-45 transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <section className="bg-gray-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-gray-900/20 animate-slide-up [animation-delay:600ms]">
            <h2 className="text-xl font-extrabold mb-10 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              Learning Path
            </h2>
            <div className="space-y-10 relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gray-800" />
              {[
                { title: 'Foundation', status: 'Completed', icon: <CheckCircle2 className="w-5 h-5" /> },
                { title: 'Core Concepts', status: 'In Progress', icon: <Play className="w-5 h-5 fill-current" /> },
                { title: 'Advanced Mastery', status: 'Locked', icon: <Lock className="w-5 h-5" /> },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-8 relative z-10 group cursor-pointer">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border-2 transition-all group-hover:scale-110 ${step.status === 'Completed' ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' :
                      step.status === 'In Progress' ? 'bg-gray-900 border-primary text-primary animate-pulse' :
                        'bg-gray-900 border-gray-800 text-gray-600'
                    }`}>
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-sm font-black tracking-tight">{step.title}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mt-1">{step.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-[2.5rem] p-10 animate-slide-up [animation-delay:800ms]">
            <h2 className="text-xl font-extrabold text-primary mb-4">Skill Assessment</h2>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
              Take a quick assessment to get personalized course recommendations and unlock new levels.
            </p>
            <button className="w-full py-4 bg-primary text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
              Start Assessment
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Lock({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
