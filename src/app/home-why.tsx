"use client";

import { Zap, SearchLg, AlertCircle } from "@untitledui/icons";
import { motion } from "motion/react";
import { cx } from "@/utils/cx";
import { useEffect, useRef, useState } from "react";

export const HomeWhy = () => {
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
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full overflow-hidden py-16 md:py-24"
        >
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10">
                        <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-md font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                            SOC Academy
                        </span>
                    </div>
                    <h2 className={cx("mt-6 text-3xl font-semibold text-white md:text-4xl")}>
                        Built for real security operations — not theory.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
                        SOC Academy is a hands-on training environment where learners operate like real SOC analysts using live tools, incidents,
                        and workflows.
                    </p>
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
                        <div className="mb-4 size-10 rounded-xl bg-brand-500/15 ring-1 ring-brand-500/25 flex items-center justify-center">
                            <Zap className="size-5 text-brand-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Operate</h3>
                        <p className="mt-2 max-w-xs text-white/70">Work inside simulated SOC environments, not slides.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-4 size-10 rounded-xl bg-brand-500/15 ring-1 ring-brand-500/25 flex items-center justify-center">
                            <SearchLg className="size-5 text-brand-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Investigate</h3>
                        <p className="mt-2 max-w-xs text-white/70">Analyze real-world incidents, alerts, and attack patterns.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={seen ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-4 size-10 rounded-xl bg-brand-500/15 ring-1 ring-brand-500/25 flex items-center justify-center">
                            <AlertCircle className="size-5 text-brand-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Respond</h3>
                        <p className="mt-2 max-w-xs text-white/70">Practice response playbooks the way SOC teams do.</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};
