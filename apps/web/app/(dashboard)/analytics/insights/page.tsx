import { TrendingUp, Zap, AlertCircle, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

const insights = [
    { id: 1, title: 'Revenue Peak Detected', description: 'Your revenue increased by 25% compared to last Tuesday. This correlates with the new marketing campaign.', type: 'Positive', impact: 'High' },
    { id: 2, title: 'High Churn Risk', description: '5 users from the "Enterprise" tier have not logged in for 14 days. Consider a proactive outreach.', type: 'Warning', impact: 'Critical' },
    { id: 3, title: 'System Latency Spike', description: 'API response times increased by 200ms in the US-East region during peak hours.', type: 'Issue', impact: 'Medium' },
    { id: 4, title: 'New Trend: Mobile Usage', description: 'Mobile app usage has grown by 40% this month. Consider optimizing the mobile dashboard.', type: 'Info', impact: 'Medium' },
];

export default function InsightsPage() {
    return (
        <div className="space-y-8 animate-fade-in">
            <header className="pb-6 border-b border-slate-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-md mb-3">
                    <Sparkles className="w-3.5 h-3.5" /> AI-Powered
                </div>
                <h1 className="text-2xl font-bold text-slate-50">AI Insights</h1>
                <p className="text-sm text-slate-400 mt-1">Automated analysis and actionable recommendations</p>
            </header>

            <div className="space-y-4">
                {insights.map((insight, index) => (
                    <div key={insight.id}
                        className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-5 flex gap-5 hover:bg-slate-800/60 hover:border-emerald-500/20 transition-all duration-300 group animate-slide-up"
                        style={{ animationDelay: `${index * 80}ms` }}>
                        <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${insight.type === 'Positive' ? 'bg-green-500/10 text-green-400' :
                                insight.type === 'Warning' ? 'bg-amber-500/10 text-amber-400' :
                                    insight.type === 'Issue' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'
                            }`}>
                            {insight.type === 'Positive' ? <TrendingUp className="w-5 h-5" /> :
                                insight.type === 'Warning' ? <AlertCircle className="w-5 h-5" /> :
                                    insight.type === 'Issue' ? <Zap className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-slate-50">{insight.title}</h3>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${insight.impact === 'Critical' ? 'bg-red-500/10 text-red-400' :
                                        insight.impact === 'High' ? 'bg-orange-500/10 text-orange-400' : 'bg-blue-500/10 text-blue-400'
                                    }`}>{insight.impact}</span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">{insight.description}</p>
                            <button className="text-xs font-medium text-emerald-400 flex items-center gap-1 hover:text-emerald-300 transition-colors">
                                Take Action <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <section className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-10 text-center space-y-4">
                <h2 className="text-xl font-bold text-slate-50">Want deeper insights?</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-sm">Upgrade to LearnOps Pro to unlock predictive analytics and custom AI models.</p>
                <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                    Upgrade to Pro
                </button>
            </section>
        </div>
    );
}
