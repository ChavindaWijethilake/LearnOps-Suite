'use client'

import { ReactNode } from 'react'
import { ArrowRight, Zap, Shield, CheckCircle2 } from 'lucide-react'

interface PortalPageProps {
  portalName: string
  portalDescription: string
  portalUrl?: string
  icon: ReactNode
  children?: ReactNode
  features?: string[]
}

export function PortalPage({
  portalName,
  portalDescription,
  portalUrl,
  icon,
  features,
}: PortalPageProps) {
  return (
    <main className="min-h-screen bg-slate-50/50 p-8 md:p-12 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
          <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-blue-600 text-white shadow-2xl shadow-blue-600/20 group hover:scale-110 hover:rotate-3 transition-all duration-500">
            {icon}
          </div>
          <div className="space-y-4 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
              Enterprise Portal Entry
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">{portalName}</h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">{portalDescription}</p>
          </div>
        </div>

        {/* Redirection Notice */}
        {portalUrl && (
          <div className="glass-card rounded-[3rem] p-10 border-blue-100/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-20 h-20" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">Redirection Protocol</h3>
              </div>
              <p className="text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
                This interface serves as a secure gateway. In production environments, your session will be seamlessly orchestrated to the specialized portal infrastructure at:
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={portalUrl}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
                >
                  Initialize Redirect <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-sm font-bold text-slate-400 font-mono">{portalUrl}</span>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {features && features.length > 0 && (
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-100" />
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap text-center">Available Capabilities</h2>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-[2rem] transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 animate-slide-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-base font-black text-slate-700 group-hover:text-slate-900 transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
