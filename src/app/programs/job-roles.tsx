"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const roles = [
    {
        title: "AI Security Engineer",
        description:
            "Designs and hardens agentic and AI-enabled systems. Builds guardrails for tool-use, memory, adapters, and external integrations.",
        skills: [
            "Secure tool adapters, API gateways, data stores",
            "Threat modeling for agent workflows and chain-of-actions",
            "Detection engineering for agentic behaviors and misuse",
        ],
    },
    {
        title: "Agentic AI Threat Analyst",
        description:
            "Monitors and investigates malicious or unsafe agent activity. Correlates agent logs with system and network telemetry.",
        skills: [
            "Alert triage for agent behavior anomalies",
            "Investigation of prompt injection, agenda hijack, collusion",
            "Telemetry correlation: agents, applications, infra",
        ],
    },
    {
        title: "AI Governance & Compliance Officer",
        description:
            "Implements policy, oversight, and auditability for autonomous systems. Maps risks to emerging frameworks and controls.",
        skills: [
            "Policy authoring for responsible agent deployment",
            "Control mapping to regulations and standards",
            "Risk assessment and audit trails for agent decisions",
        ],
    },
    {
        title: "AI Red Teamer",
        description:
            "Tests agentic systems against adversarial scenarios. Probes guardrails, data leakage paths, and tool-use abuse.",
        skills: [
            "Adversarial prompting and tool-use exploitation",
            "Attack-path modeling for multi-agent systems",
            "Safety evaluation design and reporting",
        ],
    },
    {
        title: "Cloud Security Architect (AI Specialization)",
        description:
            "Designs secure cloud reference architectures for agentic platforms. Balances compute, data access, and isolation.",
        skills: [
            "Reference architectures for LLM/agent platforms",
            "Identity, network segmentation, secret management",
            "Cost-performance-risk tradeoff analysis",
        ],
    },
];

export const JobRoles = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [seen, setSeen] = useState(false);

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

    return (
        <section ref={ref} className="relative w-full bg-[#0A0D12] py-16 md:py-24">
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
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-3xl font-semibold text-white md:text-4xl">High-Demand Job Roles</h2>
                    <div className="mt-10 space-y-10 md:space-y-12">
                        {roles.map((r, idx) => (
                            <motion.div
                                key={r.title}
                                initial={{ opacity: 0, y: 14 }}
                                animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.06 + idx * 0.04 }}
                            >
                                <h3 className="text-xl font-semibold text-white md:text-2xl">{r.title}</h3>
                                <div className="mt-3 h-px w-full bg-white/10" />
                                <div className="mt-4">
                                    <div className="text-sm font-semibold text-white/70">Description</div>
                                    <p className="mt-2 text-white/75">{r.description}</p>
                                </div>
                                <div className="mt-6">
                                    <div className="text-sm font-semibold text-white/70">Skills</div>
                                    <ul className="mt-2 space-y-2 text-white/75">
                                        {r.skills.map((s) => (
                                            <li key={s}>• {s}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
