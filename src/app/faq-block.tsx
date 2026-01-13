"use client";
import { useState } from "react";
import { cx } from "@/utils/cx";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

type FAQ = {
    q: string;
    a: string;
};

const faqs: FAQ[] = [
    {
        q: "Can I start cybersecurity with no prior experience?",
        a: "Yes. Begin with fundamentals, then choose a role-based specialization aligned to your interests and strengths.",
    },
    {
        q: "I’m a developer/tester/admin—what is the best transition path?",
        a: "Developers typically move fastest into application security. Testers often transition into security testing and vulnerability validation. Admin and network professionals frequently move into cloud and platform security pathways.",
    },
    {
        q: "Do you offer corporate cybersecurity upskilling?",
        a: "Yes. PerthSOC Academy provides role-aligned programs for engineering, cloud/platform, IT operations, and technical teams.",
    },
];

export const FAQBlock = () => {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section className="relative w-full bg-base-near-black">
            <BackgroundPattern pattern="grid" size="lg" className="pointer-events-none absolute inset-0 w-full h-full text-white/15 opacity-15" />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
                }}
            />
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-24">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
                    <div>
                        <div className="text-md font-semibold text-brand-secondary">Support</div>
                        <h2 className="mt-2 text-display-sm font-semibold text-white md:text-display-md">FAQs</h2>
                        <p className="mt-4 text-lg text-white/75">
                            Everything you need to know about programs and pathways. Can’t find the answer you’re looking for?
                            <span className="ml-1 text-brand-300">Chat to our friendly team.</span>
                        </p>
                    </div>
                    <div>
                        <ul className="divide-y divide-white/10 rounded-2xl ring-1 ring-white/10 bg-[#0B0F14]/60 backdrop-blur-md">
                            {faqs.slice(0, 4).map((item, i) => {
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
                                        {isOpen && <p className="mt-3 text-white/75">{item.a}</p>}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
