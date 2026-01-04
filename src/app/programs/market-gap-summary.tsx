"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const sections = [
    {
        title: "Agentic AI Threat Coverage",
        bullets: [
            "Limited visibility into autonomous agent actions and intent drift",
            "Sparse detections for tool-use, planning loops, and self-modification",
            "Weak correlation of agent logs with system and network telemetry",
        ],
    },
    {
        title: "Multi-Agent System Security",
        bullets: [
            "Insufficient guardrails for inter-agent messaging and role delegation",
            "No standard patterns for isolating compromised agents or tasks",
            "Minimal defenses against collusion, prompt injection, and agenda hijacking",
        ],
    },
    {
        title: "Agentic AI Application Security",
        bullets: [
            "Gaps in securing tool adapters, memory stores, and external APIs",
            "Under-tested policies for data exfiltration via chain-of-thought or tools",
            "Limited red-teaming of agent workflows and attack-path modeling",
        ],
    },
    {
        title: "Limited Hands-On Agentic Labs",
        bullets: [
            "Few realistic labs covering live agent operations and attack simulation",
            "Minimal evaluation frameworks for agent safety and resilience",
            "Scarce practice in incident response with agentic systems",
        ],
    },
    {
        title: "Governance & Compliance for Autonomous Systems",
        bullets: [
            "Immature controls for responsible deployment and auditability",
            "Unclear mapping of agentic risks to existing frameworks and standards",
            "Fragmented accountability models for autonomous decision-making",
        ],
    },
];

export const MarketGapSummary = () => {
    const wrapperRef = useRef<HTMLElement | null>(null);
    const sectionRefs = useRef<Array<HTMLElement | null>>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setSeen(true);
            },
            { threshold: 0.15 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        const ios = sectionRefs.current.map((ref, idx) => {
            if (!ref) return null;
            const io = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) setCurrentIndex(idx);
                },
                { threshold: 0.5 },
            );
            io.observe(ref);
            return io;
        });
        return () => ios.forEach((io) => io && io.disconnect());
    }, []);

    const progress = Math.round(((currentIndex + 1) / sections.length) * 100);

    return (
        <section ref={wrapperRef} className="relative w-full bg-[#0A0D12] py-16 md:py-24">
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background:
                            "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
                    }}
                />
                <div
                    className="absolute left-0 top-0 h-[55vh] w-[55vw] blur-3xl opacity-35"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 30%, rgba(158,119,237,0.28) 0%, rgba(127,86,217,0.14) 35%, rgba(127,86,217,0) 65%)",
                    }}
                />
                <div
                    className="absolute right-0 bottom-8 h-[55vh] w-[55vw] blur-3xl opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle at 70% 70%, rgba(127,86,217,0.24) 0%, rgba(105,65,198,0.12) 35%, rgba(105,65,198,0) 65%)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "80px 80px, 80px 80px",
                        backgroundPosition: "center",
                    }}
                />
            </div>

            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
                    <div className="md:col-span-1">
                        <div className="sticky top-28">
                            <div className="h-64 w-px bg-white/10">
                                <div
                                    className="w-px bg-brand-400 transition-all"
                                    style={{ height: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-11">
                        {sections.map((s, i) => (
                            <motion.section
                                key={s.title}
                                ref={(el) => {
                                    sectionRefs.current[i] = el;
                                }}
                                initial={{ opacity: 0, y: 14 }}
                                animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 + i * 0.04 }}
                                className="py-8 md:py-12"
                            >
                                <h3 className="text-2xl font-semibold text-white md:text-3xl">{s.title}</h3>
                                <ul className="mt-4 space-y-3 text-white/75">
                                    {s.bullets.map((b) => (
                                        <li key={b}>• {b}</li>
                                    ))}
                                </ul>
                                {i < sections.length - 1 && <div className="mt-8 h-px w-full bg-white/10" />}
                            </motion.section>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
