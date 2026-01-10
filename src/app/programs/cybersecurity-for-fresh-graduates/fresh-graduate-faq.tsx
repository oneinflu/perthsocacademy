"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cx } from "@/utils/cx";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

type FAQ = {
    q: string;
    a: string;
};

const faqs: FAQ[] = [
    {
        q: "Do I need coding to start?",
        a: "Not to start. Coding becomes important for application security and offensive testing, but fundamentals can be learned first.",
    },
];

export default function FreshGraduateFAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="relative w-full bg-[#0A0D12]">
            <BackgroundPattern pattern="grid" size="lg" className="pointer-events-none absolute inset-0 w-full h-full text-white/15 opacity-15" />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
                }}
            />
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Fresh Graduate FAQs</h2>
                </div>

                <div className="mx-auto mt-8 max-w-3xl">
                    <ul className="divide-y divide-white/10 rounded-2xl ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-md">
                        {faqs.map((item, i) => {
                            const isOpen = open === i;
                            return (
                                <li key={item.q} className="p-5 md:p-6">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className="flex w-full items-start justify-between gap-6"
                                    >
                                        <span className="text-md font-semibold text-white">{item.q}</span>
                                        <span
                                            className={cx(
                                                "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 transition",
                                                isOpen ? "ring-white/20 bg-white/10 text-white" : "ring-white/15 bg-white/5 text-white/80",
                                            )}
                                        >
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.p
                                                key="answer"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                                className="mt-3 text-white/75 overflow-hidden"
                                            >
                                                {item.a}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
