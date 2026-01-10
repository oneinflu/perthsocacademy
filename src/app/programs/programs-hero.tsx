"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight } from "@untitledui/icons";
import { useState } from "react";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { ZapFast, ChartBreakoutSquare, MessageChatCircle } from "@untitledui/icons";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const ProgramsHero = () => {
    const [audience, setAudience] = useState<"individuals" | "corporates">("individuals");

    const highlights =
        audience === "individuals"
            ? [
                  { icon: ChartBreakoutSquare, label: "Role-based learning paths" },
                  { icon: ZapFast, label: "Applied labs and assessments" },
                  { icon: MessageChatCircle, label: "Foundation → specialization clarity" },
              ]
            : [
                  { icon: ChartBreakoutSquare, label: "Secure engineering & AppSec uplift" },
                  { icon: ZapFast, label: "Cloud security & DevSecOps" },
                  { icon: MessageChatCircle, label: "Incident readiness & response maturity" },
              ];

    return (
        <section className="relative w-full bg-[#0A0D12] overflow-hidden py-24 md:py-36">
            <div className="pointer-events-none absolute inset-0 z-0">
                <video
                    className="absolute inset-0 h-full w-full object-cover z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/bg5.mp4"
                />
                <BackgroundPattern
                    pattern="grid"
                    size="lg"
                    className="absolute inset-0 z-10 w-full h-full text-white/15 opacity-25"
                    style={{ mixBlendMode: "soft-light" }}
                />
                <motion.div
                    className="absolute inset-0 z-20 opacity-95"
                    style={{
                        background:
                            "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.90) 100%)",
                    }}
                    initial={{ opacity: 0.95 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <div className="absolute inset-0 z-21 bg-black/60" />
                <motion.div
                    className="absolute left-0 top-0 z-15 h-[55vh] w-[55vw] blur-3xl opacity-35"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 30%, rgba(158,119,237,0.28) 0%, rgba(127,86,217,0.14) 35%, rgba(127,86,217,0) 65%)",
                    }}
                    animate={{ x: [0, 10, -6, 0], y: [0, -6, 8, 0] }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute right-0 bottom-8 z-15 h-[55vh] w-[55vw] blur-3xl opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle at 70% 70%, rgba(127,86,217,0.24) 0%, rgba(105,65,198,0.12) 35%, rgba(105,65,198,0) 65%)",
                    }}
                    animate={{ x: [0, -12, 8, 0], y: [0, 10, -6, 0] }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute bottom-0 left-0 z-20 h-24 w-full bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/70 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-container px-4 text-center md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                    className="inline-flex items-center justify-center rounded-full p-[1px] ring-1 ring-white/10"
                >
                    <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                        Programs Overview
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
                    className="mx-auto mt-6 max-w-6xl bg-gradient-to-b from-white/95 via-white/85 to-white/55 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl"
                >
                    Cybersecurity Programs Built Around Your Starting Point and Target Role
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
                    className="mx-auto mt-5 max-w-4xl text-lg text-white/85 md:text-xl"
                >
                    Cybersecurity is a broad discipline. Our program architecture is intentionally simple: start with the right
                    foundation, select a role-based pathway, and build capability through structured learning and applied practice.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.55 }}
                    className="mx-auto mt-6 inline-flex rounded-full bg-white/5 p-1 ring-1 ring-white/10 backdrop-blur-sm"
                >
                    <button
                        onClick={() => setAudience("individuals")}
                        className={[
                            "rounded-full px-4 py-2 text-sm transition",
                            audience === "individuals" ? "bg-white/10 text-white ring-1 ring-white/10" : "text-white/80 hover:text-white",
                        ].join(" ")}
                    >
                        Individuals
                    </button>
                    <button
                        onClick={() => setAudience("corporates")}
                        className={[
                            "rounded-full px-4 py-2 text-sm transition",
                            audience === "corporates" ? "bg-white/10 text-white ring-1 ring-white/10" : "text-white/80 hover:text-white",
                        ].join(" ")}
                    >
                        Corporates
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
                    className="mx-auto mt-6 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
                >
                    {highlights.map((h) => (
                        <div key={h.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <FeaturedIcon icon={h.icon} size="md" color="brand" theme="gradient" />
                            <div className="text-sm text-white/90">{h.label}</div>
                        </div>
                    ))}
                </motion.div>
               
            </div>
        </section>
    );
};
