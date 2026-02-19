import { GitBranch, CheckCircle2, Clock, ArrowRight, Play, Settings } from 'lucide-react';

const workflows = [
    { id: 1, name: 'Standard Access Request', steps: 4, duration: '24h', status: 'Active', usage: 'High' },
    { id: 2, name: 'Hardware Procurement', steps: 8, duration: '5d', status: 'Active', usage: 'Medium' },
    { id: 3, name: 'Software License Approval', steps: 3, duration: '48h', status: 'Draft', usage: 'Low' },
    { id: 4, name: 'Incident Escalation', steps: 5, duration: '2h', status: 'Active', usage: 'Critical' },
];

export default function WorkflowsPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Service Workflows</h1>
                    <p className="text-sm text-gray-500">Design and monitor automated service delivery processes.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <Plus className="w-4 h-4" />
                    Create Workflow
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workflows.map((workflow) => (
                    <div key={workflow.id} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                                <GitBranch className="w-6 h-6" />
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400" title="Settings">
                                    <Settings className="w-4 h-4" />
                                </button>
                                <button className="p-2 hover:bg-primary/10 rounded-xl transition-colors text-primary" title="Run Test">
                                    <Play className="w-4 h-4 fill-current" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2 mb-8">
                            <h3 className="text-xl font-bold text-gray-900">{workflow.name}</h3>
                            <div className="flex items-center gap-3">
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${workflow.status === 'Active' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-gray-50 text-gray-400 border-gray-100'
                                    }`}>
                                    {workflow.status}
                                </span>
                                <span className="text-xs font-medium text-gray-400">• {workflow.usage} Usage</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Steps</p>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span className="text-lg font-bold text-gray-900">{workflow.steps} Stages</span>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Avg. Time</p>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span className="text-lg font-bold text-gray-900">{workflow.duration}</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-3 flex items-center justify-center gap-2 text-sm font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 hover:text-primary rounded-xl border border-gray-200 transition-all">
                            Edit Workflow
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Plus({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}
