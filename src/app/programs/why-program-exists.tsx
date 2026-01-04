"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({
    end,
    decimals = 1,
    prefix = "",
    suffix = "",
}: {
    end: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState(0);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setSeen(true);
            },
            { threshold: 0.35 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (!seen) return;
        let raf = 0;
        const start = performance.now();
        const duration = 1200;
        const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(end * eased);
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [seen, end]);

    return (
        <div ref={ref} className="flex items-baseline gap-2">
            <div className="text-[clamp(2.2rem,6vw,4.6rem)] font-semibold tracking-tight text-white">
                {prefix}
                {value.toFixed(decimals)}
                {suffix}
            </div>
        </div>
    );
};

export const WhyProgramExists = () => {
    const [seen, setSeen] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

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
        <section ref={ref} className="relative w-full bg-[#0A0D12] py-20 md:py-24">
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
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-8 max-w-4xl text-center md:mb-10"
                >
                    <h2 className="text-2xl font-semibold text-white md:text-3xl">
                        Critical industry shift driven by exponential AI growth
                    </h2>
                </motion.div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="group relative overflow-hidden rounded-2xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-xl md:p-8"
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
                                className="absolute -inset-x-8 bottom-0 h-20 bg-gradient-to-r from-[rgba(127,86,217,0.35)] via-[rgba(66,208,255,0.25)] to-[rgba(127,86,217,0.35)] blur-2xl"
                                initial={{ opacity: 0.3 }}
                                animate={seen ? { opacity: 0.55 } : { opacity: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        </div>
                        <div className="relative z-10">
                            <div className="text-[clamp(2.6rem,7vw,4.8rem)] font-semibold tracking-tight text-white">
                                <AnimatedNumber end={234.6} decimals={1} prefix="$" suffix="B" />
                            </div>
                            <div className="mt-3 text-sm text-white/75">AI cybersecurity market by 2032</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
                        className="group relative overflow-hidden rounded-2xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-xl md:p-8"
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
                                className="absolute -inset-x-8 bottom-0 h-20 bg-gradient-to-r from-[rgba(127,86,217,0.35)] via-[rgba(66,208,255,0.25)] to-[rgba(127,86,217,0.35)] blur-2xl"
                                initial={{ opacity: 0.3 }}
                                animate={seen ? { opacity: 0.55 } : { opacity: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        </div>
                        <div className="relative z-10">
                            <div className="text-[clamp(2.6rem,7vw,4.8rem)] font-semibold tracking-tight text-white">
                                <AnimatedNumber end={4.8} decimals={1} suffix="M" />
                            </div>
                            <div className="mt-3 text-sm text-white/75">Unfilled cyber roles worldwide</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
                        className="group relative overflow-hidden rounded-2xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-xl md:p-8"
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
                                className="absolute -inset-x-8 bottom-0 h-20 bg-gradient-to-r from-[rgba(127,86,217,0.35)] via-[rgba(66,208,255,0.25)] to-[rgba(127,86,217,0.35)] blur-2xl"
                                initial={{ opacity: 0.3 }}
                                animate={seen ? { opacity: 0.55 } : { opacity: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        </div>
                        <div className="relative z-10">
                            <div className="text-[clamp(2.6rem,7vw,4.8rem)] font-semibold tracking-tight text-white">
                                <AnimatedNumber end={70} decimals={0} suffix="%" />
                            </div>
                            <div className="mt-3 text-sm text-white/75">Unprepared for agentic AI threats</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
