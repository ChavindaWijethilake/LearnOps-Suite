'use client';

import { useState } from 'react';
import {
    Layout,
    Move,
    Eye,
    EyeOff,
    Edit3,
    Save,
    GripVertical,
    ArrowUp,
    ArrowDown,
    Plus,
    Check
} from 'lucide-react';

export default function AdminContentPage() {
    // Mock Modules Data
    const [modules, setModules] = useState([
        { id: 1, title: 'Welcome Card', type: 'Widget', status: 'Visible', region: 'Top' },
        { id: 2, title: 'Quick Actions', type: 'Grid', status: 'Visible', region: 'Main' },
        { id: 3, title: 'Recent Activity', type: 'List', status: 'Visible', region: 'Main' },
        { id: 4, title: 'System Alerts', type: 'Banner', status: 'Hidden', region: 'Top' },
        { id: 5, title: 'Performance Stats', type: 'Chart', status: 'Visible', region: 'Bottom' },
    ]);

    const [editingId, setEditingId] = useState<number | null>(null);
    const [editTitle, setEditTitle] = useState('');

    const moveModule = (index: number, direction: 'up' | 'down') => {
        const newModules = [...modules];
        if (direction === 'up' && index > 0) {
            [newModules[index], newModules[index - 1]] = [newModules[index - 1], newModules[index]];
        } else if (direction === 'down' && index < newModules.length - 1) {
            [newModules[index], newModules[index + 1]] = [newModules[index + 1], newModules[index]];
        }
        setModules(newModules);
    };

    const toggleVisibility = (id: number) => {
        setModules(modules.map(m => m.id === id ? { ...m, status: m.status === 'Visible' ? 'Hidden' : 'Visible' } : m));
    };

    const startEdit = (module: any) => {
        setEditingId(module.id);
        setEditTitle(module.title);
    };

    const saveEdit = (id: number) => {
        setModules(modules.map(m => m.id === id ? { ...m, title: editTitle } : m));
        setEditingId(null);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Content CMS</h1>
                    <p className="text-slate-500 text-sm">Customize the layout and visibility of portal modules.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
                    <Plus className="w-4 h-4" />
                    Add Module
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Visualizer (Mock Preview) */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-900 rounded-[32px] p-4 border-[8px] border-slate-800 shadow-2xl aspect-[9/19] max-h-[600px] overflow-hidden relative mx-auto">
                        {/* Mobile Top Bar */}
                        <div className="h-6 w-32 bg-black rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20"></div>
                        <div className="pt-8 pb-4 px-2 space-y-3 h-full overflow-y-auto scrollbar-hide">
                            <div className="flex justify-between items-center mb-4">
                                <div className="h-2 w-8 bg-slate-700 rounded-full"></div>
                                <div className="h-8 w-8 bg-indigo-500 rounded-full"></div>
                            </div>
                            {modules.filter(m => m.status === 'Visible').map((m, i) => (
                                <div key={m.id} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                                    <div className="h-2 w-20 bg-slate-600 rounded-full mb-2"></div>
                                    <div className="h-16 bg-slate-700/30 rounded-lg"></div>
                                    <p className="text-[10px] text-slate-500 mt-2 text-center">{m.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-center text-xs font-bold text-slate-400 mt-4 uppercase tracking-widest">Live Mobile Preview</p>
                </div>

                {/* Editor Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Active Modules</h3>
                            <span className="text-xs font-medium text-slate-500">{modules.length} items</span>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {modules.map((module, index) => (
                                <div key={module.id} className={`p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors group ${module.status === 'Hidden' ? 'opacity-50 grayscale' : ''}`}>
                                    <div className="text-slate-300 cursor-move hover:text-indigo-400">
                                        <GripVertical className="w-5 h-5" />
                                    </div>

                                    <div className="flex-1">
                                        {editingId === module.id ? (
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={editTitle}
                                                    onChange={(e) => setEditTitle(e.target.value)}
                                                    className="px-2 py-1 border border-indigo-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                                                    autoFocus
                                                />
                                                <button onClick={() => saveEdit(module.id)} className="p-1 text-emerald-600 hover:bg-emerald-50 rounded">
                                                    <Check className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                                    {module.title}
                                                    <span className="text-[10px] font-normal text-slate-400 px-2 py-0.5 bg-slate-100 rounded-full">{module.type}</span>
                                                </h4>
                                                <p className="text-xs text-slate-500">Region: {module.region}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => moveModule(index, 'up')}
                                            disabled={index === 0}
                                            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400"
                                            title="Move Up"
                                        >
                                            <ArrowUp className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => moveModule(index, 'down')}
                                            disabled={index === modules.length - 1}
                                            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400"
                                            title="Move Down"
                                        >
                                            <ArrowDown className="w-4 h-4" />
                                        </button>
                                        <div className="w-px h-6 bg-slate-200 mx-2"></div>
                                        <button
                                            onClick={() => startEdit(module)}
                                            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg"
                                            title="Rename"
                                        >
                                            <Edit3 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => toggleVisibility(module.id)}
                                            className={`p-2 rounded-lg transition-colors ${module.status === 'Visible' ? 'text-emerald-500 hover:bg-emerald-50' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`}
                                            title={module.status === 'Visible' ? 'Hide' : 'Show'}
                                        >
                                            {module.status === 'Visible' ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
