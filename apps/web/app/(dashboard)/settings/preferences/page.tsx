'use client';

import React, { useState, useEffect } from 'react';
import {
    Settings,
    Monitor,
    Accessibility,
    Languages,
    Clock,
    Moon,
    Sun,
    Layout,
    Check,
    Eye,
    Move
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useSettings } from '../settings-context';

export default function PreferencesSettingsPage() {
    const { setIsDirty } = useSettings();

    // Interface State
    const [theme, setTheme] = useState('dark');
    const [density, setDensity] = useState('spacious');
    const [sidebarStyle, setSidebarStyle] = useState('glass');

    // Accessibility State
    const [reducedMotion, setReducedMotion] = useState(false);
    const [highContrast, setHighContrast] = useState(false);
    const [dyslexicFont, setDyslexicFont] = useState(false);

    // Regional State
    const [language, setLanguage] = useState('en-us');
    const [timezone, setTimezone] = useState('utc-5');

    const [initialState] = useState({
        theme: 'dark',
        density: 'spacious',
        sidebarStyle: 'glass',
        reducedMotion: false,
        highContrast: false,
        dyslexicFont: false,
        language: 'en-us',
        timezone: 'utc-5'
    });

    // Track changes
    useEffect(() => {
        const hasChanges =
            theme !== initialState.theme ||
            density !== initialState.density ||
            sidebarStyle !== initialState.sidebarStyle ||
            reducedMotion !== initialState.reducedMotion ||
            highContrast !== initialState.highContrast ||
            dyslexicFont !== initialState.dyslexicFont ||
            language !== initialState.language ||
            timezone !== initialState.timezone;
        setIsDirty(hasChanges);
    }, [theme, density, sidebarStyle, reducedMotion, highContrast, dyslexicFont, language, timezone, initialState, setIsDirty]);

    return (
        <div className="space-y-10 animate-fade-in">
            <div className="space-y-2">
                <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">General Preferences</h1>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Environment & Interface Personalization</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {/* Interface Section */}
                <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                    <div>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-1">Visual Architecture</h2>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Customize your workstation aesthetics</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <PreferenceControl
                            icon={Monitor}
                            label="System Theme"
                            desc="Select the global visual mode for the interface"
                        >
                            <div className="flex bg-slate-950 p-1 rounded-2xl border border-slate-800">
                                <ThemeOption
                                    active={theme === 'dark'}
                                    onClick={() => setTheme('dark')}
                                    icon={Moon}
                                    label="Dark"
                                />
                                <ThemeOption
                                    active={theme === 'light'}
                                    onClick={() => setTheme('light')}
                                    icon={Sun}
                                    label="Light"
                                />
                                <ThemeOption
                                    active={theme === 'system'}
                                    onClick={() => setTheme('system')}
                                    icon={Settings}
                                    label="Auto"
                                />
                            </div>
                        </PreferenceControl>

                        <PreferenceControl
                            icon={Layout}
                            label="Interface Density"
                            desc="Horizontal and vertical data compaction level"
                        >
                            <Select value={density} onValueChange={setDensity}>
                                <SelectTrigger className="w-full h-12 bg-slate-950 border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-300">
                                    <SelectValue placeholder="Density" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                                    <SelectItem value="compact" className="text-[10px] font-black uppercase tracking-widest">Compact Protocol</SelectItem>
                                    <SelectItem value="spacious" className="text-[10px] font-black uppercase tracking-widest">Spacious Environment</SelectItem>
                                </SelectContent>
                            </Select>
                        </PreferenceControl>
                    </div>
                </section>

                {/* Accessibility & Regional */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-1">Human Factors</h2>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Accessibility & readability enhancements</p>
                        </div>

                        <div className="space-y-4">
                            <ToggleRow
                                icon={Move}
                                label="Reduced Motion"
                                desc="Minimize UI transitions and animations"
                                checked={reducedMotion}
                                onCheckedChange={setReducedMotion}
                            />
                            <ToggleRow
                                icon={Eye}
                                label="High Contrast"
                                desc="Enhance visual separation for critical nodes"
                                checked={highContrast}
                                onCheckedChange={setHighContrast}
                            />
                            <ToggleRow
                                icon={Accessibility}
                                label="Dyslexic Friendly"
                                desc="Apply high-readability typography system"
                                checked={dyslexicFont}
                                onCheckedChange={setDyslexicFont}
                            />
                        </div>
                    </section>

                    <section className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2.5rem] space-y-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-1">Geospatial Sync</h2>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Regional and temporal localization</p>
                        </div>

                        <div className="space-y-6">
                            <PreferenceControl
                                icon={Languages}
                                label="Primary Language"
                                desc="Select operational interface dialect"
                            >
                                <Select value={language} onValueChange={setLanguage}>
                                    <SelectTrigger className="w-full h-12 bg-slate-950 border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-300">
                                        <SelectValue placeholder="Language" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                                        <SelectItem value="en-us" className="text-[10px] font-black uppercase tracking-widest">English (US)</SelectItem>
                                        <SelectItem value="en-gb" className="text-[10px] font-black uppercase tracking-widest">English (UK)</SelectItem>
                                        <SelectItem value="es" className="text-[10px] font-black uppercase tracking-widest">Español</SelectItem>
                                    </SelectContent>
                                </Select>
                            </PreferenceControl>

                            <PreferenceControl
                                icon={Clock}
                                label="Timezone Delta"
                                desc="Universal temporal synchronization"
                            >
                                <Select value={timezone} onValueChange={setTimezone}>
                                    <SelectTrigger className="w-full h-12 bg-slate-950 border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-300">
                                        <SelectValue placeholder="Timezone" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                                        <SelectItem value="utc" className="text-[10px] font-black uppercase tracking-widest">UTC / GMT</SelectItem>
                                        <SelectItem value="utc-5" className="text-[10px] font-black uppercase tracking-widest">EST (UTC-5)</SelectItem>
                                        <SelectItem value="utc-8" className="text-[10px] font-black uppercase tracking-widest">PST (UTC-8)</SelectItem>
                                        <SelectItem value="utc+5.5" className="text-[10px] font-black uppercase tracking-widest">IST (UTC+5.30)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </PreferenceControl>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function PreferenceControl({ icon: Icon, label, desc, children }: any) {
    return (
        <div className="space-y-4">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
                    <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                    <p className="text-[13px] font-black text-white uppercase tracking-tight">{label}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed tracking-tight">{desc}</p>
                </div>
            </div>
            {children}
        </div>
    );
}

function ThemeOption({ active, onClick, icon: Icon, label }: any) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex-1 flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300",
                active
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "text-slate-500 hover:text-slate-300 hover:bg-slate-900"
            )}
        >
            <Icon className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
        </button>
    );
}

function ToggleRow({ icon: Icon, label, desc, checked, onCheckedChange }: any) {
    return (
        <div className={cn(
            "p-5 rounded-[2rem] border transition-all duration-300 flex items-center justify-between gap-4",
            checked ? "bg-slate-800/40 border-slate-700/50" : "bg-slate-950/20 border-transparent"
        )}>
            <div className="flex gap-4 items-center">
                <div className={cn(
                    "p-2.5 rounded-xl transition-colors",
                    checked ? "bg-cyan-500/10 text-cyan-500" : "bg-slate-800 text-slate-600"
                )}>
                    <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                    <p className="text-xs font-black text-white uppercase tracking-tight">{label}</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase leading-tight tracking-tight">
                        {desc}
                    </p>
                </div>
            </div>
            <Switch checked={checked} onCheckedChange={onCheckedChange} />
        </div>
    );
}
