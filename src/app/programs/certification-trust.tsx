"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const CertificationTrust = () => {
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
        <section ref={ref} className="relative w-full bg-[#0A0D12] py-14 md:py-20">
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
                    className="mx-auto flex max-w-4xl flex-col items-center text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(127,86,217,0.18)] px-4 py-2 text-sm font-semibold text-brand-secondary ring-1 ring-[rgba(127,86,217,0.35)]">
                        <span>CAASP Certification</span>
                        <span className="h-1 w-1 rounded-full bg-brand-secondary/70" />
                        <span>Trust & Alignment</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">Certification & Trust</h2>
                    <div className="mt-6 w-full">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">
                                24 CPE credits
                            </span>
                            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">
                                ISO 42001 aligned
                            </span>
                            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">
                                NIST AI RMF aligned
                            </span>
                            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">
                                EU AI Act aligned
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

