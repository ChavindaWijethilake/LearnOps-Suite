'use client';

import { useState } from 'react';
import {
    Shield,
    Users,
    Lock,
    Search,
    MoreHorizontal,
    Power,
    Clock,
    Globe,
    Smartphone,
    Monitor,
    ChevronDown,
    Check,
    X,
    Filter,
    Download,
    History
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';

const activeSessions = [
    { id: '1', user: 'admin@learnops.edu', role: 'Super Admin', ip: '192.168.1.42', device: 'MacBook Pro', location: 'San Francisco, US', activeSince: '2h 14m', type: 'desktop' },
    { id: '2', user: 'prof.smith@learnops.edu', role: 'Professor', ip: '172.16.0.11', device: 'iOS - Safari', location: 'London, UK', activeSince: '45m', type: 'mobile' },
    { id: '3', user: 'student_77@learnops.edu', role: 'Student', ip: '10.0.0.158', device: 'Windows - Edge', location: 'New York, US', activeSince: '12m', type: 'desktop' },
];

const roles = ['Super Admin', 'Admin', 'Professor', 'Student', 'Support'];
const permissions = [
    { id: 'system_rollback', label: 'System Rollback', category: 'Engineering', description: 'Enable one-click infrastructure reversion' },
    { id: 'user_management', label: 'User Provisioning', category: 'Governance', description: 'Create and delete user accounts' },
    { id: 'financial_view', label: 'Financial auditing', category: 'Billing', description: 'View institutional tuition data' },
    { id: 'security_config', label: 'Security Protocols', category: 'Governance', description: 'Modify RBAC and encryption keys' },
    { id: 'service_restart', label: 'Service Control', category: 'Engineering', description: 'Restart or disable core services' },
];

export default function SecurityGovernancePage() {
    const [activeTab, setActiveTab] = useState<'sessions' | 'rbac' | 'audit'>('sessions');

    return (
        <div className="max-w-[1600px] mx-auto py-8 space-y-10 animate-fade-in pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic">Security & Governance</h1>
                    <p className="text-slate-400 font-medium text-sm mt-1 uppercase tracking-wider">Identity Matrix & Institutional Lockdown controls</p>
                </div>

                <div className="flex bg-slate-900/50 p-1 rounded-2xl border border-slate-800/50">
                    <TabButton active={activeTab === 'sessions'} onClick={() => setActiveTab('sessions')} label="Active Sessions" icon={Users} />
                    <TabButton active={activeTab === 'rbac'} onClick={() => setActiveTab('rbac')} label="RBAC Matrix" icon={Shield} />
                    <TabButton active={activeTab === 'audit'} onClick={() => setActiveTab('audit')} label="Audit Logs" icon={History} />
                </div>
            </div>

            {activeTab === 'sessions' && (
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <Input placeholder="Search active users or IP addresses..." className="pl-11 bg-slate-900/50 border-slate-800/50 rounded-xl" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-rose-500 font-bold text-xs uppercase hover:bg-rose-500/10 rounded-xl transition-all">
                            <Power className="w-3.5 h-3.5" />
                            REVOKE ALL NON-ADMIN SESSIONS
                        </button>
                    </div>

                    <div className="bg-[#0B1120] border border-slate-800/50 rounded-3xl overflow-hidden shadow-2xl">
                        <Table>
                            <TableHeader className="bg-slate-900/40">
                                <TableRow className="border-slate-800 hover:bg-transparent">
                                    <TableHead className="text-slate-500 uppercase text-[10px] font-black tracking-widest pl-8">User Identity</TableHead>
                                    <TableHead className="text-slate-500 uppercase text-[10px] font-black tracking-widest">Role</TableHead>
                                    <TableHead className="text-slate-500 uppercase text-[10px] font-black tracking-widest">Client / Device</TableHead>
                                    <TableHead className="text-slate-500 uppercase text-[10px] font-black tracking-widest">Geo-Location</TableHead>
                                    <TableHead className="text-slate-500 uppercase text-[10px] font-black tracking-widest">Uptime</TableHead>
                                    <TableHead className="text-right pr-8"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {activeSessions.map((session) => (
                                    <TableRow key={session.id} className="border-slate-800/50 hover:bg-slate-800/20 group transition-colors">
                                        <TableCell className="pl-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300">
                                                    {session.user.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-200">{session.user}</p>
                                                    <p className="text-[10px] font-bold text-slate-500 uppercase">{session.ip}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={cn(
                                                "text-[10px] font-bold uppercase tracking-widest",
                                                session.role === 'Super Admin' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-slate-800 text-slate-400"
                                            )}>
                                                {session.role}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                {session.type === 'desktop' ? <Monitor className="w-3.5 h-3.5 text-slate-500" /> : <Smartphone className="w-3.5 h-3.5 text-slate-500" />}
                                                <span className="text-xs font-medium text-slate-400">{session.device}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Globe className="w-3.5 h-3.5 text-slate-600" />
                                                <span className="text-xs font-medium text-slate-400">{session.location}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5 text-slate-600" />
                                                <span className="text-xs font-medium text-slate-300">{session.activeSince}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right pr-8">
                                            <button className="p-2 opacity-0 group-hover:opacity-100 hover:bg-rose-500/10 hover:text-rose-500 rounded-lg text-slate-500 transition-all">
                                                <Power className="w-4 h-4" />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            )}

            {activeTab === 'rbac' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Summary */}
                        <div className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-3xl space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500">Security Pulse</h3>
                            <div className="space-y-6">
                                <StatMini label="Custom Roles" value="0" sub="Provisioned" />
                                <StatMini label="Active Rules" value="42" sub="Across Portals" />
                                <StatMini label="SLA Compliance" value="100%" sub="Certified" />
                            </div>
                        </div>

                        {/* RBAC Matrix Table */}
                        <div className="lg:col-span-3 bg-[#0B1120] border border-slate-800/50 rounded-3xl overflow-hidden">
                            <Table>
                                <TableHeader className="bg-slate-900/40">
                                    <TableRow className="border-slate-800 hover:bg-transparent">
                                        <TableHead className="w-[300px] text-slate-500 uppercase text-[10px] font-black tracking-widest pl-8">Permission Node</TableHead>
                                        {roles.map(role => (
                                            <TableHead key={role} className="text-center text-slate-500 uppercase text-[8px] font-black tracking-widest px-2">{role}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {permissions.map((perm) => (
                                        <TableRow key={perm.id} className="border-slate-800/50 hover:bg-slate-800/10 transition-colors">
                                            <TableCell className="pl-8 py-4">
                                                <div>
                                                    <p className="text-sm font-bold text-slate-200 tracking-tight">{perm.label}</p>
                                                    <p className="text-[10px] font-bold text-slate-600 uppercase mt-0.5">{perm.category} • {perm.description}</p>
                                                </div>
                                            </TableCell>
                                            {roles.map(role => {
                                                const hasAccess = (role === 'Super Admin') || (role === 'Admin' && perm.category !== 'Engineering') || (role === 'Professor' && perm.id === 'financial_view');
                                                return (
                                                    <TableCell key={role} className="text-center">
                                                        <div className="flex justify-center">
                                                            {hasAccess ? (
                                                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                                                                    <Check className="w-3 h-3" />
                                                                </div>
                                                            ) : (
                                                                <div className="w-5 h-5 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-700">
                                                                    <X className="w-3 h-3" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <div className="p-6 bg-slate-900/20 border-t border-slate-800/50 flex items-center justify-between">
                                <p className="text-[10px] font-bold text-slate-600 uppercase">Warning: Changes to RBAC Matrix trigger global cache invalidation</p>
                                <button className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-[#0F172A] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all">
                                    Update Identity Matrix
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'audit' && (
                <div className="flex flex-col items-center justify-center py-20 text-slate-600 space-y-4">
                    <History className="w-16 h-16 opacity-10" />
                    <div className="text-center">
                        <p className="font-black uppercase tracking-[0.3em] text-lg">Infrastructure Audit Stream</p>
                        <p className="text-sm font-bold uppercase tracking-widest mt-2">Connecting to secure vault for permanent records...</p>
                    </div>
                </div>
            )}
        </div>
    );
}

function TabButton({ active, onClick, label, icon: Icon }: any) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-widest",
                active ? "bg-emerald-500 text-[#0F172A] shadow-lg shadow-emerald-500/20" : "text-slate-500 hover:text-slate-300"
            )}
        >
            <Icon className="w-3.5 h-3.5" />
            {label}
        </button>
    );
}

function StatMini({ label, value, sub }: any) {
    return (
        <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</p>
            <p className="text-2xl font-black text-white tracking-tighter mt-0.5">{value}</p>
            <p className="text-[10px] font-bold text-slate-600 uppercase">{sub}</p>
        </div>
    );
}
