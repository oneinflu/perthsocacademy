import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";

type CourseContent = {
    title: string;
    subtitle?: string;
    seoDescription?: string;
    overview: string[];
    capabilities: string[];
    outcomes: string[];
    audience: string[];
    prerequisites?: string[];
    modules: string[];
    meta: {
        level: "Foundations" | "Intermediate" | "Advanced";
        duration: string;
        format: string;
        category:
            | "Application Security"
            | "Offensive Security"
            | "Defensive & Response"
            | "Cloud & Platform"
            | "GRC & Risk"
            | "DFIR & Threat Intelligence"
            | "AI Security"
            | "Foundations";
    };
};

const COURSES: Record<string, CourseContent> = {
    "cybersecurity-fundamentals": {
        title: "Cybersecurity Fundamentals",
        subtitle: "Foundations for modern security roles",
        seoDescription:
            "Explore core security concepts across identity, networks, operating systems, applications, and cloud to build baseline security fluency.",
        overview: [
            "Core concepts across identity, networks, operating systems, applications, and cloud.",
            "Context-first approach to build practical understanding quickly.",
        ],
        capabilities: [
            "Security thinking and control language",
            "Systems awareness across infra and apps",
            "Risk framing and decision clarity",
        ],
        outcomes: [
            "Operate with baseline security fluency",
            "Identify exposure patterns and basic mitigations",
            "Prepare for role-specific specialisation",
        ],
        audience: ["Learners new to security", "Decision-stage users exploring roles"],
        prerequisites: ["Comfort with computers and basic web usage"],
        modules: [
            "Identity & Access basics",
            "Network and OS concepts",
            "Application and data exposure",
            "Cloud shared responsibility",
        ],
        meta: { level: "Foundations", duration: "12–16 hours", format: "Instructor-led + labs", category: "Foundations" },
    },
    "application-security": {
        title: "Web & Mobile Application Security",
        subtitle: "Secure modern applications across the lifecycle",
        seoDescription:
            "Learn secure coding and validation for web/mobile apps—threat modeling, common vulnerabilities, remediation and testing workflows.",
        overview: [
            "Vulnerability patterns and secure coding fundamentals.",
            "Validation workflows and remediation communication for engineering teams.",
        ],
        capabilities: ["Threat modeling basics", "Common vuln categories", "Secure coding and testing workflows"],
        outcomes: ["Reduce defects in development", "Improve validation quality", "Communicate remediation effectively"],
        audience: ["Developers", "QA/Test engineers", "Security engineers starting AppSec"],
        prerequisites: ["Basic programming comfort", "HTTP and API familiarity"],
        modules: ["Input handling", "AuthN/Z", "State and sessions", "API exposure", "Secure testing workflows"],
        meta: { level: "Foundations", duration: "14–18 hours", format: "Instructor-led + labs", category: "Application Security" },
    },
    "offensive-security": {
        title: "Ethical Hacking (Foundations)",
        subtitle: "Disciplined offensive testing",
        seoDescription:
            "Practice disciplined ethical hacking—recon, validation of common weaknesses, evidence collection, and responsible reporting.",
        overview: ["Scope discipline and methodology.", "Evidence collection and responsible reporting."],
        capabilities: ["Recon and enumeration", "Validation of common weaknesses", "Reporting clarity"],
        outcomes: ["Identify realistic issues", "Document credible evidence", "Recommend actionable remediation"],
        audience: ["Aspiring ethical hackers", "Analysts wanting offensive context"],
        prerequisites: ["Basic networking and OS comfort"],
        modules: ["Recon workflow", "Web attack surface", "Validation techniques", "Reporting discipline"],
        meta: { level: "Foundations", duration: "12–16 hours", format: "Instructor-led + labs", category: "Offensive Security" },
    },
    "defensive-response": {
        title: "SOC Analyst & Incident Response Essentials",
        subtitle: "Detection, triage, and response fundamentals",
        seoDescription:
            "Build SOC analyst and incident response skills—alert triage, investigation workflows, containment thinking, and incident communication.",
        overview: ["Investigation thinking and structured response.", "Operational documentation discipline."],
        capabilities: ["Alert triage", "Investigation flow", "Incident communication"],
        outcomes: ["Respond with structure", "Reduce noise, improve signal", "Document incidents credibly"],
        audience: ["SOC analysts", "Ops engineers needing security context"],
        prerequisites: ["Basic system and network awareness"],
        modules: ["Alert handling", "Investigation workflow", "Containment thinking", "Response documentation"],
        meta: { level: "Foundations", duration: "14–18 hours", format: "Instructor-led + labs", category: "Defensive & Response" },
    },
    "cloud-platform": {
        title: "Cloud Security (Foundations)",
        subtitle: "Principles for secure cloud environments",
        seoDescription:
            "Establish secure cloud foundations—IAM, configuration hygiene, exposure reduction, logging, and monitoring baselines.",
        overview: ["Access control thinking and exposure reduction.", "Essential monitoring and configuration practices."],
        capabilities: ["Cloud IAM basics", "Configuration security", "Logging and monitoring"],
        outcomes: ["Reduce cloud exposure", "Improve configuration hygiene", "Establish baseline controls"],
        audience: ["Cloud engineers", "Platform/DevOps teams"],
        prerequisites: ["Cloud provider familiarity", "Basic IAM concepts"],
        modules: ["Identity and access", "Workload exposure", "Configuration baselines", "Monitoring principles"],
        meta: { level: "Foundations", duration: "12–16 hours", format: "Instructor-led + labs", category: "Cloud & Platform" },
    },
    "grc-risk": {
        title: "GRC / Risk & Compliance (Foundations)",
        subtitle: "Governance, risk, and control fundamentals",
        seoDescription:
            "Understand governance, risk, and compliance—risk framing, control mapping, policy fundamentals, and compliance alignment.",
        overview: ["Risk language and control thinking.", "Policy and compliance alignment."],
        capabilities: ["Risk assessment basics", "Control mapping", "Policy fundamentals"],
        outcomes: ["Align security with business and regulation", "Communicate controls clearly", "Support governance outcomes"],
        audience: ["GRC associates", "Security leaders establishing governance"],
        prerequisites: ["Basic business and IT context"],
        modules: ["Risk framing", "Control catalogs", "Policy lifecycle", "Compliance alignment"],
        meta: { level: "Foundations", duration: "10–14 hours", format: "Instructor-led + labs", category: "GRC & Risk" },
    },
    "dfir-threat-intelligence": {
        title: "DFIR & Threat Intelligence (Foundations)",
        subtitle: "Investigation and adversary analysis basics",
        seoDescription:
            "Develop DFIR and threat intel skills—evidence handling, timeline analysis, adversary context, and reporting clarity.",
        overview: ["Evidence handling and response coordination.", "Adversary and campaign analysis."],
        capabilities: ["Forensics mindset", "Incident coordination", "Threat analysis lifecycle"],
        outcomes: ["Coordinate credible investigations", "Analyze adversary context", "Inform defense decisions"],
        audience: ["DFIR associates", "Analysts learning threat intel"],
        prerequisites: ["System and log familiarity"],
        modules: ["Evidence handling", "Timeline analysis", "Intel lifecycle", "Reporting clarity"],
        meta: { level: "Foundations", duration: "14–18 hours", format: "Instructor-led + labs", category: "DFIR & Threat Intelligence" },
    },
    "ai-security": {
        title: "AI / Agentic AI Application Security",
        subtitle: "Secure AI features and workflows",
        seoDescription:
            "Secure AI applications and agentic workflows—misuse scenarios, guardrails, control design, data exposure and monitoring requirements.",
        overview: ["Misuse scenarios and control requirements.", "Security-by-design for AI actions and tools."],
        capabilities: ["AI threat modeling", "Control design", "Monitoring requirements"],
        outcomes: ["Reduce AI misuse risk", "Design safer AI workflows", "Monitor AI systems credibly"],
        audience: ["AI builders", "Product/security teams enabling AI"],
        prerequisites: ["Basic programming and API familiarity"],
        modules: ["Misuse scenarios", "Guardrails and controls", "Data exposure patterns", "Monitoring principles"],
        meta: { level: "Foundations", duration: "12–16 hours", format: "Instructor-led + labs", category: "AI Security" },
    },
};

export async function generateStaticParams() {
    return Object.keys(COURSES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const course = COURSES[slug];
    if (!course) {
        return { title: "Course Not Found | PerthSOC Academy" };
    }
    return {
        title: `${course.title} | PerthSOC Academy`,
        description: course.seoDescription ?? course.subtitle ?? course.overview[0],
    };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = COURSES[slug];
    if (!course) {
        notFound();
    }

    return (
        <main>
            <section className="relative w-full bg-[#0A0D12] py-20 md:py-28">
                <div className="pointer-events-none absolute inset-0">
                    <BackgroundPattern pattern="grid" size="lg" className="absolute inset-0 w-full h-full text-white/15 opacity-15" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />
                </div>
                <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-5xl">
                        <div className="max-w-3xl">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{course.title}</h1>
                            <div className="mt-2 text-sm font-semibold text-white/85">{course.meta.category}</div>
                            <p className="mt-3 text-white/80 md:text-lg">
                                {course.subtitle ?? course.overview[0]}
                            </p>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <ShineButton href="/contact" className="cursor-cta-trendy" color="secondary-destructive" size="lg">
                                    Enroll in {course.title}
                                </ShineButton>
                                <Button href="/programs/role-tracks" color="link-gray" className="rounded-full text-white/90 hover:text-white" size="lg">
                                    View Role Pathways
                                </Button>
                            </div>
                            <div className="mt-6 flex flex-wrap items-center gap-2">
                                <Badge type="modern" size="sm" color="gray" className="px-3 py-1 text-xs font-semibold">
                                    Level: {course.meta.level}
                                </Badge>
                                <Badge type="modern" size="sm" color="gray" className="px-3 py-1 text-xs font-semibold">
                                    Duration: {course.meta.duration}
                                </Badge>
                                <Badge type="modern" size="sm" color="gray" className="px-3 py-1 text-xs font-semibold">
                                    Format: {course.meta.format}
                                </Badge>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="rounded-xl ring-1 ring-white/12 bg-white/[0.03] p-4">
                                <div className="text-xs font-semibold text-white/70">Level</div>
                                <div className="mt-1 text-sm text-white/85">{course.meta.level}</div>
                            </div>
                            <div className="rounded-xl ring-1 ring-white/12 bg-white/[0.03] p-4">
                                <div className="text-xs font-semibold text-white/70">Duration</div>
                                <div className="mt-1 text-sm text-white/85">{course.meta.duration}</div>
                            </div>
                            <div className="rounded-xl ring-1 ring-white/12 bg-white/[0.03] p-4">
                                <div className="text-xs font-semibold text-white/70">Format</div>
                                <div className="mt-1 text-sm text-white/85">{course.meta.format}</div>
                            </div>
                            <div className="rounded-xl ring-1 ring-white/12 bg-white/[0.03] p-4">
                                <div className="text-xs font-semibold text-white/70">Prerequisites</div>
                                <div className="mt-1 text-sm text-white/85">{course.prerequisites?.join(", ") ?? "None"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="overview" className="bg-[#0A0D12]">
                <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                    <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <div className="rounded-2xl ring-1 ring-white/12 bg-white/[0.03] p-6">
                                <h2 className="text-xl font-semibold text-white">What You’ll Learn</h2>
                                <ul className="mt-3 space-y-2 text-white/80">
                                    {course.overview.map((o) => (
                                        <li key={o} className="text-sm">• {o}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6 rounded-2xl ring-1 ring-white/12 bg-white/[0.03] p-6">
                                <h2 className="text-xl font-semibold text-white">Capabilities You Build</h2>
                                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {course.capabilities.map((c) => (
                                        <li key={c} className="text-sm text-white/80">• {c}</li>
                                    ))}
                                </ul>
                            </div>
                            <div id="curriculum" className="mt-6 rounded-2xl ring-1 ring-white/12 bg-white/[0.03] p-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-white">Curriculum Outline</h2>
                                    <Button href="#prerequisites" size="sm" color="link-gray" className="rounded-full text-white/85 hover:text-white">
                                        View Prerequisites
                                    </Button>
                                </div>
                                <ul className="mt-3 space-y-2">
                                    {course.modules.map((m) => (
                                        <li key={m} className="text-sm text-white/80">• {m}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <div className="rounded-2xl ring-1 ring-white/12 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-semibold text-white">Who It’s For</h3>
                                <ul className="mt-3 space-y-2">
                                    {course.audience.map((a) => (
                                        <li key={a} className="text-sm text-white/80">• {a}</li>
                                    ))}
                                </ul>
                            </div>
                            <div id="outcomes" className="mt-6 rounded-2xl ring-1 ring-white/12 bg-white/[0.03] p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-white">Learning Outcomes</h3>
                                    <Button href="#curriculum" size="sm" color="link-gray" className="rounded-full text-white/85 hover:text-white">
                                        View Curriculum
                                    </Button>
                                </div>
                                <ul className="mt-3 space-y-2">
                                    {course.outcomes.map((o) => (
                                        <li key={o} className="text-sm text-white/80">• {o}</li>
                                    ))}
                                </ul>
                            </div>
                            <div id="prerequisites" className="mt-6 rounded-2xl ring-1 ring-white/12 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-semibold text-white">Prerequisites</h3>
                                <ul className="mt-3 space-y-2">
                                    {(course.prerequisites ?? ["None"]).map((p) => (
                                        <li key={p} className="text-sm text-white/80">• {p}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6 rounded-2xl ring-1 ring-white/12 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-semibold text-white">Next Steps</h3>
                                <div className="mt-3 grid grid-cols-1 gap-3">
                                    <ShineButton href="/programs" className="cursor-cta-trendy" color="secondary" size="md">
                                        Browse Courses
                                    </ShineButton>
                                    <Button href="/programs/role-tracks" size="md" color="link-gray" className="rounded-full text-white/90 hover:text-white">
                                        Compare Tracks
                                    </Button>
                                    <Button href="/contact" size="md" color="link-gray" className="rounded-full text-white/90 hover:text-white">
                                        Ask a Question
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
