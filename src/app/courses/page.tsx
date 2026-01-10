import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { Button } from "@/components/base/buttons/button";

export const metadata: Metadata = {
    title: "Cybersecurity Course Library | PerthSOC Academy",
    description: "Browse structured, capability-focused courses across key cybersecurity domains.",
};

const categories = [
    { title: "Foundations", href: "/courses/cybersecurity-fundamentals", blurb: "Core security concepts and context." },
    { title: "Application Security", href: "/courses/application-security", blurb: "Secure coding, validation, and remediation." },
    { title: "Offensive Security", href: "/courses/offensive-security", blurb: "Disciplined testing and reporting." },
    { title: "Defensive & Response", href: "/courses/defensive-response", blurb: "Detection, investigation, and response." },
    { title: "Cloud & Platform", href: "/courses/cloud-platform", blurb: "Access control and exposure reduction." },
    { title: "GRC & Risk", href: "/courses/grc-risk", blurb: "Governance, risk, and compliance alignment." },
    { title: "DFIR & Threat Intelligence", href: "/courses/dfir-threat-intelligence", blurb: "Evidence handling and adversary analysis." },
    { title: "AI Security", href: "/courses/ai-security", blurb: "Misuse scenarios and control requirements." },
];

export default function CoursesIndexPage() {
    return (
        <main>
            <section className="relative w-full bg-[#0A0D12] py-20 md:py-28">
                <div className="pointer-events-none absolute inset-0">
                    <BackgroundPattern pattern="grid" size="lg" className="absolute inset-0 w-full h-full text-white/15 opacity-15" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />
                </div>
                <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Cybersecurity Course Library</h1>
                        <p className="mt-3 text-white/80 md:text-lg">
                            Clear, capability-focused courses—no hype, structured outcomes.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {categories.map((c) => (
                            <Link key={c.title} href={c.href} className="group">
                                <div className="flex h-full flex-col rounded-xl ring-1 ring-white/12 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]">
                                    <div className="text-lg font-semibold text-white">{c.title}</div>
                                    <div className="mt-2 text-sm text-white/75">{c.blurb}</div>
                                    <div className="mt-auto pt-4">
                                        <Button size="sm" color="secondary">View Curriculum</Button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
