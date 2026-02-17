import {
  Briefcase,
  CheckSquare,
  Users,
  Clock,
  ArrowRight,
  Plus,
  MoreHorizontal,
  Search,
  Kanban,
  Target,
  Zap,
  Hammer
} from 'lucide-react';

const projects = [
  { id: 1, name: 'LearnOps Suite Refactor', progress: 85, status: 'Active', team: 4, deadline: 'Feb 15, 2026', priority: 'High' },
  { id: 2, name: 'Mobile App Development', progress: 45, status: 'Active', team: 6, deadline: 'Mar 30, 2026', priority: 'Medium' },
  { id: 3, name: 'Infrastructure Migration', progress: 10, status: 'Planning', team: 3, deadline: 'Apr 10, 2026', priority: 'Critical' },
];

const tasks = [
  { id: 'TSK-101', title: 'Implement Shared Auth', status: 'Done', priority: 'High', assignee: 'John Doe' },
  { id: 'TSK-102', title: 'Update UI Components', status: 'In Progress', priority: 'Medium', assignee: 'Jane Smith' },
  { id: 'TSK-103', title: 'Setup Billing Module', status: 'Todo', priority: 'High', assignee: 'Mike Ross' },
  { id: 'TSK-104', title: 'Configure Analytics Data', status: 'Todo', priority: 'Low', assignee: 'Sarah Connor' },
];

export default function ProjectDashboard() {
  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b pb-8 bg-background p-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-none text-[10px] font-black uppercase tracking-widest border border-primary/20">
            <Hammer className="w-3.5 h-3.5" />
            Project Engine
          </div>
          <h1 className="text-4xl font-black text-foreground tracking-tight">Mission Control</h1>
          <p className="text-lg text-muted-foreground font-medium">Track initiatives, tasks, and team velocity.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-none text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:opacity-80">
          <Plus className="w-4 h-4" />
          New Project
        </button>
      </header>

      <div className="px-8 space-y-12">
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-foreground flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Active Projects
              </h2>
            </div>
            <button className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 rounded-none hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
              View All Projects
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card border hover:border-primary transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-none bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all border border-transparent group-hover:border-primary/20">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest px-2 py-1 border",
                      project.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-blue-50 text-blue-600 border-blue-100'
                    )}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">{project.name}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Progress</span>
                      <span className="text-foreground">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary">
                      <div className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4 bg-secondary/20 border-t flex items-center justify-between text-xs font-bold text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {project.team} members
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {project.deadline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 bg-card border shadow-sm animate-slide-up [animation-delay:400ms]">
            <div className="px-8 py-6 border-b flex justify-between items-center bg-secondary/20">
              <div className="space-y-1">
                <h2 className="text-lg font-black text-foreground uppercase tracking-tight">Recent Tasks</h2>
              </div>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">
                View All Tasks
              </button>
            </div>
            <div className="divide-y">
              {tasks.map((task) => (
                <div key={task.id} className="p-6 hover:bg-secondary/10 transition-all group flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-2 h-2 rounded-none",
                      task.status === 'Done' ? 'bg-emerald-500' :
                        task.status === 'In Progress' ? 'bg-blue-500' :
                          'bg-slate-300'
                    )} />
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{task.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 font-mono">{task.id} <span className="font-sans text-slate-300 mx-2">|</span> Assigned to <span className="font-bold text-foreground">{task.assignee}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-wider px-2 py-1 border",
                      task.priority === 'High' ? "bg-rose-50 text-rose-700 border-rose-200" :
                        task.priority === 'Medium' ? "bg-orange-50 text-orange-700 border-orange-200" :
                          "bg-blue-50 text-blue-700 border-blue-200"
                    )}>
                      {task.priority}
                    </span>
                    <button className="p-2 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <section className="bg-card border p-8 animate-slide-up [animation-delay:600ms]">
              <h2 className="text-lg font-black text-foreground mb-8 flex items-center gap-3 uppercase tracking-tight">
                <Zap className="w-5 h-5 text-amber-500" />
                Velocity
              </h2>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Tasks Completed</span>
                    <span className="text-xl font-black text-foreground tracking-tight">24/30</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary">
                    <div className="h-full bg-amber-500 w-[80%]" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Active Sprints</span>
                    <span className="text-xl font-black text-foreground tracking-tight">2</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary">
                    <div className="h-full bg-blue-500 w-[40%]" />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-950 p-8 text-white relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Sprint Goal</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Complete the LearnOps Suite front-end overhaul and prepare for the v4.0 release.
                </p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-none border border-slate-800 bg-slate-900 flex items-center justify-center text-[10px] font-bold hover:z-10 hover:border-primary transition-all cursor-default">
                      U{i}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-none border border-slate-800 bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold">
                    +2
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
