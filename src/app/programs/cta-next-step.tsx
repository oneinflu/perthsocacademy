"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { cx } from "@/utils/cx";

const PURPLE = "rgba(127,86,217,0.9)";
const PURPLE_SOFT = "rgba(127,86,217,0.38)";

export const NextStepCTA = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [seen, setSeen] = useState(false);
    const [pulse, setPulse] = useState(false);
    const [stickyVisible, setStickyVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setSeen(true);
                    setTimeout(() => setPulse(true), 350);
                    setTimeout(() => setPulse(false), 1600);
                }
            },
            { threshold: 0.2 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
            const progress = window.scrollY / max;
            setStickyVisible(progress >= 0.6);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
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
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="mx-auto w-full max-w-container px-4 md:px-8">
                        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                            <div className="text-sm font-semibold text-brand-secondary">NEXT STEP</div>
                            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                                Ready to secure autonomous AI systems?
                            </h2>
                            <p className="mt-4 max-w-2xl text-white/75 md:text-lg">
                                Apply to join a specialized program designed to prepare professionals for securing agentic and multi-agent AI systems in real-world environments.
                            </p>
                            <div className="mt-8 flex items-center justify-center">
                                <div className="relative">
                                    <ShineButton
                                        className={cx(
                                            "rounded-full px-6 py-3 text-white",
                                            "bg-black/70 border border-white/12 hover:bg-black/75",
                                            "ring-1 ring-[rgba(127,86,217,0.45)] shadow-[0_0_16px_2px_rgba(127,86,217,0.30)]",
                                            pulse && "shadow-[0_0_26px_4px_rgba(127,86,217,0.45)]",
                                        )}
                                        size="xl"
                                    >
                                        Apply for CAASP
                                    </ShineButton>
                                    <span
                                        className="pointer-events-none absolute inset-0 rounded-full"
                                        style={{ boxShadow: `0 0 22px 2px ${PURPLE_SOFT}` }}
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/75">
                                <a className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 hover:bg-white/8" href="#">
                                    Download Program Brochure
                                </a>
                                <a className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 hover:bg-white/8" href="#">
                                    View Curriculum Overview
                                </a>
                                <a className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 hover:bg-white/8" href="#">
                                    Talk to an Advisor
                                </a>
                            </div>
                            <div className="mt-6 text-sm text-white/70">
                                <span className="mr-4">✔ Cohort-based learning</span>
                                <span className="mr-4">✔ Hands-on labs & capstone</span>
                                <span>✔ Industry-aligned certification</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
            <div
                className={cx(
                    "fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-container px-4 pb-4 md:hidden",
                    stickyVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                )}
            >
                <div className="rounded-2xl bg-[#0B0D12]/95 p-3 ring-1 ring-white/10 shadow-xl backdrop-blur">
                    <ShineButton
                        className={cx(
                            "w-full rounded-full px-6 py-3 text-white",
                            "bg-black/70 border border-white/12 hover:bg-black/75",
                            "ring-1 ring-[rgba(127,86,217,0.45)] shadow-[0_0_16px_2px_rgba(127,86,217,0.30)]",
                        )}
                        size="xl"
                    >
                        Apply for CAASP
                    </ShineButton>
                </div>
            </div>
        </>
    );
};

