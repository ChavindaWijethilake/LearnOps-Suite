'use client';

import { useState } from 'react';
import {
    Download,
    Filter,
    Search,
    Calendar,
    MoreHorizontal,
    ArrowUpDown,
    Shield,
    AlertTriangle,
    CheckCircle,
    XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock Data
const fullAuditLogs = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    timestamp: `2026-02-${11 - Math.floor(i / 5)} ${10 - (i % 5)}:30:00`,
    user: i % 3 === 0 ? 'admin@learnops.com' : i % 3 === 1 ? 'jdoe' : 'system',
    action: i % 4 === 0 ? 'Login Attempt' : i % 4 === 1 ? 'File Upload' : i % 4 === 2 ? 'Settings Change' : 'Delete Record',
    ip: `192.168.1.${10 + i}`,
    status: i % 5 === 0 ? 'Failure' : i % 5 === 1 ? 'Warning' : 'Success',
    details: 'Resource accessed via API'
}));

export default function AuditLogsPage() {
    const [logs, setLogs] = useState(fullAuditLogs);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredLogs = logs.filter(log => {
        const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.ip.includes(searchTerm);
        const matchesStatus = statusFilter === 'all' || log.status.toLowerCase() === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Success':
                return <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20"><CheckCircle className="w-3 h-3 mr-1" /> Success</Badge>;
            case 'Failure':
                return <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20"><XCircle className="w-3 h-3 mr-1" /> Failure</Badge>;
            case 'Warning':
                return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"><AlertTriangle className="w-3 h-3 mr-1" /> Warning</Badge>;
            default:
                return <Badge variant="outline" className="text-slate-500">{status}</Badge>;
        }
    };

    return (
        <div className="space-y-8 animate-fade-in pb-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-100">Audit Logs</h1>
                    <p className="text-slate-400 mt-1">Comprehensive record of all system activities and events.</p>
                </div>
                <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                </Button>
            </div>

            <Card className="bg-[#1e293b] border-[#334155] text-slate-200">
                <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-purple-500" />
                            Event History
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
                                <Input
                                    placeholder="Search user, action, IP..."
                                    className="pl-8 bg-[#0f172a] border-[#334155] text-slate-200"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Select defaultValue="all" onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-full sm:w-40 bg-[#0f172a] border-[#334155] text-slate-200">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#0f172a] border-[#334155] text-slate-200">
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="success">Success</SelectItem>
                                    <SelectItem value="warning">Warning</SelectItem>
                                    <SelectItem value="failure">Failure</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" size="icon" className="border-[#334155] hover:bg-[#0f172a] text-slate-300">
                                <Calendar className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border border-[#334155] overflow-hidden">
                        <Table>
                            <TableHeader className="bg-[#0f172a]">
                                <TableRow className="border-[#334155] hover:bg-transparent">
                                    <TableHead className="text-slate-400 font-medium">timestamp</TableHead>
                                    <TableHead className="text-slate-400 font-medium">User</TableHead>
                                    <TableHead className="text-slate-400 font-medium">Action</TableHead>
                                    <TableHead className="text-slate-400 font-medium hidden md:table-cell">IP Address</TableHead>
                                    <TableHead className="text-slate-400 font-medium">Status</TableHead>
                                    <TableHead className="text-slate-400 font-medium text-right">Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredLogs.map((log) => (
                                    <TableRow key={log.id} className="border-[#334155] hover:bg-[#2e3b4e] transition-colors group">
                                        <TableCell className="font-mono text-sm text-slate-300">{log.timestamp}</TableCell>
                                        <TableCell className="text-slate-300 font-medium">
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-[#334155] flex items-center justify-center text-xs">
                                                    {log.user.charAt(0).toUpperCase()}
                                                </div>
                                                {log.user}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-slate-200">{log.action}</TableCell>
                                        <TableCell className="font-mono text-xs text-slate-400 hidden md:table-cell">{log.ip}</TableCell>
                                        <TableCell>{getStatusBadge(log.status)}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-200 hover:bg-[#334155]">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="bg-[#0f172a] border-[#334155] text-slate-200">
                                                    <DropdownMenuItem className="focus:bg-[#1e293b] focus:text-slate-100 cursor-pointer">View Details</DropdownMenuItem>
                                                    <DropdownMenuItem className="focus:bg-[#1e293b] focus:text-slate-100 cursor-pointer text-red-400 focus:text-red-400">Flag for Review</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="mt-4 flex items-center justify-between px-2">
                        <div className="text-xs text-slate-500">
                            Showing <strong>{filteredLogs.length}</strong> of <strong>{logs.length}</strong> results
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 border-[#334155] text-slate-400 hover:bg-[#0f172a] hover:text-slate-200" disabled>Previous</Button>
                            <Button variant="outline" size="sm" className="h-8 border-[#334155] text-slate-400 hover:bg-[#0f172a] hover:text-slate-200" disabled>Next</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
