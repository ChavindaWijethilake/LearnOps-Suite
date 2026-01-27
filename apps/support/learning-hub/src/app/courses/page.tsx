import {
    Search,
    Filter,
    Star,
    Clock,
    Users,
    ArrowRight,
    Play
} from 'lucide-react';

const courses = [
    { id: 1, title: 'Advanced React Patterns', rating: 4.8, students: '1.2k', level: 'Intermediate', duration: '12h 30m', image: 'bg-blue-500', category: 'Development' },
    { id: 2, title: 'Enterprise Architecture', rating: 4.9, students: '3.5k', level: 'Advanced', duration: '24h 00m', image: 'bg-purple-500', category: 'Architecture' },
    { id: 3, title: 'UI/UX Design Systems', rating: 4.7, students: '2.8k', level: 'Beginner', duration: '8h 15m', image: 'bg-rose-500', category: 'Design' },
    { id: 4, title: 'Cloud Native DevOps', rating: 4.8, students: '1.5k', level: 'Intermediate', duration: '15h 45m', image: 'bg-teal-500', category: 'DevOps' },
    { id: 5, title: 'Data Science with Python', rating: 4.9, students: '4.2k', level: 'Beginner', duration: '20h 30m', image: 'bg-amber-500', category: 'Data Science' },
    { id: 6, title: 'Product Management 101', rating: 4.6, students: '1.8k', level: 'Beginner', duration: '10h 00m', image: 'bg-indigo-500', category: 'Management' },
];

export default function CoursesPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Course Catalog</h1>
                    <p className="text-sm text-gray-500">Browse and enroll in courses to expand your knowledge.</p>
                </div>
            </header>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search courses by title, category, or instructor..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                        <option>All Categories</option>
                        <option>Development</option>
                        <option>Design</option>
                        <option>Architecture</option>
                        <option>Management</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                        <div className={`h-40 ${course.image} relative`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                            <div className="absolute top-4 left-4">
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/90 text-gray-900 rounded-lg shadow-sm">
                                    {course.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{course.title}</h3>

                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <div className="flex items-center gap-1 text-amber-500">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    <span className="font-bold">{course.rating}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="w-3.5 h-3.5" />
                                    {course.students} students
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {course.duration}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{course.level}</span>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                    Enroll Now
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
