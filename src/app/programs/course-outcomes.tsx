"use client";
import { motion } from "motion/react";
import { useRef, useState } from "react";

type Role = {
    title: string;
    badge: string;
    context: string;
    duties: string[];
    demand: string[];
    connection: string;
    image?: string;
};

const roles: Role[] = [
    {
        title: "Agentic AI Security Engineer",
        badge: "High‑impact",
        context: "Secures autonomous and goal-driven AI systems in production.",
        duties: ["Secure agent workflows, tools, and integrations", "Analyze and mitigate agentic attack vectors", "Design guardrails for autonomous behavior"],
        demand: ["Enterprises are rapidly adopting agentic AI systems", "Traditional AppSec and CloudSec roles lack agent-level coverage"],
        connection: "This role requires specialized agentic AI security skills.",
        image: "/ai1.png",
    },
    {
        title: "AI Red Teamer (Agentic Focus)",
        badge: "Offensive",
        context: "Actively tests and breaks AI systems to expose hidden risks.",
        duties: ["Simulate prompt, toolchain, and agent manipulation attacks", "Red team multi-agent workflows and decision paths", "Identify emergent and cascading failure risks"],
        demand: ["Organizations need offensive testing for autonomous AI", "Agentic failures are harder to detect through defensive tools alone"],
        connection: "This role requires specialized agentic AI security skills.",
        image: "/ai2.png",
    },
    {
        title: "AI Governance & Compliance Lead",
        badge: "Governance",
        context: "Ensures autonomous AI systems comply with global regulations.",
        duties: ["Design governance frameworks for agentic deployments", "Align AI systems with ISO 42001, NIST AI RMF, and EU AI Act", "Support audit readiness for high-risk AI use cases"],
        demand: ["Regulations are accelerating faster than AI governance maturity", "Autonomous AI introduces new accountability and risk challenges"],
        connection: "This role requires specialized agentic AI security skills.",
        image: "/ai3.png",
    },
];

export const CourseOutcomes = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <section className="relative w-full bg-[#0A0D12] py-20 md:py-24">
            <div className="pointer-events-none absolute inset-0">
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
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <span className="text-xs font-semibold text-brand-secondary">CAREER OUTCOMES</span>
                    <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Roles this program prepares you for</h2>
                    <p className="mt-3 text-white/75">These are emerging, high-impact roles shaped by autonomous and agentic AI systems.</p>
                </div>

                <div className="relative mt-10 md:mt-12">
                    <div
                        ref={containerRef}
                        className={`flex snap-x snap-mandatory overflow-x-auto scroll-smooth px-1 pb-3 pt-2 md:px-2 ${
                            activeIndex !== null ? "justify-center" : ""
                        }`}
                    >
                        <div className={`flex ${activeIndex !== null ? "w-full" : "w-full"} flex-col gap-6 md:${activeIndex !== null ? "w-full" : "w-auto"} md:flex-row md:gap-4`}>
                            {(activeIndex !== null ? [roles[activeIndex]] : roles).map((r) => {
                                const i = roles.indexOf(r);
                                const isActive = activeIndex === i;
                                return (
                                    <motion.div
                                        key={r.title}
                                        initial={{ opacity: 0, y: 10, scale: 0.99 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.06 + i * 0.05 }}
                                        onMouseEnter={() => setActiveIndex(i)}
                                        onMouseLeave={() => setActiveIndex((prev) => (prev === i ? null : prev))}
                                        onClick={() => setActiveIndex((prev) => (prev === i ? null : i))}
                                        className={`group relative ${isActive ? "mr-0 w-full min-w-full max-w-none" : "mr-3 min-w-[360px] max-w-[420px] snap-center"} overflow-hidden rounded-2xl bg-[#0B0D12] p-6 ring-1 shadow-xl md:p-8 ${
                                            isActive ? "ring-white/15 md:min-h-[520px]" : "ring-white/10 md:min-h-[220px]"
                                        }`}
                                    >
                                        <div className="pointer-events-none absolute inset-0">
                                            <motion.div
                                                className="absolute left-0 bottom-0 h-[2px] w-1/2 bg-gradient-to-r from-[rgba(127,86,217,0.55)] via-[rgba(255,255,255,0.18)] to-transparent"
                                                initial={{ opacity: 0.25 }}
                                            whileHover={{ opacity: 0.7 }}
                                            transition={{ duration: 0.25 }}
                                        />
                                        <motion.div
                                            className="absolute left-0 bottom-0 h-1/3 w-[2px] bg-gradient-to-t from-[rgba(127,86,217,0.55)] via-[rgba(255,255,255,0.18)] to-transparent"
                                            initial={{ opacity: 0.25 }}
                                            whileHover={{ opacity: 0.7 }}
                                            transition={{ duration: 0.25 }}
                                        />
                                    </div>
                                    <motion.div
                                        initial={false}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.25 }}
                                        className="relative z-10"
                                    >
                                        <div className="flex flex-col">
                                            <span className="inline-block w-fit rounded-full bg-[rgba(127,86,217,0.18)] px-2 py-0.5 text-[11px] font-semibold text-brand-secondary ring-1 ring-[rgba(127,86,217,0.35)]">
                                                {r.badge}
                                            </span>
                                            <div className="mt-2 text-xl font-semibold text-white md:text-2xl">{r.title}</div>
                                        </div>
                                        <p className="mt-2 text-white/70">{r.context}</p>
                                        <div className={isActive ? "mt-4 h-px w-full bg-white/10" : ""} />
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: isActive ? "auto" : 0,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-5 grid gap-8 md:grid-cols-2">
                                                <div>
                                                    <div className="text-xs font-semibold text-brand-secondary">What you’ll do</div>
                                                    <ul className="mt-2 space-y-1.5 text-white/80">
                                                        {r.duties.map((d) => (
                                                            <li key={d} className="font-normal">• {d}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="mt-6 text-xs font-semibold text-brand-secondary">Why demand is rising</div>
                                                    <ul className="mt-2 space-y-1.5 text-white/80">
                                                        {r.demand.map((d) => (
                                                            <li key={d} className="font-normal">• {d}</li>
                                                        ))}
                                                    </ul>
                                                    <p className="mt-6 text-white/60">{r.connection}</p>
                                                </div>
                                                <div className="flex w-full items-center justify-center">
                                                    {r.image ? (
                                                        <div className="relative w-full md:h-[360px] h-[220px] overflow-hidden rounded-lg">
                                                            <img
                                                                src={r.image}
                                                                alt={`${r.title} preview`}
                                                                className="absolute inset-0 h-full w-full object-cover"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="md:h-[360px] h-[220px] w-full rounded-lg border border-dashed border-white/15 bg-transparent" />
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center md:mt-12">
                    <p className="text-white/75">These roles require skills beyond traditional AI and cybersecurity training.</p>
                </div>
            </div>
        </section>
    );
};
