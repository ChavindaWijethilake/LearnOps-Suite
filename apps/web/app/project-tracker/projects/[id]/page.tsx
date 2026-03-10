'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { GlassButton } from '@learnops/ui';
import { ArrowLeft, Plus, Edit2, Trash2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
  createdAt: string;
}

interface Project {
  id: string;
  name: string;
  description: string | null;
  status: string;
  createdAt: string;
}

export default function ProjectPage() {
  const params = useParams();
  if (!params) return null;
  const projectId = params.id as string;
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  const statuses = ['To Do', 'In Progress', 'Done'];

  useEffect(() => {
    setMounted(true);
    if (projectId) {
      fetchProject();
      fetchTasks();
    }
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/project-tracker/projects/${projectId}`);
      if (response.ok) {
        const data = await response.json();
        setProject(data);
      }
    } catch (err) {
      setError('Failed to load project');
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(`/api/project-tracker/projects/${projectId}/tasks`);
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      }
    } catch (err) {
      setError('Failed to load tasks');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (taskId: string) => {
    if (!confirm('Are you sure?')) return;
    try {
      const response = await fetch(`/api/project-tracker/projects/${projectId}/tasks/${taskId}`, { method: 'DELETE' });
      if (response.ok) {
        setTasks(tasks.filter(t => t.id !== taskId));
      }
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const updateTaskStatus = async (taskId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/project-tracker/projects/${projectId}/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
      }
    } catch (err) {
      setError('Failed to update task');
    }
  };

  if (!mounted || isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return <div className="text-center py-12 text-gray-600">Project not found</div>;
  }

  const tasksByStatus = {
    'To Do': tasks.filter(t => t.status === 'To Do'),
    'In Progress': tasks.filter(t => t.status === 'In Progress'),
    'Done': tasks.filter(t => t.status === 'Done'),
  };

  return (
    <div>
      <Link href="/project-tracker" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm font-medium text-purple-600 bg-purple-500/20 px-3 py-1 rounded-full">
              {project.status}
            </span>
          </div>
        </div>
        <Link href={`/project-tracker/projects/${projectId}/tasks/new`}>
          <GlassButton appColor="purple">
            <Plus className="w-5 h-5" />
            New Task
          </GlassButton>
        </Link>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Kanban Board */}
      <div className="grid grid-cols-3 gap-6">
        {statuses.map((status) => (
          <div key={status} className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              {status} ({tasksByStatus[status as keyof typeof tasksByStatus].length})
            </h2>

            <div className="space-y-4">
              {tasksByStatus[status as keyof typeof tasksByStatus].map((task) => (
                <div
                  key={task.id}
                  className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 rounded-lg p-4 hover:border-purple-400/50 transition"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white flex-1">{task.title}</h3>
                  </div>

                  {task.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{task.description}</p>
                  )}

                  <div className="flex gap-2 mb-3">
                    <select
                      value={status}
                      onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                      className="text-xs px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-purple-700 focus:outline-none"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-600 hover:text-red-700 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {tasksByStatus[status as keyof typeof tasksByStatus].length === 0 && (
                <div className="text-center py-8 text-gray-500 text-sm">
                  No tasks yet
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
