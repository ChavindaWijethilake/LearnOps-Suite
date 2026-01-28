import {
  Briefcase,
  CheckSquare,
  Users,
  Clock,
  ArrowRight,
  Plus,
  MoreHorizontal,
  Search
} from 'lucide-react';

const projects = [
  { id: 1, name: 'LearnOps Suite Refactor', progress: 85, status: 'Active', team: 4, deadline: 'Feb 15, 2026' },
  { id: 2, name: 'Mobile App Development', progress: 45, status: 'Active', team: 6, deadline: 'Mar 30, 2026' },
  { id: 3, name: 'Infrastructure Migration', progress: 10, status: 'Planning', team: 3, deadline: 'Apr 10, 2026' },
];

const tasks = [
  { id: 'TSK-101', title: 'Implement Shared Auth', status: 'Done', priority: 'High', assignee: 'John Doe' },
  { id: 'TSK-102', title: 'Update UI Components', status: 'In Progress', priority: 'Medium', assignee: 'Jane Smith' },
  { id: 'TSK-103', title: 'Setup Billing Module', status: 'Todo', priority: 'High', assignee: 'Mike Ross' },
  { id: 'TSK-104', title: 'Configure Analytics Data', status: 'Todo', priority: 'Low', assignee: 'Sarah Connor' },
];

export default function ProjectDashboard() {
  return (
    <div className="space-y-12 animate-fade-in">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-none text-[10px] font-black uppercase tracking-widest">
            Project Engine v4.0
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Project Dashboard</h1>
          <p className="text-lg text-gray-500 font-medium">Track your projects, tasks, and team productivity.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-none text-sm font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </header>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Active Projects
            </h2>
            <p className="text-sm text-gray-500 font-medium">Overview of ongoing initiatives</p>
          </div>
          <button className="px-4 py-2 text-sm font-bold text-primary bg-primary/5 rounded-none hover:bg-primary/10 transition-all">
            View All Projects
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-none bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Briefcase className="w-7 h-7" />
                </div>
                <span className={cn(
                  "task-badge",
                  project.status === 'Active' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-blue-50 text-blue-600 border-blue-100'
                )}>
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-6 group-hover:text-primary transition-colors leading-tight">{project.name}</h3>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <span>Progress</span>
                  <span className="text-primary">{project.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill shadow-lg shadow-primary/20" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-gray-50 text-xs font-bold text-gray-400">
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
        <div className="lg:col-span-8 bg-white border border-gray-100 rounded-none shadow-sm overflow-hidden animate-slide-up [animation-delay:400ms]">
          <div className="px-10 py-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold text-gray-900">Recent Tasks</h2>
              <p className="text-sm text-gray-500 font-medium">Your upcoming and completed tasks</p>
            </div>
            <button className="px-4 py-2 text-sm font-bold text-primary bg-primary/5 rounded-none hover:bg-primary/10 transition-all">
              View All Tasks
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {tasks.map((task) => (
              <div key={task.id} className="p-8 hover:bg-gray-50/30 transition-all group cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <div className={cn(
                      "w-3 h-3 rounded-none ring-4",
                      task.status === 'Done' ? 'bg-green-500 ring-green-50' :
                        task.status === 'In Progress' ? 'bg-blue-500 ring-blue-50' :
                          'bg-gray-300 ring-gray-50'
                    )} />
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-primary transition-colors">{task.title}</h3>
                      <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">{task.id} • Assigned to <span className="text-gray-600">{task.assignee}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "task-badge",
                      task.priority === 'High' ? 'bg-red-50 text-red-600 border-red-100' :
                        task.priority === 'Medium' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                          'bg-gray-50 text-gray-500 border-gray-100'
                    )}>
                      {task.priority} Priority
                    </span>
                    <button className="p-2 hover:bg-gray-100 rounded-none transition-colors text-gray-400 group-hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <section className="glass-card rounded-none p-10 animate-slide-up [animation-delay:600ms]">
            <h2 className="text-xl font-extrabold text-gray-900 mb-10 flex items-center gap-3">
              <CheckSquare className="w-6 h-6 text-primary" />
              Team Productivity
            </h2>
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-gray-500">Tasks Completed</span>
                  <span className="text-lg font-black text-gray-900 tracking-tight">24/30</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill shadow-lg shadow-primary/20" style={{ width: '80%' }} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-gray-500">Active Sprints</span>
                  <span className="text-lg font-black text-gray-900 tracking-tight">2</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill shadow-lg shadow-primary/20" style={{ width: '40%' }} />
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-900 rounded-none text-white shadow-2xl shadow-gray-900/20">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-primary">Sprint Goal</p>
              <p className="text-sm font-bold leading-relaxed mb-6">
                Complete the LearnOps Suite front-end overhaul and prepare for the v4.0 release.
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-none border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-[10px] font-black">
                    U{i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-none border-2 border-gray-900 bg-primary flex items-center justify-center text-[10px] font-black">
                  +2
                </div>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/10 rounded-none p-10 animate-slide-up [animation-delay:800ms]">
            <h2 className="text-xl font-extrabold text-primary mb-6">Quick Search</h2>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Find tasks or projects..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-none text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
