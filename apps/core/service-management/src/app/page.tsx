import {
  LifeBuoy,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Plus,
  Search,
  Filter
} from 'lucide-react';

const stats = [
  { label: 'Active Requests', value: '42', change: '+5', trendingUp: true, icon: <LifeBuoy className="w-5 h-5" /> },
  { label: 'Avg. Response Time', value: '1.2h', change: '-15m', trendingUp: false, icon: <Clock className="w-5 h-5" /> },
  { label: 'SLA Compliance', value: '98.5%', change: '+0.2%', trendingUp: true, icon: <CheckCircle2 className="w-5 h-5" /> },
  { label: 'Critical Issues', value: '2', change: '0', trendingUp: false, icon: <AlertCircle className="w-5 h-5" /> },
];

const activeRequests = [
  { id: 'REQ-042', title: 'System Access Request', priority: 'High', status: 'In Progress', assignee: 'John Doe', updated: '10m ago' },
  { id: 'REQ-041', title: 'Software Installation', priority: 'Medium', status: 'New', assignee: 'Unassigned', updated: '1h ago' },
  { id: 'REQ-040', title: 'Hardware Replacement', priority: 'Low', status: 'Pending', assignee: 'Jane Smith', updated: '3h ago' },
  { id: 'REQ-039', title: 'Network Connectivity Issue', priority: 'Critical', status: 'In Progress', assignee: 'Mike Ross', updated: '5m ago' },
];

export default function ServiceDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">Service Dashboard</h1>
          <p className="text-sm text-gray-500">Monitor service requests and SLA performance.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-none text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4" />
          New Request
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-200 rounded-none p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-gray-50 rounded-none text-gray-400">
                {stat.icon}
              </div>
              <div className={`text-xs font-bold ${stat.trendingUp ? 'text-green-600' : 'text-blue-600'}`}>
                {stat.change}
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-none shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-bold text-gray-900">Active Requests</h2>
              <button className="text-sm font-bold text-primary hover:underline">View All</button>
            </div>
            <div className="divide-y divide-gray-50">
              {activeRequests.map((request) => (
                <div key={request.id} className="p-6 hover:bg-gray-50/50 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded-none border border-primary/10">{request.id}</span>
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{request.title}</h3>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-none border ${request.priority === 'Critical' ? 'bg-red-50 text-red-600 border-red-100' :
                      request.priority === 'High' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                        request.priority === 'Medium' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                          'bg-gray-50 text-gray-500 border-gray-100'
                      }`}>
                      {request.priority}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>Status: <span className="font-medium text-gray-700">{request.status}</span></span>
                      <span>Assignee: <span className="font-medium text-gray-700">{request.assignee}</span></span>
                    </div>
                    <span>Updated {request.updated}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section className="bg-white border border-gray-200 rounded-none p-6 shadow-sm">
            <h2 className="font-bold text-gray-900 mb-6">Service Health</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">System Uptime</span>
                  <span className="font-bold text-green-600">99.99%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-none h-2">
                  <div className="bg-green-500 h-2 rounded-none w-[99.99%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">API Latency</span>
                  <span className="font-bold text-blue-600">45ms</span>
                </div>
                <div className="w-full bg-gray-100 rounded-none h-2">
                  <div className="bg-blue-500 h-2 rounded-none w-[85%]" />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-none p-6 text-white">
            <h2 className="font-bold mb-4">Need Help?</h2>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Our support team is available 24/7 for critical system issues.
            </p>
            <button className="w-full py-3 bg-primary text-white rounded-none text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Contact Support
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
