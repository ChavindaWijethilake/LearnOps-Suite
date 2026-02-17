import { ArrowLeft, Scale, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-16 py-12 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Command Center
            </Link>

            <header className="space-y-6 border-b border-slate-100 pb-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 text-amber-600 rounded-none text-[10px] font-black uppercase tracking-[0.2em]">
                    <Scale className="w-4 h-4" />
                    Legal Framework v4.0
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-slate-900 leading-none">
                    Terms of <span className="text-amber-600">Operation</span>.
                </h1>
                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                    By accessing the LearnOps OS, you agree to adhere to our enterprise operational standards and security protocols.
                </p>
            </header>

            <div className="space-y-12">
                {[
                    { title: 'Acceptable Use', icon: CheckCircle, content: 'LearnOps Suite is intended for professional enterprise use. Any unauthorized access or malicious utilization of system resources is strictly prohibited.' },
                    { title: 'Service Level Agreement', icon: FileText, content: 'We guarantee 99.99% uptime for core infrastructure. Scheduled maintenance will be communicated 48 hours in advance through the Intelligence Hub.' },
                    { title: 'Liability & Indemnity', icon: AlertCircle, content: 'LearnOps Engineering is not liable for data loss resulting from improper module configuration or unauthorized third-party integrations.' }
                ].map((section) => (
                    <section key={section.title} className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-amber-50 text-amber-600 flex items-center justify-center">
                                <section.icon className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">{section.title}</h2>
                        </div>
                        <p className="text-slate-500 font-medium leading-relaxed text-lg pl-14">{section.content}</p>
                    </section>
                ))}
            </div>

            <div className="p-10 bg-slate-950 text-white space-y-6">
                <h3 className="text-lg font-black tracking-tight uppercase tracking-widest text-amber-400">Operational Compliance</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                    Failure to comply with these terms may result in immediate suspension of node access and termination of enterprise provisioning.
                </p>
                <button className="px-8 py-4 bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest hover:bg-amber-50 transition-all">
                    Download Full Legal PDF
                </button>
            </div>
        </div>
    );
}
