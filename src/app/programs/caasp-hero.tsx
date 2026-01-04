"use client";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Stars02, FileCode01, BarChart02, ArrowRight } from "@untitledui/icons";
import { Dialog, DialogTrigger, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Input } from "@/components/base/input/input";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const CAASPHero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY || 0);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative w-full bg-[#0A0D12] py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 z-0">
                <video
                    className="absolute inset-0 h-full w-full object-cover z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/bg4.mp4"
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
            <div className="relative z-30 mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
                    <h1 className="font-bold tracking-tight leading-tight">
                        <span className="block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.6rem,7vw,5.6rem)]">
                            Agentic AI Security Professional (CAASP)
                        </span>
                    </h1>
                    <p className="max-w-3xl text-lg text-white/80 md:text-xl">
                        Secure autonomous and multi-agent AI systems before they become the next breach.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                        <motion.span
                            className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                            animate={{ y: [0, -2, 1, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Agentic AI
                        </motion.span>
                        <motion.span
                            className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                            animate={{ y: [0, 2, -1, 0] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Multi-Agent
                        </motion.span>
                        <motion.span
                            className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                            animate={{ y: [0, -1, 2, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Red Teaming
                        </motion.span>
                    </div>
                    <div className="mt-8 flex w-full items-center justify-center">
                        <div className="flex items-center gap-6 md:gap-8">
                            <div className="flex items-center gap-2 text-white/85">
                                <FileCode01 className="size-5 text-white/85" />
                                <span className="text-sm">ISO 42001</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/85">
                                <Stars02 className="size-5 text-white/85" />
                                <span className="text-sm">MITRE ATLAS</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/85">
                                <BarChart02 className="size-5 text-white/85" />
                                <span className="text-sm">NIST AI RMF</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/85">
                                <span className="text-sm">120 Hours · Hands-on</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex w-full items-center justify-center">
                <DialogTrigger>
                    <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="xl" iconTrailing={ArrowRight}>
                        Enroll Now
                    </ShineButton>
                    <ModalOverlay className="!items-center !justify-center">
                        {({ state }) => (
                            <Modal className="w-full flex items-center justify-center cursor-auto will-change-transform">
                                <Dialog className="w-[min(90vw,28rem)] max-w-md rounded-2xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-2xl">
                                    <div className="flex w-full flex-col items-center text-center">
                                        <h3 className="font-bold tracking-tight leading-tight">
                                            <span className="block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(1.4rem,4.2vw,2rem)]">
                                                Apply for CAASP
                                            </span>
                                        </h3>
                                        <p className="mt-1 text-sm text-white/70">Fill in your details to submit your application.</p>
                                        <form
                                            className="mt-5 w-full flex flex-col gap-3 text-left"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                (e.currentTarget as HTMLFormElement).reset();
                                                state.close();
                                                const thanks = document.getElementById("thanks-confetti");
                                                if (thanks) thanks.click();
                                            }}
                                        >
                                            <Input label="Full Name" name="name" placeholder="Jane Doe" />
                                            <Input label="Email" name="email" type="email" placeholder="jane@company.com" />
                                            <Input label="Phone" name="phone" placeholder="+1 404 555 0123" />
                                            <Input label="City" name="city" placeholder="Perth" />
                                            <div className="mt-4 flex items-center justify-end gap-2">
                                                <ShineButton color="secondary" size="lg" onClick={() => state.close()}>
                                                    Cancel
                                                </ShineButton>
                                                <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight} type="submit">
                                                    Submit
                                                </ShineButton>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog>
                            </Modal>
                        )}
                    </ModalOverlay>
                </DialogTrigger>
            </div>
            <motion.div
                className="fixed bottom-6 right-6 z-[60]"
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollY > 100 ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                <DialogTrigger>
                    <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight}>
                        Apply Now
                    </ShineButton>
                    <ModalOverlay className="!items-center !justify-center">
                        {({ state }) => (
                            <Modal className="w-full flex items-center justify-center cursor-auto will-change-transform">
                                <Dialog className="w-[min(90vw,28rem)] max-w-md rounded-2xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-2xl">
                                    <div className="flex w-full flex-col items-center text-center">
                                        <h3 className="font-bold tracking-tight leading-tight">
                                            <span className="block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(1.4rem,4.2vw,2rem)]">
                                                Apply for CAASP
                                            </span>
                                        </h3>
                                        <p className="mt-1 text-sm text-white/70">Fill in your details to submit your application.</p>
                                        <form
                                            className="mt-5 w-full flex flex-col gap-3 text-left"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                (e.currentTarget as HTMLFormElement).reset();
                                                state.close();
                                                const thanks = document.getElementById("thanks-confetti");
                                                if (thanks) thanks.click();
                                            }}
                                        >
                                            <Input label="Full Name" name="name" placeholder="Jane Doe" />
                                            <Input label="Email" name="email" type="email" placeholder="jane@company.com" />
                                            <Input label="Phone" name="phone" placeholder="+1 404 555 0123" />
                                            <Input label="City" name="city" placeholder="Perth" />
                                            <div className="mt-4 flex items-center justify-end gap-2">
                                                <ShineButton color="secondary" size="lg" onClick={() => state.close()}>
                                                    Cancel
                                                </ShineButton>
                                                <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight} type="submit">
                                                    Submit
                                                </ShineButton>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog>
                            </Modal>
                        )}
                    </ModalOverlay>
                </DialogTrigger>
            </motion.div>
            <DialogTrigger>
                <button id="thanks-confetti" className="hidden">open</button>
                <ModalOverlay className="!items-center !justify-center">
                    {({ state }) => (
                        <Modal className="w-full flex items-center justify-center cursor-auto will-change-transform">
                            <Dialog className="relative w-[min(90vw,28rem)] max-w-md overflow-hidden rounded-2xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-2xl">
                                <div className="pointer-events-none absolute inset-0 opacity-60">
                                    <ConfettiBurst />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold tracking-tight leading-tight">
                                        <span className="block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(1.3rem,4vw,1.9rem)]">
                                            Thank you for applying!
                                        </span>
                                    </h3>
                                    <p className="mt-1 text-sm text-white/75">We’ve received your application. Our advisors will reach out shortly.</p>
                                    <div className="mt-5 flex justify-end">
                                        <ShineButton color="secondary-destructive" size="lg" onClick={() => state.close()}>
                                            Close
                                        </ShineButton>
                                    </div>
                                </div>
                            </Dialog>
                        </Modal>
                    )}
                </ModalOverlay>
            </DialogTrigger>
        </section>
    );
};

const ConfettiBurst = () => {
    const ref = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const w = 600;
        const h = 300;
        canvas.width = w;
        canvas.height = h;
        const colors = ["#7F56D9", "#60A5FA", "#34D399", "#F59E0B", "#F472B6", "#22D3EE", "#FFFFFF"];
        const parts = Array.from({ length: 140 }).map(() => ({
            x: Math.random() * w,
            y: -20 - Math.random() * 80,
            vx: -1 + Math.random() * 2,
            vy: 2 + Math.random() * 2,
            g: 0.035 + Math.random() * 0.015,
            s: 3 + Math.random() * 4,
            r: Math.random() * Math.PI,
            dr: -0.06 + Math.random() * 0.12,
            c: colors[(Math.random() * colors.length) | 0],
        }));
        let running = true;
        let t = 0;
        const loop = () => {
            if (!running) return;
            t += 1;
            ctx.clearRect(0, 0, w, h);
            for (const p of parts) {
                p.vy += p.g;
                p.x += p.vx;
                p.y += p.vy;
                p.r += p.dr;
                if (p.y > h + 40) {
                    p.y = -20;
                    p.vy = 2 + Math.random() * 2;
                }
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.r);
                ctx.fillStyle = p.c;
                ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s);
                ctx.restore();
            }
            if (t < 240) requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
        return () => {
            running = false;
        };
    }, []);
    return <canvas className="size-full" ref={ref} />;
};
