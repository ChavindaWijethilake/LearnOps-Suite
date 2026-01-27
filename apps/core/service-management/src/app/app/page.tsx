'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, LogOut, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { GlassButton } from '@learnops/ui';

interface ServiceRequest {
  id: string;
  title: string;
  status: string;
  priority: string;
  createdAt: string;
}

interface DashboardStats {
  total: number;
  open: number;
  inProgress: number;
  resolved: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [stats, setStats] = useState<DashboardStats>({ total: 0, open: 0, inProgress: 0, resolved: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authResponse = await fetch('/api/auth/check');
        if (!authResponse.ok) {
          router.push('/login');
          return;
        }

        const authData = await authResponse.json();
        setUser({ email: authData.user.email });

        const requestsResponse = await fetch('/api/requests');
        const requestsData = await requestsResponse.json();
        setRequests(requestsData.requests || []);

        if (requestsData.requests) {
          const total = requestsData.requests.length;
          const open = requestsData.requests.filter((r: ServiceRequest) => r.status === 'open').length;
          const inProgress = requestsData.requests.filter((r: ServiceRequest) => r.status === 'in-progress').length;
          const resolved = requestsData.requests.filter((r: ServiceRequest) => r.status === 'resolved').length;

          setStats({ total, open, inProgress, resolved });
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertCircle className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-700';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-700';
      case 'low':
        return 'bg-green-500/20 text-green-700';
      default:
        return 'bg-gray-500/20 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-700">Service Request</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Link href="/app/new-request">
            <GlassButton appColor="blue" size="lg">
              <Plus className="w-5 h-5 mr-2 inline" />
              New Request
            </GlassButton>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600">{stats.total}</div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">Total Requests</p>
          </div>

          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-orange-600">{stats.open}</div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">Open</p>
          </div>

          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-600">{stats.inProgress}</div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">In Progress</p>
          </div>

          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-600">{stats.resolved}</div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">Resolved</p>
          </div>
        </div>

        {/* Recent Requests */}
        <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-xl font-semibold">Recent Requests</h2>
          </div>

          {requests.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-600 dark:text-gray-400">No service requests yet.</p>
              <Link href="/app/new-request" className="mt-4 inline-block">
                <GlassButton appColor="blue">Create Your First Request</GlassButton>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-white/20">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Title</th>
                    <th className="text-left px-6 py-4 font-semibold">Status</th>
                    <th className="text-left px-6 py-4 font-semibold">Priority</th>
                    <th className="text-left px-6 py-4 font-semibold">Date</th>
                    <th className="text-left px-6 py-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={request.id} className="border-b border-white/20 hover:bg-white/10 transition">
                      <td className="px-6 py-4 font-medium">{request.title}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2">
                          {getStatusIcon(request.status)}
                          <span className="capitalize">{request.status.replace('-', ' ')}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                          {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(request.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <Link href={`/app/request/${request.id}`}>
                          <button className="text-blue-600 hover:text-blue-700 transition font-medium">
                            View
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 dark:text-gray-400">Service Request Portal</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-gray-700 hover:text-gray-900 transition text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-700 hover:text-gray-900 transition text-sm">
                Terms
              </Link>
              <Link href="/status" className="text-gray-700 hover:text-gray-900 transition text-sm">
                Status
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
