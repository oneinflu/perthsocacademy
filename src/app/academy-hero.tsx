"use client";
import { motion } from "motion/react";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const AcademyHero = () => {
    return (
        <section className="relative w-full bg-[#0A0D12] py-24 md:py-32">
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
                <div className="absolute inset-0 z-21 bg-black/65" />
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
            <div className="relative z-10 mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10">
                        <span className="flex items-center gap-2 rounded-full bg-[#0A0D12] px-3 py-1 text-md font-semibold text-white/90 ring-1 ring-white/10">
                            Perth SOC ACADEMY
                        </span>
                    </div>
                    <h1 className="mt-6 font-bold tracking-tight leading-tight">
                        <span className="block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.4rem,7vw,5rem)]">
                            Training for modern security operations and AI-driven systems
                        </span>
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-white/80 md:text-xl">
                        An advanced training institution focused on real-world SOC operations, agentic AI security, and governance.
                    </p>
                </div>
            </div>
        </section>
    );
};
