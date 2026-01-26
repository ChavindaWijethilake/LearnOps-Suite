'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2, BookmarkIcon, Search, Filter, ExternalLink, Tag } from 'lucide-react';
import { GlassButton } from '@edu/ui';

interface Resource {
  id: string;
  title: string;
  description: string | null;
  category: string;
  tags: string[];
  link: string;
  bookmarked: boolean;
  createdAt: string;
}

export default function DashboardPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    filterResources();
  }, [resources, searchTerm, selectedCategory, selectedTag]);

  const fetchResources = async () => {
    try {
      const response = await fetch('/api/resources');
      if (response.ok) {
        const data = await response.json();
        setResources(data);
        const uniqueCategories = [...new Set(data.map((r: Resource) => r.category))];
        setCategories(uniqueCategories);
      }
    } catch (err) {
      setError('Failed to load resources');
    } finally {
      setIsLoading(false);
    }
  };

  const filterResources = () => {
    let filtered = resources;

    if (searchTerm) {
      filtered = filtered.filter(
        r =>
          r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    if (selectedTag) {
      filtered = filtered.filter(r => r.tags.includes(selectedTag));
    }

    setFilteredResources(filtered);
  };

  const toggleBookmark = async (id: string) => {
    try {
      const response = await fetch(`/api/resources/${id}/bookmark`, { method: 'POST' });
      if (response.ok) {
        setResources(
          resources.map(r =>
            r.id === id ? { ...r, bookmarked: !r.bookmarked } : r
          )
        );
      }
    } catch (err) {
      setError('Failed to toggle bookmark');
    }
  };

  const deleteResource = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    try {
      const response = await fetch(`/api/resources/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setResources(resources.filter(r => r.id !== id));
      }
    } catch (err) {
      setError('Failed to delete resource');
    }
  };

  const allTags = [...new Set(resources.flatMap(r => r.tags))];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Resources</h1>
          <p className="text-gray-600 dark:text-gray-400">Browse and manage educational resources</p>
        </div>
        <Link href="/app/resources/new">
          <GlassButton appColor="amber">
            <Plus className="w-5 h-5" />
            New Resource
          </GlassButton>
        </Link>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Search and Filters */}
      <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-6 text-gray-700 dark:text-gray-300">
          <Search className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-400 transition"
          />
        </div>

        <div className="space-y-4">
          {categories.length > 0 && (
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Categories
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`px-3 py-1 rounded-full text-sm transition ${
                    selectedCategory === ''
                      ? 'bg-amber-500/30 text-amber-700 border border-amber-400/30'
                      : 'bg-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/30'
                  }`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-sm transition ${
                      selectedCategory === cat
                        ? 'bg-amber-500/30 text-amber-700 border border-amber-400/30'
                        : 'bg-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {allTags.length > 0 && (
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag('')}
                  className={`px-3 py-1 rounded-full text-sm transition ${
                    selectedTag === ''
                      ? 'bg-amber-500/30 text-amber-700 border border-amber-400/30'
                      : 'bg-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/30'
                  }`}
                >
                  All
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition ${
                      selectedTag === tag
                        ? 'bg-amber-500/30 text-amber-700 border border-amber-400/30'
                        : 'bg-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading resources...</p>
        </div>
      ) : filteredResources.length === 0 ? (
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">No resources found</p>
          <Link href="/app/resources/new">
            <GlassButton appColor="amber">Create Your First Resource</GlassButton>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-amber-400/50 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                </div>
                <button
                  onClick={() => toggleBookmark(resource.id)}
                  className={`p-2 rounded-lg transition ${
                    resource.bookmarked
                      ? 'text-amber-600 bg-amber-500/20'
                      : 'text-gray-600 hover:bg-white/20'
                  }`}
                >
                  <BookmarkIcon className="w-5 h-5 fill-current" />
                </button>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-amber-600 bg-amber-500/20 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                {resource.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs text-gray-600 dark:text-gray-400 bg-white/20 px-2 py-1 rounded-full flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 flex items-center gap-1"
                >
                  Open Resource
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => deleteResource(resource.id)}
                  className="text-red-600 hover:text-red-700 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
