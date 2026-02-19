'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { GlassButton } from '@learnops/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ServiceRequest {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  category: string;
}

export default function RequestDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [request, setRequest] = useState<ServiceRequest | null>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetch(`/api/requests/${params.id}`);
        const data = await response.json();
        setRequest(data);
        setStatus(data.status);
      } catch (error) {
        console.error('Error fetching request:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequest();
  }, [params.id]);

  const handleStatusUpdate = async () => {
    if (!request) return;

    try {
      const response = await fetch(`/api/requests/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setRequest({ ...request, status });
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!request) {
    return <div className="min-h-screen flex items-center justify-center">Request not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <span className="text-xl font-bold text-blue-700">Service Request</span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/app" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-4">{request.title}</h1>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-600">Description</label>
              <p className="mt-2 text-gray-900">{request.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Category</label>
                <p className="mt-2 text-gray-900 capitalize">{request.category}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Priority</label>
                <p className="mt-2 text-gray-900 capitalize">{request.priority}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="mt-2 w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg"
                >
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/20">
              <GlassButton onClick={handleStatusUpdate} appColor="blue">
                Update Status
              </GlassButton>
              <Link href="/app">
                <GlassButton variant="secondary" appColor="blue">
                  Back
                </GlassButton>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
