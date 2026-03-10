'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Library,
  Search,
  Bell,
  Settings,
  ChevronRight,
  Upload,
  BookOpen,
  FileText,
  Video,
  Download,
  Filter,
  ArrowRight,
  TrendingUp,
  Activity,
  Shield,
  Server,
  Layers,
  Clock,
  User,
  Sparkles,
  Zap,
  Globe,
  Database,
  Mic,
  Presentation,
  FolderOpen,
  GraduationCap,
  ClipboardList,
  BookMarked,
  FlaskConical,
  Briefcase,
  Calendar,
  RotateCcw,
  Award,
  Microscope,
  Github,
  Bookmark,
  FileSearch,
  CheckSquare,
  ClipboardCheck,
  List,
  Terminal,
} from 'lucide-react';

/* ─── Mock Data ─── */
const categories = [
  { id: 1, name: 'STEM Research & Labs', count: 142, icon: FlaskConical, desc: 'Experimental findings, lab protocols, and advanced STEM documentation.', gradient: 'from-blue-600/20 to-indigo-600/20' },
  { id: 2, name: 'Arts & Humanities Archive', count: 85, icon: Layers, desc: 'Digital humanities projects, artistic assets, and cultural repositories.', gradient: 'from-purple-600/20 to-rose-600/20' },
  { id: 3, name: 'Campus Life & Governance', count: 64, icon: User, desc: 'Student organization guides, campus policies, and community resources.', gradient: 'from-orange-600/20 to-amber-600/20' },
  { id: 4, name: 'Global Academic Relations', count: 110, icon: TrendingUp, desc: 'International exchange programs, global research partnerships, and alumni networks.', gradient: 'from-emerald-600/20 to-teal-600/20' },
];

const quickLinks = [
  { id: 1, title: 'Brand Identity Assets', icon: Library, desc: 'Official logos, fonts, and color palettes for 2026.' },
  { id: 2, title: 'Security & Compliance', icon: Shield, desc: 'SOC2 protocols, data safety, and server compliance.' },
  { id: 3, title: 'Technical Deployment', icon: Terminal, desc: 'CI/CD pipelines, setup scripts, and deployment guides.' },
];

const activityLogs = [
  { id: 1, text: 'Cloud Infrastructure Protocol V2 updated', time: '2h ago', active: true },
  { id: 2, text: 'Branding Guidelines - Q1 Review completed', time: '5h ago', active: true },
  { id: 3, text: 'New DevOps training manual uploaded', time: '1d ago', active: false },
];

/* ─── Main Page ─── */
export default function ResourceCommandCenter() {
  const [activeNav, setActiveNav] = useState('Resource Center');
  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [lastSynced, setLastSynced] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLastSynced(new Date().toLocaleTimeString());
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#0F172A]" />;
  }

  return (
    <div
      className="min-h-screen flex text-slate-400 relative overflow-hidden"
      style={{
        fontFamily: 'var(--font-inter, Inter, sans-serif)',
        background: '#0F172A',
      }}
    >
      {/* ── Background depth layer ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full opacity-100" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)' }} />
        <div className="absolute top-[40%] -left-[5%] w-[45%] h-[45%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' }} />
      </div>

      {/* ═══════════════════════════════════════════
          1. SIDEBAR (Restored)
      ═══════════════════════════════════════════ */}
      <aside
        className={`fixed left-0 top-0 h-screen transition-all duration-300 z-50 flex flex-col ${sidebarOpen ? 'w-[280px]' : 'w-0 md:w-[280px]'} overflow-hidden md:overflow-visible`}
        style={{
          background: 'rgba(15,23,42,0.50)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
        }}
      >
        {/* Mobile shadow overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 md:hidden z-[-1]"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {/* Brand */}
        <div className="h-24 flex items-center px-8 gap-4">
          <div
            className="w-11 h-11 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg,#10B981,#6366F1)',
              borderRadius: '14px',
              padding: '1.5px',
              boxShadow: '0 0 20px rgba(16,185,129,0.20)',
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: '#0F172A', borderRadius: '12px' }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight leading-none">LearnOps</h1>
            <p className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.2em] mt-1.5 opacity-80">Resource Hub</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-5 py-6 space-y-2 overflow-y-auto">
          {/* Search Hub */}
          <NavLabel>Search Hub</NavLabel>
          {[
            { icon: Search, label: 'Advanced Search', id: 'Search', href: '/resource-center/search' },
          ].map((item) => <SidebarLink key={item.id} item={item} activeNav={activeNav} setActiveNav={setActiveNav} />)}

          {/* Personalized */}
          <NavLabel>Personalized</NavLabel>
          {[
            { icon: Bookmark, label: 'Saved Resources', id: 'Saved', href: '/resource-center/saved' },
            { icon: Clock, label: 'Recently Accessed', id: 'Recent', href: '/resource-center/recent' },
            { icon: Sparkles, label: 'Recommended', id: 'Recommended', href: '/resource-center/recommended' },
            { icon: Upload, label: 'Submit Material', id: 'Submit', href: '/resource-center/submit' },
          ].map((item) => <SidebarLink key={item.id} item={item} activeNav={activeNav} setActiveNav={setActiveNav} />)}
        </nav>

        {/* Sidebar Footer: Settings */}
        <div className="p-8 mt-auto border-t border-white/5">
          {[
            { icon: Settings, label: 'Settings', id: 'Settings', href: '/resource-center/settings' },
          ].map((item) => <SidebarLink key={item.id} item={item} activeNav={activeNav} setActiveNav={setActiveNav} />)}
        </div>
      </aside>

      {/* ═══════════════════════════════════════════
          2. MAIN CONTENT
      ═══════════════════════════════════════════ */}
      <main className="flex-1 md:ml-[280px] min-h-screen flex flex-col relative z-10">

        {/* ── Top Bar (glass) ── */}
        <header
          className="h-24 px-12 flex items-center justify-between sticky top-0 z-40"
          style={{
            background: 'rgba(15,23,42,0.30)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="flex items-center gap-6">
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-3 bg-white/5 border border-white/10 rounded-xl"
              onClick={() => setSidebarOpen(true)}
            >
              <LayoutDashboard className="w-5 h-5 text-emerald-400" />
            </button>

            <div>
              <h2 className="text-xl md:text-[26px] font-bold text-white tracking-tight leading-tight">Resource Command Center</h2>
            </div>
          </div>

          <div className="flex-1 max-w-lg px-12">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="text"
                placeholder="Search resources, protocols..."
                className="w-full text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '9999px',
                  padding: '16px 32px 16px 64px',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.10)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Ghost icons */}
          <div className="flex items-center gap-5 relative">
            <div className="relative">
              <GhostBtn icon={Bell} dot onClick={() => { setShowNotifications(!showNotifications); setShowSettings(false); }} />
              {showNotifications && (
                <div
                  className="absolute top-16 right-0 w-80 z-[60] animate-in fade-in slide-in-from-top-4 duration-300"
                  style={{
                    background: 'rgba(15,23,42,0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '20px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    padding: '24px'
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold text-white tracking-tight uppercase">Notifications</h3>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Mark all as read</span>
                  </div>
                  <div className="space-y-4">
                    {activityLogs.map(log => (
                      <div key={log.id} className="flex gap-4 group cursor-pointer">
                        <div className={`w-2 h-2 mt-1.5 rounded-full shrink-0 ${log.active ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-700'}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-300 leading-relaxed transition-colors group-hover:text-emerald-300">{log.text}</p>
                          <span className="text-[10px] text-slate-500 font-bold uppercase mt-1 block">{log.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <button className="w-full text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] hover:text-white transition-colors">View All Activities</button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <GhostBtn icon={Settings} onClick={() => { setShowSettings(!showSettings); setShowNotifications(false); }} />
              {showSettings && (
                <div
                  className="absolute top-16 right-0 w-64 z-[60] animate-in fade-in slide-in-from-top-4 duration-300"
                  style={{
                    background: 'rgba(15,23,42,0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '20px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    padding: '24px'
                  }}
                >
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase mb-6">Settings</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between group cursor-pointer">
                      <span className="text-xs text-slate-400 group-hover:text-white transition-colors">Dark Mode</span>
                      <div className="w-8 h-4 bg-emerald-500/20 rounded-full relative p-1 border border-emerald-500/30">
                        <div className="absolute right-1 top-1 w-2 h-2 bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between group cursor-pointer">
                      <span className="text-xs text-slate-400 group-hover:text-white transition-colors">Push Alerts</span>
                      <div className="w-8 h-4 bg-slate-700/40 rounded-full relative p-1 border border-white/5">
                        <div className="absolute left-1 top-1 w-2 h-2 bg-slate-400 rounded-full" />
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                      <Link href="/settings" className="text-left text-xs text-slate-400 hover:text-emerald-400 transition-colors">Workspace Config</Link>
                      <Link href="/settings/performance" className="text-left text-xs text-slate-400 hover:text-emerald-400 transition-colors">API Thresholds</Link>
                      <button className="text-left text-xs text-rose-400/70 hover:text-rose-400 transition-colors">Emergency Purge</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ── Scrollable body ── */}
        <div className="p-12 space-y-12">

          {/* ─────────────────────────────────────────
              3. FEATURED RESOURCES (65 / 35)
          ───────────────────────────────────────── */}
          <section className="grid grid-cols-12 gap-10">
            {/* Primary Card (65 %) */}
            <div
              className="col-span-8 group relative overflow-hidden cursor-pointer hover:-translate-y-1.5 transition-all duration-700"
              style={{
                borderRadius: '22px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.05)',
                height: '440px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              }}
            >
              <div className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-1000" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.10), rgba(16,185,129,0.05), transparent)' }} />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[100px] animate-pulse" style={{ borderRadius: '9999px' }} />

              <div className="relative z-10 p-12 h-full flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]"
                    style={{
                      padding: '8px 16px',
                      borderRadius: '12px',
                      background: 'rgba(16,185,129,0.10)',
                      border: '1px solid rgba(16,185,129,0.20)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >Featured Asset</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <Clock className="w-4 h-4 opacity-70" /> Updated 2h ago
                  </span>
                </div>

                <h3 className="text-[34px] font-bold text-white mb-4 tracking-tight leading-[1.1] group-hover:text-emerald-400 transition-colors duration-700">
                  Global Research Archive & <br /> Scholarly Library Collections
                </h3>
                <p className="text-[17px] text-slate-400 leading-relaxed max-w-xl mb-10">
                  A peer-reviewed pedagogical infrastructure for advanced scholarly collaboration, secure manuscript distribution, and automated indexing services.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-slate-900 flex items-center justify-center overflow-hidden" style={{ borderRadius: '9999px', border: '2px solid rgba(255,255,255,0.10)', boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}>
                      <img src="https://ui-avatars.com/api/?name=Engineering+Ops&background=0F172A&color=10B981&bold=true" alt="Author" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-base font-bold text-white tracking-tight block">University Library</span>
                      <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">Central Repository</span>
                    </div>
                  </div>

                  <button
                    className="text-white font-bold text-sm flex items-center gap-3 hover:-translate-y-1 active:scale-95 transition-all duration-500"
                    style={{
                      padding: '16px 40px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg,#10B981,#6366F1)',
                      boxShadow: '0 10px 20px rgba(16,185,129,0.30)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Explore Research <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Cards (35 %) */}
            <div className="col-span-4 flex flex-col gap-10">
              <SmallCard title="2026 Academic Excellence Roadmap" category="Brand Strategy" icon={Sparkles} accent="#6366F1" />
              <SmallCard title="Graduate Research Archive" category="Operations" icon={Shield} accent="#10B981" />
            </div>
          </section>


          {/* ─────────────────────────────────────────
              5. CONTRIBUTE + QUICK LINKS
          ───────────────────────────────────────── */}
          <div className="grid grid-cols-12 gap-12">

            {/* Contribute */}
            <div className="col-span-7">
              <div
                className="relative overflow-hidden h-full flex flex-col justify-center group"
                style={{
                  borderRadius: '22px',
                  padding: '48px',
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(99,102,241,0.08), transparent)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.30)',
                }}
              >
                <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }} />
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-400/10 blur-[120px] animate-pulse group-hover:bg-emerald-400/20 transition-all duration-1000" style={{ borderRadius: '9999px' }} />
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  <Zap className="w-48 h-48 text-emerald-400" />
                </div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 flex items-center justify-center mb-8 group-hover:bg-emerald-500/10 transition-colors"
                    style={{ borderRadius: '18px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
                  >
                    <Upload className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-[28px] font-bold text-white tracking-tight leading-tight">Elevate Institutional Knowledge</h3>
                  <p className="text-slate-400 text-base mt-4 font-medium leading-relaxed max-w-lg">
                    Your contributions maintain the high integrity of our shared ecosystem. Submit new research, operational assets, or architectural guides.
                  </p>
                  <div className="flex items-center gap-8 mt-10">
                    <button
                      className="text-[#0F172A] font-bold text-sm flex items-center gap-3 hover:-translate-y-1 active:scale-95 transition-all duration-500"
                      style={{
                        padding: '20px 40px',
                        borderRadius: '12px',
                        background: '#10B981',
                        boxShadow: '0 10px 20px rgba(16,185,129,0.30)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      <Upload className="w-4 h-4" />
                      CONTRIBUTE RESOURCE
                    </button>
                    <div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block mb-1">Reward multiplier</span>
                      <span className="text-emerald-400 font-bold text-sm tracking-tight">+2.5x Karma Boost</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links + Stats */}
            <div className="col-span-5 space-y-10">
              {/* Quick Links */}
              <div
                style={{
                  borderRadius: '22px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '40px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                }}
              >
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-10 flex items-center gap-4">
                  Core Academic Links
                  <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.10)' }} />
                </h4>

                <div className="space-y-4">
                  {quickLinks.map((link) => (
                    <div
                      key={link.id}
                      className="group flex items-center gap-6 relative overflow-hidden cursor-pointer hover:bg-white/5 transition-all duration-500"
                      style={{ padding: '20px', borderRadius: '16px' }}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                      <div
                        className="w-14 h-14 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:rotate-6 transition-all"
                        style={{ borderRadius: '18px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                      >
                        <link.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-[16px] font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">{link.title}</h5>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-1.5 truncate">{link.desc}</p>
                      </div>
                      <div
                        className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500"
                        style={{ borderRadius: '9999px', background: 'rgba(255,255,255,0.05)' }}
                      >
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-time stats */}
              <div
                className="relative overflow-hidden group"
                style={{
                  borderRadius: '22px',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.08), transparent)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '32px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                }}
              >
                <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all duration-1000 group-hover:scale-110">
                  <Globe className="w-24 h-24 text-indigo-400" />
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Global Research Sync</p>
                    <h4 className="text-3xl font-bold text-white tracking-tighter">
                      14,208 <span className="text-sm font-bold text-emerald-500 ml-2 tracking-normal">+1.2k</span>
                    </h4>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 bg-slate-800 overflow-hidden"
                            style={{ borderRadius: '9999px', border: '2px solid #0F172A' }}
                          >
                            <img
                              src={`https://ui-avatars.com/api/?name=${i}&background=random`}
                              alt="contributor"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Contributors</span>
                    </div>
                  </div>
                  <div
                    className="w-14 h-14 flex items-center justify-center"
                    style={{ borderRadius: '9999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
                  >
                    <Database className="w-6 h-6 text-indigo-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────
              6. BROWSE BY RESOURCE TYPE
          ───────────────────────────────────────── */}
          <SectionBlock title="Browse by Resource Type" subtitle="Explore resources organized by content format.">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              <NavCard href="/resource-center/resources/text" icon={FileText} label="Text Resources" count={142} accent="#10B981" />
              <NavCard href="/resource-center/resources/video" icon={Video} label="Video Resources" count={87} accent="#6366F1" />
              <NavCard href="/resource-center/resources/audio" icon={Mic} label="Audio Resources" count={34} accent="#F59E0B" />
              <NavCard href="/resource-center/resources/presentations" icon={Presentation} label="Presentations" count={56} accent="#EC4899" />
              <NavCard href="/resource-center/resources/downloads" icon={Download} label="Downloadables" count={45} accent="#14B8A6" />
            </div>
          </SectionBlock>

          {/* ─────────────────────────────────────────
              7. ACADEMIC ARCHIVES
          ───────────────────────────────────────── */}
          <SectionBlock title="Academic Archives" subtitle="Browse past academic materials by type.">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              <NavCard href="/resource-center/archives/past-papers" icon={FileText} label="Past Papers" count={312} accent="#EF4444" />
              <NavCard href="/resource-center/archives/past-coursework" icon={BookOpen} label="Past Coursework" count={198} accent="#F97316" />
              <NavCard href="/resource-center/archives/coursework-topics" icon={List} label="Coursework Topics" count={89} accent="#8B5CF6" />
              <NavCard href="/resource-center/archives/sample-projects" icon={FolderOpen} label="Sample Projects" count={67} accent="#06B6D4" />
              <NavCard href="/resource-center/archives/final-year-projects" icon={GraduationCap} label="Final Year Projects" count={145} accent="#10B981" />
              <NavCard href="/resource-center/archives/assignments" icon={ClipboardList} label="Assignments Archive" count={234} accent="#D946EF" />
            </div>
          </SectionBlock>

          {/* ─────────────────────────────────────────
              8. PROJECT REPOSITORY
          ───────────────────────────────────────── */}
          <SectionBlock title="Project Repository" subtitle="Discover student and faculty projects across disciplines.">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              <NavCard href="/resource-center/projects/student" icon={User} label="Student Projects" count={78} accent="#10B981" />
              <NavCard href="/resource-center/projects/group" icon={Layers} label="Group Projects" count={45} accent="#6366F1" />
              <NavCard href="/resource-center/projects/capstone" icon={Award} label="Capstone Projects" count={34} accent="#F59E0B" />
              <NavCard href="/resource-center/projects/research" icon={Microscope} label="Research Projects" count={23} accent="#EC4899" />
              <NavCard href="/resource-center/projects/open-source" icon={Github} label="Open Source" count={18} accent="#14B8A6" />
            </div>
          </SectionBlock>

          {/* ─────────────────────────────────────────
              9. ADDITIONAL RESOURCES
          ───────────────────────────────────────── */}
          <SectionBlock title="Additional Resources" subtitle="Essential academic and career materials.">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              <NavCard href="/resource-center/materials/course-materials" icon={BookOpen} label="Course Materials" count={210} accent="#10B981" />
              <NavCard href="/resource-center/materials/faculty-resources" icon={GraduationCap} label="Faculty Resources" count={56} accent="#6366F1" />
              <NavCard href="/resource-center/materials/exam-guidelines" icon={ClipboardCheck} label="Exam Guidelines" count={32} accent="#EF4444" />
              <NavCard href="/resource-center/materials/marking-schemes" icon={CheckSquare} label="Marking Schemes" count={89} accent="#F59E0B" />
              <NavCard href="/resource-center/materials/reference-books" icon={BookMarked} label="Reference Books" count={167} accent="#8B5CF6" />
              <NavCard href="/resource-center/materials/study-plans" icon={Calendar} label="Study Plans" count={45} accent="#06B6D4" />
              <NavCard href="/resource-center/materials/revision" icon={RotateCcw} label="Revision Materials" count={134} accent="#D946EF" />
              <NavCard href="/resource-center/materials/lab-manuals" icon={FlaskConical} label="Lab Manuals" count={78} accent="#14B8A6" />
              <NavCard href="/resource-center/materials/internship" icon={Briefcase} label="Internship Resources" count={34} accent="#F97316" />
              <NavCard href="/resource-center/materials/research-publications" icon={FileSearch} label="Research Publications" count={56} accent="#3B82F6" />
            </div>
          </SectionBlock>


        </div>
      </main>
    </div>
  );
}

/* ─── Shared Sub-Components ─── */

function NavLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-6 pb-2 px-6">
      <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.25em]">{children}</span>
    </div>
  );
}

function SidebarLink({ item, activeNav, setActiveNav }: { item: { icon: React.ElementType; label: string; id: string; href: string }; activeNav: string; setActiveNav: (v: string) => void }) {
  const isActive = activeNav === item.id;
  const fullHref = item.href.startsWith('http') ? item.href : `/resource-center${item.href}`;
  return (
    <Link
      href={fullHref}
      onClick={() => setActiveNav(item.id)}
      className="w-full relative flex items-center gap-4 px-6 py-3 transition-all duration-300"
      style={{
        borderRadius: '10px',
        color: isActive ? '#fff' : '#94A3B8',
        background: isActive ? 'rgba(16,185,129,0.06)' : 'transparent',
        textDecoration: 'none',
      }}
    >
      {isActive && (
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 animate-pulse"
          style={{ width: '3px', height: '24px', background: '#10B981', borderRadius: '9999px', boxShadow: '0 0 12px rgba(16,185,129,0.8)' }}
        />
      )}
      <item.icon className="w-4 h-4" style={{ color: isActive ? '#10B981' : '#475569' }} />
      <span className="text-[10px] font-bold uppercase tracking-[0.12em]">{item.label}</span>
    </Link>
  );
}

function SectionBlock({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-[20px] font-bold text-white tracking-tight">{title}</h3>
        <p className="text-sm text-slate-500 mt-1.5 font-medium">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function NavCard({ href, icon: Icon, label, count, accent }: { href: string; icon: React.ElementType; label: string; count: number; accent: string }) {
  return (
    <Link href={href} className="group cursor-pointer hover:-translate-y-1 transition-all duration-500" style={{ textDecoration: 'none' }}>
      <div
        className="p-6 h-full"
        style={{ borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${accent}30`; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
      >
        <div className="w-10 h-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ borderRadius: '12px', background: `${accent}12`, border: `1px solid ${accent}25` }}>
          <Icon className="w-5 h-5" style={{ color: accent }} />
        </div>
        <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight mb-1">{label}</h4>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{count} items</span>
      </div>
    </Link>
  );
}

function GhostBtn({ icon: Icon, dot, onClick }: { icon: React.ElementType; dot?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative group transition-all duration-300 active:scale-90"
      style={{ padding: '14px', borderRadius: '12px' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.10)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.border = '1px solid transparent';
      }}
    >
      <Icon className="w-[18px] h-[18px] text-slate-500 group-hover:text-white transition-colors" />
      {dot && (
        <div
          className="absolute top-[14px] right-[14px] w-2 h-2 bg-rose-500"
          style={{ borderRadius: '9999px', border: '2px solid #1E293B' }}
        />
      )}
    </button>
  );
}

function SmallCard({ title, category, icon: Icon, accent }: { title: string; category: string; icon: React.ElementType; accent: string }) {
  return (
    <div
      className="flex-1 relative group cursor-pointer hover:-translate-y-1.5 transition-all duration-700"
      style={{
        borderRadius: '22px',
        padding: '32px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ borderRadius: '9999px', background: `${accent}10` }} />

      <div className="relative z-10 flex items-center justify-between h-full">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] group-hover:text-slate-400 transition-colors">{category}</span>
            <div className="w-1 h-1 group-hover:animate-pulse" style={{ borderRadius: '9999px', background: accent }} />
          </div>
          <h4 className="text-[18px] font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">{title}</h4>
          <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
            Access Resource <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
        <div
          className="w-14 h-14 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
          style={{
            borderRadius: '18px',
            background: '#0F172A',
            border: '1px solid rgba(255,255,255,0.05)',
            color: accent,
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          }}
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
