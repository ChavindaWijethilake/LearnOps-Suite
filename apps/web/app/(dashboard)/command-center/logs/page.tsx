'use client';

import { useState, useEffect, useRef } from 'react';
import {
    Search,
    Filter,
    Terminal,
    Download,
    Play,
    Pause,
    Trash2,
    Clock,
    Shield,
    Server,
    Database,
    Globe,
    Cpu,
    Zap,
    ChevronDown,
    Activity,
    AlertCircle,
    Info,
    ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface LogEntry {
    id: string;
    timestamp: string;
    service: string;
    severity: 'info' | 'warning' | 'error' | 'critical';
    message: string;
    requestId: string;
}

const mockLogs: LogEntry[] = [
    { id: '1', timestamp: '2026-02-16 15:30:22', service: 'AUTH-SVC', severity: 'info', message: 'User session verified for user: student_01', requestId: 'REQ-A8F2' },
    { id: '2', timestamp: '2026-02-16 15:30:25', service: 'BILLING-API', severity: 'info', message: 'Payment intent created ($450.00)', requestId: 'REQ-B9C1' },
    { id: '3', timestamp: '2026-02-16 15:31:02', service: 'GATEWAY', severity: 'warning', message: 'High latency detected on node-east-1', requestId: 'REQ-X110' },
    { id: '4', timestamp: '2026-02-16 15:31:15', service: 'STORAGE-SVC', severity: 'error', message: 'File upload failed: Connection timed out', requestId: 'REQ-W004' },
    { id: '5', timestamp: '2026-02-16 15:32:01', service: 'DB-CLUSTER', severity: 'critical', message: 'Read-replica synchronization lag > 500ms', requestId: 'REQ-D551' },
    { id: '6', timestamp: '2026-02-16 15:32:10', service: 'STUDENT-PORTAL', severity: 'info', message: 'Cached resource delivered from Edge', requestId: 'REQ-S223' },
    { id: '7', timestamp: '2026-02-16 15:33:05', service: 'AUTH-SVC', severity: 'error', message: 'Invalid token signature detected (IP: 192.168.1.1)', requestId: 'REQ-A900' },
];

export default function LogViewerPage() {
    const [logs, setLogs] = useState<LogEntry[]>(mockLogs);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedService, setSelectedService] = useState('All Services');
    const [selectedSeverity, setSelectedSeverity] = useState('All Severities');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isAutoScrolling && scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs, isAutoScrolling]);

    // Simulate real-time logs
    useEffect(() => {
        const interval = setInterval(() => {
            const newLog: LogEntry = {
                id: Math.random().toString(36).substr(2, 9),
                timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19),
                service: ['AUTH-SVC', 'BILLING-API', 'GATEWAY', 'STORAGE-SVC', 'DB-CLUSTER'][Math.floor(Math.random() * 5)],
                severity: ['info', 'info', 'info', 'warning', 'error'][Math.floor(Math.random() * 5)] as any,
                message: 'System telemetry heartbeat - Node status nominal',
                requestId: `REQ-${Math.random().toString(36).substr(2, 4).toUpperCase()}`
            };
            setLogs(prev => [...prev.slice(-49), newLog]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const filteredLogs = logs.filter(log => {
        const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
            log.requestId.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesService = selectedService === 'All Services' || log.service === selectedService;
        const matchesSeverity = selectedSeverity === 'All Severities' || log.severity === selectedSeverity.toLowerCase();
        return matchesSearch && matchesService && matchesSeverity;
    });

    return (
        <div className="max-w-[1600px] mx-auto py-8 space-y-6 animate-fade-in h-[calc(100vh-120px)] flex flex-col">
            {/* Header / Toolbar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter text-white">CENTRALIZED LOG VIEWER</h1>
                    <p className="text-slate-400 font-medium text-sm mt-1">Unified Observability & Audit Stream</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white transition-colors" title="Export as CSV">
                        <Download className="w-5 h-5" />
                    </button>
                    <button className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-rose-500 transition-colors" title="Clear Buffer">
                        <Trash2 className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border",
                            isAutoScrolling
                                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                                : "bg-slate-800/50 border-slate-700/50 text-slate-300"
                        )}
                    >
                        {isAutoScrolling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        {isAutoScrolling ? 'LIVE PAUSE' : 'RESUME STREAM'}
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <Input
                        placeholder="Search logs by message or request ID..."
                        className="pl-11 bg-slate-900/50 border-slate-800/50 text-slate-200 focus-visible:ring-emerald-500/50 rounded-xl"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="relative">
                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <select
                        className="w-full pl-11 pr-4 py-2 bg-slate-900/50 border border-slate-800/50 text-slate-300 rounded-xl text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                    >
                        <option>All Services</option>
                        <option>AUTH-SVC</option>
                        <option>BILLING-API</option>
                        <option>GATEWAY</option>
                        <option>STORAGE-SVC</option>
                        <option>DB-CLUSTER</option>
                        <option>STUDENT-PORTAL</option>
                    </select>
                </div>

                <div className="relative">
                    <Activity className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <select
                        className="w-full pl-11 pr-4 py-2 bg-slate-900/50 border border-slate-800/50 text-slate-300 rounded-xl text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                        value={selectedSeverity}
                        onChange={(e) => setSelectedSeverity(e.target.value)}
                    >
                        <option>All Severities</option>
                        <option>Info</option>
                        <option>Warning</option>
                        <option>Error</option>
                        <option>Critical</option>
                    </select>
                </div>
            </div>

            {/* Terminal Log View */}
            <div className="flex-1 bg-[#020617] border border-slate-800/80 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
                <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800/50 bg-slate-900/20">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">System Output Stream</span>
                    </div>
                    <div className="text-[10px] text-slate-600 font-mono italic">
                        learnops-ops@admin:~$ tail -f global.log
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto p-6 space-y-1 font-mono text-[13px] scrollbar-thin scrollbar-thumb-slate-800"
                >
                    {filteredLogs.map((log) => (
                        <div key={log.id} className="grid grid-cols-[160px_100px_80px_1fr_100px] gap-4 py-1.5 px-3 rounded hover:bg-slate-800/30 group transition-colors">
                            <span className="text-slate-500">{log.timestamp}</span>
                            <span className="text-emerald-500 font-bold">[{log.service}]</span>
                            <span className={cn(
                                "font-black uppercase text-[11px]",
                                log.severity === 'info' && "text-blue-400",
                                log.severity === 'warning' && "text-amber-400",
                                log.severity === 'error' && "text-rose-400",
                                log.severity === 'critical' && "text-rose-600 animate-pulse",
                            )}>
                                {log.severity}
                            </span>
                            <span className="text-slate-300 group-hover:text-white transition-colors">{log.message}</span>
                            <span className="text-slate-600 group-hover:text-slate-400 transition-colors text-right">{log.requestId}</span>
                        </div>
                    ))}
                    {filteredLogs.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full text-slate-600 py-20">
                            <Search className="w-12 h-12 mb-4 opacity-20" />
                            <p className="font-bold uppercase tracking-widest text-sm">No matching logs found in buffer</p>
                        </div>
                    )}
                </div>

                <div className="px-6 py-2 border-t border-slate-800/50 bg-[#0B1120] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Stream Active
                        </span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Showing {filteredLogs.length} entries</span>
                    </div>
                    <button className="text-[10px] font-bold text-emerald-500 hover:text-emerald-400 uppercase flex items-center gap-1">
                        View Audit Log <ExternalLink className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function SeverityBadge({ severity }: { severity: string }) {
    const colors = {
        info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        warning: "bg-amber-500/10 text-amber-500 border-amber-500/20",
        error: "bg-rose-500/10 text-rose-500 border-rose-500/20",
        critical: "bg-rose-600 text-white border-rose-700",
    }[severity as 'info'] || "bg-slate-500/10 text-slate-400";

    return (
        <Badge className={cn("text-[10px] font-bold uppercase tracking-widest", colors)}>
            {severity}
        </Badge>
    );
}
