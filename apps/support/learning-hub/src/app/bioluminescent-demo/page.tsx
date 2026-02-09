'use client';

import { BioluminescentGrid, BioluminescentGridItem } from '@learnops/ui';
import { BrainCircuit, DatabaseZap, Share2, ShieldCheck, Zap, Code } from 'lucide-react';

export default function DemoOne() {
    const features = [
        {
            Icon: BrainCircuit,
            title: "Neural Synapse Mapping",
            description: "Visualize and interact with complex data relationships in real-time, just like a neural network.",
            className: "col-span-2 row-span-2",
        },
        {
            Icon: DatabaseZap,
            title: "Bio-Data Streams",
            description: "Connect to live data feeds with our high-throughput, low-latency streaming infrastructure.",
            className: "",
        },
        {
            Icon: ShieldCheck,
            title: "Quantum Encryption",
            description: "Secure your information with next-generation, quantum-resistant security protocols.",
            className: "",
        },
        {
            Icon: Share2,
            title: "Decentralized Network",
            description: "Built on a peer-to-peer network, ensuring uptime and data sovereignty.",
            className: "row-span-2",
        },
        {
            Icon: Code,
            title: "Evolvable API",
            description: "An API that learns and adapts to your query patterns, optimizing performance automatically.",
            className: "col-span-2",
        },
        {
            Icon: Zap,
            title: "Instant Scaling",
            description: "Our infrastructure scales from zero to infinity in milliseconds, handling any workload.",
            className: "",
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] p-8 flex items-center justify-center">
            <div className="w-full max-w-6xl">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--glow-color-1)] to-[var(--glow-color-2)]">
                    Bioluminescent Grid
                </h1>
                <p className="text-[var(--muted-text-color)] text-xl mb-12 max-w-2xl">
                    A reactive grid with a futuristic, organic glow effect. Hover over the cards to see the bioluminescent interaction.
                </p>

                <BioluminescentGrid className="">
                    {features.map((feature, i) => (
                        <BioluminescentGridItem key={i} className={feature.className}>
                            <div className="bg-[var(--glow-color-1)]/10 p-3 rounded-full w-fit mb-4">
                                <feature.Icon className="w-6 h-6 text-[var(--glow-color-1)]" />
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-[var(--text-color)]">{feature.title}</h2>
                            <p className="text-[var(--muted-text-color)] leading-relaxed">{feature.description}</p>
                        </BioluminescentGridItem>
                    ))}
                </BioluminescentGrid>
            </div>
        </div>
    );
}
