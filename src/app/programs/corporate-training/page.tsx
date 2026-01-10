import type { Metadata } from "next";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { DialogTrigger } from "@/components/application/modals/modal";
import { CorporateTrainingRequestModal } from "@/components/application/corporate-training-cta";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { cx } from "@/utils/cx";
import { CorporateProgramThemes } from "./program-themes";
import { CorporateGridCTA } from "./grid-cta";

export const metadata: Metadata = {
    title: "Corporate Cybersecurity Upskilling & Reskilling | PerthSOC Academy",
    description:
        "Role-aligned corporate cybersecurity training to reduce risk, improve security quality, and increase operational readiness.",
};

export default function CorporateTrainingPage() {
    return (
        <main>
            <section className="relative w-full bg-[#0A0D12] py-24 md:py-32">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/bg5.mp4"
                    preload="auto"
                />
                <div className="pointer-events-none absolute inset-0">
                    <BackgroundPattern pattern="grid" size="lg" className="absolute inset-0 w-full h-full text-white/15 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/60" />
                </div>

                <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                        <div>
                            <h1 className="font-bold tracking-tight leading-tight">
                                <span className="block bg-gradient-to-b from-white/95 via-white/85 to-white/55 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.4rem,6vw,4.6rem)]">
                                    Corporate Cybersecurity
                                </span>
                                <span className="block bg-gradient-to-b from-white/95 via-white/85 to-white/55 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.4rem,6vw,4.6rem)]">
                                    Upskilling & Reskilling
                                </span>
                            </h1>
                            <p className="mt-4 text-lg text-white/80 md:text-xl">
                                Cybersecurity capability is built across teams. Our corporate programs are role-aligned to reduce risk exposure, improve
                                security quality, and increase operational readiness.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <DialogTrigger>
                                    <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="xl">Request Corporate Training Plan</ShineButton>
                                    <CorporateTrainingRequestModal />
                                </DialogTrigger>
                                <ShineButton href="/programs" className="rounded-full" color="secondary" size="xl">
                                    View Program Themes
                                </ShineButton>
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className={cx(
                                    "rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md",
                                )}
                                style={{
                                    boxShadow:
                                        "0 0 0 0.5px rgba(127,86,217,0.25), 0 24px 60px rgba(0,0,0,0.35), 0 0 48px rgba(68,76,231,0.10)",
                                }}
                            >
                                <EnterpriseDiagram />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ValueStrip />
            <CorporatePhilosophy />
            <CorporateProgramThemes />
            <CorporateGridCTA />
        </main>
    );
}

function EnterpriseDiagram() {
    const teams = ["Engineering", "QA", "DevOps", "IT Ops", "Cloud/Platform", "Governance"];
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-3">
                {teams.map((t) => (
                    <div
                        key={t}
                        className="rounded-xl ring-1 ring-white/12 bg-white/[0.04] p-4 text-white/90 text-sm font-semibold"
                    >
                        {t}
                    </div>
                ))}
            </div>
            <div className="my-6 flex items-center justify-center">
                <svg className="w-full h-14" viewBox="0 0 800 56" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="connector" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0" stopColor="rgba(127,86,217,0.35)" />
                            <stop offset="1" stopColor="rgba(68,76,231,0.35)" />
                        </linearGradient>
                    </defs>
                    <path d="M20 28 H780" stroke="url(#connector)" strokeWidth="2" strokeDasharray="6 10" fill="none" />
                </svg>
            </div>
            <div
                className="rounded-xl ring-1 ring-white/14 bg-white/[0.06] p-4 md:p-5 text-center"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
                <div className="text-white font-semibold">Security Capability Layer</div>
                <div className="mt-1 text-white/70 text-sm">Application, Cloud, Governance, Detection & Response</div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
                {["Readiness", "Quality", "Risk Reduction"].map((k) => (
                    <div key={k} className="rounded-lg ring-1 ring-white/12 bg-white/[0.03] px-3 py-2 text-center text-white/80 text-sm">
                        {k}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ValueStrip() {
    const items = [
        "Reduced security defects in production",
        "Improved audit and compliance readiness",
        "Faster, structured incident response",
        "Safer adoption of cloud and AI systems",
    ];
    return (
        <section className="bg-[#0A0D12] border-t border-white/10">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-6 md:py-8">
                <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03]">
                    <div className="grid grid-cols-1 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                        {items.map((t) => (
                            <div key={t} className="px-4 md:px-6 py-4 text-white text-sm md:text-base font-semibold">
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CorporatePhilosophy() {
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-20 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Built for Real Teams, Real Systems, Real Risk</h2>
                    <p className="mt-3 text-white/80 md:text-lg">
                        Our corporate training programs are designed around how teams actually work. Content is role-aligned, practical, and mapped to measurable capability outcomes—not generic awareness sessions.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl">
                    <div className="grid grid-cols-1 gap-3">
                        <div className="rounded-xl ring-1 ring-white/12 bg-white/[0.04] p-4 md:p-5">
                            <div className="text-white font-semibold">Awareness → Role Context</div>
                            <div className="mt-1 text-white/70 text-sm">Shared language and risk framing across functions</div>
                        </div>
                        <div className="rounded-xl ring-1 ring-white/12 bg-white/[0.05] p-4 md:p-5">
                            <div className="text-white font-semibold">Foundations → Applied Practice</div>
                            <div className="mt-1 text-white/70 text-sm">Hands-on labs and scenarios tailored to job functions</div>
                        </div>
                        <div className="rounded-xl ring-1 ring-white/12 bg-white/[0.06] p-4 md:p-5">
                            <div className="text-white font-semibold">Operations → Quality & Readiness</div>
                            <div className="mt-1 text-white/70 text-sm">Playbooks, hardening, monitoring, and response maturity</div>
                        </div>
                        <div className="rounded-xl ring-1 ring-white/12 bg-white/[0.07] p-4 md:p-5">
                            <div className="text-white font-semibold">Outcomes → Capability</div>
                            <div className="mt-1 text-white/70 text-sm">Measurable improvements aligned to business objectives</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
