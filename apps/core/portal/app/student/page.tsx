import { GraduationCap, BookOpen, Clock, Calendar } from 'lucide-react';

export default function StudentPortalPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-cyan-600" />
                        Student Portal
                    </h1>
                    <p className="text-gray-600 mt-2">Welcome to your student dashboard</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Courses Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-cyan-100 rounded-lg">
                                <BookOpen className="w-6 h-6 text-cyan-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">My Courses</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Access your enrolled courses and materials.</p>
                        <button className="text-cyan-600 font-medium hover:text-cyan-700">View Courses &rarr;</button>
                    </div>

                    {/* Assignments Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-orange-100 rounded-lg">
                                <Clock className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Pending Assignments</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Check deadlines and submit your work.</p>
                        <button className="text-orange-600 font-medium hover:text-orange-700">View Assignments &rarr;</button>
                    </div>

                    {/* Schedule Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Calendar className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Class Schedule</h3>
                        </div>
                        <p className="text-gray-600 mb-4">View your upcoming classes and events.</p>
                        <button className="text-purple-600 font-medium hover:text-purple-700">View Schedule &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
