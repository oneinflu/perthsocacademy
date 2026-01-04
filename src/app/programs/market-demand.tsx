"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const bullets = [
    "Global demand for agentic AI security talent continues to rise",
    "Enterprises are piloting multi-agent systems across functions",
    "Security budgets for AI risk and tooling are expanding",
    "Skills gap persists; hands-on experience is valued over theory",
    "Regulatory pressure grows with AI-specific controls emerging",
];

export const MarketDemand = () => {
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
                <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -14 }}
                        animate={seen ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="md:col-span-6"
                    >
                        <h2 className="text-3xl font-semibold text-white md:text-4xl">Market Demand & Global Trends</h2>
                        <ul className="mt-5 space-y-3 text-white/75">
                            {bullets.map((b) => (
                                <li key={b}>• {b}</li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 14 }}
                        animate={seen ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
                        className="md:col-span-6"
                    >
                        <div className="relative rounded-xl md:rounded-2xl bg-[#0B0D12] ring-1 ring-white/10 shadow-2xl overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                                    backgroundSize: "80px 80px, 80px 80px",
                                    backgroundPosition: "center",
                                }}
                            />
                            <div
                                className="absolute left-1/3 top-1/4 h-[40vh] w-[40vw] blur-3xl opacity-25"
                                style={{
                                    background:
                                        "radial-gradient(circle at 30% 30%, rgba(158,119,237,0.18) 0%, rgba(127,86,217,0.08) 40%, rgba(127,86,217,0) 70%)",
                                }}
                            />
                            <div className="relative z-10 flex w-full flex-col gap-5 p-6 md:p-8">
                                <div className="flex items-baseline justify-between">
                                    <div className="text-white/80">Open roles (global)</div>
                                    <div className="text-2xl font-semibold text-white">35k+</div>
                                </div>
                                <div className="h-px w-full bg-white/10" />
                                <div className="flex items-baseline justify-between">
                                    <div className="text-white/80">Security AI budget growth</div>
                                    <div className="text-2xl font-semibold text-white">18–25% YoY</div>
                                </div>
                                <div className="h-px w-full bg-white/10" />
                                <div className="flex items-baseline justify-between">
                                    <div className="text-white/80">Agentic pilots (large enterprises)</div>
                                    <div className="text-2xl font-semibold text-white">~60%</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
