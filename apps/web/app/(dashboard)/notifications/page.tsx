'use client';

import { useState } from 'react';
import {
    Bell,
    Check,
    Trash2,
    Search,
    Filter,
    Shield,
    Activity,
    Info,
    AlertTriangle,
    Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock Data
const initialNotifications = [
    { id: 1, type: 'Security', source: 'Auth Service', message: 'New device logged in from New York, USA.', time: '2 mins ago', read: false, priority: 'high' },
    { id: 2, type: 'System', source: 'Billing', message: 'Monthly invoice generation completd successfully.', time: '1 hour ago', read: false, priority: 'normal' },
    { id: 3, type: 'Audit', source: 'User Mgmt', message: 'Admin user "jdoe" updated role for user "ksmith".', time: '3 hours ago', read: true, priority: 'normal' },
    { id: 4, type: 'System', source: 'Maintenance', message: 'Scheduled maintenance window starting in 24 hours.', time: '5 hours ago', read: true, priority: 'medium' },
    { id: 5, type: 'Security', source: 'Firewall', message: 'Blocked 5 failed login attempts from IP 192.168.1.5.', time: 'yesterday', read: true, priority: 'high' },
    { id: 6, type: 'Audit', source: 'Document Store', message: 'File "Q3_Report.pdf" was deleted by user "admin".', time: 'yesterday', read: true, priority: 'medium' },
    { id: 7, type: 'System', source: 'API Gateway', message: 'High latency detected on endpoint /api/v1/users.', time: '2 days ago', read: true, priority: 'medium' },
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(initialNotifications);
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredNotifications = notifications.filter(n => {
        const matchesTab = activeTab === 'all' || n.type.toLowerCase() === activeTab;
        const matchesSearch = n.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
            n.source.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const markAllRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const clearAll = () => {
        setNotifications([]);
    };

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'Security': return <Shield className="h-5 w-5 text-red-500" />;
            case 'System': return <Activity className="h-5 w-5 text-blue-500" />;
            case 'Audit': return <Info className="h-5 w-5 text-emerald-500" />;
            default: return <Bell className="h-5 w-5 text-slate-500" />;
        }
    };

    return (
        <div className="space-y-8 animate-fade-in pb-10 max-w-6xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-100">Notification Center</h1>
                    <p className="text-slate-400 mt-1">Stay updated with system alerts and activities.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" onClick={markAllRead} className="border-[#334155] hover:bg-[#1e293b] text-slate-300">
                        <Check className="mr-2 h-4 w-4" />
                        Mark all read
                    </Button>
                    <Button variant="outline" size="sm" onClick={clearAll} className="border-[#334155] hover:bg-red-900/20 text-red-400 hover:text-red-300 hover:border-red-900/50">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Clear all
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-1 overflow-hidden">
                {/* Main Notification List */}
                <div className="lg:col-span-3 flex flex-col h-full space-y-4">
                    <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
                        <div className="flex items-center justify-between mb-4">
                            <TabsList className="bg-[#1e293b] border border-[#334155]">
                                <TabsTrigger value="all" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">All</TabsTrigger>
                                <TabsTrigger value="system" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">System</TabsTrigger>
                                <TabsTrigger value="security" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">Security</TabsTrigger>
                                <TabsTrigger value="audit" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">Audit</TabsTrigger>
                            </TabsList>

                            <div className="relative w-64">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
                                <Input
                                    placeholder="Search notifications..."
                                    className="pl-8 bg-[#1e293b] border-[#334155] text-slate-200"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <TabsContent value="all" className="space-y-4 m-0 h-full overflow-y-auto pr-2 custom-scrollbar">
                            {filteredNotifications.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-64 text-slate-500 border border-dashed border-[#334155] rounded-xl bg-[#1e293b]/50">
                                    <Bell className="h-12 w-12 mb-4 opacity-20" />
                                    <p>No notifications found.</p>
                                </div>
                            ) : (
                                filteredNotifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className={`flex gap-4 p-4 rounded-xl border transition-all duration-200 hover:translate-x-1 ${notification.read
                                                ? 'bg-[#0f172a] border-[#1e293b] opacity-70'
                                                : 'bg-[#1e293b] border-[#334155] shadow-lg border-l-4 border-l-[#2563EB]'
                                            }`}
                                    >
                                        <div className="mt-1">
                                            {getIcon(notification.type)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className={`text-sm font-medium ${notification.read ? 'text-slate-400' : 'text-slate-100'}`}>
                                                        {notification.message}
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge variant="outline" className="text-[10px] border-[#334155] text-slate-500">
                                                            {notification.source}
                                                        </Badge>
                                                        <span className="text-xs text-slate-600">•</span>
                                                        <span className="text-xs text-slate-500">{notification.time}</span>
                                                    </div>
                                                </div>
                                                {!notification.read && (
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                                                        onClick={() => markAsRead(notification.id)}
                                                        title="Mark as read"
                                                    >
                                                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </TabsContent>
                        <TabsContent value="system" className="space-y-4 m-0"><div /></TabsContent>
                        <TabsContent value="security" className="space-y-4 m-0"><div /></TabsContent>
                        <TabsContent value="audit" className="space-y-4 m-0"><div /></TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar Settings */}
                <div className="lg:col-span-1 border-l border-[#334155] pl-6 space-y-6">
                    <div>
                        <h3 className="text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Settings
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-sm font-medium text-slate-300">Email Notifications</Label>
                                    <p className="text-xs text-slate-500">Receive digest via email</p>
                                </div>
                                <Switch />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-sm font-medium text-slate-300">In-App Popups</Label>
                                    <p className="text-xs text-slate-500">Show toasts while active</p>
                                </div>
                                <Switch defaultChecked />
                            </div>

                            <div className="flex items-center justify-between opacity-70 cursor-not-allowed">
                                <div className="space-y-0.5">
                                    <Label className="text-sm font-medium text-slate-300">Security Alerts</Label>
                                    <p className="text-xs text-yellow-500/80 flex items-center gap-1">
                                        <AlertTriangle className="h-3 w-3" />
                                        Always Enabled
                                    </p>
                                </div>
                                <Switch checked disabled />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-[#334155]">
                        <h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Filters</h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-[#1e293b] cursor-pointer group">
                                <span className="text-slate-400 group-hover:text-slate-200">Unread Only</span>
                                <Badge variant="outline" className="border-[#334155] text-slate-500">2</Badge>
                            </div>
                            <div className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-[#1e293b] cursor-pointer group">
                                <span className="text-slate-400 group-hover:text-slate-200">High Priority</span>
                                <Badge variant="outline" className="border-[#334155] text-slate-500">3</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
