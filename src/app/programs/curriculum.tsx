"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Module = {
    title: string;
    description: string;
    coverage: string[];
};

const modules: Module[] = [
    {
        title: "Module 1 — Foundations of AI & Agentic Security",
        description:
            "This module establishes the technical and conceptual foundation required to understand agentic AI systems and their security implications.",
        coverage: [
            "Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and autonomous agents",
            "Agent architectures and core attack surfaces",
            "STRIDE-GPT methodology for AI threat modeling",
            "Introduction to MITRE ATLAS for adversarial AI techniques",
        ],
    },
    {
        title: "Module 2 — Agentic AI Threats & Attack Vectors",
        description: "This module focuses on real-world attack techniques targeting autonomous and goal-driven AI agents.",
        coverage: [
            "Memory poisoning in agentic systems",
            "Tool misuse and privilege escalation via agent actions",
            "Goal and authorization hijacking attacks",
            "Cascading failures across interconnected agents",
            "RAG poisoning and agentic AI supply chain attacks",
        ],
    },
    {
        title: "Module 3 — Multi-Agent Systems Security",
        description: "This module addresses security challenges unique to multi-agent and distributed AI ecosystems.",
        coverage: [
            "Inter-agent communication security and poisoning attacks",
            "Emergent behavioral vulnerabilities in multi-agent environments",
            "Agent impersonation, collusion, and coordinated malicious behavior",
            "Governance and accountability models for multi-agent systems",
        ],
    },
    {
        title: "Module 4 — AI Application & Integration Security",
        description: "This module covers securing real-world AI applications and agent integrations at scale.",
        coverage: [
            "API and tool integration security for agentic systems",
            "RAG pipeline security and exploitation techniques",
            "Agent sandboxing, isolation, and resource control mechanisms",
            "Privacy risks and autonomous data handling",
            "Incident response and forensic considerations for autonomous systems",
        ],
    },
    {
        title: "Module 5 — Governance, Compliance & Risk",
        description:
            "This module focuses on regulatory, governance, and risk frameworks for deploying autonomous AI systems responsibly.",
        coverage: [
            "ISO/IEC 42001 for agentic AI deployments",
            "NIST AI Risk Management Framework (AI RMF)",
            "EU AI Act implications for high-risk autonomous systems",
            "Governance design for autonomous workflows and decision-making",
        ],
    },
    {
        title: "Module 6 — Red Teaming Agentic AI",
        description: "This module provides offensive security techniques to evaluate and harden agentic AI systems.",
        coverage: [
            "Red team methodologies for AI and agentic systems",
            "Prompt and toolchain exploitation techniques",
            "Multi-agent red teaming scenarios",
            "Automated adversarial testing for agentic AI environments",
        ],
    },
];

export const Curriculum = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [seen, setSeen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setSeen(true);
            },
            { threshold: 0.2 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const progress = ((openIndex ?? -1) + 1) / modules.length;
    const progressPercent = Math.max(0, Math.min(100, Math.round(progress * 100)));

    return (
        <section ref={ref} id="curriculum" className="relative w-full bg-[#0A0D12] py-16 md:py-24">
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
                <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                    <span className="text-md font-semibold text-brand-secondary md:text-md">Curriculum Overview</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-white md:text-display-md">
                        Agentic AI Security Professional (CAASP)
                    </h2>
                    <p className="mt-4 text-lg text-white/75 md:text-xl">120-hour modular program</p>
                </div>

                <div className="mx-auto mt-12 max-w-5xl">
                    <div className="grid grid-cols-[28px_1fr] gap-5 md:grid-cols-[32px_1fr]">
                        <div className="relative">
                            <div className="sticky top-24 z-10 flex flex-col items-center">
                                <div className="rounded-full bg-[#0B0D12] px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                                    {progressPercent}%
                                </div>
                                <div className="mt-3 h-48 w-[6px] overflow-hidden rounded-full bg-white/12">
                                    <motion.div
                                        className="w-full rounded-full bg-gradient-to-b from-[rgba(127,86,217,0.85)] to-[rgba(127,86,217,0.35)]"
                                        initial={{ height: 0 }}
                                        animate={{ height: `${Math.round(192 * progress)}px` }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                    />
                                </div>
                                <div className="mt-2 text-[10px] font-semibold text-white/60 md:text-xs">
                                    {(openIndex ?? -1) + 1} / {modules.length}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 md:space-y-8">
                            {modules.map((m, idx) => {
                                const active = openIndex === idx;
                                const reached = (openIndex ?? -1) >= idx;
                                return (
                                    <motion.div
                                        key={m.title}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 + idx * 0.04 }}
                                        className="group grid grid-cols-[28px_1fr] items-start gap-4 md:grid-cols-[32px_1fr]"
                                    >
                                        <div className="relative">
                                            <div
                                                className={`absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 ${
                                                    idx === modules.length - 1 ? "bg-transparent" : "bg-white/10"
                                                }`}
                                            />
                                            <div
                                                className={`relative z-10 mx-auto size-2.5 rounded-full ring-2 ${
                                                    reached ? "bg-[rgba(127,86,217,0.9)] ring-[rgba(127,86,217,0.35)]" : "bg-white/30 ring-white/20"
                                                } md:size-3`}
                                            />
                                        </div>
                                        <div className={`rounded-xl bg-[#0B0D12] ring-1 shadow-xl ${active ? "ring-white/15" : "ring-white/10"}`}>
                                            <button
                                                onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
                                                className="flex w-full items-center justify-between px-6 py-5 md:px-8"
                                            >
                                                <h3 className="text-left text-xl font-semibold text-white md:text-2xl">{m.title}</h3>
                                                <motion.span
                                                    animate={{ rotate: active ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="ml-3 inline-block size-5 rounded-md text-white/70"
                                                >
                                                    ▼
                                                </motion.span>
                                            </button>
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: active ? "auto" : 0,
                                                    opacity: active ? 1 : 0,
                                                }}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 md:px-8 md:pb-8">
                                                    <div className="mt-2 h-px w-full bg-white/10" />
                                                    <p className="mt-4 text-white/75">{m.description}</p>
                                                    <div className="mt-6 text-sm font-semibold text-white/70">Coverage</div>
                                                    <ul className="mt-2 space-y-2 text-white/75">
                                                        {m.coverage.map((c) => (
                                                            <li key={c}>• {c}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
