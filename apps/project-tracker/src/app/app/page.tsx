'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2, ChevronRight } from 'lucide-react';
import { GlassButton } from '@edu/ui';

interface Project {
  id: string;
  name: string;
  description: string | null;
  status: string;
  createdAt: string;
}

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (err) {
      setError('Failed to load projects');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    try {
      const response = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setProjects(projects.filter(p => p.id !== id));
      }
    } catch (err) {
      setError('Failed to delete project');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your projects and tasks</p>
        </div>
        <Link href="/app/projects/new">
          <GlassButton appColor="purple">
            <Plus className="w-5 h-5" />
            New Project
          </GlassButton>
        </Link>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">No projects yet</p>
          <Link href="/app/projects/new">
            <GlassButton appColor="purple">Create Your First Project</GlassButton>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/app/projects/${project.id}`}>
              <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-purple-400/50 transition cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-purple-600 bg-purple-500/20 px-3 py-1 rounded-full">
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
