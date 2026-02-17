'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { GlassButton } from '@learnops/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewTaskPage() {
  const params = useParams();
  const projectId = params.id as string;
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`/api/projects/${projectId}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, status }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to create task');
        return;
      }

      router.push(`/app/projects/${projectId}`);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Link href={`/app/projects/${projectId}`} className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Project
      </Link>

      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Create New Task</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Add a task to this project</p>

        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Task Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-purple-400 transition"
                placeholder="e.g., Design homepage mockup"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-purple-400 transition h-32"
                placeholder="Describe the task..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-purple-400 transition"
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>

            <div className="flex gap-4">
              <GlassButton
                type="submit"
                disabled={isLoading}
                appColor="purple"
                size="lg"
              >
                {isLoading ? 'Creating...' : 'Create Task'}
              </GlassButton>
              <Link href={`/app/projects/${projectId}`}>
                <GlassButton variant="outline" appColor="purple" size="lg">
                  Cancel
                </GlassButton>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
