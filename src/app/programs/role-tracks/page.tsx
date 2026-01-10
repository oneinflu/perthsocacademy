import type { Metadata } from "next";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { Button } from "@/components/base/buttons/button";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Role-Based Cybersecurity Programs | PerthSOC Academy",
    description:
        "Choose a target role and follow a structured program designed to build the capabilities that role requires.",
};

export default function RoleTracksPage() {
    return (
        <main>
            <section className="relative w-full bg-[#0A0D12] py-24 md:py-32">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/bg4.mp4"
                    preload="auto"
                />
                <div className="pointer-events-none absolute inset-0">
                    <BackgroundPattern pattern="grid" size="lg" className="absolute inset-0 w-full h-full text-white/15 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/60" />
                </div>
                <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="font-bold tracking-tight leading-tight">
                            <span className="block bg-gradient-to-b from-white/95 via-white/85 to-white/55 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.2rem,6.5vw,4.4rem)]">
                                Role-Based Cybersecurity Programs
                            </span>
                        </h1>
                        <p className="mt-4 text-lg text-white/80 md:text-xl">
                            Choose a target role and follow a structured program designed to build the capabilities that role requires.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="xl" href="#tracks">
                                View Role-Based Tracks
                            </ShineButton>
                            <Button href="/contact" color="link-gray" className="rounded-full text-white/90 hover:text-white" size="xl">
                                Speak With an Advisor
                            </Button>
                        </div>
                      
                    </div>
                </div>
            </section>
            <RoleTracksExplanation />
            <RoleTracksGrid />
            <RoleGuidanceSection />
        </main>
    );
}

function AbstractMatrix() {
    return (
        <svg className="w-full h-[180px]" viewBox="0 0 760 180" preserveAspectRatio="none">
            <defs>
                <linearGradient id="gridGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="rgba(127,86,217,0.35)" />
                    <stop offset="1" stopColor="rgba(68,76,231,0.35)" />
                </linearGradient>
            </defs>
            {Array.from({ length: 6 }).map((_, i) => (
                <line key={`row-${i}`} x1={40} y1={30 + i * 24} x2={720} y2={30 + i * 24} stroke="url(#gridGrad)" strokeWidth="1" opacity="0.35" />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
                <line key={`col-${i}`} x1={40 + i * 56} y1={30} x2={40 + i * 56} y2={170} stroke="url(#gridGrad)" strokeWidth="1" opacity="0.25" />
            ))}
            {[60, 116, 172, 228, 284, 340].map((x, idx) => (
                <rect key={`box-${idx}`} x={x} y={54} width="46" height="32" rx="6" fill="url(#gridGrad)" opacity="0.25" />
            ))}
            {[396, 452, 508, 564, 620].map((x, idx) => (
                <rect key={`box-b-${idx}`} x={x} y={106} width="46" height="32" rx="6" fill="url(#gridGrad)" opacity="0.25" />
            ))}
        </svg>
    );
}

function RoleTracksExplanation() {
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">How Role-Based Tracks Work</h2>
                    <p className="mt-3 text-white/80 md:text-lg">
                        Each program is designed around a specific cybersecurity role. You follow a defined sequence of modules, hands-on labs, and assessments aligned to real-world responsibilities of that role.
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-5xl rounded-2xl ring-1 ring-white/10 bg-white/[0.03]">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-white/10 md:divide-y-0 md:divide-x">
                        <div className="px-5 md:px-6 py-5">
                            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/85 ring-1 ring-white/15 text-sm font-semibold">1</div>
                            <div className="mt-3 text-white font-semibold">Choose a Target Role</div>
                        </div>
                        <div className="px-5 md:px-6 py-5">
                            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/85 ring-1 ring-white/15 text-sm font-semibold">2</div>
                            <div className="mt-3 text-white font-semibold">Build Role-Specific Capabilities</div>
                        </div>
                        <div className="px-5 md:px-6 py-5">
                            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/85 ring-1 ring-white/15 text-sm font-semibold">3</div>
                            <div className="mt-3 text-white font-semibold">Demonstrate Readiness Through Practice</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RoleTracksGrid() {
    const tracks = [
        {
            title: "Cybersecurity Fundamentals",
            tag: "Starter Path",
            description: "Build core security knowledge and foundational skills before choosing a specialization.",
            focus: "Security basics, risk thinking, systems awareness",
            href: "/courses/cybersecurity-fundamentals",
        },
        {
            title: "Application Security Engineer",
            description: "Secure web, mobile, and API-based applications across the development lifecycle.",
            focus: "Secure coding, vulnerability analysis, threat modeling",
            href: "/courses/application-security",
        },
        {
            title: "Ethical Hacker / Penetration Tester",
            description: "Identify and exploit vulnerabilities to assess real-world security posture.",
            focus: "Offensive testing, exploitation, reporting",
            href: "/courses/offensive-security",
        },
        {
            title: "Cloud Security Practitioner",
            description: "Secure cloud environments, services, and identities.",
            focus: "Cloud IAM, configuration security, monitoring",
            href: "/courses/cloud-platform",
        },
        {
            title: "SOC Analyst / Incident Response Associate",
            description: "Monitor, detect, and respond to security incidents.",
            focus: "Threat detection, alert triage, response workflows",
            href: "/courses/defensive-response",
        },
        {
            title: "Digital Forensics & Incident Response (DFIR)",
            description: "Investigate breaches and analyze evidence after security incidents.",
            focus: "Forensics, incident investigation, response coordination",
            href: "/courses/dfir-threat-intelligence",
        },
        {
            title: "GRC / Risk & Compliance Associate",
            description: "Align security controls with business, regulatory, and risk requirements.",
            focus: "Risk assessment, compliance frameworks, governance",
            href: "/courses/grc-risk",
        },
        {
            title: "IAM / Access Management Foundations",
            description: "Design and manage secure access controls and identity systems.",
            focus: "Identity lifecycle, access models, privilege management",
            href: "/courses/cloud-platform",
        },
        {
            title: "Threat Intelligence Foundations",
            description: "Analyze adversaries, campaigns, and threat data to inform defense.",
            focus: "Threat analysis, intelligence lifecycle, reporting",
            href: "/courses/dfir-threat-intelligence",
        },
        {
            title: "AI / Agentic AI Application Security Specialist",
            description: "Secure AI-driven and agent-based applications from misuse and abuse.",
            focus: "AI threat modeling, control design, monitoring",
            href: "/courses/ai-security",
        },
    ];
    return (
        <section id="tracks" className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Browse Role Tracks</h2>
                    <p className="mt-3 mb-4 text-white/80 md:text-lg">
                        Explore role-aligned programs. Each card includes a short summary and skill focus. The button stays consistent at the bottom for clear action.
                    </p>
                </div>
                <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-4 md:gap-6 items-stretch px-2 md:px-4 scrollbar-hide">
                    {tracks.map((t) => (
                        <Link
                            key={t.title}
                            href={t.href}
                            className="group relative flex-none basis-full sm:basis-1/2 md:basis-1/3 snap-start"
                        >
                            <div className="flex h-full min-h-[240px] flex-col rounded-xl ring-1 ring-white/12 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]">
                                <div className="flex items-center justify-between">
                                    <div className="text-lg font-semibold text-white">{t.title}</div>
                                    {t.tag && (
                                        <span className="rounded-full px-2 py-1 text-xs font-semibold text-brand-300 ring-1 ring-brand-500/40 bg-brand-500/10">
                                            {t.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-2 text-sm text-white/80">{t.description}</div>
                                <div className="mt-3 text-xs text-white/65">Skill Focus: {t.focus}</div>
                                <div className="mt-auto pt-4">
                                    <Button size="md" color="secondary">View Curriculum</Button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function RoleGuidanceSection() {
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Not Sure Which Role Fits You?</h2>
                    <p className="mt-3 text-white/80 md:text-lg">
                        If you’re unsure which role to choose, start with fundamentals or speak with an advisor to map your background and interests to the right track.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Button href="/programs" size="lg" color="secondary">Start with Fundamentals</Button>
                        <Button href="/contact" size="lg" color="link-gray" className="rounded-full text-white/90 hover:text-white">Talk to an Advisor</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
