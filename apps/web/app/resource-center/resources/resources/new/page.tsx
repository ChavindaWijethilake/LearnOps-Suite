'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlassButton } from '@learnops/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewResourcePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Documents');
  const [tags, setTags] = useState('');
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          category,
          tags: tags.split(',').map(t => t.trim()).filter(t => t),
          link,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to create resource');
        return;
      }

      router.push('/app');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const categories = ['Documents', 'Videos', 'Articles', 'Tools', 'Books', 'Other'];

  return (
    <div>
      <Link href="/app" className="flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Resources
      </Link>

      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Create New Resource</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Add a new educational resource</p>

        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Resource Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 transition"
                placeholder="e.g., Introduction to React"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 transition h-24"
                placeholder="Describe the resource..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 transition"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Link *</label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 transition"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 transition"
                placeholder="e.g., tutorial, beginner, javascript"
              />
            </div>

            <div className="flex gap-4">
              <GlassButton
                type="submit"
                disabled={isLoading}
                appColor="amber"
                size="lg"
              >
                {isLoading ? 'Creating...' : 'Create Resource'}
              </GlassButton>
              <Link href="/app">
                <GlassButton variant="outline" appColor="amber" size="lg">
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
