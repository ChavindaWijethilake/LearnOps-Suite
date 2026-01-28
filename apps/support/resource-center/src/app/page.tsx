import {
  Search,
  BookOpen,
  FileText,
  Video,
  Download,
  ArrowRight,
  Bookmark,
  Clock,
  Star
} from 'lucide-react';

const featured = [
  { id: 1, title: 'Company Branding Guidelines 2026', type: 'PDF', category: 'Marketing', author: 'Design Team', date: '2 days ago' },
  { id: 2, title: 'New Employee Onboarding Video', type: 'Video', category: 'HR', author: 'People Ops', date: '1 week ago' },
  { id: 3, title: 'API Documentation v2.4', type: 'Doc', category: 'Engineering', author: 'Dev Team', date: 'Yesterday' },
];

const categories = [
  { name: 'Engineering', count: 124, icon: <div className="w-10 h-10 rounded-none bg-blue-50 text-blue-600 flex items-center justify-center"><BookOpen className="w-5 h-5" /></div> },
  { name: 'Design', count: 86, icon: <div className="w-10 h-10 rounded-none bg-rose-50 text-rose-600 flex items-center justify-center"><FileText className="w-5 h-5" /></div> },
  { name: 'Marketing', count: 42, icon: <div className="w-10 h-10 rounded-none bg-amber-50 text-amber-600 flex items-center justify-center"><Video className="w-5 h-5" /></div> },
  { name: 'Human Resources', count: 35, icon: <div className="w-10 h-10 rounded-none bg-teal-50 text-teal-600 flex items-center justify-center"><Download className="w-5 h-5" /></div> },
];

export default function ResourceDashboard() {
  return (
    <div className="space-y-12 animate-fade-in">
      <header className="relative py-20 overflow-hidden rounded-none bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-none blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-hover rounded-none blur-[150px] animate-pulse [animation-delay:1s]" />
        </div>

        <div className="relative z-10 text-center space-y-8 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-none text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">
            Resource Engine v2.0
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Knowledge at your <span className="text-primary">fingertips</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Search through thousands of documents, videos, and articles in the LearnOps Resource Center.
          </p>
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search resources, guides, and more..."
              className="w-full pl-16 pr-6 py-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-none text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary/50 transition-all shadow-2xl"
            />
          </div>
        </div>
      </header>

      <section>
        <div className="flex items-center justify-between mb-10">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
              <Star className="w-6 h-6 text-amber-500" />
              Featured Resources
            </h2>
            <p className="text-sm text-gray-500 font-medium">Hand-picked for your success</p>
          </div>
          <button className="px-6 py-2.5 text-sm font-bold text-primary bg-primary/5 rounded-none hover:bg-primary/10 transition-all">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, index) => (
            <div
              key={item.id}
              className="resource-card group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-none bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {item.type === 'PDF' ? <Download className="w-7 h-7" /> : item.type === 'Video' ? <Video className="w-7 h-7" /> : <FileText className="w-7 h-7" />}
                </div>
                <button className="p-3 hover:bg-gray-100 rounded-none transition-all text-gray-400 hover:text-primary hover:scale-110">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
              <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-8">
                <span className="category-tag">{item.category}</span>
                <span className="w-1 h-1 rounded-none bg-gray-200" />
                <span className="text-gray-500">{item.author}</span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <Clock className="w-4 h-4" />
                  {item.date}
                </div>
                <button className="text-sm font-black text-primary flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Open <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <section className="bg-white border border-gray-100 rounded-none p-10 shadow-sm animate-slide-up [animation-delay:400ms]">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-10">Browse by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((cat) => (
                <button key={cat.name} className="flex items-center gap-6 p-6 rounded-none border border-gray-50 hover:border-primary/20 hover:bg-gray-50/50 transition-all group text-left">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-primary transition-colors">{cat.name}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{cat.count} Resources</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <section className="bg-primary rounded-none p-10 text-white shadow-2xl shadow-primary/20 animate-slide-up [animation-delay:600ms]">
            <h2 className="text-xl font-extrabold mb-6">Contribute</h2>
            <p className="text-sm font-medium text-white/80 mb-10 leading-relaxed">
              Have a resource that could help others? Upload it to the Resource Center and share your knowledge with the community.
            </p>
            <button className="w-full py-4 bg-white text-primary rounded-none text-sm font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-xl hover:scale-105 active:scale-95">
              Upload Resource
            </button>
          </section>

          <section className="glass-card rounded-none p-10 animate-slide-up [animation-delay:800ms]">
            <h2 className="text-xl font-extrabold text-primary mb-6">Quick Links</h2>
            <div className="space-y-4">
              {['Brand Assets', 'HR Policies', 'Technical Guides'].map((link) => (
                <button key={link} className="w-full text-left p-4 bg-white/50 border border-gray-100 rounded-none text-sm font-bold text-gray-700 hover:border-primary hover:text-primary hover:translate-x-2 transition-all">
                  {link}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
