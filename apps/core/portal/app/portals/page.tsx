'use client';

import { useState, useRef, useEffect } from 'react';
import {
    LayoutDashboard,
    GraduationCap,
    Headphones,
    CreditCard,
    Settings,
    Bell,
    Search,
    MessageSquare,
    LogOut,
    User,
    ChevronRight,
    ChevronLeft,
    ChevronUp,
    ChevronDown,
    ExternalLink,
    Clock,
    CheckCircle2,
    FileText,
    Shield,
    Menu,
    X,
    GripVertical,
    RotateCcw
} from 'lucide-react';
import { useAuth } from '@/components/auth/auth-provider';

// -- Mock Data --
const initialActivity = [
    { id: 1, type: 'success', title: 'Assignment Submitted', desc: 'Advanced Algorithms', time: '2 hrs ago' },
    { id: 2, type: 'info', title: 'Payment Received', desc: 'Spring Semester Tuition', time: '1 day ago' },
    { id: 3, type: 'warning', title: 'Library Book Due', desc: 'Introduction to AI', time: '2 days ago' },
    { id: 4, type: 'neutral', title: 'New Announcement', desc: 'Campus maintenance scheduled', time: '3 days ago' },
];

const initialModules = [
    {
        id: 'academic',
        title: 'Academic Portal',
        desc: 'Courses, assignments, grades, academic records',
        href: 'http://localhost:3005',
        icon: GraduationCap,
        color: 'from-emerald-500 to-emerald-600',
        meta: 'Active • Last accessed today',
        roles: ['student', 'professor', 'admin']
    },
    {
        id: 'professor',
        title: 'Professor Portal',
        desc: 'Grade assignments, manage classes, student analytics',
        href: '/professor',
        icon: User,
        color: 'from-blue-500 to-blue-600',
        meta: 'Faculty Access',
        roles: ['professor', 'admin']
    },
    {
        id: 'admin',
        title: 'Admin Command Center',
        desc: 'System health, audit logs, security protocols',
        href: '/status',
        icon: Shield,
        color: 'from-slate-500 to-slate-600',
        meta: 'Restricted Access',
        roles: ['admin']
    },
    {
        id: 'it-service',
        title: 'IT Service Desk',
        desc: 'Submit tickets, track requests, system support',
        href: 'http://localhost:3003',
        icon: Headphones,
        color: 'from-blue-500 to-blue-600',
        meta: 'No open tickets',
        roles: ['student', 'professor', 'admin']
    },
    {
        id: 'billing',
        title: 'Billing & Finance',
        desc: 'Tuition payments, invoices, financial statements',
        href: '/billing',
        icon: CreditCard,
        color: 'from-violet-500 to-violet-600',
        meta: 'Next due: Mar 01',
        roles: ['student', 'admin']
    },
    {
        id: 'account',
        title: 'Account & Preferences',
        desc: 'Security, profile settings, accessibility',
        href: '/settings',
        icon: Settings,
        color: 'from-slate-500 to-slate-600',
        meta: 'Profile 100% complete',
        roles: ['student', 'professor', 'admin']
    }
];

export default function PortalDashboard() {
    const { user, logout } = useAuth();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [recentActivity, setRecentActivity] = useState(initialActivity);
    const [showAllActivity, setShowAllActivity] = useState(false);

    // Module Customization State
    const [modules, setModules] = useState(initialModules);
    const [isCustomizing, setIsCustomizing] = useState(false);

    // Filter modules based on user role
    useEffect(() => {
        if (user?.role) {
            const filtered = initialModules.filter(m =>
                (m as any).roles.includes(user.role)
            );
            setModules(filtered);
        }
    }, [user?.role]);

    // Drag and Drop State
    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        if (showChat) setShowChat(false);
        if (!showNotifications) {
            addActivity('Checked Notifications', 'Viewed recent alerts', 'neutral');
        }
    };
    const toggleChat = () => {
        setShowChat(!showChat);
        if (showNotifications) setShowNotifications(false);
    };

    const addActivity = (title: string, desc: string, type: string = 'info') => {
        const newActivity = {
            id: Date.now(),
            title,
            desc,
            type,
            time: 'Just now'
        };
        setRecentActivity(prev => [newActivity, ...prev].slice(0, 10)); // Keep only recent 10
    };

    const handleModuleClick = (moduleTitle: string, href: string) => {
        addActivity('Accessed Module', `Navigated to ${moduleTitle}`, 'success');
        // Allow default link behavior to proceed
    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
        dragItem.current = position;
        e.dataTransfer.effectAllowed = "move";
        // Create simple drag image or use default
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
        dragOverItem.current = position;
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const copyListItems = [...modules];
        if (dragItem.current !== null && dragOverItem.current !== null) {
            const dragItemContent = copyListItems[dragItem.current];
            copyListItems.splice(dragItem.current, 1);
            copyListItems.splice(dragOverItem.current, 0, dragItemContent);
            dragItem.current = null;
            dragOverItem.current = null;
            setModules(copyListItems);
        }
    };

    const moveModule = (index: number, direction: 'left' | 'right' | 'up' | 'down') => {
        const newModules = [...modules];
        let targetIndex = index;
        const gridCols = 2; // Assuming 2 columns on desktop

        if (direction === 'left') targetIndex = index - 1;
        if (direction === 'right') targetIndex = index + 1;
        if (direction === 'up') targetIndex = index - gridCols;
        if (direction === 'down') targetIndex = index + gridCols;

        // Check bounds
        if (targetIndex >= 0 && targetIndex < newModules.length) {
            // Swap
            [newModules[targetIndex], newModules[index]] = [newModules[index], newModules[targetIndex]];
            setModules(newModules);
        }
    };

    const resetToDefault = () => {
        setModules(initialModules);
    };

    return (
        <div className="min-h-screen bg-[#0F172A] flex text-slate-200 selection:bg-emerald-500/30 font-sans">

            {/* 1. Left Vertical Sidebar */}
            <aside
                className={`fixed left-0 top-0 bottom-0 bg-[#0B1120] border-r border-slate-800 flex flex-col z-50 transition-all duration-300 ${isSidebarCollapsed ? 'w-[80px]' : 'w-[280px]'
                    }`}
            >
                {/* Logo Area & Toggle */}
                <div className={`h-20 flex items-center justify-between border-b border-slate-800/50 ${isSidebarCollapsed ? 'px-0 justify-center' : 'px-6'}`}>
                    <div className={`flex items-center ${isSidebarCollapsed ? 'justify-center w-full' : ''}`}>
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
                            <span className="font-bold text-white">L</span>
                        </div>
                        {!isSidebarCollapsed && (
                            <span className="ml-3 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 animate-fade-in">
                                LearnOps
                            </span>
                        )}
                    </div>

                    {/* Minimize Button at Top */}
                    {!isSidebarCollapsed && (
                        <button
                            onClick={toggleSidebar}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* If collapsed, show toggle button in center of logo area/top */}
                {isSidebarCollapsed && (
                    <button
                        onClick={toggleSidebar}
                        className="mx-auto mt-2 p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                )}

                {/* Navigation (Blank top, System at bottom) */}
                <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
                    {/* Top items removed as requested */}

                    {/* Spacer to push Settings to bottom */}
                    <div className="mt-auto pt-4 border-t border-slate-800/50">
                        <div className={`px-4 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ${isSidebarCollapsed ? 'text-center' : ''}`}>
                            {isSidebarCollapsed ? 'SYS' : 'System'}
                        </div>
                        <NavItem
                            icon={Settings}
                            label="Preferences"
                            collapsed={isSidebarCollapsed}
                            onClick={() => addActivity('System Preferences', 'Accessed settings panel', 'neutral')}
                        />
                    </div>
                </nav>

                {/* User Profile */}
                <div className="p-4 border-t border-slate-800/50">
                    <div className={`flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors border border-slate-700/30 cursor-pointer group ${isSidebarCollapsed ? 'justify-center p-2' : ''}`}>
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border-2 border-slate-600 group-hover:border-emerald-500/50 transition-colors shrink-0">
                            <span className="font-bold text-slate-300">{user?.name?.[0] || 'U'}</span>
                        </div>
                        {!isSidebarCollapsed && (
                            <div className="flex-1 min-w-0 animate-fade-in">
                                <div className="text-sm font-semibold text-slate-200 truncate">{user?.name || 'User'}</div>
                                <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Active
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main
                className={`flex-1 min-h-screen flex flex-col relative overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? 'ml-[80px]' : 'ml-[280px]'
                    }`}
            >
                {/* Background Glows */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

                {/* 2. Top Navigation Bar */}
                <header className="h-20 px-8 flex items-center justify-between sticky top-0 z-40 bg-[#0F172A]/80 backdrop-blur-xl border-b border-slate-800/50 shrink-0">
                    <h1 className="text-xl font-bold text-slate-100 tracking-tight">Portal Command Center</h1>

                    <div className="flex items-center gap-6">
                        {/* Global Search */}
                        <div className="relative group hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search everything..."
                                className="w-80 bg-slate-900/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-500"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 relative">
                            <IconButton
                                icon={Bell}
                                active={showNotifications}
                                onClick={toggleNotifications}
                                badge="3"
                            />
                            <IconButton
                                icon={MessageSquare}
                                active={showChat}
                                onClick={toggleChat}
                            />
                            <div className="w-px h-6 bg-slate-800 mx-2" />
                            <button
                                onClick={() => logout()}
                                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="hidden md:inline">Sign Out</span>
                            </button>

                            {/* Notifications Panel */}
                            {showNotifications && (
                                <div className="absolute top-14 right-0 w-80 bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl p-4 z-50 animate-in slide-in-from-top-2 fade-in duration-200">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-white">Notifications</h3>
                                        <button onClick={() => setShowNotifications(false)} className="text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
                                    </div>
                                    <div className="space-y-3">
                                        {recentActivity.map(item => (
                                            <div key={item.id} className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer">
                                                <div className="flex justify-between items-start">
                                                    <span className="text-sm font-semibold text-slate-200">{item.title}</span>
                                                    <span className="text-[10px] text-slate-500">{item.time}</span>
                                                </div>
                                                <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-4 py-2 text-xs font-bold text-center text-emerald-400 hover:text-emerald-300">View All Notifications</button>
                                </div>
                            )}

                            {/* Chat Panel */}
                            {showChat && (
                                <div className="absolute top-14 right-12 w-80 bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl p-4 z-50 animate-in slide-in-from-top-2 fade-in duration-200">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-white">Messages</h3>
                                        <button onClick={() => setShowChat(false)} className="text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
                                    </div>
                                    <div className="h-48 flex items-center justify-center text-slate-500 text-sm italic">
                                        No new messages
                                    </div>
                                    <button className="w-full mt-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-500">Start New Chat</button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <div className="flex-1 p-8 flex gap-8 overflow-y-auto">
                    {/* 3. & 4. Main Dashboard Content */}
                    <div className="flex-1 space-y-8 min-w-0">
                        {/* Welcome Banner */}
                        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 overflow-hidden group shrink-0">
                            <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-[length:20px_20px]" />
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                                        Welcome back, {user?.name?.split(' ')[0] || 'Student'}!
                                    </h2>
                                    <p className="text-slate-400 max-w-lg text-lg">
                                        Access your academic services and manage your university experience from one central hub.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <StatChip label="Modules" value={modules.length.toString()} />
                                    <StatChip label="Role" value={user?.role || 'Student'} />
                                    <StatChip label="Status" value="Active" active />
                                </div>
                            </div>
                        </div>

                        {/* Portal Modules Grid */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-100">Your Modules</h3>
                                <div className="flex items-center gap-4">
                                    {isCustomizing && <span className="text-xs text-slate-500 animate-pulse">Drag cards or use arrows to reorder</span>}

                                    {/* Reset Button */}
                                    {isCustomizing && (
                                        <button
                                            onClick={resetToDefault}
                                            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-700/50 px-3 py-1 rounded-lg transition-colors border border-transparent hover:border-slate-600"
                                            title="Restore default order"
                                        >
                                            <RotateCcw className="w-3.5 h-3.5" />
                                            <span className="hidden sm:inline">Reset Default</span>
                                        </button>
                                    )}

                                    <button
                                        onClick={() => setIsCustomizing(!isCustomizing)}
                                        className={`text-sm font-medium transition-colors ${isCustomizing ? 'text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20' : 'text-slate-400 hover:text-white'}`}
                                    >
                                        {isCustomizing ? 'Done Customizing' : 'Customize Order'}
                                    </button>
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20"
                            >
                                {modules.map((module, idx) => (
                                    <div
                                        key={module.id}
                                        draggable={isCustomizing}
                                        onDragStart={(e) => handleDragStart(e, idx)}
                                        onDragEnter={(e) => handleDragEnter(e, idx)}
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={handleDrop}
                                        className={`group relative p-6 bg-slate-800/40 backdrop-blur-md border rounded-2xl transition-all duration-300 ${isCustomizing
                                            ? 'border-dashed border-emerald-500/50 bg-slate-800/80 cursor-grab active:cursor-grabbing hover:bg-slate-800'
                                            : 'border-slate-700/50 hover:bg-slate-800/60 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 cursor-pointer'
                                            }`}
                                    >
                                        {!isCustomizing ? (
                                            <a
                                                href={module.href}
                                                target={module.href.startsWith('http') ? '_blank' : undefined}
                                                onClick={() => handleModuleClick(module.title, module.href)}
                                                className="block h-full"
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${module.color} shadow-lg`}>
                                                        <module.icon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                                </div>

                                                <h4 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-emerald-400 transition-colors">
                                                    {module.title}
                                                </h4>
                                                <p className="text-sm text-slate-400 mb-6 line-clamp-1">
                                                    {module.desc}
                                                </p>

                                                <div className="flex items-center gap-2 pt-4 border-t border-slate-700/30 text-xs font-medium text-slate-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                    {module.meta}
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="h-full flex flex-col">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${module.color} grayscale opacity-50`}>
                                                        <module.icon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <GripVertical className="w-5 h-5 text-slate-600" />
                                                </div>
                                                <h4 className="text-lg font-bold text-slate-100 mb-1">{module.title}</h4>

                                                <div className="mt-auto pt-4 flex items-center justify-end gap-2 text-slate-400">
                                                    {/* Directional Controls (Cross Layout) */}
                                                    <div className="bg-slate-900/50 p-1.5 rounded-xl border border-slate-700/50 flex items-center gap-1">
                                                        <button
                                                            onClick={() => moveModule(idx, 'left')}
                                                            className="p-1.5 hover:bg-slate-700 rounded-lg hover:text-emerald-400 transition-colors"
                                                            title="Move Backward"
                                                        >
                                                            <ChevronLeft className="w-4 h-4" />
                                                        </button>

                                                        <div className="flex flex-col gap-1">
                                                            <button
                                                                onClick={() => moveModule(idx, 'up')}
                                                                className="p-1 hover:bg-slate-700 rounded-md hover:text-emerald-400 transition-colors"
                                                                title="Move Up"
                                                            >
                                                                <ChevronUp className="w-3 h-3" />
                                                            </button>
                                                            <button
                                                                onClick={() => moveModule(idx, 'down')}
                                                                className="p-1 hover:bg-slate-700 rounded-md hover:text-emerald-400 transition-colors"
                                                                title="Move Down"
                                                            >
                                                                <ChevronDown className="w-3 h-3" />
                                                            </button>
                                                        </div>

                                                        <button
                                                            onClick={() => moveModule(idx, 'right')}
                                                            className="p-1.5 hover:bg-slate-700 rounded-lg hover:text-emerald-400 transition-colors"
                                                            title="Move Forward"
                                                        >
                                                            <ChevronRight className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 5. Right Side Activity Panel */}
                    <div className="hidden lg:block w-[320px] lg:w-[360px] flex-shrink-0">
                        <div className="sticky top-0 space-y-6">
                            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 h-full">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-slate-200">Recent Activity</h3>
                                    <button className="p-1 hover:bg-slate-700/50 rounded text-slate-400 hover:text-white transition-colors">
                                        <Clock className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="space-y-6 relative">
                                    {/* Vertical Line */}
                                    <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-800" />

                                    {recentActivity.slice(0, showAllActivity ? undefined : 5).map((item) => (
                                        <div key={item.id} className="relative pl-10 group cursor-default block">
                                            {/* Status Dot */}
                                            <div className={`absolute left-0 top-1.5 w-10 h-10 -ml-5 flex items-center justify-center`}>
                                                <div className={`w-2.5 h-2.5 rounded-full border-2 border-[#1E293B] z-10 transition-colors duration-300 
                                                    ${item.type === 'success' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' :
                                                        item.type === 'warning' ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]' :
                                                            item.type === 'info' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]' :
                                                                'bg-slate-500'}`}
                                                />
                                            </div>

                                            <h5 className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors animate-in slide-in-from-left-2 duration-300">
                                                {item.title}
                                            </h5>
                                            <p className="text-xs text-slate-400 mt-0.5 animate-in slide-in-from-left-2 duration-300 delay-75">
                                                {item.desc}
                                            </p>
                                            <span className="text-[10px] text-slate-500 font-medium mt-1 block animate-in slide-in-from-left-2 duration-300 delay-100">
                                                {item.time}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setShowAllActivity(!showAllActivity)}
                                    className="w-full mt-8 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all border border-transparent hover:border-slate-700"
                                >
                                    {showAllActivity ? 'Show Less' : 'View All Activity'}
                                </button>
                            </div>

                            {/* Mini Help Card */}
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-xl shadow-blue-900/20 text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-bold text-white mb-1">Need Help?</h4>
                                <p className="text-blue-100 text-sm mb-4">Our support team is online.</p>
                                <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-bold transition-colors">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// -- Components --

function NavItem({
    icon: Icon,
    label,
    active,
    badge,
    collapsed,
    onClick
}: {
    icon: any,
    label: string,
    active?: boolean,
    badge?: string,
    collapsed?: boolean,
    onClick?: () => void
}) {
    return (
        <a
            href="#"
            onClick={onClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group relative ${active
                ? 'text-emerald-400 bg-emerald-500/10'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                } ${collapsed ? 'justify-center px-2' : ''}`}
            title={collapsed ? label : undefined}
        >
            {active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-r-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            )}
            <Icon className={`w-5 h-5 ${active ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'} transition-colors`} />
            {!collapsed && <span>{label}</span>}
            {badge && !collapsed && (
                <span className="ml-auto px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/20">
                    {badge}
                </span>
            )}
            {badge && collapsed && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#0B1120]" />
            )}
        </a>
    );
}

function IconButton({
    icon: Icon,
    active,
    onClick,
    badge
}: {
    icon: any,
    active?: boolean,
    onClick?: () => void,
    badge?: string
}) {
    return (
        <button
            onClick={onClick}
            className={`relative p-2.5 rounded-lg transition-all ${active ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50'
                }`}
        >
            <Icon className="w-5 h-5" />
            {badge && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(244,63,94,0.5)]" />
            )}
        </button>
    );
}

function StatChip({ label, value, active }: { label: string, value: string, active?: boolean }) {
    return (
        <div className={`px-4 py-2 rounded-xl backdrop-blur-md border flex flex-col items-center min-w-[100px] ${active
            ? 'bg-emerald-500/10 border-emerald-500/20'
            : 'bg-slate-800/40 border-slate-700/50'
            }`}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">{label}</span>
            <span className={`text-sm font-bold ${active ? 'text-emerald-400' : 'text-slate-200'}`}>
                {value}
            </span>
        </div>
    );
}
