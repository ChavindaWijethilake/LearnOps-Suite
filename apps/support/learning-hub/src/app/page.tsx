import {
  BookOpen,
  Clock,
  Trophy,
  Star,
  ArrowRight,
  Play,
  Search,
  Filter,
  Medal,
  Target,
  GraduationCap
} from 'lucide-react';

const myCourses = [
  { id: 1, title: 'Advanced React Patterns', progress: 65, instructor: 'Sarah Drasner', duration: '12h 30m', image: 'bg-blue-500', category: 'Frontend' },
  { id: 2, title: 'Enterprise Architecture', progress: 30, instructor: 'Martin Fowler', duration: '24h 00m', image: 'bg-purple-500', category: 'Architecture' },
  { id: 3, title: 'UI/UX Design Systems', progress: 90, instructor: 'Gary Simon', duration: '8h 15m', image: 'bg-rose-500', category: 'Design' },
];

const recommended = [
  { id: 4, title: 'Cloud Native DevOps', rating: 4.8, students: '1.2k', level: 'Intermediate', image: 'bg-teal-500', category: 'DevOps' },
  { id: 5, title: 'Data Science with Python', rating: 4.9, students: '3.5k', level: 'Beginner', image: 'bg-amber-500', category: 'Data' },
  { id: 6, title: 'Cybersecurity Fundamentals', rating: 4.7, students: '850', level: 'Advanced', image: 'bg-indigo-500', category: 'Security' },
];

export default function LearningDashboard() {
  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b pb-8 bg-background p-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-none text-[10px] font-black uppercase tracking-widest border border-primary/20">
            <GraduationCap className="w-3.5 h-3.5" />
            Skill Academy
          </div>
          <h1 className="text-4xl font-black text-foreground tracking-tight">Learning Dashboard</h1>
          <p className="text-lg text-muted-foreground font-medium">Continue your learning journey and track your progress.</p>
        </div>
        <div className="flex items-center gap-6 bg-card p-6 rounded-none border shadow-sm">
          <div className="text-right">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Total XP</p>
            <p className="text-3xl font-black text-primary tracking-tight">2,450</p>
          </div>
          <div className="w-16 h-16 rounded-none bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <Trophy className="w-8 h-8" />
          </div>
        </div>
      </header>

      <div className="px-8 space-y-12">
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-foreground flex items-center gap-3">
                <Play className="w-6 h-6 text-primary" />
                In Progress
              </h2>
            </div>
            <button className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 rounded-none hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
              View All Courses
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {myCourses.map((course, index) => (
              <div
                key={course.id}
                className="group bg-card border hover:border-primary transition-all duration-300"
              >
                <div className={`h-48 ${course.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest">
                      {course.category}
                    </span>
                  </div>
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex justify-between text-[10px] font-black text-white uppercase tracking-widest mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/20">
                      <div className="h-full bg-white" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <span>{course.instructor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-card border p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="space-y-1">
                  <h2 className="text-xl font-black text-foreground uppercase tracking-tight">Recommended</h2>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Driven by AI analysis</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border bg-background hover:bg-accent hover:text-accent-foreground transition-all">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button className="p-2 border bg-background hover:bg-accent hover:text-accent-foreground transition-all">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {recommended.map((course) => (
                  <div key={course.id} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 border hover:border-primary/50 transition-all group bg-background hover:bg-accent/5">
                    <div className={`w-20 h-20 ${course.image} flex-shrink-0 flex items-center justify-center text-white font-black text-2xl`}>
                      {course.title.charAt(0)}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground border px-2 py-0.5">{course.category}</span>
                        <span className={cn(
                          "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5",
                          course.level === 'Beginner' ? "text-emerald-600 bg-emerald-50" :
                            course.level === 'Intermediate' ? "text-blue-600 bg-blue-50" : "text-purple-600 bg-purple-50"
                        )}>{course.level}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{course.title}</h3>
                      <div className="flex items-center gap-6 text-xs font-medium text-muted-foreground">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="text-foreground">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" />
                          {course.students}
                        </div>
                      </div>
                    </div>
                    <button className="self-end md:self-center p-3 border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <section className="bg-slate-950 p-8 text-white relative overflow-hidden min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-3 relative z-10">
                <Target className="w-5 h-5 text-primary" />
                Current Objective
              </h2>
              <div className="space-y-8 relative z-10">
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                  <h3 className="font-bold text-lg mb-1">Full Stack Mastery</h3>
                  <p className="text-xs text-slate-400 mb-4">Complete 3 more modules to unlock certification.</p>
                  <div className="w-full bg-white/10 h-1">
                    <div className="bg-primary h-full w-[75%]" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 opacity-50">
                    <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold line-through">Backend Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-black flex items-center justify-center font-bold">
                      2
                    </div>
                    <span className="text-sm font-bold">Advanced React Patterns</span>
                  </div>
                  <div className="flex items-center gap-4 opacity-50">
                    <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                      3
                    </div>
                    <span className="text-sm font-bold">System Design Interview</span>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-card border p-8">
              <Medal className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Weekly Challenge</h3>
              <p className="text-sm text-muted-foreground mb-6">Complete 5 hours of learning this week to earn the "Dedicated" badge.</p>
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span>Progress</span>
                <span>3.5 / 5h</span>
              </div>
              <div className="w-full bg-secondary h-2 mb-6">
                <div className="bg-amber-500 h-full w-[70%]" />
              </div>
              <button className="w-full py-3 bg-secondary hover:bg-secondary/80 text-foreground text-xs font-bold uppercase tracking-widest transition-all">
                View Details
              </button>
            </div>
          </div>
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

function Users({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
