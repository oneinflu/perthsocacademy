"use client";

import { ArrowRight } from "@untitledui/icons";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { cx } from "@/utils/cx";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const HomeThreat = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const [mapSeen, setMapSeen] = useState(false);
    const [textSeen, setTextSeen] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        const observe = (el: HTMLElement | null, cb: (v: boolean) => void, threshold = 0.3) => {
            if (!el) return;
            const io = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) cb(true);
                },
                { threshold },
            );
            io.observe(el);
            return () => io.disconnect();
        };
        const u1 = observe(mapRef.current, setMapSeen, 0.35);
        const u2 = observe(textRef.current, setTextSeen, 0.35);
        return () => {
            u1 && u1();
            u2 && u2();
        };
    }, []);

    return (
        <section className="w-full overflow-hidden py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
                    <motion.div
                        ref={mapRef}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={
                            mapSeen
                                ? { opacity: 1, y: 0, scale: 1 }
                                : { opacity: 0, y: 20, scale: 0.98 }
                        }
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="md:col-span-7"
                    >
                        <div
                            className={cx(
                                "relative rounded-xl md:rounded-2xl bg-[#0B0D12] ring-1 ring-white/10 shadow-2xl overflow-hidden",
                                "min-h-[380px] md:min-h-[520px]",
                            )}
                        >
                            <iframe
                                title="Live Global Threat Map"
                                src="https://livethreatmap.radware.com/"
                                loading="lazy"
                                className="h-[420px] w-full border-none md:h-[560px]"
                                style={{
                                    border: "none",
                                }}
                                onLoad={() => setIframeLoaded(true)}
                            />
                            {!iframeLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                    <div className="text-sm text-white/80">
                                        Loading live threat map…
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        ref={textRef}
                        initial={{ opacity: 0, y: 12 }}
                        animate={textSeen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="md:col-span-5"
                    >
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10 w-max">
                                <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-md font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                                    Global Threat Reality
                                </span>
                            </div>
                            <h2 className="text-3xl font-semibold text-white md:text-4xl">
                                The threat landscape is running right now. Every second counts.
                            </h2>
                            <p className="text-lg text-white/75">
                                Global cyber threats don’t wait — and SOC teams are the frontline.
                            </p>
                            <p className="text-white/70">
                                Every minute, malicious activity, malware, and attacks impact organizations worldwide.
                                SOC teams monitor, detect, and respond before damage spreads.
                            </p>
                            <ul className="mt-2 space-y-2 text-white/75">
                                <li>• Live attacks show ongoing threats</li>
                                <li>• SOC analysts translate alerts into action</li>
                                <li>• Real skills matter more than ever</li>
                            </ul>
                            <div className="mt-4 flex gap-3">
                                <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight}>
                                    Explore SOC Roles
                                </ShineButton>
                                <ShineButton className="cursor-cta-trendy" color="secondary" size="lg">
                                    View Curriculum
                                </ShineButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
