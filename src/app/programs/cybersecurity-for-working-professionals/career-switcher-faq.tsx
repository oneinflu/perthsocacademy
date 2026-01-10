"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cx } from "@/utils/cx";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
    {
        q: "Do I need to quit my job to join?",
        a: "No. The accelerator is designed to run alongside a full-time role.",
    },
    {
        q: "Is this suitable if I already have 5–10 years of experience?",
        a: "Yes. The program respects prior experience and focuses on targeted security transition.",
    },
    {
        q: "How long does the transition typically take?",
        a: "Most professionals complete core transition in 12–16 weeks, depending on pace and prior experience.",
    },
    {
        q: "Which pathway should I choose?",
        a: "Select the pathway mapped to your current role; advisors help align outcomes.",
    },
    {
        q: "Is coding required?",
        a: "Coding helps for Application Security and DevSecOps; other pathways focus on operations, detection, and governance.",
    },
    {
        q: "Do you provide portfolio and interview preparation?",
        a: "Yes—guided artifacts, mock interviews, and role-ready preparation are included.",
    },
    {
        q: "Will I need to take time off work for assessments?",
        a: "No. Assessments are designed to be completed on your own schedule outside of work hours.",
    },
    {
        q: "Can I switch pathways mid-program?",
        a: "Yes. You can request a pathway switch within the first 4 weeks of the program.",
    },
];

export default function CareerSwitcherFAQ() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section className="relative w-full bg-[#0A0D12] py-24 md:py-28">
            <BackgroundPattern pattern="grid" size="lg" className="pointer-events-none absolute inset-0 text-white/15 opacity-10" />
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Career Switcher FAQs</h2>
                </div>
                <div className="mx-auto mt-8 max-w-3xl">
                    <ul className="divide-y divide-white/10 rounded-2xl ring-1 ring-white/10 bg-[#0B0F14]/60 backdrop-blur-md">
                        {faqs.map((item, i) => {
                            const isOpen = open === i;
                            return (
                                <li key={item.q} className="p-5 md:p-6">
                                    <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-start justify-between gap-6">
                                        <span className="text-md font-semibold text-white">{item.q}</span>
                                        <span
                                            className={cx(
                                                "inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 transition",
                                                isOpen ? "ring-white/20 bg-white/10 text-white" : "ring-white/15 bg-white/5 text-white/80",
                                            )}
                                        >
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-3 text-white/75"
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
