'use client';

import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    GraduationCap,
    Clock,
    Calendar,
    Search,
    Filter,
    MoreVertical,
    FileText,
    AlertCircle,
    CheckCircle2,
    TrendingUp,
    Download,
    Plus,
    MessageSquare,
    Settings,
    Bell,
    ChevronRight,
    Briefcase,
    Shield
} from 'lucide-react';

export default function ProfessorPortalPage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'roster' | 'grading'>('overview');
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, []);

    // -- Mock Data --

    const stats = [
        { label: 'Total Students', value: '142', icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
        { label: 'Classes Today', value: '3', icon: BookOpen, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
        { label: 'Pending Grades', value: '28', icon: FileText, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
        { label: 'Office Hours', value: '2:00 PM', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    ];

    const schedule = [
        { id: 1, time: '09:00 AM', course: 'CS-101: Intro to Computer Science', room: 'Lecture Hall 3B', type: 'Lecture', status: 'Completed' },
        { id: 2, time: '11:00 AM', course: 'CS-305: Advanced Algorithms', room: 'Lab 402', type: 'Lab', status: 'In Progress' },
        { id: 3, time: '02:00 PM', course: 'Office Hours', room: 'Faculty Office 204', type: 'Consultation', status: 'Upcoming' },
        { id: 4, time: '04:00 PM', course: 'CS-450: Capstone Project Review', room: 'Conf. Room A', type: 'Meeting', status: 'Upcoming' },
    ];

    const courses = [
        { id: 'CS-101', name: 'Intro to Computer Science', students: 45, days: 'Mon, Wed, Fri', time: '09:00 - 10:30', progress: 65, nextDue: 'Midterm Exam' },
        { id: 'CS-305', name: 'Advanced Algorithms', students: 32, days: 'Tue, Thu', time: '11:00 - 12:30', progress: 40, nextDue: 'Graph Theory Assignment' },
        { id: 'CS-450', name: 'Capstone Project', students: 15, days: 'Fri', time: '04:00 - 06:00', progress: 85, nextDue: 'Final Presentation' },
        { id: 'SE-202', name: 'Software Engineering II', students: 50, days: 'Mon, Wed', time: '01:00 - 02:30', progress: 20, nextDue: 'Project Proposal' },
    ];

    const students = [
        { id: 'S-1024', name: 'Alex Johnson', course: 'CS-305', status: 'Excelling', grade: '92%', lastActive: '2h ago' },
        { id: 'S-1025', name: 'Maria Garcia', course: 'CS-101', status: 'At Risk', grade: '64%', lastActive: '3d ago' },
        { id: 'S-1026', name: 'James Smith', course: 'CS-450', status: 'On Track', grade: '88%', lastActive: '1d ago' },
        { id: 'S-1027', name: 'Linda Chen', course: 'CS-305', status: 'Excelling', grade: '95%', lastActive: '5m ago' },
        { id: 'S-1028', name: 'Robert Wilson', course: 'SE-202', status: 'Needs Support', grade: '71%', lastActive: '12h ago' },
    ];

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-400 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10">
                {/* ── Header ── */}
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <Briefcase className="w-5 h-5 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-white tracking-tight">Faculty Command</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] bg-indigo-500/10 px-2 py-0.5 rounded">Term: Spring 2026</span>
                            <span className="w-1 h-1 bg-slate-700 rounded-full" />
                            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">System Status: Nominal</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block text-right">
                            <p className="text-2xl font-black text-white tracking-tighter">{currentTime}</p>
                            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest text-right">Local Time</p>
                        </div>
                        <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border border-[#0F172A]"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/10 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">JD</span>
                        </div>
                    </div>
                </header>

                {/* ── Navigation ── */}
                <nav className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
                    {[
                        { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
                        { id: 'courses', label: 'My Courses', icon: BookOpen },
                        { id: 'roster', label: 'Student Roster', icon: Users },
                        { id: 'grading', label: 'Grading', icon: GraduationCap },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all text-xs font-black uppercase tracking-widest whitespace-nowrap border ${activeTab === tab.id ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'}`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </nav>

                {/* ── Content Area ── */}
                <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">

                    {/* DASHBOARD TAB */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, i) => (
                                    <div key={i} className={`p-6 bg-white/3 rounded-2xl border ${stat.border} hover:bg-white/5 transition-all group`}>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-3 rounded-xl ${stat.bg}`}>
                                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                            </div>
                                            <span className="text-[10px] font-black text-slate-600 group-hover:text-slate-400 uppercase tracking-widest transition-colors">Real-Time</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-white tracking-tight mb-1">{stat.value}</h3>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-12 gap-8">
                                {/* Timeline */}
                                <div className="col-span-12 lg:col-span-8">
                                    <div className="p-8 bg-white/3 border border-white/5 rounded-[32px] h-full">
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-xl font-bold text-white tracking-tight">Today's Schedule</h3>
                                            <button className="text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:text-indigo-300">View Full Calendar</button>
                                        </div>
                                        <div className="space-y-6">
                                            {schedule.map((item) => (
                                                <div key={item.id} className="flex gap-6 group">
                                                    <div className="flex flex-col items-center">
                                                        <div className={`w-3 h-3 rounded-full border-2 ${item.status === 'Completed' ? 'bg-slate-700 border-slate-600' : item.status === 'In Progress' ? 'bg-emerald-500 border-emerald-500 animate-pulse' : 'bg-slate-900 border-indigo-500'}`}></div>
                                                        <div className="w-px h-full bg-white/5 my-2 group-last:hidden"></div>
                                                    </div>
                                                    <div className={`flex-1 p-5 rounded-2xl border transition-all ${item.status === 'In Progress' ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-white/2 border-white/5 hover:bg-white/5'}`}>
                                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-1">
                                                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.time}</span>
                                                                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${item.status === 'In Progress' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-500'}`}>
                                                                        {item.status}
                                                                    </span>
                                                                </div>
                                                                <h4 className={`text-lg font-bold ${item.status === 'Completed' ? 'text-slate-500 line-through' : 'text-white'}`}>{item.course}</h4>
                                                                <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                                                    {item.room} • {item.type}
                                                                </p>
                                                            </div>
                                                            {item.status !== 'Completed' && (
                                                                <button className="px-5 py-2.5 bg-white/5 hover:bg-indigo-500 hover:text-white text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                                                                    {item.status === 'In Progress' ? 'Launch Classroom' : 'Prepare Material'}
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions & Alerts */}
                                <div className="col-span-12 lg:col-span-4 space-y-8">
                                    <div className="p-8 bg-indigo-500/5 border border-indigo-500/10 rounded-[32px]">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-indigo-500/20 rounded-xl">
                                                <TrendingUp className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white tracking-tight">Priority Actions</h3>
                                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Requires Attention</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                { text: 'Submit Midterm Grades', due: '2 Days', urgent: true },
                                                { text: 'Approve Research Grants', due: '5 Days', urgent: false },
                                                { text: 'Department Meeting RSVP', due: 'Tomorrow', urgent: false },
                                            ].map((task, i) => (
                                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-indigo-500/30 rounded-xl cursor-pointer group transition-all">
                                                    <span className="text-xs font-bold text-slate-300 group-hover:text-white">{task.text}</span>
                                                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded ${task.urgent ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-700/30 text-slate-500'}`}>
                                                        {task.due}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="w-full mt-6 py-3 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                                            View Task Manager
                                        </button>
                                    </div>

                                    <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-[32px]">
                                        <h3 className="text-lg font-bold text-white tracking-tight mb-4">Department Notice</h3>
                                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                            Faculty evaluations for the Spring semester are now open. Please encourage students to complete their surveys before the deadline on <span className="text-emerald-400 font-bold">April 30th</span>.
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                                                <Shield className="w-4 h-4 text-emerald-500" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-white uppercase">Dean's Office</p>
                                                <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Sent Today, 8:00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* COURSES TAB */}
                    {activeTab === 'courses' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {courses.map((course) => (
                                <div key={course.id} className="p-8 bg-white/3 border border-white/5 hover:border-indigo-500/30 rounded-[32px] group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-[10px] font-black uppercase tracking-widest mb-2">{course.id}</span>
                                            <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">{course.name}</h3>
                                        </div>
                                        <button className="p-2 hover:bg-white/10 rounded-full text-slate-500 hover:text-white transition-colors">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3 text-slate-400">
                                            <Calendar className="w-4 h-4 text-slate-600" />
                                            <span className="text-xs font-medium">{course.days}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-400">
                                            <Clock className="w-4 h-4 text-slate-600" />
                                            <span className="text-xs font-medium">{course.time}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-400">
                                            <Users className="w-4 h-4 text-slate-600" />
                                            <span className="text-xs font-medium">{course.students} Enrolled Students</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-8">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                            <span className="text-slate-500">Course Progress</span>
                                            <span className="text-white">{course.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div>
                                            <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Next Milestone</p>
                                            <p className="text-xs font-bold text-emerald-400 mt-1">{course.nextDue}</p>
                                        </div>
                                        <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all flex items-center gap-2">
                                            Manage <ChevronRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* Add New Course Card */}
                            <button className="p-8 bg-white/2 border border-dashed border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 rounded-[32px] flex flex-col items-center justify-center text-center group transition-all min-h-[300px]">
                                <div className="w-16 h-16 rounded-full bg-white/5 group-hover:bg-indigo-500 group-hover:scale-110 flex items-center justify-center transition-all mb-4">
                                    <Plus className="w-8 h-8 text-slate-400 group-hover:text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-300 group-hover:text-white mb-1">Create New Course</h3>
                                <p className="text-xs text-slate-600 uppercase tracking-widest">Add a section for Spring 2026</p>
                            </button>
                        </div>
                    )}

                    {/* ROSTER TAB */}
                    {activeTab === 'roster' && (
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/3 border border-white/5 p-4 rounded-2xl">
                                <div className="relative w-full md:w-96">
                                    <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                                    <input
                                        type="text"
                                        placeholder="Search student by name or ID..."
                                        className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-slate-300 flex items-center gap-2 transition-all">
                                        <Filter className="w-4 h-4" /> Filter
                                    </button>
                                    <button className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-slate-300 flex items-center gap-2 transition-all">
                                        <Download className="w-4 h-4" /> Export CSV
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white/3 border border-white/5 rounded-3xl overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-[#0F172A] border-b border-white/10">
                                        <tr>
                                            <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Student ID</th>
                                            <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Full Name</th>
                                            <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Course</th>
                                            <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Academic Status</th>
                                            <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Current Grade</th>
                                            <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {students.map((student) => (
                                            <tr key={student.id} className="hover:bg-white/2 transition-colors group">
                                                <td className="px-8 py-5 text-xs font-medium text-slate-400 font-mono">{student.id}</td>
                                                <td className="px-8 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">
                                                            {student.name.charAt(0)}
                                                        </div>
                                                        <span className="text-sm font-bold text-white">{student.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5 text-sm font-bold text-slate-300">{student.course}</td>
                                                <td className="px-8 py-5">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${student.status === 'Excelling' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                                            student.status === 'At Risk' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                                                                student.status === 'Needs Support' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                                                    'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                                                        }`}>
                                                        {student.status}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-5 text-sm font-black text-white">{student.grade}</td>
                                                <td className="px-8 py-5 text-right">
                                                    <button className="text-slate-500 hover:text-white transition-colors">
                                                        <MoreVertical className="w-5 h-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* GRADING TAB -- Placeholder for complex widget */}
                    {activeTab === 'grading' && (
                        <div className="flex flex-col items-center justify-center py-20 bg-white/3 border border-dashed border-white/10 rounded-[32px]">
                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                                <GraduationCap className="w-10 h-10 text-slate-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Grading Module Initializing</h3>
                            <p className="text-sm text-slate-500 max-w-md text-center mb-8">
                                Secure gradebook connection established. Select a specific course from the 'My Courses' tab to begin grade entry for this session.
                            </p>
                            <button
                                onClick={() => setActiveTab('courses')}
                                className="px-8 py-4 bg-indigo-500 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-400 transition-all shadow-lg shadow-indigo-500/20"
                            >
                                Select Course
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
