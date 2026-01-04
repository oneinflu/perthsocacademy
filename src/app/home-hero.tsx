"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { cx } from "@/utils/cx";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const formatCompact = (n: number) => {
    if (n >= 1_000_000) return `${Math.round(n / 1_000_000)}M`;
    if (n >= 1_000) return `${Math.round(n / 1_000)}k`;
    return `${Math.round(n)}`;
};

const Stat = ({ end, label, suffix }: { end: number; label: string; suffix?: string }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState(0);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        if (!ref.current || seen) return;
        const el = ref.current;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setSeen(true);
                }
            },
            { threshold: 0.4 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [seen]);

    useEffect(() => {
        if (!seen) return;
        let raf = 0;
        const start = performance.now();
        const duration = 1000;
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
        <div ref={ref} className="flex w-full flex-col items-start">
            <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {formatCompact(value)}
                {suffix || ""}
            </div>
            <motion.div
                initial={{ width: 0, opacity: 0.6 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-2 h-px w-full bg-white/20"
            />
            <div className="mt-2 text-sm text-white/60">{label}</div>
        </div>
    );
};

export const HomeHero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="./perthSOC.mov"
            />
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 z-10"
                style={{
                    background: "linear-gradient(to bottom, rgba(10, 13, 18, 0.51), rgba(10, 13, 18, 0.39))",
                }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.04 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: "radial-gradient(rgba(0,210,255,0.05) 0.5px, transparent 0.6px)",
                    backgroundSize: "3px 3px",
                }}
            />
            <motion.div
                className="absolute left-0 top-6 z-[12] h-[50vh] w-[50vw] blur-3xl opacity-25"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(158,119,237,0.28) 0%, rgba(127,86,217,0.14) 35%, rgba(127,86,217,0) 65%)",
                }}
                animate={{ x: [0, 10, -6, 0], y: [0, -6, 8, 0] }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute right-0 bottom-6 z-[12] h-[55vh] w-[55vw] blur-3xl opacity-25"
                style={{
                    background:
                        "radial-gradient(circle at 70% 70%, rgba(127,86,217,0.24) 0%, rgba(105,65,198,0.12) 35%, rgba(105,65,198,0) 65%)",
                }}
                animate={{ x: [0, -12, 8, 0], y: [0, 10, -6, 0] }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="absolute inset-x-0 bottom-0 z-[25] pointer-events-none"
                style={{
                    height: "28vh",
                    background: "linear-gradient(to bottom, rgba(10,13,18,0), rgba(10,13,18,1))",
                }}
            />
            <div className="relative z-30 mx-auto flex min-h-screen max-w-container items-center justify-start px-4 text-left md:px-8">
                <div className="relative flex w-full max-w-7xl flex-col items-start gap-9">
                    <motion.div
                        initial={{ opacity: 0, y: 6, letterSpacing: 2 }}
                        animate={{ opacity: 1, y: 0, letterSpacing: 0.5 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
                        className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10"
                    >
                        <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-md font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                            SOC Academy
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ filter: "blur(6px)", opacity: 0, y: 12 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        className={cx("font-light tracking-tight leading-tight")}
                    >
                        <span
                            className={cx(
                                "block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] font-bold",
                                "text-[clamp(2.8rem,8vw,6.5rem)]",
                            )}
                        >
                            Train Like a Real
                        </span>
                        <span
                            className={cx(
                                "block italic bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]",
                                "text-[clamp(2.6rem,7.5vw,6rem)]",
                            )}
                        >
                            SOC Analyst
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
                        className="max-w-2xl text-lg text-white/70 md:text-xl"
                    >
                        Hands-on security operations training built on real tools, real incidents, and real SOC workflows.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
                        className="flex flex-row items-center gap-3 justify-center"
                    >
                        <Link href="/programs/ai-cyber-security-training-program/">
                            <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="xl" iconTrailing={ArrowRight}>
                               View Program
                            </ShineButton>
                        </Link>
                        <Button color="link-gray" className="rounded-full text-white/90 hover:text-white cursor-cta-trendy" size="xl">
                            About Academy
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
                        className="mt-10 w-full"
                    >
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
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
            </div>
        </section>
    );
};
