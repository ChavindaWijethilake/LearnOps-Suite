import {
    Users,
    Search,
    Plus,
    Mail,
    Phone,
    MapPin,
    MoreVertical,
    ExternalLink,
    Shield
} from 'lucide-react';

const team = [
    { id: 1, name: 'John Doe', role: 'Lead Developer', email: 'john@learnops.local', status: 'Online', projects: 3 },
    { id: 2, name: 'Jane Smith', role: 'UI Designer', email: 'jane@learnops.local', status: 'Away', projects: 2 },
    { id: 3, name: 'Mike Ross', role: 'Backend Engineer', email: 'mike@learnops.local', status: 'Offline', projects: 4 },
    { id: 4, name: 'Sarah Connor', role: 'DevOps Engineer', email: 'sarah@learnops.local', status: 'Online', projects: 2 },
    { id: 5, name: 'Gary Simon', role: 'UX Researcher', email: 'gary@learnops.local', status: 'Online', projects: 1 },
    { id: 6, name: 'Ava Lovelace', role: 'Data Scientist', email: 'ava@learnops.local', status: 'Offline', projects: 3 },
];

export default function TeamPage() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Team Directory</h1>
                    <p className="text-sm text-gray-500">Manage your team members and their project assignments.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <Plus className="w-4 h-4" />
                    Invite Member
                </button>
            </header>

            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search team members by name, role, or email..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member) => (
                    <div key={member.id} className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                                <div className="w-full h-full rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {member.name.charAt(0)}
                                </div>
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-1 mb-6">
                            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                            <p className="text-sm text-gray-500 font-medium">{member.role}</p>
                            <div className="flex items-center gap-2 pt-1">
                                <span className={`w-2 h-2 rounded-full ${member.status === 'Online' ? 'bg-green-500' : member.status === 'Away' ? 'bg-amber-500' : 'bg-gray-300'}`} />
                                <span className="text-xs font-medium text-gray-500">{member.status}</span>
                            </div>
                        </div>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Mail className="w-4 h-4 text-gray-400" />
                                {member.email}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Shield className="w-4 h-4 text-gray-400" />
                                Member Access
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Projects</span>
                                <span className="text-sm font-bold text-gray-900">{member.projects} Active</span>
                            </div>
                            <button className="text-sm font-bold text-primary flex items-center gap-1.5 hover:underline">
                                View Profile
                                <ExternalLink className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
