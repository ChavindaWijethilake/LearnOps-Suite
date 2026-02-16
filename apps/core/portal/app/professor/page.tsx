import { User, Users, FileCheck, BarChart } from 'lucide-react';

export default function ProfessorPortalPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <User className="w-8 h-8 text-teal-600" />
                        Professor Portal
                    </h1>
                    <p className="text-gray-600 mt-2">Welcome to your faculty dashboard</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* My Classes Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-teal-100 rounded-lg">
                                <Users className="w-6 h-6 text-teal-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">My Classes</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Manage your classes and student rosters.</p>
                        <button className="text-teal-600 font-medium hover:text-teal-700">Manage Classes &rarr;</button>
                    </div>

                    {/* Grading Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-indigo-100 rounded-lg">
                                <FileCheck className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Grading</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Grade assignments and exams.</p>
                        <button className="text-indigo-600 font-medium hover:text-indigo-700">Go to Grading &rarr;</button>
                    </div>

                    {/* Analytics Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-pink-100 rounded-lg">
                                <BarChart className="w-6 h-6 text-pink-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Student Analytics</h3>
                        </div>
                        <p className="text-gray-600 mb-4">View student performance and engagement.</p>
                        <button className="text-pink-600 font-medium hover:text-pink-700">View Analytics &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
