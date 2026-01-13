"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { cx } from "@/utils/cx";
import { motion } from "motion/react";
import Link from "next/link";

export const HomeHero = () => {
    return (
        <section className="relative min-h-[68vh] md:min-h-screen overflow-hidden">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="/perthSOC.mov"
                preload="auto"
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
            <div className="relative z-30 mx-auto flex min-h-[68vh] md:min-h-screen max-w-container items-center justify-center px-4 text-center md:px-8">
                <div className="relative flex w-full max-w-7xl flex-col items-center gap-6 md:gap-9">
                    
                    <motion.h1
                        initial={{ filter: "blur(6px)", opacity: 0, y: 12 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        className={cx("font-light tracking-tight leading-tight")}
                    >
                        <span
                            className={cx(
                                "block bg-gradient-to-b from-white/95 via-white/85 to-white/55 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] font-bold",
                                "text-[clamp(1.8rem,5.5vw,3.8rem)]",
                            )}
                        >
                            Cybersecurity Training for Every Stage — From Beginner to Specialist
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
                        className="mx-auto w-full max-w-3xl text-base text-white/80 md:text-xl"
                    >
                        PerthSOC Academy delivers structured, role-based cybersecurity learning for individuals and corporate teams. Build practical capability across application security, cloud security, offensive and defensive security, governance and risk, forensics, and AI security—supported by hands-on learning and measurable outcomes.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
                        className="mt-3 hidden sm:flex w-full max-w-4xl flex-wrap items-center justify-center gap-3"
                    >
                        <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/8">
                            Role-based learning paths aligned to real job functions
                        </span>
                        <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/8">
                            Practical skills via labs, scenarios, and projects
                        </span>
                        <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/8">
                            Coverage: AppSec, Cloud, GRC, DFIR, Ethical Hacking, SOC/IR, AI
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
                        className="flex flex-row flex-wrap items-center gap-3 justify-center"
                    >
                        <Link href="/programs">
                            <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight}>
                               Explore Programs
                            </ShineButton>
                        </Link>
                        <Button href="/programs/role-tracks" color="link-gray" className="rounded-full text-white/90 hover:text-white cursor-cta-trendy" size="lg">
                            Find My Best-Fit Path
                        </Button>
                        <Button href="/programs/corporate-training" color="link-gray" className="rounded-full text-white/90 hover:text-white cursor-cta-trendy" size="lg">
                            Request Corporate Training
                        </Button>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
