"use client";
import { useState } from "react";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { cx } from "@/utils/cx";
import { Button } from "@/components/base/buttons/button";
import Link from "next/link";

type Profile = {
    id: string;
    title: string;
    blurb: string;
    microcopy: string;
    href: string;
};

const profiles: Profile[] = [
    {
        id: "fresh-grad",
        title: "Fresh Graduate",
        blurb: "New to cybersecurity, ready to start strong.",
        microcopy: "Start with foundations, SOC tooling, and guided labs to build confidence.",
        href: "/programs/cybersecurity-for-fresh-graduates",
    },
    {
        id: "career-switcher",
        title: "Career Switcher",
        blurb: "Pivoting from software/IT into security.",
        microcopy: "Accelerated pathway focusing on SOC workflows, investigation, and applied practice.",
        href: "/programs/cybersecurity-for-working-professionals",
    },
    {
        id: "corporate-team",
        title: "Corporate Team",
        blurb: "Upskilling technical teams for readiness.",
        microcopy: "Structured capability-building with applied labs and outcomes tracking.",
        href: "/programs/corporate-training",
    },
    {
        id: "practitioner",
        title: "Practitioner",
        blurb: "Experience in security, expanding into AI/SOC.",
        microcopy: "Role-aligned specialization with agentic workflows and standards mapping.",
        href: "/programs/role-tracks",
    },
];

export const PathSelector = () => {
    const [selected, setSelected] = useState<Profile | null>(null);

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
                <div className="mx-auto max-w-4xl text-center">
                    <div className="text-md font-semibold text-brand-secondary">Find My Path</div>
                    <h2 className="mt-3 text-display-sm font-semibold text-white md:text-display-md">Tell us about your profile</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">Select the option that best describes you to see your best-fit path.</p>
                    <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-60" />
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {profiles.map((p) => {
                        const active = selected?.id === p.id;
                        return (
                            <button
                                key={p.id}
                                type="button"
                                onClick={() => setSelected(p)}
                                className={cx(
                                    "text-left rounded-2xl p-6 md:p-7 ring-1 ring-white/10 backdrop-blur-md transition",
                                    "bg-[#0B0F14]/75 hover:bg-[#0B0F14]/85",
                                    active ? "ring-brand-500/50" : "ring-white/10",
                                )}
                                style={{
                                    boxShadow:
                                        "0 0 0 0.5px rgba(127,86,217,0.28), 0 18px 44px rgba(0,0,0,0.35), 0 0 36px rgba(68,76,231,0.10)",
                                }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="text-md font-semibold text-white">{p.title}</div>
                                        <div className="mt-1 text-white/75">{p.blurb}</div>
                                    </div>
                                    <div
                                        className={cx(
                                            "shrink-0 h-5 w-5 rounded-full ring-1",
                                            active ? "bg-brand-600 ring-brand-500" : "bg-white/5 ring-white/15",
                                        )}
                                    />
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="mx-auto mt-8 max-w-3xl text-center">
                    {selected ? (
                        <div className="space-y-5">
                            <div className="text-lg text-white/85">
                                Best fit: <span className="font-semibold text-white">{selected.title}</span>
                            </div>
                            <div className="text-white/75">{selected.microcopy}</div>
                            <div className="flex justify-center">
                                <Link href={selected.href} className="inline-flex">
                                    <Button size="xl">View Path Details</Button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="text-white/70">Choose a profile to reveal your recommended path.</div>
                    )}
                </div>
            </div>
        </section>
    );
};
