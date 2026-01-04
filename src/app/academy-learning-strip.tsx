"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const cards = ["Learn", "Practice", "Break", "Secure", "Validate"];

export const AcademyLearningStrip = () => {
    const containerRef = useRef<HTMLElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const [trackWidth, setTrackWidth] = useState(2400);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [translateX, setTranslateX] = useState(0);
    const targetXRef = useRef(0);
    const [wrapperHeight, setWrapperHeight] = useState(2000);
    const rafTranslateRef = useRef<number | null>(null);
    const [autoTriggered, setAutoTriggered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const setMobileFlag = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
        setMobileFlag();
        window.addEventListener("resize", setMobileFlag, { passive: true });

        const measure = () => {
            const vp = viewportRef.current;
            const tr = trackRef.current;
            if (!vp || !tr) return;
            setTrackWidth(tr.scrollWidth);
            const maxX = Math.max(0, tr.scrollWidth - vp.clientWidth);
            setWrapperHeight(vp.clientHeight + (isMobile ? 20 : maxX));
        };
        measure();
        const roVp = new ResizeObserver(measure);
        const roTr = new ResizeObserver(measure);
        if (viewportRef.current) roVp.observe(viewportRef.current);
        if (trackRef.current) roTr.observe(trackRef.current);

        const onScrollY = () => {
            const wrapper = wrapperRef.current;
            const vp = viewportRef.current;
            const tr = trackRef.current;
            if (!wrapper || !vp || !tr) return;
            const rect = wrapper.getBoundingClientRect();
            const start = vp.clientHeight;
            const end = -(wrapperHeight - vp.clientHeight);
            const raw = (start - rect.top) / (start - end);
            const p = Math.max(0, Math.min(1, raw));
            const maxX = tr.scrollWidth - vp.clientWidth;
            targetXRef.current = -p * maxX;
            if (p > 0.985 && !autoTriggered) {
                const next = containerRef.current?.nextElementSibling as HTMLElement | null;
                if (next) {
                    setAutoTriggered(true);
                    next.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.setTimeout(() => setAutoTriggered(false), 1200);
                }
            }
        };
        if (!isMobile) {
            onScrollY();
            window.addEventListener("scroll", onScrollY, { passive: true });
        }

        return () => {
            roVp.disconnect();
            roTr.disconnect();
            window.removeEventListener("scroll", onScrollY);
            window.removeEventListener("resize", setMobileFlag);
        };
    }, [wrapperHeight, autoTriggered, isMobile]);

    // removed duplicate measurement effect; primary measurement and scroll mapping handled above

    useEffect(() => {
        const animateX = () => {
            const current = translateX;
            const target = targetXRef.current;
            const next = current + (target - current) * (isMobile ? 0 : 0.18);
            setTranslateX(next);
            rafTranslateRef.current = requestAnimationFrame(animateX);
        };
        animateX();
        return () => {
            if (rafTranslateRef.current) cancelAnimationFrame(rafTranslateRef.current);
        };
    }, [translateX, isMobile]);

    const bgTranslate = translateX * 0.4;
    const dashOffset = -translateX * 0.5;

    return (
        <section ref={containerRef} className="relative w-full bg-base-near-black">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-12">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="text-md font-semibold text-brand-secondary">How Learning Happens</div>
                    <h2 className="mt-3 text-display-sm font-semibold text-white md:text-display-md">Parallax Story</h2>
                    <p className="mt-2 text-white/75">A journey through training — not just steps.</p>
                </div>
                <section ref={wrapperRef} className="relative mt-6" style={{ height: `${wrapperHeight}px` }}>
                    <div ref={viewportRef} className="md:sticky md:top-[10vh] md:h-[80vh] overflow-hidden">
                        <div ref={bgRef} className="absolute inset-0 pointer-events-none -z-[1] hidden md:block" style={{ transform: `translateX(${bgTranslate}px)` }}>
                            <svg className="absolute left-0 top-1/2 -translate-y-1/2" width={trackWidth} height="300">
                                <motion.path
                                    d="M 40 150 C 260 120, 520 180, 760 150 S 1240 130, 1560 160 S 1880 140, 2200 150"
                                    stroke="rgba(127,86,217,0.35)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="6 10"
                                    style={{ strokeDashoffset: dashOffset }}
                                />
                            </svg>
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                                    backgroundSize: "80px 80px, 80px 80px",
                                }}
                            />
                        </div>
                        <div
                            ref={trackRef}
                            className="flex gap-4 md:gap-8 px-4 md:px-8 will-change-transform"
                            style={{ transform: isMobile ? undefined : `translateX(${translateX}px)` }}
                        >
                        {cards.map((title, i) => (
                            <div
                                key={title}
                                className="shrink-0 w-[92vw] sm:w-[86vw] md:w-[55vw]"
                            >
                                <motion.div
                                    initial={{ y: 18, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                                    className="relative md:h-[360px] rounded-2xl bg-[#0B0F14]/70 backdrop-blur-md p-6 md:p-10 ring-1 ring-white/10"
                                    style={{
                                        boxShadow:
                                            "0 0 0 0.5px rgba(127,86,217,0.3), 0 24px 60px rgba(0,0,0,0.35), 0 0 48px rgba(68,76,231,0.12)",
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 rounded-2xl -z-[1] opacity-60"
                                        style={{
                                            background:
                                                "radial-gradient(600px circle at 18% 12%, rgba(139,92,246,0.16), transparent 40%)",
                                        }}
                                    />
                                    <div className="flex items-start justify-between gap-4 md:gap-6">
                                        <div>
                                            <div className="text-xl md:text-3xl font-semibold text-white">{title}</div>
                                            <div className="mt-2 text-white/75 text-md md:text-lg">
                                                {title === "Learn" && "Concepts, frameworks, and mental models to reason about complex systems."}
                                                {title === "Practice" && "Hands-on labs with SOC tools, agent workflows, and response playbooks."}
                                                {title === "Break" && "Adversarial thinking — red teaming agent systems and probing guardrails."}
                                                {title === "Secure" && "Hardening, monitoring, and automated defenses aligned to standards."}
                                                {title === "Validate" && "Assessments, simulations, and real-world readiness validation."}
                                            </div>
                                            <ul className="mt-3 md:mt-4 text-white/70 text-sm md:text-md space-y-1.5">
                                                {title === "Learn" && (
                                                    <>
                                                        <li>• Foundations: SOC, AI security, governance</li>
                                                        <li>• Threat models and system diagrams</li>
                                                        <li>• Standards orientation (NIST, ISO, MITRE)</li>
                                                    </>
                                                )}
                                                {title === "Practice" && (
                                                    <>
                                                        <li>• SIEM, EDR, telemetry pipelines</li>
                                                        <li>• Agentic workflows and tools</li>
                                                        <li>• Incident response drills</li>
                                                    </>
                                                )}
                                                {title === "Break" && (
                                                    <>
                                                        <li>• Prompt injection and jailbreaking</li>
                                                        <li>• Data exfil and autonomy abuse</li>
                                                        <li>• Multi-agent failure modes</li>
                                                    </>
                                                )}
                                                {title === "Secure" && (
                                                    <>
                                                        <li>• Guardrails and containment</li>
                                                        <li>• Policies, monitoring, and alerts</li>
                                                        <li>• Recovery and resilience</li>
                                                    </>
                                                )}
                                                {title === "Validate" && (
                                                    <>
                                                        <li>• Performance and reliability checks</li>
                                                        <li>• SOC readiness scoring</li>
                                                        <li>• Continuous improvement loops</li>
                                                    </>
                                                )}
                                            </ul>
                                        </div>
                                        <svg className="hidden md:block min-w-[180px] w-[180px] h-[120px]" viewBox="0 0 180 120">
                                            <defs>
                                                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                                                    <stop offset="0" stopColor="rgba(127,86,217,0.9)" />
                                                    <stop offset="1" stopColor="rgba(68,76,231,0.7)" />
                                                </linearGradient>
                                            </defs>
                                            <circle cx="30" cy="40" r="3" fill="url(#g)" />
                                            <circle cx="90" cy="25" r="3" fill="url(#g)" />
                                            <circle cx="140" cy="50" r="3" fill="url(#g)" />
                                            <circle cx="70" cy="85" r="3" fill="url(#g)" />
                                            <circle cx="130" cy="90" r="3" fill="url(#g)" />
                                            <path d="M30 40 L90 25 L140 50 L130 90 L70 85 Z" stroke="rgba(127,86,217,0.5)" strokeWidth="1.5" fill="none" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};
