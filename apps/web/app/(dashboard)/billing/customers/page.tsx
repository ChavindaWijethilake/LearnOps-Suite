import {
    Users,
    Search,
    Plus,
    Mail,
    Phone,
    MapPin,
    MoreVertical,
    ExternalLink,
    ArrowRight,
    Activity,
    Globe,
    Shield
} from 'lucide-react';

const customers = [
    { id: 1, name: 'Acme Corp', email: 'billing@acme.com', phone: '+1 (555) 123-4567', location: 'New York, USA', status: 'Active', invoices: 12, color: 'text-emerald-600', bgColor: 'bg-emerald-500/10' },
    { id: 2, name: 'Global Tech', email: 'accounts@globaltech.io', phone: '+44 20 7123 4567', location: 'London, UK', status: 'Active', invoices: 8, color: 'text-blue-600', bgColor: 'bg-blue-500/10' },
    { id: 3, name: 'Starlight Inc', email: 'finance@starlight.com', phone: '+1 (555) 987-6543', location: 'San Francisco, USA', status: 'Inactive', invoices: 4, color: 'text-slate-400', bgColor: 'bg-slate-500/10' },
    { id: 4, name: 'Nexus Ltd', email: 'billing@nexus.co.uk', phone: '+44 20 8987 6543', location: 'Manchester, UK', status: 'Active', invoices: 15, color: 'text-indigo-600', bgColor: 'bg-indigo-500/10' },
    { id: 5, name: 'Quantum Soft', email: 'pay@quantum.com', phone: '+49 30 1234 5678', location: 'Berlin, Germany', status: 'Active', invoices: 6, color: 'text-purple-600', bgColor: 'bg-purple-500/10' },
    { id: 6, name: 'Velocity Apps', email: 'billing@velocity.app', phone: '+1 (555) 456-7890', location: 'Austin, USA', status: 'Active', invoices: 9, color: 'text-rose-600', bgColor: 'bg-rose-500/10' },
];

export default function CustomersPage() {
    return (
        <div className="space-y-12 animate-fade-in pb-20">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                        Entity Directory
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Customers</h1>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                        Manage your global client infrastructure and specialized billing profiles.
                    </p>
                </div>
                <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 active:scale-95">
                    <Plus className="w-4 h-4" />
                    Provision Entity
                </button>
            </header>

            <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                    type="text"
                    placeholder="Search entities by name, email, or global location..."
                    className="w-full pl-16 pr-6 py-6 bg-white border border-slate-100 rounded-[2rem] text-lg font-medium shadow-2xl shadow-blue-900/5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-200 transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {customers.map((customer, index) => (
                    <div
                        key={customer.id}
                        className="group glass-card rounded-[3rem] p-8 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 animate-slide-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3", customer.bgColor, customer.color)}>
                                <Users className="w-8 h-8" />
                            </div>
                            <button className="p-3 hover:bg-slate-50 rounded-2xl transition-all text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-100">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-2 mb-8">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{customer.name}</h3>
                            <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full w-fit border border-slate-100">
                                <span className={cn("w-2 h-2 rounded-full animate-pulse", customer.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300')} />
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{customer.status}</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4 text-sm font-bold text-slate-500 group-hover:text-slate-700 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600">
                                    <Mail className="w-4 h-4" />
                                </div>
                                {customer.email}
                            </div>
                            <div className="flex items-center gap-4 text-sm font-bold text-slate-500 group-hover:text-slate-700 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600">
                                    <Phone className="w-4 h-4" />
                                </div>
                                {customer.phone}
                            </div>
                            <div className="flex items-center gap-4 text-sm font-bold text-slate-500 group-hover:text-slate-700 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                {customer.location}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Active Ledgers</span>
                                <span className="text-lg font-black text-slate-900">{customer.invoices} Total</span>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all group/btn">
                                Profile
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
