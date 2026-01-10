"use client";
import { useRef } from "react";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { CourseCard } from "@/components/application/course-card";
import { ChevronRight, ChevronLeft } from "@untitledui/icons";

const courses = [
    {
        title: "Cybersecurity Fundamentals",
        category: "Foundations",
        image: "/courses/cyber.jpg",
        tagline: "The foundation for every security path.",
        copy: "Build core cybersecurity concepts and practical context across identity, networks, operating systems, applications, and cloud—then choose a specialization with clarity.",
    },
    {
        title: "Web & Mobile Application Security",
        category: "Apps & APIs",
        image: "/courses/web.jpg",
        tagline: "Secure modern applications—web, mobile, and APIs.",
        copy: "Learn how application vulnerabilities emerge, how to validate them responsibly, and how to communicate remediation clearly for engineering teams.",
    },
    {
        title: "Ethical Hacking (Foundations)",
        category: "Adversarial",
        image: "/courses/ethical.jpg",
        tagline: "Learn offensive testing with discipline and scope.",
        copy: "Develop a structured approach to identify and validate common weaknesses, document evidence, and recommend actionable remediation.",
    },
    {
        title: "Cloud Security (Foundations)",
        category: "Cloud & Infra",
        image: "/courses/cloud.jpg",
        tagline: "Security principles applied to cloud environments.",
        copy: "Understand cloud risk fundamentals, access control thinking, exposure reduction principles, and essential security practices for modern cloud workloads.",
    },
    {
        title: "SOC Analyst (Foundations)",
        category: "SOC",
        image: "/courses/soc.jpg",
        tagline: "Learn detection and investigation fundamentals.",
        copy: "Develop an analyst mindset for triage, investigation flow, and incident documentation—useful for operational roles and security awareness across teams.",
    },
    {
        title: "Incident Response Essentials",
        category: "Response",
        image: "/courses/incident.jpg",
        tagline: "Prepare for incidents with clarity and control.",
        copy: "Learn incident lifecycle fundamentals, communication discipline, containment thinking, and response documentation practices for operational readiness.",
    },
    {
        title: "GRC / Risk & Compliance (Foundations)",
        category: "Governance",
        image: "/courses/grc.jpg",
        tagline: "Translate security into governance and controls.",
        copy: "Understand risk language, control thinking, policy fundamentals, and compliance alignment—essential for security governance and enterprise security roles.",
    },
    {
        title: "DFIR Foundations",
        category: "Forensics",
        image: "/courses/dfir.jpg",
        tagline: "Investigation fundamentals for modern incidents.",
        copy: "Learn evidence handling principles, investigation thinking, and structured response practices that support credible incident analysis and reporting.",
    },
    {
        title: "AI / Agentic AI Application Security",
        category: "AI Security",
        image: "/courses/ai.jpg",
        tagline: "Secure AI features, tools, actions, and workflows.",
        copy: "Understand misuse scenarios and control requirements for AI-enabled applications—data exposure patterns, action safety, and security-by-design for AI workflows.",
    },
];

export const PopularCourses = () => {
    const railRef = useRef<HTMLDivElement | null>(null);
    const scrollBy = (dir: "left" | "right") => {
        const rail = railRef.current;
        if (!rail) return;
        const amount = 320 * 2;
        rail.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    };

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
                    <h2 className="text-display-sm font-semibold text-white md:text-display-md">Popular courses</h2>
                    <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-60" />
                </div>
                <div className="relative mt-8">
                    <div
                        ref={railRef}
                        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-1"
                    >
                        {courses.map((c) => (
                            <div key={c.title} className="snap-start">
                                <CourseCard
                                    title={c.title}
                                    category={c.category}
                                    imageUrl={c.image}
                                    tagline={c.tagline}
                                    copy={c.copy}
                                    href={
                                        c.title === "Cybersecurity Fundamentals"
                                            ? "/courses/cybersecurity-fundamentals"
                                            : c.title === "Web & Mobile Application Security"
                                            ? "/courses/application-security"
                                            : c.title === "Ethical Hacking (Foundations)"
                                            ? "/courses/offensive-security"
                                            : c.title === "Cloud Security (Foundations)"
                                            ? "/courses/cloud-platform"
                                            : c.title === "SOC Analyst (Foundations)"
                                            ? "/courses/defensive-response"
                                            : c.title === "Incident Response Essentials"
                                            ? "/courses/defensive-response"
                                            : c.title === "GRC / Risk & Compliance (Foundations)"
                                            ? "/courses/grc-risk"
                                            : c.title === "DFIR Foundations"
                                            ? "/courses/dfir-threat-intelligence"
                                            : c.title === "AI / Agentic AI Application Security"
                                            ? "/courses/ai-security"
                                            : "/programs"
                                    }
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute right-2 -bottom-8 flex items-center gap-2">
                        <button
                            aria-label="Scroll left"
                            onClick={() => scrollBy("left")}
                            className="flex items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/12"
                        >
                            <ChevronLeft className="size-5 text-white/85" />
                        </button>
                        <button
                            aria-label="Scroll right"
                            onClick={() => scrollBy("right")}
                            className="flex items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/12"
                        >
                            <ChevronRight className="size-5 text-white/85" />
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .no-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};
