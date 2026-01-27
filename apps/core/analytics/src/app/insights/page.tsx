import { TrendingUp, Zap, AlertCircle, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

const insights = [
    { id: 1, title: 'Revenue Peak Detected', description: 'Your revenue increased by 25% compared to last Tuesday. This correlates with the new marketing campaign.', type: 'Positive', impact: 'High' },
    { id: 2, title: 'High Churn Risk', description: '5 users from the "Enterprise" tier have not logged in for 14 days. Consider a proactive outreach.', type: 'Warning', impact: 'Critical' },
    { id: 3, title: 'System Latency Spike', description: 'API response times increased by 200ms in the US-East region during peak hours.', type: 'Issue', impact: 'Medium' },
    { id: 4, title: 'New Trend: Mobile Usage', description: 'Mobile app usage has grown by 40% this month. Consider optimizing the mobile dashboard.', type: 'Info', impact: 'Medium' },
];

export default function InsightsPage() {
    return (
        <div className="space-y-8">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    AI Insights
                </h1>
                <p className="text-sm text-gray-500">Automated analysis and actionable recommendations based on your data.</p>
            </header>

            <div className="grid grid-cols-1 gap-4">
                {insights.map((insight) => (
                    <div key={insight.id} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                        <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center ${insight.type === 'Positive' ? 'bg-green-50 text-green-600' :
                                insight.type === 'Warning' ? 'bg-amber-50 text-amber-600' :
                                    insight.type === 'Issue' ? 'bg-red-50 text-red-600' :
                                        'bg-blue-50 text-blue-600'
                            }`}>
                            {insight.type === 'Positive' ? <TrendingUp className="w-6 h-6" /> :
                                insight.type === 'Warning' ? <AlertCircle className="w-6 h-6" /> :
                                    insight.type === 'Issue' ? <Zap className="w-6 h-6" /> :
                                        <MessageSquare className="w-6 h-6" />}
                        </div>

                        <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-bold text-gray-900">{insight.title}</h3>
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${insight.impact === 'Critical' ? 'bg-red-50 text-red-600 border-red-100' :
                                        insight.impact === 'High' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                            'bg-blue-50 text-blue-600 border-blue-100'
                                    }`}>
                                    {insight.impact} Impact
                                </span>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                                {insight.description}
                            </p>
                            <button className="text-sm font-bold text-primary flex items-center gap-1.5 pt-2 group-hover:underline">
                                Take Action
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <section className="bg-gray-900 rounded-3xl p-10 text-center space-y-6">
                <h2 className="text-2xl font-bold text-white">Want deeper insights?</h2>
                <p className="text-gray-400 max-w-xl mx-auto">Upgrade to LearnOps Pro to unlock predictive analytics and custom AI models tailored to your organization.</p>
                <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    Upgrade to Pro
                </button>
            </section>
        </div>
    );
}
