"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cx } from "@/utils/cx";
import { ShineButton } from "@/components/base/buttons/shine-button";

const BentoTile = ({
    title,
    body,
    children,
}: {
    title: string;
    body: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="rounded-xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-xl">
            <div className="text-xl font-semibold text-white">{title}</div>
            <div className="mt-2 text-white/70">{body}</div>
            <div className="mt-6 relative h-40 overflow-hidden rounded-lg ring-1 ring-white/10 bg-[#0A0D12]">
                {children}
            </div>
        </div>
    );
};

export const HomePaths = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [seen, setSeen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

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

    const mapToHref = (opt: string | null) => {
        if (!opt) return undefined;
        if (opt === "Corporate Team Lead") return "/academy";
        return "/programs";
    };

    return (
        <section ref={ref} id="find-my-path" className="w-full overflow-hidden py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10">
                        <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-md font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                            PATHS INTO SOC
                        </span>
                    </div>
                    <h2 className={cx("mt-6 text-3xl font-semibold text-white md:text-4xl")}>
                        Structured ways to enter security operations
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
                        Different backgrounds require different starting points. SOC Academy provides guided paths based on readiness and experience.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                    className="mx-auto mt-10 max-w-4xl"
                >
                    <div className="rounded-2xl bg-[#0B0D12]/80 p-6 ring-1 ring-white/10 backdrop-blur">
                        <div className="text-center">
                            <div className="text-md font-semibold text-white">Not sure where to start? Choose your current profile.</div>
                            <p className="mt-2 text-sm text-white/70">We’ll recommend a learning path based on your background and your target outcome.</p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                            <button
                                onClick={() => setSelected("Fresh Graduate")}
                                className={cx(
                                    "rounded-xl border border-white/12 bg-white/5 p-4 text-left transition hover:bg-white/8",
                                    selected === "Fresh Graduate" && "ring-1 ring-brand-600 bg-white/8",
                                )}
                            >
                                <div className="text-sm font-semibold text-white">Fresh Graduate</div>
                                <div className="mt-1 text-xs text-white/70">Start with Fundamentals, then choose a role track</div>
                            </button>
                            <button
                                onClick={() => setSelected("Developer / Coder")}
                                className={cx(
                                    "rounded-xl border border-white/12 bg-white/5 p-4 text-left transition hover:bg-white/8",
                                    selected === "Developer / Coder" && "ring-1 ring-brand-600 bg-white/8",
                                )}
                            >
                                <div className="text-sm font-semibold text-white">Developer / Coder</div>
                                <div className="mt-1 text-xs text-white/70">Application Security / Secure Coding pathway</div>
                            </button>
                            <button
                                onClick={() => setSelected("Tester / QA")}
                                className={cx(
                                    "rounded-xl border border-white/12 bg-white/5 p-4 text-left transition hover:bg-white/8",
                                    selected === "Tester / QA" && "ring-1 ring-brand-600 bg-white/8",
                                )}
                            >
                                <div className="text-sm font-semibold text-white">Tester / QA</div>
                                <div className="mt-1 text-xs text-white/70">Security Testing & Vulnerability Validation pathway</div>
                            </button>
                            <button
                                onClick={() => setSelected("System / Network Administrator")}
                                className={cx(
                                    "rounded-xl border border-white/12 bg-white/5 p-4 text-left transition hover:bg-white/8",
                                    selected === "System / Network Administrator" && "ring-1 ring-brand-600 bg-white/8",
                                )}
                            >
                                <div className="text-sm font-semibold text-white">System / Network Administrator</div>
                                <div className="mt-1 text-xs text-white/70">Cloud & Platform Security pathway</div>
                            </button>
                            <button
                                onClick={() => setSelected("Corporate Team Lead")}
                                className={cx(
                                    "rounded-xl border border-white/12 bg-white/5 p-4 text-left transition hover:bg-white/8 sm:col-span-2 md:col-span-1",
                                    selected === "Corporate Team Lead" && "ring-1 ring-brand-600 bg-white/8",
                                )}
                            >
                                <div className="text-sm font-semibold text-white">Corporate Team Lead</div>
                                <div className="mt-1 text-xs text-white/70">Role-based team upskilling pathway</div>
                            </button>
                        </div>
                        {selected && (
                            <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-xl border border-white/12 bg-white/5 p-4 md:flex-row md:items-center">
                                <div>
                                    <div className="text-sm font-semibold text-white">Recommended pathway:</div>
                                    <div className="mt-1 text-sm text-white/75">A structured sequence designed to build capability step-by-step.</div>
                                </div>
                                <ShineButton href={mapToHref(selected)} className="cursor-cta-trendy" color="secondary-destructive" size="lg">
                                    View Path Details
                                </ShineButton>
                            </div>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
                >
                    <BentoTile title="Foundations Path" body="For those new to security operations.">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(60% 60% at 50% 70%, rgba(127,86,217,0.12) 0%, rgba(127,86,217,0.04) 55%, rgba(0,0,0,0) 100%)",
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 opacity-20"
                            style={{
                                background:
                                    "radial-gradient(circle at 20% 80%, rgba(158,119,237,0.35) 0%, rgba(127,86,217,0.18) 30%, rgba(127,86,217,0) 60%)",
                            }}
                            animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -3, 0] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <svg viewBox="0 0 200 140" className="absolute inset-0">
                            <defs>
                                <filter id="glow-a" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b" />
                                    <feMerge>
                                        <feMergeNode in="b" />
                                        <feMergeNode in="b" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <g>
                                <motion.rect
                                    x="8"
                                    y="8"
                                    width="184"
                                    height="124"
                                    rx="10"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.08)"
                                    strokeWidth="1"
                                    animate={{ opacity: [0.4, 0.6, 0.4] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <path d="M14,110 C60,96 100,64 170,50" stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none" />
                                <motion.path
                                    d="M14,110 C60,96 100,64 170,50"
                                    stroke="rgba(158,119,237,0.8)"
                                    strokeWidth="2"
                                    strokeDasharray="8 8"
                                    fill="none"
                                    animate={{ strokeDashoffset: [0, -80] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path
                                    d="M14,110 C60,96 100,64 170,50"
                                    stroke="rgba(255,255,255,0.22)"
                                    strokeWidth="1.25"
                                    strokeDasharray="2 12"
                                    fill="none"
                                    animate={{ strokeDashoffset: [0, -120] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 0.4 }}
                                />
                                <motion.circle
                                    cx="14"
                                    cy="110"
                                    r="6"
                                    fill="rgba(255,255,255,0.9)"
                                    filter="url(#glow-a)"
                                    animate={{ cx: [14, 60, 100, 170], cy: [110, 96, 64, 50] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.circle
                                    cx="14"
                                    cy="110"
                                    r="10"
                                    stroke="rgba(158,119,237,0.8)"
                                    strokeWidth="1.5"
                                    fill="none"
                                    filter="url(#glow-a)"
                                    animate={{ cx: [14, 60, 100, 170], cy: [110, 96, 64, 50], r: [10, 14, 10], opacity: [0.25, 0.6, 0.25] }}
                                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.circle
                                    cx="170"
                                    cy="50"
                                    r="10"
                                    stroke="rgba(158,119,237,0.8)"
                                    strokeWidth="2"
                                    fill="none"
                                    animate={{ r: [10, 14, 10], opacity: [0.4, 0.9, 0.4] }}
                                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </g>
                        </svg>
                    </BentoTile>

                    <BentoTile title="SOC Analyst Path" body="For learners preparing for active SOC roles.">
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                background:
                                    "radial-gradient(60% 60% at 50% 70%, rgba(127,86,217,0.14) 0%, rgba(127,86,217,0.04) 55%, rgba(0,0,0,0) 100%)",
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 opacity-20"
                            style={{
                                background:
                                    "radial-gradient(circle at 70% 30%, rgba(127,86,217,0.30) 0%, rgba(127,86,217,0.14) 28%, rgba(127,86,217,0) 55%)",
                            }}
                            animate={{ scale: [1, 1.06, 1], rotate: [0, -5, 4, 0] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <svg viewBox="0 0 200 140" className="absolute inset-0">
                            <defs>
                                <filter id="glow-b" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
                                    <feMerge>
                                        <feMergeNode in="b" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <g>
                                <circle cx="34" cy="34" r="12" fill="rgba(255,255,255,0.08)" />
                                <circle cx="96" cy="26" r="10" fill="rgba(255,255,255,0.08)" />
                                <circle cx="150" cy="60" r="12" fill="rgba(255,255,255,0.08)" />
                                <circle cx="74" cy="96" r="12" fill="rgba(255,255,255,0.08)" />
                                <path d="M34,34 L96,26 L150,60 L74,96 L34,34" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" fill="none" />
                                <motion.path
                                    d="M34,34 L96,26 L150,60 L74,96 L34,34"
                                    stroke="rgba(158,119,237,0.9)"
                                    strokeWidth="2"
                                    strokeDasharray="10 8"
                                    fill="none"
                                    animate={{ strokeDashoffset: [0, -120] }}
                                    transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.circle
                                    cx="34"
                                    cy="34"
                                    r="5"
                                    fill="rgba(255,255,255,0.95)"
                                    filter="url(#glow-b)"
                                    animate={{ cx: [34, 96, 150, 74, 34], cy: [34, 26, 60, 96, 34] }}
                                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.circle
                                    cx="34"
                                    cy="34"
                                    r="8"
                                    stroke="rgba(158,119,237,0.8)"
                                    strokeWidth="1.5"
                                    fill="none"
                                    filter="url(#glow-b)"
                                    animate={{ cx: [34, 96, 150, 74, 34], cy: [34, 26, 60, 96, 34], r: [8, 12, 8], opacity: [0.25, 0.6, 0.25] }}
                                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.circle cx="150" cy="60" r="3" fill="rgba(255,255,255,0.9)" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
                                <motion.circle cx="74" cy="96" r="3" fill="rgba(255,255,255,0.9)" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />
                                <motion.circle
                                    cx="150"
                                    cy="60"
                                    r="10"
                                    stroke="rgba(158,119,237,0.8)"
                                    strokeWidth="2"
                                    fill="none"
                                    animate={{ r: [10, 14, 10], opacity: [0.4, 0.9, 0.4] }}
                                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </g>
                        </svg>
                    </BentoTile>

                    <BentoTile title="Advanced & Specialised" body="For analysts moving into advanced domains.">
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                background:
                                    "radial-gradient(60% 60% at 50% 60%, rgba(127,86,217,0.12) 0%, rgba(127,86,217,0.04) 55%, rgba(0,0,0,0) 100%)",
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 opacity-25"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 50%, rgba(158,119,237,0.35) 0%, rgba(127,86,217,0.16) 30%, rgba(127,86,217,0) 60%)",
                            }}
                            animate={{ scale: [1, 1.1, 1], rotate: [0, 6, -5, 0] }}
                            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <svg viewBox="0 0 200 140" className="absolute inset-0">
                            <defs>
                                <filter id="glow-c" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
                                    <feMerge>
                                        <feMergeNode in="b" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <g>
                                <motion.g animate={{ rotate: [0, 8, -6, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} transform="translate(100,70)">
                                    <circle cx="0" cy="0" r="12" fill="rgba(255,255,255,0.90)" />
                                    <motion.circle cx="0" cy="0" r="18" stroke="rgba(158,119,237,0.8)" strokeWidth="2" fill="none" filter="url(#glow-c)" animate={{ r: [18, 24, 18], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} />
                                    <circle cx="0" cy="0" r="32" stroke="rgba(255,255,255,0.12)" fill="none" />
                                    <circle cx="0" cy="0" r="52" stroke="rgba(255,255,255,0.10)" fill="none" />
                                    <circle cx="0" cy="0" r="72" stroke="rgba(255,255,255,0.08)" fill="none" />
                                    <motion.circle cx="32" cy="0" r="4" fill="rgba(255,255,255,0.95)" filter="url(#glow-c)" animate={{ cx: [32, 0, -32, 0, 32], cy: [0, 32, 0, -32, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                                    <motion.circle cx="52" cy="0" r="4" fill="rgba(255,255,255,0.85)" filter="url(#glow-c)" animate={{ cx: [52, 0, -52, 0, 52], cy: [0, 52, 0, -52, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
                                    <motion.circle cx="72" cy="0" r="4" fill="rgba(255,255,255,0.75)" filter="url(#glow-c)" animate={{ cx: [72, 0, -72, 0, 72], cy: [0, 72, 0, -72, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
                                </motion.g>
                                <g>
                                    <motion.circle cx="22" cy="20" r="1.5" fill="rgba(255,255,255,0.8)" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
                                    <motion.circle cx="180" cy="28" r="1.5" fill="rgba(255,255,255,0.8)" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />
                                    <motion.circle cx="28" cy="118" r="1.5" fill="rgba(255,255,255,0.8)" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1.0 }} />
                                    <motion.circle cx="168" cy="104" r="1.5" fill="rgba(255,255,255,0.8)" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }} />
                                </g>
                            </g>
                        </svg>
                    </BentoTile>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="mx-auto mt-8 max-w-6xl text-center"
                >
                    <a
                        href="/programs"
                        className="text-md font-semibold text-secondary hover:text-secondary_hover"
                    >
                        Explore programs →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
