'use client';

import { useState } from 'react';
import {
    Users,
    Activity,
    ShieldAlert,
    Clock,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical,
    GripHorizontal,
    X,
    Settings2,
    Layout
} from 'lucide-react';

export default function AdminDashboardPage() {
    const [isEditMode, setIsEditMode] = useState(false);

    // Mock Data
    const [stats, setStats] = useState([
        { id: 1, label: 'Total Users', value: '12,450', change: '+12%', trend: 'up', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-100' },
        { id: 2, label: 'Active Sessions', value: '1,240', change: '+5%', trend: 'up', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-100' },
        { id: 3, label: 'System Errors', value: '23', change: '-2%', trend: 'down', icon: ShieldAlert, color: 'text-rose-600', bg: 'bg-rose-100' },
        { id: 4, label: 'Avg. Response', value: '120ms', change: '0%', trend: 'neutral', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100' },
    ]);

    const recentActivity = [
        { id: 1, user: 'Dr. Sarah Connor', action: 'Uploaded Syllabus', target: 'CS-101', time: '2 mins ago', icon: '📝' },
        { id: 2, user: 'Admin User', action: 'Updated System Settings', target: 'Global Config', time: '15 mins ago', icon: '⚙️' },
        { id: 3, user: 'John Doe', action: 'Failed Login Attempt', target: 'IP: 192.168.1.1', time: '1 hour ago', icon: '🚫' },
        { id: 4, user: 'Maria Garcia', action: 'Submitted Assignment', target: 'Algorithms II', time: '3 hours ago', icon: '✅' },
    ];

    const removeStat = (id: number) => {
        setStats(stats.filter(s => s.id !== id));
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                    <p className="text-slate-500 text-sm">Welcome back, here's what's happening with your platform today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsEditMode(!isEditMode)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isEditMode ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                    >
                        {isEditMode ? <Settings2 className="w-4 h-4 animate-spin-slow" /> : <Layout className="w-4 h-4" />}
                        {isEditMode ? 'Done Editing' : 'Customize Dashboard'}
                    </button>
                </div>
            </div>

            {/* Edit Mode Banner */}
            {isEditMode && (
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-center gap-3 animate-in slide-in-from-top-2">
                    <div className="h-8 w-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                        <GripHorizontal className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-indigo-900">Edit Mode Active</p>
                        <p className="text-xs text-indigo-600">Drag widgets to reorder or click X to remove them from your view.</p>
                    </div>
                </div>
            )}

            {/* Stats Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isEditMode ? 'gap-y-8' : ''}`}>
                {stats.map((stat, i) => (
                    <div key={stat.id} className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all relative group ${isEditMode ? 'border-dashed border-2 border-indigo-200 cursor-move hover:border-indigo-400 hover:shadow-md' : 'hover:shadow-md'}`}>
                        {isEditMode && (
                            <div className="absolute -top-3 -right-3 flex gap-1">
                                <button className="h-6 w-6 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 border border-slate-200 shadow-sm" title="Configure">
                                    <Settings2 className="w-3 h-3" />
                                </button>
                                <button
                                    onClick={() => removeStat(stat.id)}
                                    className="h-6 w-6 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center text-rose-600 border border-rose-200 shadow-sm"
                                    title="Remove"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        )}

                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${stat.bg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : stat.trend === 'down' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'}`}>
                                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : stat.trend === 'down' ? <ArrowDownRight className="w-3 h-3 mr-1" /> : null}
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">{stat.value}</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                    </div>
                ))}

                {isEditMode && (
                    <button className="h-full min-h-[160px] rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 hover:border-indigo-400 hover:text-indigo-500 transition-all gap-2 group">
                        <div className="h-10 w-10 bg-slate-100 group-hover:bg-indigo-100 rounded-full flex items-center justify-center transition-colors">
                            <Layout className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold">Add Widget</span>
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Area (Placeholder) */}
                <div className={`lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative ${isEditMode ? 'border-dashed border-2 border-indigo-200' : ''}`}>
                    {isEditMode && (
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center border-dashed border-2 border-indigo-300 rounded-2xl">
                            <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-200 flex gap-2">
                                <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded">Resize</button>
                                <button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded hover:bg-slate-200">Configure</button>
                            </div>
                        </div>
                    )}
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-slate-900">System Traffic</h3>
                        <select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Last 24 Hours</option>
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center border border-dashed border-slate-200 relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-end justify-between px-4 pb-0 opacity-30">
                            {[40, 60, 30, 80, 50, 90, 20, 70, 45, 65, 35, 75].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="w-full mx-1 bg-indigo-500 rounded-t-sm"></div>
                            ))}
                        </div>
                        <p className="text-slate-400 font-medium relative z-10">Traffic Analytics Chart Visualization</p>
                    </div>
                </div>

                {/* Recent Activity Feed */}
                <div className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative ${isEditMode ? 'border-dashed border-2 border-indigo-200' : ''}`}>
                    {isEditMode && (
                        <div className="absolute top-2 right-2 z-20">
                            <button className="h-8 w-8 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 transition-colors">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
                        <button className="text-indigo-600 text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="space-y-6">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="flex gap-4 relative">
                                <div className="absolute left-[19px] top-8 bottom-[-24px] w-px bg-slate-100 last:hidden"></div>
                                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-lg z-10">
                                    {activity.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-sm font-bold text-slate-900">{activity.user}</h4>
                                        <span className="text-[10px] text-slate-400 font-medium">{activity.time}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 mt-0.5">{activity.action} <span className="text-slate-400">•</span> <span className="text-indigo-600 font-medium">{activity.target}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
