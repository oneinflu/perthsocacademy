"use client";

import { AlertCircle, BarChart02, LifeBuoy01, Zap } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Card = {
    icon: React.FC<{ className?: string }>;
    title: string;
    body: string;
    link?: string;
};

const cards: Card[] = [
    {
        icon: LifeBuoy01,
        title: "Cyber attacks are constant, not occasional",
        body: "Organizations face continuous intrusion attempts, malware activity, and suspicious behavior every minute. Security today is about monitoring and response — not periodic checks.",
        link: "#",
    },
    {
        icon: Zap,
        title: "The global SOC skill gap is widening",
        body: "There is a growing shortage of analysts who can investigate alerts, validate incidents, and respond effectively. Demand for SOC-ready professionals continues to exceed supply.",
        link: "#",
    },
    {
        icon: AlertCircle,
        title: "Hands-on analysts are preferred over theory",
        body: "Employers prioritize candidates who can work with SIEM alerts, logs, and real incidents. Practical SOC experience matters more than certifications alone.",
        link: "#",
    },
    {
        icon: BarChart02,
        title: "Automation is rising — judgment still matters",
        body: "While tools and automation reduce noise, human analysts are required to interpret signals, make decisions, and respond accurately during active security incidents.",
        link: "#",
    },
];

export const HomeWhyNow = () => {
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
        <section ref={ref} className="w-full overflow-hidden py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:items-start">
                    {/* Left intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="md:col-span-5"
                    >
                        <div className="flex items-center md:items-start gap-6">
                           
                            <div className="flex flex-col">
                                 <div className="flex size-12 items-center justify-center rounded-full mb-2 bg-brand-500/15 ring-1 ring-brand-500/25 self-center md:self-start">
                                <Zap className="size-6 text-brand-400" />
                            </div>
                                <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10 w-max">
                                    <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-md font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm self-center md:self-start">
                                        TIMING MATTERS
                                    </span>
                                </div>
                                <h2 className={cx("mt-4 text-3xl font-semibold text-white md:text-4xl text-center md:text-left")}>
                                    Why SOC skills are critical right now
                                </h2>
                                <p className="mt-4 max-w-md text-lg text-white/75 text-center md:text-left">
                                   Cyber threats are no longer occasional events. Security operations now run continuously, and the expectations from SOC analysts are changing faster than ever.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="md:col-span-7"
                    >
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-center md:justify-items-start">
                            {cards.map((c, i) => {
                                const Icon = c.icon;
                                return (
                                    <motion.div
                                        key={c.title}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 * i }}
                                        className="rounded-xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-xl"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-9 items-center justify-center rounded-md bg-brand-500/15 ring-1 ring-brand-500/25">
                                                <Icon className="size-5 text-brand-400" />
                                            </div>
                                            
                                            <div className="text-lg font-semibold text-white">{c.title}</div>
                                        </div>
                                        <div className="mt-2 text-white/70">{c.body}</div>
                                        
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
