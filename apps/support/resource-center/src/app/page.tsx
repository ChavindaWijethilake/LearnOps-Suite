import {
  Search,
  BookOpen,
  FileText,
  Video,
  Download,
  ArrowRight,
  Bookmark,
  Clock,
  Star,
  Filter,
  Library
} from 'lucide-react';

const featured = [
  { id: 1, title: 'Company Branding Guidelines 2026', type: 'PDF', category: 'Marketing', author: 'Design Team', date: '2 days ago' },
  { id: 2, title: 'New Employee Onboarding Video', type: 'Video', category: 'HR', author: 'People Ops', date: '1 week ago' },
  { id: 3, title: 'API Documentation v2.4', type: 'Doc', category: 'Engineering', author: 'Dev Team', date: 'Yesterday' },
];

const categories = [
  { name: 'Engineering', count: 124, icon: <div className="w-10 h-10 rounded-none bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><BookOpen className="w-5 h-5" /></div> },
  { name: 'Design', count: 86, icon: <div className="w-10 h-10 rounded-none bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100"><FileText className="w-5 h-5" /></div> },
  { name: 'Marketing', count: 42, icon: <div className="w-10 h-10 rounded-none bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100"><Video className="w-5 h-5" /></div> },
  { name: 'Human Resources', count: 35, icon: <div className="w-10 h-10 rounded-none bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100"><Download className="w-5 h-5" /></div> },
];

export default function ResourceDashboard() {
  return (
    <div className="space-y-12 animate-fade-in pb-10">
      <div className="px-8 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b pb-8 border-slate-200">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-widest border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,0.1)]">
            <Library className="w-3.5 h-3.5" />
            Knowledge Base
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Resource Center</h1>
          <p className="text-lg text-slate-500 font-medium">Centralized documentation and assets library.</p>
        </div>
        <div className="flex gap-3 pb-2">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-xs font-black uppercase tracking-widest transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-12 pr-4 py-3 w-64 bg-white border-2 border-slate-900 text-sm focus:outline-none focus:ring-0 transition-all font-bold placeholder:text-slate-400 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]"
            />
          </div>
        </div>
      </div>

      <div className="px-8 space-y-12">
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-foreground flex items-center gap-3">
                <Star className="w-6 h-6 text-primary" />
                Featured Resources
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((item, index) => (
              <div
                key={item.id}
                className="group bg-card border hover:border-primary transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-none bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
                      {item.type === 'PDF' ? <FileText className="w-6 h-6" /> : item.type === 'Video' ? <Video className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                    </div>
                    <button className="p-2 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20 px-2 py-1 bg-primary/5">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium">Authored by <span className="text-foreground">{item.author}</span></p>
                </div>
                <div className="px-8 py-4 bg-secondary/20 border-t flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {item.date}
                  </div>
                  <button className="text-xs font-bold text-primary flex items-center gap-2 group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                    Access <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <section className="bg-card border p-8">
              <h2 className="text-xl font-black text-foreground mb-8 uppercase tracking-tight">Browse Categories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categories.map((cat) => (
                  <button key={cat.name} className="flex items-center gap-6 p-6 border hover:border-primary/50 hover:bg-accent/5 transition-all group text-left bg-background">
                    <div className="grayscale group-hover:grayscale-0 transition-all duration-300">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{cat.count} Resources</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <section className="bg-slate-950 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-lg font-black uppercase tracking-widest mb-4">Contribute</h2>
                <p className="text-sm font-medium text-slate-400 mb-8 leading-relaxed">
                  Share your knowledge. Upload guides, assets, or documentation to the repository.
                </p>
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Upload Asset
                </button>
              </div>
            </section>

            <section className="bg-card border p-8">
              <h2 className="text-lg font-bold text-foreground mb-6">Quick Links</h2>
              <div className="space-y-3">
                {['Brand Assets', 'HR Policies', 'Technical Guides', 'Security Protocols'].map((link) => (
                  <button key={link} className="w-full text-left p-4 border bg-background hover:border-primary hover:text-primary transition-all text-sm font-bold flex items-center justify-between group">
                    {link}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </button>
                ))}
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
