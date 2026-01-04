"use client";
import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";

type Step = {
    key: string;
    label: string;
    title: string;
    description: string;
    Visual: React.FC<{ active?: boolean }>;
};

const LLMVisual = ({ active }: { active?: boolean }) => {
    return (
        <div className="relative h-28 w-full">
            <div className="relative z-10 grid h-full grid-cols-3 items-center gap-3 px-2 md:gap-4 md:px-3">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: active ? 1 : 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-white/70">Prompt</span>
                        <div className="relative ml-2 h-4 w-20 rounded-sm bg-white/5 md:w-24" />
                    </div>
                    <motion.span
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-[2px] bg-white/80"
                        animate={active ? { opacity: [0, 1, 0] } : { opacity: 0 }}
                        transition={{ duration: 0.8, repeat: active ? Infinity : 0, repeatDelay: 2, ease: "easeInOut" }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0.6, scale: 0.98 }}
                    animate={{ opacity: active ? 1 : 0.6, scale: active ? 1 : 0.98 }}
                    transition={{ duration: 0.3, delay: active ? 0.05 : 0 }}
                    className="rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15"
                >
                    <div className="text-xs font-semibold text-white/80">LLM</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: active ? 0.5 : 0 }}
                    className="rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-white/80">Response</span>
                        <motion.span
                            className="ml-2 h-4 w-20 rounded-sm bg-white/5 md:w-24"
                            animate={active ? { opacity: [1, 0.85, 1] } : { opacity: 1 }}
                            transition={{ duration: 1.8, repeat: active ? Infinity : 0, repeatDelay: 2, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </div>

            <motion.svg viewBox="0 0 100 100" className="absolute inset-0 z-0 h-full w-full">
                <motion.path
                    d="M33 50 H50"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.path
                    d="M50 50 H67"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: active ? 0.5 : 0 }}
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="2.2"
                    fill="rgba(127,86,217,0.9)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: active ? 0.5 : 0 }}
                />
            </motion.svg>
        </div>
    );
};

const AgentVisual = ({ active }: { active?: boolean }) => {
    const [glowIndex, setGlowIndex] = useState(0);
    useEffect(() => {
        if (!active) return;
        const interval = setInterval(() => {
            setGlowIndex((i) => (i + 1) % 3);
        }, 2600);
        return () => clearInterval(interval);
    }, [active]);
    const brandGlow = "0 0 24px rgba(127,86,217,0.35)";
    return (
        <div className="relative h-32 w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
                className="absolute left-[22%] top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15"
            >
                <div className="text-xs font-medium text-white/75">Prompt</div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3, delay: active ? 0.15 : 0 }}
                className="absolute left-[50%] top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15"
            >
                <div className="text-xs font-semibold text-white/80">LLM Agent</div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3, delay: active ? 0.45 : 0 }}
                className="absolute left-[80%] top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15"
            >
                <div className="text-xs font-medium text-white/80">Response</div>
            </motion.div>
            <motion.svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                <motion.path
                    d="M30 42 H50"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.path
                    d="M50 42 H62"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: active ? 0.3 : 0 }}
                />
                <motion.path
                    d="M62 42 V50"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: active ? 0.45 : 0 }}
                />
                <motion.path
                    d="M62 50 H80"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: active ? 0.6 : 0 }}
                />
                <motion.path
                    d="M80 50 V42"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: active ? 0.75 : 0 }}
                />
                <motion.path
                    d="M50 44 V70"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: active ? 0.9 : 0 }}
                />
                <motion.path
                    d="M35 70 H85"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: active ? 1.1 : 0 }}
                />
                <motion.path
                    d="M40 70 V78"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: active ? 1.25 : 0 }}
                />
                <motion.path
                    d="M60 70 V78"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: active ? 1.35 : 0 }}
                />
                <motion.path
                    d="M80 70 V78"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: active ? 1.45 : 0 }}
                />
            </motion.svg>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3, delay: active ? 1.0 : 0 }}
                className="absolute left-[40%] top-[70%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15"
                style={{ boxShadow: active && glowIndex === 0 ? brandGlow : "none" }}
            >
                <div className="text-xs font-medium text-white/80">API</div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3, delay: active ? 1.15 : 0 }}
                className="absolute left-[60%] top-[70%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15"
                style={{ boxShadow: active && glowIndex === 1 ? brandGlow : "none" }}
            >
                <div className="text-xs font-medium text-white/80">Database</div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3, delay: active ? 1.3 : 0 }}
                className="absolute left-[80%] top-[70%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15"
                style={{ boxShadow: active && glowIndex === 2 ? brandGlow : "none" }}
            >
                <div className="text-xs font-medium text-white/80">Browser</div>
            </motion.div>
        </div>
    );
};

const MultiAgentVisual = ({ active }: { active?: boolean }) => {
    const nodes = useMemo(() => {
        return [
            { x: 20, y: 36 },
            { x: 80, y: 20 },
            { x: 140, y: 44 },
            { x: 200, y: 28 },
            { x: 260, y: 50 },
        ];
    }, []);
    return (
        <svg viewBox="0 0 300 90" className="w-full h-24">
            {nodes.map((n, i) => (
                <motion.circle
                    key={`n-${i}`}
                    cx={n.x}
                    cy={n.y}
                    r="5"
                    fill="rgba(255,255,255,0.75)"
                    animate={{ opacity: active ? [0.6, 1, 0.6] : 0.6 }}
                    transition={{ duration: 1.8, repeat: active ? Infinity : 0, ease: "easeInOut", delay: i * 0.1 }}
                />
            ))}
            {nodes.slice(0, -1).map((n, i) => {
                const n2 = nodes[i + 1];
                return (
                    <motion.line
                        key={`l-${i}`}
                        x1={n.x}
                        y1={n.y}
                        x2={n2.x}
                        y2={n2.y}
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="2"
                        animate={{ opacity: active ? [0.2, 0.55, 0.2] : 0.25 }}
                        transition={{ duration: 2.2, repeat: active ? Infinity : 0, ease: "easeInOut", delay: i * 0.15 }}
                    />
                );
            })}
        </svg>
    );
};

const AutonomyVisual = ({ active }: { active?: boolean }) => {
    return (
        <svg viewBox="0 0 300 90" className="w-full h-24">
            <motion.line
                x1="30"
                y1="45"
                x2="140"
                y2="45"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                animate={{ opacity: active ? [0.25, 0.6, 0.25] : 0.25 }}
                transition={{ duration: 1.8, repeat: active ? Infinity : 0, ease: "easeInOut" }}
            />
            <motion.line
                x1="140"
                y1="45"
                x2="220"
                y2="25"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                animate={{ opacity: active ? [0.25, 0.6, 0.25] : 0.25 }}
                transition={{ duration: 2.2, repeat: active ? Infinity : 0, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.line
                x1="140"
                y1="45"
                x2="220"
                y2="65"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                animate={{ opacity: active ? [0.25, 0.6, 0.25] : 0.25 }}
                transition={{ duration: 2.2, repeat: active ? Infinity : 0, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.circle
                cx="260"
                cy="25"
                r="5"
                fill="rgba(255,255,255,0.8)"
                animate={{ opacity: active ? [0.6, 1, 0.6] : 0.6 }}
                transition={{ duration: 1.8, repeat: active ? Infinity : 0, ease: "easeInOut" }}
            />
            <motion.circle
                cx="260"
                cy="65"
                r="5"
                fill="rgba(255,255,255,0.8)"
                animate={{ opacity: active ? [0.6, 1, 0.6] : 0.6 }}
                transition={{ duration: 1.8, repeat: active ? Infinity : 0, ease: "easeInOut", delay: 0.2 }}
            />
        </svg>
    );
};

const CascadingVisual = ({ active }: { active?: boolean }) => {
    return (
        <svg viewBox="0 0 300 90" className="w-full h-24">
            <motion.circle
                cx="40"
                cy="45"
                r="6"
                fill={active ? "rgba(255,82,82,0.9)" : "rgba(255,255,255,0.75)"}
                animate={active ? { r: [6, 7, 6], opacity: [1, 0.8, 1] } : {}}
                transition={{ duration: 1.6, repeat: active ? Infinity : 0, ease: "easeInOut" }}
            />
            <motion.line x1="46" y1="45" x2="110" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            <motion.line x1="46" y1="45" x2="110" y2="60" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            <motion.circle cx="120" cy="30" r="5" fill={active ? "rgba(255,120,120,0.8)" : "rgba(255,255,255,0.8)"} />
            <motion.circle cx="120" cy="60" r="5" fill={active ? "rgba(255,120,120,0.8)" : "rgba(255,255,255,0.8)"} />
            <motion.line x1="126" y1="30" x2="200" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            <motion.line x1="126" y1="60" x2="200" y2="60" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            <motion.circle cx="210" cy="30" r="5" fill={active ? "rgba(255,180,180,0.8)" : "rgba(255,255,255,0.8)"} />
            <motion.circle cx="210" cy="60" r="5" fill={active ? "rgba(255,180,180,0.8)" : "rgba(255,255,255,0.8)"} />
        </svg>
    );
};

const steps: Step[] = [
    {
        key: "llm",
        label: "FOUNDATION",
        title: "Large Language Models (LLMs)",
        description: "LLMs generate responses based on prompts but do not take actions or make independent decisions.",
        Visual: LLMVisual,
    },
    {
        key: "agents",
        label: "EVOLUTION",
        title: "AI Agents",
        description: "Agents can use tools, access data, and perform actions to achieve defined goals.",
        Visual: AgentVisual,
    },
    {
        key: "multi",
        label: "COMPLEXITY",
        title: "Multi-Agent Systems",
        description: "Multiple agents communicate, delegate tasks, and coordinate decisions across systems.",
        Visual: MultiAgentVisual,
    },
    {
        key: "autonomy",
        label: "AUTONOMY",
        title: "Autonomous Decision-Making",
        description: "Agents independently decide what actions to take without human approval at each step.",
        Visual: AutonomyVisual,
    },
    {
        key: "risk",
        label: "RISK",
        title: "Cascading Failures",
        description: "A single compromised agent can trigger unintended actions and failures across the entire system.",
        Visual: CascadingVisual,
    },
];

export const AgenticVisualStory = () => {
    const [active, setActive] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const StepCard = ({
        step,
        index,
        activeIndex,
    }: {
        step: Step;
        index: number;
        activeIndex: number;
    }) => {
        const isActive = activeIndex === index;
        return (
            <motion.div
                key={step.key}
                data-index={index}
                ref={(el) => {
                    cardsRef.current[index] = el;
                }}
                initial={false}
                animate={{
                    scale: isActive ? 1.02 : 1,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`group relative mr-4 min-w-[88%] snap-start overflow-hidden rounded-2xl bg-[#0B0D12] p-6 shadow-xl md:min-w-[560px] md:max-w-[600px] md:p-8 ${
                    isActive ? "ring-2 ring-white/20" : "ring-1 ring-white/10"
                }`}
            >
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                            backgroundSize: "80px 80px, 80px 80px",
                            backgroundPosition: "center",
                        }}
                    />
                    <motion.div
                        className="absolute left-0 bottom-0 h-[2px] w-1/2 bg-gradient-to-r from-[rgba(127,86,217,0.55)] via-[rgba(255,255,255,0.25)] to-transparent"
                        initial={{ opacity: 0.25 }}
                        animate={{ opacity: isActive ? 0.7 : 0.25 }}
                        transition={{ duration: 0.35 }}
                    />
                    <motion.div
                        className="absolute left-0 bottom-0 h-1/3 w-[2px] bg-gradient-to-t from-[rgba(127,86,217,0.55)] via-[rgba(255,255,255,0.25)] to-transparent"
                        initial={{ opacity: 0.25 }}
                        animate={{ opacity: isActive ? 0.7 : 0.25 }}
                        transition={{ duration: 0.35 }}
                    />
                </div>
                <div className="relative z-10">
                    <div className="text-[11px] font-semibold text-white/70 md:text-xs">{step.label}</div>
                    <div className="mt-2 text-2xl font-semibold text-white md:text-3xl">{step.title}</div>
                    <p className="mt-3 max-w-sm text-white/75">{step.description}</p>
                    <div className="mt-7 md:mt-8">
                        <step.Visual active={isActive} />
                    </div>
                </div>
            </motion.div>
        );
    };

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const idx = Number((entry.target as HTMLElement).dataset.index);
                    if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
                        setActive(idx);
                    }
                });
            },
            { root: el, threshold: [0.7] },
        );
        cardsRef.current.forEach((c) => c && io.observe(c));
        return () => io.disconnect();
    }, []);

    const scrollTo = (index: number) => {
        const el = containerRef.current;
        const card = cardsRef.current[index];
        if (!el || !card) return;
        const targetLeft = card.offsetLeft - el.clientWidth / 2 + card.clientWidth / 2;
        el.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
        setActive(index);
    };

    return (
        <section className="relative w-full bg-[#0A0D12] py-24 md:py-28">
            <div className="pointer-events-none absolute inset-0">
                <motion.div
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
                <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
                    <h2 className="text-2xl font-semibold text-white md:text-3xl">What makes Agentic AI different?</h2>
                </div>

                <div className="mb-6 flex items-center justify-center gap-4 text-xs font-semibold text-white/65 md:mb-8">
                    {steps.map((s, i) => (
                        <button
                            key={s.key}
                            onClick={() => scrollTo(i)}
                            aria-current={active === i ? "step" : undefined}
                            className={`relative rounded-md px-2.5 py-1.5 transition-colors ${
                                active === i ? "text-white bg-white/5 ring-1 ring-white/10" : "text-white/60"
                            }`}
                        >
                            {s.label}
                            <span
                                className={`absolute left-1/2 -bottom-1 h-px w-10 -translate-x-1/2 md:w-12 ${
                                    active === i ? "bg-gradient-to-r from-white/0 via-white/80 to-white/0" : "bg-white/10"
                                }`}
                            />
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <button
                        aria-label="Previous"
                        onClick={() => scrollTo(Math.max(0, active - 1))}
                        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#0B0D12] p-2.5 ring-1 ring-white/15 text-white shadow-md hover:bg-[#0B0D12]/90 md:left-3 md:p-3"
                    >
                        <ChevronLeft className="size-5" />
                    </button>
                    <button
                        aria-label="Next"
                        onClick={() => scrollTo(Math.min(steps.length - 1, active + 1))}
                        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#0B0D12] p-2.5 ring-1 ring-white/15 text-white shadow-md hover:bg-[#0B0D12]/90 md:right-3 md:p-3"
                    >
                        <ChevronRight className="size-5" />
                    </button>

                    <div
                        ref={containerRef}
                        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth px-2 pb-3 pt-2 md:px-4"
                    >
                        {steps.map((s, i) => (
                            <StepCard step={s} index={i} activeIndex={active} />
                        ))}
                    </div>
                </div>

                <div className="mx-auto mt-8 max-w-3xl text-center">
                    <p className="text-white/75">
                        Traditional AI security models stop here. Agentic AI security begins beyond this point.
                    </p>
                </div>
            </div>
        </section>
    );
};
