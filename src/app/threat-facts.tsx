"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ZapFast, ChartBreakoutSquare, AlertCircle } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const ThreatFacts = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setSeen(true);
            },
            { threshold: 0.25 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative w-full bg-[#0A0D12] overflow-hidden py-16 md:py-24"
        >
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
                    className="absolute inset-0 opacity-20"
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10">
                        <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-md font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                            Modern Threats
                        </span>
                    </div>
                    <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
                        Modern cyber threats are persistent, not occasional
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 text-center md:grid-cols-3"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={seen ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-4">
                            <FeaturedIcon icon={ZapFast} size="lg" color="brand" theme="light" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Attacks are continuous</h3>
                        <p className="mt-2 max-w-xs text-white/70">Threat activity runs at all hours — not isolated events.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-4">
                            <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="brand" theme="light" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Automated and repeated</h3>
                        <p className="mt-2 max-w-xs text-white/70">Most threats are scripted and will try again and again.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={seen ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-4">
                            <FeaturedIcon icon={AlertCircle} size="lg" color="brand" theme="light" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Missed alerts cause damage</h3>
                        <p className="mt-2 max-w-xs text-white/70">The risk rises when signals are ignored or lost.</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};
