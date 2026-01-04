"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Certification = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setSeen(true);
            },
            { threshold: 0.2 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section ref={ref} className="relative w-full bg-[#0A0D12] py-16 md:py-24">
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
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "80px 80px, 80px 80px",
                        backgroundPosition: "center",
                    }}
                />
            </div>

            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -14 }}
                        animate={seen ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="md:col-span-6"
                    >
                        <h2 className="text-3xl font-semibold text-white md:text-4xl">Certification & Validation</h2>
                        <p className="mt-5 text-white/75">
                            CAASP validates the applied capability to secure autonomous and multi-agent AI systems across design, build,
                            operations, and governance. The trust layer emphasizes measurable competency, alignment to industry frameworks,
                            and portability across sectors.
                        </p>
                        <ul className="mt-4 space-y-3 text-white/75">
                            <li>• CAASP</li>
                            <li>• 24 CPE credits</li>
                            <li>• Optional specialization</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 14 }}
                        animate={seen ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
                        className="md:col-span-6"
                    >
                        <div className="rounded-xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-xl md:p-8">
                            <div className="text-md font-semibold text-white">Alignment frameworks</div>
                            <ul className="mt-3 space-y-3 text-white/75">
                                <li>• ISO 42001</li>
                                <li>• NIST AI RMF</li>
                                <li>• MITRE ATLAS</li>
                                <li>• OWASP ASI</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
