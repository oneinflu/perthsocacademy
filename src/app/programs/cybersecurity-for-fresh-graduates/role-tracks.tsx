"use client";
import Link from "next/link";
import { Badge } from "@/components/base/badges/badges";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import type { IconComponentType } from "@/components/base/badges/badge-types";
import { ArrowRight, FileCode01, Stars02, BarChart02, MessageChatCircle, LifeBuoy01 } from "@untitledui/icons";

type Track = {
    title: string;
    subtitle: string;
    description: string;
    outcome: string;
    href: string;
    icon: IconComponentType;
};

const tracks: Track[] = [
    {
        title: "Build & Secure",
        subtitle: "Application Security / Secure Coding",
        description: "For those interested in building systems and securing code.",
        outcome: "Design and protect applications from development to deployment.",
        href: "/programs", // placeholder route
        icon: FileCode01,
    },
    {
        title: "Test & Validate",
        subtitle: "Ethical Hacking Foundations",
        description: "For curious minds who like breaking things to make them stronger.",
        outcome: "Identify vulnerabilities before attackers do.",
        href: "/programs", // placeholder route
        icon: LifeBuoy01,
    },
    {
        title: "Investigate & Respond",
        subtitle: "SOC / Incident Response Foundations",
        description: "For analytical thinkers who want to defend in real time.",
        outcome: "Detect, investigate, and respond to security incidents.",
        href: "/programs", // placeholder route
        icon: MessageChatCircle,
    },
    {
        title: "Govern & Control",
        subtitle: "GRC / Risk Foundations",
        description: "For those who prefer policy, risk, and governance.",
        outcome: "Manage security programs and compliance.",
        href: "/programs", // placeholder route
        icon: BarChart02,
    },
    {
        title: "Secure AI Systems",
        subtitle: "AI / Agentic AI Application Security",
        description: "For future-focused learners entering AI security early.",
        outcome: "Secure AI-powered applications and agent workflows.",
        href: "/programs/ai-cyber-security-training-program",
        icon: Stars02,
    },
];

export default function RoleTracks() {
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Then Choose a Role-Based Track</h2>
                    <p className="mt-3 text-base md:text-lg text-white/80">
                        You don’t need to decide on day one. Foundations come first—specialisation comes next.
                    </p>
                </div>

                <div className="mt-10 flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-4 px-2 pb-3 pt-2 md:gap-6 md:px-4">
                    {tracks.map((t) => {
                        const Icon = t.icon;
                        return (
                            <Link key={t.title} href={t.href} className="group relative min-w-[88%] snap-start md:min-w-[520px] md:max-w-[560px]">
                                <div className="flex h-full flex-col rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-6 transition-transform hover:-translate-y-[2px] hover:bg-white/[0.05] md:p-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <FeaturedIcon icon={Icon} size="md" color="gray" theme="modern" />
                                            <div className="text-lg font-semibold text-white">{t.title}</div>
                                        </div>
                                        <ArrowRight className="size-4 text-white/50 group-hover:text-white/80 transition-colors" />
                                    </div>
                                    <div className="mt-2 text-sm font-medium text-white/75">{t.subtitle}</div>
                                    <p className="mt-3 text-sm text-white/75">{t.description}</p>
                                    <div className="mt-4 h-px w-full bg-white/10" />
                                    <p className="mt-4 text-sm text-white/80">{t.outcome}</p>

                                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5" />
                                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                            <Badge type="modern" size="sm" color="gray" className="px-3 py-1 text-xs font-semibold">
                                                View Pathway
                                            </Badge>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
