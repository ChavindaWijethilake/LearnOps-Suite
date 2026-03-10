'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlassButton } from '@learnops/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewProjectPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Active');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useState(() => {
    setMounted(true);
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/project-tracker/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, status }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to create project');
        return;
      }

      router.push(`/project-tracker/projects/${data.id}`);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div>
      <Link href="/project-tracker" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Create New Project</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Start managing a new project</p>

        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Project Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-purple-400 transition"
                placeholder="e.g., Website Redesign"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-purple-400 transition h-32"
                placeholder="Describe your project..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-purple-400 transition"
              >
                <option>Active</option>
                <option>Planning</option>
                <option>On Hold</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="flex gap-4">
              <GlassButton
                type="submit"
                disabled={isLoading}
                appColor="purple"
                size="lg"
              >
                {isLoading ? 'Creating...' : 'Create Project'}
              </GlassButton>
              <Link href="/project-tracker">
                <GlassButton variant="secondary" appColor="purple" size="lg">
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
