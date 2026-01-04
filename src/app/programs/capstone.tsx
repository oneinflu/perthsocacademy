"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Check } from "@untitledui/icons";
import { cx } from "@/utils/cx";

type Scenario = {
    key: "finance" | "healthcare" | "enterprise" | "customer";
    name: string;
    accent: string;
    accentSoft: string;
    context: string;
    build: string[];
    break_: string[];
    secure: string[];
    image?: string;
};

const PURPLE = "rgba(127,86,217,0.9)";
const PURPLE_SOFT = "rgba(127,86,217,0.35)";

const scenarios: Scenario[] = [
    {
        key: "finance",
        name: "Finance",
        accent: PURPLE,
        accentSoft: PURPLE_SOFT,
        image: "/finance.png",
        context: "Autonomous AI agents supporting financial analysis and decision workflows.",
        build: ["Agentic workflows for financial data processing", "Tool integrations for analysis and reporting"],
        break_: ["Memory and RAG poisoning attacks", "Tool misuse and privilege escalation", "Cascading agent decision failures"],
        secure: ["Guardrails for financial decision autonomy", "Monitoring and incident response for agent actions"],
    },
    {
        key: "healthcare",
        name: "Healthcare",
        accent: PURPLE,
        accentSoft: PURPLE_SOFT,
        image: "/healthcare.png",
        context: "AI agents assisting clinical workflows and healthcare data access.",
        build: ["Agent-driven information retrieval and support workflows", "Data access pipelines for sensitive records"],
        break_: ["Prompt and memory manipulation risks", "Privacy leakage through autonomous actions"],
        secure: ["Strong access controls and isolation", "Compliance-aware agent behavior design"],
    },
    {
        key: "enterprise",
        name: "Enterprise AI",
        accent: PURPLE,
        accentSoft: PURPLE_SOFT,
        image: "/enterprise.png",
        context: "Internal AI agents used for enterprise search and knowledge automation.",
        build: ["Multi-agent systems for enterprise workflows", "Toolchains connected to internal systems"],
        break_: ["Inter-agent communication poisoning", "Agent impersonation and collusion"],
        secure: ["Governance and accountability models", "Detection of emergent behaviors"],
    },
    {
        key: "customer",
        name: "Customer Service AI",
        accent: PURPLE,
        accentSoft: PURPLE_SOFT,
        image: "/customer.png",
        context: "Customer-facing AI agents handling requests and actions autonomously.",
        build: ["Autonomous service agents with tool access", "Decision flows for customer interactions"],
        break_: ["Abuse of autonomous decision paths", "Goal and authorization hijacking"],
        secure: ["Safe autonomy boundaries", "Continuous monitoring and response mechanisms"],
    },
];

export const Capstone = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [seen, setSeen] = useState(false);
    const [active, setActive] = useState<Scenario>(scenarios[0]);

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
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                        <div className="text-sm font-semibold text-brand-secondary">CAPSTONE PROJECT</div>
                        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                            Design, attack, and secure an agentic AI system
                        </h2>
                        <p className="mt-4 max-w-2xl text-white/75">
                            Learners complete a full end-to-end security assessment of a real-world autonomous AI deployment.
                        </p>
                    </div>
                    <div className="mx-auto mt-8 max-w-5xl">
                        <div className="relative overflow-hidden rounded-xl bg-[#0B0D12] ring-1 ring-white/10 shadow-xl">
                            <div className="pointer-events-none absolute inset-0 rounded-xl" style={{ boxShadow: `0 0 14px 2px ${active.accentSoft}` }} />
                            <div className="flex items-center justify-center px-4 py-4">
                                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                                    {scenarios.map((s) => {
                                        const activeTab = s.key === active.key;
                                        return (
                                            <button
                                                key={s.key}
                                                onClick={() => setActive(s)}
                                                className={cx(
                                                    "relative rounded-full bg-black/60 text-white shadow-none ring-0 border border-white/12 px-4 py-2 text-sm font-semibold",
                                                    "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-1/3 after:-translate-x-1/2",
                                                    "after:bg-gradient-to-r after:from-white/0 after:via-white/70 after:to-white/0",
                                                    "after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full hover:after:translate-x-0",
                                                    activeTab
                                                        ? "shadow-[0_0_12px_1px_rgba(127,86,217,0.35)] ring-1 ring-[rgba(127,86,217,0.45)]"
                                                        : "text-white/75 hover:text-white/90",
                                                )}
                                            >
                                                {s.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
                                <motion.div
                                    key={`visual-${active.key}`}
                                    initial={{ opacity: 0, x: -14 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="relative min-h-[260px] overflow-hidden rounded-lg bg-[#0A0D12] ring-1 ring-white/10"
                                >
                                    <div className="pointer-events-none absolute inset-0 rounded-lg" style={{ boxShadow: `0 0 12px 1px ${active.accentSoft}` }} />
                                    {active.image ? (
                                        <img src={active.image} alt={`${active.name} visual`} className="absolute inset-0 h-full w-full object-cover" />
                                    ) : (
                                        <div className="absolute inset-0 p-5">
                                            <div className="grid h-full grid-cols-2 grid-rows-3 gap-3">
                                                <div
                                                    className="col-span-2 row-span-1 rounded-md ring-1 ring-white/10 bg-white/5"
                                                    style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.08)` }}
                                                >
                                                    <div className="px-3 py-2 text-sm font-semibold text-white">Agent</div>
                                                    <div className="px-3 pb-2 text-xs text-white/70">Autonomous decision logic</div>
                                                </div>
                                                <div
                                                    className="col-span-1 row-span-1 rounded-md ring-1 ring-white/10 bg-white/5"
                                                    style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.08)` }}
                                                >
                                                    <div className="px-3 py-2 text-sm font-semibold text-white">Tools / APIs</div>
                                                    <div className="px-3 pb-2 text-xs text-white/70">External actions</div>
                                                </div>
                                                <div
                                                    className="col-span-1 row-span-1 rounded-md ring-1 ring-white/10 bg-white/5"
                                                    style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.08)` }}
                                                >
                                                    <div className="px-3 py-2 text-sm font-semibold text-white">Data Sources</div>
                                                    <div className="px-3 pb-2 text-xs text-white/70">Internal & external</div>
                                                </div>
                                                <div
                                                    className="col-span-2 row-span-1 rounded-md ring-1 ring-white/10 bg-white/5"
                                                    style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.08)` }}
                                                >
                                                    <div className="px-3 py-2 text-sm font-semibold text-white">Users / Environment</div>
                                                    <div className="px-3 pb-2 text-xs text-white/70">Operational context</div>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/8" />
                                            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/8" />
                                        </div>
                                    )}
                                </motion.div>
                                <motion.div
                                    key={`details-${active.key}`}
                                    initial={{ opacity: 0, x: 14 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="relative overflow-hidden rounded-lg bg-[#0A0D12] ring-1 ring-white/10"
                                >
                                    <div className="pointer-events-none absolute inset-0 rounded-lg" style={{ boxShadow: `0 0 12px 1px ${active.accentSoft}` }} />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-lg"
                                        style={{
                                            backgroundImage:
                                                "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                                            backgroundSize: "3px 3px, 4px 4px",
                                            filter: "blur(1.2px)",
                                            opacity: 0.28,
                                        }}
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-lg"
                                        style={{
                                            background:
                                                "linear-gradient(180deg, rgba(127,86,217,0.10) 0%, rgba(127,86,217,0.04) 35%, rgba(127,86,217,0) 70%)",
                                        }}
                                    />
                                    <div className="relative p-5 md:p-6">
                                        <div className="text-sm font-semibold text-white/80">Scenario Context</div>
                                        <p className="mt-2 text-white/75">{active.context}</p>

                                        <div className="mt-5 text-sm font-semibold text-white/80">What You Will Build</div>
                                        <ul className="mt-2 space-y-2">
                                            {active.build.map((b) => (
                                                <li key={b} className="flex items-start gap-2 text-white/75">
                                                    <span
                                                        aria-hidden
                                                        className="mt-0.5 inline-flex size-4 items-center justify-center rounded-sm ring-1"
                                                        style={{
                                                            boxShadow: "0 0 12px 2px rgba(127,86,217,0.45)",
                                                            background: "rgba(127,86,217,0.18)",
                                                            borderColor: "rgba(127,86,217,0.45)",
                                                        }}
                                                    >
                                                        <Check className="size-3 text-white" />
                                                    </span>
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-5 text-sm font-semibold text-white/80">What You Will Break</div>
                                        <ul className="mt-2 space-y-2">
                                            {active.break_.map((b) => (
                                                <li key={b} className="flex items-start gap-2 text-white/75">
                                                    <span
                                                        aria-hidden
                                                        className="mt-0.5 inline-flex size-4 items-center justify-center rounded-sm ring-1"
                                                        style={{
                                                            boxShadow: "0 0 12px 2px rgba(127,86,217,0.45)",
                                                            background: "rgba(127,86,217,0.18)",
                                                            borderColor: "rgba(127,86,217,0.45)",
                                                        }}
                                                    >
                                                        <Check className="size-3 text-white" />
                                                    </span>
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-5 text-sm font-semibold text-white/80">What You Will Secure</div>
                                        <ul className="mt-2 space-y-2">
                                            {active.secure.map((b) => (
                                                <li key={b} className="flex items-start gap-2 text-white/75">
                                                    <span
                                                        aria-hidden
                                                        className="mt-0.5 inline-flex size-4 items-center justify-center rounded-sm ring-1"
                                                        style={{
                                                            boxShadow: "0 0 12px 2px rgba(127,86,217,0.45)",
                                                            background: "rgba(127,86,217,0.18)",
                                                            borderColor: "rgba(127,86,217,0.45)",
                                                        }}
                                                    >
                                                        <Check className="size-3 text-white" />
                                                    </span>
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mt-10 max-w-3xl text-center md:mt-12">
                        <p className="text-white/80">This capstone demonstrates real-world readiness for securing autonomous AI systems.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
