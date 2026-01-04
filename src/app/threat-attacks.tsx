"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { AlertCircle, MessageChatCircle, ZapFast, User01, ChartBreakoutSquare } from "@untitledui/icons";

const items = [
    {
        icon: AlertCircle,
        title: "Malware & Ransomware",
        body: "Malicious software designed to disrupt, encrypt, or steal data.",
    },
    {
        icon: MessageChatCircle,
        title: "Phishing & Credential Abuse",
        body: "Attempts to gain unauthorized access using social engineering.",
    },
    {
        icon: ZapFast,
        title: "Brute Force & Automated Attacks",
        body: "Repeated login attempts using bots and scripts.",
    },
    {
        icon: User01,
        title: "Insider & Privilege Misuse",
        body: "Abuse of legitimate access, intentional or accidental.",
    },
    {
        icon: ChartBreakoutSquare,
        title: "Command & Control Activity",
        body: "Infected systems communicating with attacker infrastructure.",
    },
];

export const ThreatAttacks = () => {
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
                            Common Attack Types
                        </span>
                    </div>
                    <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
                        Common types of threats SOC teams monitor
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="mt-12"
                >
                    <div className="flex gap-6 md:gap-6 md:overflow-x-auto md:scrollbar-hide md:py-2">
                        {items.map(({ icon, title, body }) => (
                            <div
                                key={title}
                                className="group relative flex min-w-[300px] max-w-[340px] flex-col rounded-xl bg-[#0B0D12] p-5 ring-1 ring-white/10 shadow-xl transition hover:ring-white/20 hover:shadow-2xl md:min-w-[320px] md:max-w-[360px] md:rounded-2xl md:p-6"
                            >
                                <div className="mb-2">
                                    <FeaturedIcon icon={icon} size="lg" color="brand" theme="light" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{title}</h3>
                                <p className="mt-2 text-white/70">{body}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};
