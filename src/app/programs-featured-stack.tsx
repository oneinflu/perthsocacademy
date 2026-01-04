"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

type ProgramCard = {
    title: string;
    subtitle: string;
    href: string;
    featured?: boolean;
};

const programs: ProgramCard[] = [
    {
        title: "Agentic AI Security Professional (CAASP)",
        subtitle: "Featured Program",
        href: "/programs/ai-cyber-security-training-program",
        featured: true,
    },
    {
        title: "SOC Analyst Pathway",
        subtitle: "Telemetry, SIEM, EDR, incident workflows",
        href: "/programs/ai-cyber-security-training-program",
    },
    {
        title: "Autonomous Systems Defense",
        subtitle: "Agent safety, containment, monitoring",
        href: "/programs/ai-cyber-security-training-program",
    },
];

export const ProgramsFeaturedStack = () => {
    const [hovered, setHovered] = useState(false);
    const stack = useMemo(() => programs.slice(0, 3), []);

    return (
        <section className="relative w-full bg-base-near-black">
            <BackgroundPattern pattern="grid" size="lg" className="pointer-events-none absolute inset-0 w-full h-full text-white/15 opacity-15" />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
                }}
            />
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="text-md font-semibold text-brand-secondary">Programs</div>
                    <h2 className="mt-3 text-display-sm font-semibold text-white md:text-display-md">Featured Card Stack</h2>
                    <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-60" />
                </div>

                <div
                    className="relative mx-auto mt-12 flex w-full max-w-3xl items-center justify-center"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onTouchStart={() => setHovered(true)}
                    onTouchEnd={() => setHovered(false)}
                >
                    <div className="relative h-[360px] md:h-[420px] w-full">
                        {stack.map((card, i) => {
                            const z = stack.length - i;
                            const baseTranslateY = i === 0 ? -6 : i === 1 ? 0 : 6;
                            const baseRotate = 0;
                            const fanRotate = i === 0 ? 0 : i === 1 ? -4 : 4;
                            const fanTranslateX = i === 0 ? 0 : i === 1 ? -24 : 24;
                            const fanTranslateY = i === 0 ? -10 : i === 1 ? -2 : 8;
                            const isTop = i === 0;

                            return (
                                <motion.div
                                    key={card.title}
                                    initial={false}
                                    animate={{
                                        rotate: hovered ? fanRotate : baseRotate,
                                        x: hovered ? fanTranslateX : 0,
                                        y: hovered ? fanTranslateY : baseTranslateY,
                                        scale: isTop ? (hovered ? 1.02 : 1.01) : 1,
                                    }}
                                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                                    className="absolute inset-0 mx-auto w-full"
                                    style={{ zIndex: z }}
                                >
                                    <div
                                        className="relative h-full rounded-2xl bg-[#0B0F14]/70 p-8 ring-1 ring-white/10 backdrop-blur-md"
                                        style={{
                                            boxShadow:
                                                isTop && hovered
                                                    ? "0 0 0 0.75px rgba(127,86,217,0.45), 0 30px 80px rgba(0,0,0,0.45), 0 0 80px rgba(68,76,231,0.20)"
                                                    : "0 0 0 0.5px rgba(127,86,217,0.30), 0 24px 60px rgba(0,0,0,0.35), 0 0 48px rgba(68,76,231,0.12)",
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 rounded-2xl -z-[1]"
                                            style={{
                                                background: isTop
                                                    ? "radial-gradient(800px circle at 16% 10%, rgba(139,92,246,0.18), transparent 42%)"
                                                    : "radial-gradient(660px circle at 12% 8%, rgba(139,92,246,0.12), transparent 38%)",
                                                opacity: hovered && isTop ? 0.9 : 0.65,
                                            }}
                                        />
                                        <div className="flex h-full items-center justify-between gap-4 md:gap-6">
                                            <div className="min-w-0">
                                                <div className="text-xs md:text-sm font-semibold text-brand-secondary">{card.subtitle}</div>
                                                <div className="mt-1 text-xl md:text-3xl font-semibold text-white">{card.title}</div>
                                                <div className="mt-3 text-white/75 text-sm md:text-base">
                                                    {card.featured
                                                        ? "Hands-on SOC training with agentic workflows, standards-driven practices, and readiness validation."
                                                        : "Cohort-based training aligned to real-world SOC workflows and autonomous system defense."}
                                                </div>
                                            </div>
                                            <div className="shrink-0">
                                                <div
                                                    className="h-[100px] w-[160px] md:h-[120px] md:w-[180px] rounded-xl ring-1 ring-white/10"
                                                    style={{
                                                        background:
                                                            "conic-gradient(from 180deg at 50% 50%, rgba(127,86,217,0.12), rgba(68,76,231,0.12))",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        {isTop && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                                className="pointer-events-auto absolute bottom-6 right-6"
                                            >
                                                <Link
                                                    href={card.href}
                                                    className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-white"
                                                >
                                                    Explore Program →
                                                </Link>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
