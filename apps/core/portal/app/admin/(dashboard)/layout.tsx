import Link from 'next/link';
import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    LogOut,
    Shield,
    Search,
    Bell,
    Menu,
    Plus,
    Radio,
    School,
    History,
    ShieldCheck,
    LifeBuoy,
    MessageSquare,
    Globe,
    Server,
    Database
} from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0F172A] text-slate-300 flex-shrink-0 hidden md:flex flex-col border-r border-slate-800">
                <div className="p-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">Admin</h1>
                            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Control Panel</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
                    <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-4">Operations</p>
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <LayoutDashboard className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                        Command Center
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <Users className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                        Users
                    </Link>

                    <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-6">Academic & Site</p>
                    <Link href="/admin/institutions" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <School className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                        Institutions
                    </Link>
                    <Link href="/admin/content" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <FileText className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                        Content CMS
                    </Link>
                    <Link href="/admin/localization" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <Globe className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
                        Localization
                    </Link>

                    <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-6">Security & Audit</p>
                    <Link href="/admin/logs" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <History className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                        Audit Logs
                    </Link>
                    <Link href="/admin/security" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <ShieldCheck className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                        Security Scan
                    </Link>

                    <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-6">Support & Service</p>
                    <Link href="/admin/tickets" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <MessageSquare className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                        Tickets
                        <span className="ml-auto bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">12</span>
                    </Link>
                    <Link href="/admin/support" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <LifeBuoy className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                        Help Desk
                    </Link>

                    <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-6">Infrastructure</p>
                    <div className="px-4 py-2 space-y-3 bg-slate-900/50 rounded-xl mx-2 border border-slate-800">
                        <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-2">
                                <Radio className="w-3 h-3 text-indigo-400" />
                                <span className="text-xs text-slate-400 font-medium group-hover:text-slate-200 transition-colors">Port 3000</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[10px] text-emerald-400 font-bold uppercase">Live</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-2">
                                <Server className="w-3 h-3 text-amber-400" />
                                <span className="text-xs text-slate-400 font-medium group-hover:text-slate-200 transition-colors">API Gateway</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[10px] text-emerald-400 font-bold uppercase">Online</span>
                            </div>
                        </div>
                    </div>

                    <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-6">System</p>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors group">
                        <Settings className="w-4 h-4 text-slate-500 group-hover:text-slate-200 transition-colors" />
                        Advanced Config
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Link href="/api/auth/logout" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors w-full">
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
                    <div className="px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button className="md:hidden p-2 -ml-2 text-slate-500 hover:text-slate-700">
                                <Menu className="w-6 h-6" />
                            </button>
                            <div className="relative hidden sm:block">
                                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search users, logs, content..."
                                    className="pl-10 pr-4 py-2 w-64 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative p-2 text-slate-500 hover:text-indigo-600 transition-colors">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                            </button>
                            <div className="h-8 w-px bg-slate-200 mx-2"></div>
                            <div className="flex items-center gap-3">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-bold text-slate-900">Administrator</p>
                                    <p className="text-xs text-slate-500">Super User Access</p>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                                    AD
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
