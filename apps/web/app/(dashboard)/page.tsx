'use client';

import Link from 'next/link';
import { ArrowRight, Shield, AlertTriangle, CheckCircle, XCircle, Activity } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Mock Data for Audit Logs
const auditLogs = [
  { id: 1, timestamp: '2026-02-11 10:45:22', user: 'admin@learnops.com', action: 'Modified System Settings', ip: '192.168.1.10', status: 'Success' },
  { id: 2, timestamp: '2026-02-11 10:42:15', user: 'jdoe', action: 'Failed Login Attempt', ip: '10.0.0.5', status: 'Failure' },
  { id: 3, timestamp: '2026-02-11 10:30:00', user: 'system', action: 'Scheduled Backup Completed', ip: 'localhost', status: 'Success' },
  { id: 4, timestamp: '2026-02-11 09:15:10', user: 'sarah.k', action: 'Generated Monthly Report', ip: '192.168.1.22', status: 'Success' },
  { id: 5, timestamp: '2026-02-11 08:55:05', user: 'admin@learnops.com', action: 'User Role Update: msmith', ip: '192.168.1.10', status: 'Warning' },
  { id: 6, timestamp: '2026-02-11 08:40:00', user: 'system', action: 'API Rate Limit Exceeded', ip: '203.0.113.45', status: 'Failure' },
  { id: 7, timestamp: '2026-02-11 08:30:00', user: 'jdoe', action: 'Document Upload: policy_v2.pdf', ip: '10.0.0.5', status: 'Success' },
];

export default function DashboardPage() {
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
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100">Command Center</h1>
          <p className="text-slate-400 mt-1">Real-time system oversight and operational logs.</p>
        </div>
        <div className="flex gap-4">
          {/* Potential quick actions or summary stats can go here if needed, keeping it clean for now */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] rounded-lg border border-[#334155] text-sm text-slate-300">
            <Activity className="h-4 w-4 text-emerald-500 animate-pulse" />
            System Operational
          </div>
        </div>
      </div>

      {/* Main Content: Audit Log Table */}
      <Card className="bg-[#1e293b] border-[#334155] text-slate-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-500" />
              Live Audit Log
            </CardTitle>
            <CardDescription className="text-slate-400">Recent system activities and security events.</CardDescription>
          </div>
          <Link href="/audit-logs">
            <Button variant="outline" className="border-[#334155] hover:bg-[#0f172a] text-slate-300 hover:text-slate-100 group">
              View Full Logs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-[#334155] overflow-hidden">
            <Table>
              <TableHeader className="bg-[#0f172a]">
                <TableRow className="border-[#334155] hover:bg-transparent">
                  <TableHead className="text-slate-400 font-medium">Timestamp</TableHead>
                  <TableHead className="text-slate-400 font-medium">User</TableHead>
                  <TableHead className="text-slate-400 font-medium">Action</TableHead>
                  <TableHead className="text-slate-400 font-medium">IP Address</TableHead>
                  <TableHead className="text-slate-400 font-medium">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.slice(0, 5).map((log) => (
                  <TableRow key={log.id} className="border-[#334155] hover:bg-[#2e3b4e] transition-colors">
                    <TableCell className="font-mono text-sm text-slate-300">{log.timestamp}</TableCell>
                    <TableCell className="text-slate-300">{log.user}</TableCell>
                    <TableCell className="font-medium text-slate-200">{log.action}</TableCell>
                    <TableCell className="font-mono text-xs text-slate-400">{log.ip}</TableCell>
                    <TableCell>{getStatusBadge(log.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
