"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const HomeStats = () => {
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
        <section ref={ref} className="relative w-full bg-primary overflow-hidden py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                        <div className="flex w-full flex-col items-start">
                            <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">120+</div>
                            <div className="mt-2 h-px w-full bg-white/20" />
                            <div className="mt-2 text-sm text-white/70">Hours of hands-on training</div>
                            <div className="mt-1 text-xs text-white/60">Real-world labs, simulations, and capstone projects</div>
                        </div>
                        <div className="flex w-full flex-col items-start">
                            <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">70%</div>
                            <div className="mt-2 h-px w-full bg-white/20" />
                            <div className="mt-2 text-sm text-white/70">Practical, lab-driven learning</div>
                            <div className="mt-1 text-xs text-white/60">Focused on doing, not theory</div>
                        </div>
                        <div className="flex w-full flex-col items-start">
                            <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Global</div>
                            <div className="mt-2 h-px w-full bg-white/20" />
                            <div className="mt-2 text-sm text-white/70">Threat & SOC context</div>
                            <div className="mt-1 text-xs text-white/60">Training aligned with real-world attack patterns</div>
                        </div>
                        <div className="flex w-full flex-col items-start">
                            <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Industry-aligned</div>
                            <div className="mt-2 h-px w-full bg-white/20" />
                            <div className="mt-2 text-sm text-white/70">Framework-based curriculum</div>
                            <div className="mt-1 text-xs text-white/60">ISO 42001 · NIST AI RMF · MITRE ATLAS</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
