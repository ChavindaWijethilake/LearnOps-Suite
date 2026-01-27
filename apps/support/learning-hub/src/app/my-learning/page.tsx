import {
    GraduationCap,
    Play,
    CheckCircle2,
    Clock,
    ArrowRight,
    MoreHorizontal
} from 'lucide-react';

const myLearning = [
    { id: 1, title: 'Advanced React Patterns', progress: 65, instructor: 'Sarah Drasner', nextLesson: 'Higher Order Components', image: 'bg-blue-500' },
    { id: 2, title: 'Enterprise Architecture', progress: 30, instructor: 'Martin Fowler', nextLesson: 'Microservices Design', image: 'bg-purple-500' },
    { id: 3, title: 'UI/UX Design Systems', progress: 90, instructor: 'Gary Simon', nextLesson: 'Component Documentation', image: 'bg-rose-500' },
    { id: 4, title: 'TypeScript Mastery', progress: 100, instructor: 'Josh Goldberg', nextLesson: 'Course Completed', image: 'bg-indigo-500' },
];

export default function MyLearningPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">My Learning</h1>
                    <p className="text-sm text-gray-500">Track your enrolled courses and learning progress.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 gap-6">
                {myLearning.map((course) => (
                    <div key={course.id} className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                        <div className={`w-full md:w-48 h-32 rounded-2xl ${course.image} flex-shrink-0 relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                            {course.progress === 100 ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-green-500/80 text-white">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                            ) : (
                                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-xl">
                                        <Play className="w-5 h-5 fill-current" />
                                    </div>
                                </button>
                            )}
                        </div>

                        <div className="flex-1 space-y-4 w-full">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{course.title}</h3>
                                    <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                                </div>
                                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-gray-400 uppercase tracking-widest">Progress</span>
                                    <span className="text-primary">{course.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className={`h-2 rounded-full transition-all duration-500 ${course.progress === 100 ? 'bg-green-500' : 'bg-primary'}`} style={{ width: `${course.progress}%` }} />
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Clock className="w-4 h-4" />
                                    <span>Next: <span className="font-bold text-gray-700">{course.nextLesson}</span></span>
                                </div>
                                <button className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${course.progress === 100
                                        ? 'bg-green-50 text-green-600 border border-green-100 hover:bg-green-100'
                                        : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20'
                                    }`}>
                                    {course.progress === 100 ? 'Review Course' : 'Continue Lesson'}
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
