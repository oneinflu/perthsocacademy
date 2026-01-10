"use client";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { ProgramCard } from "@/components/application/program-card";

export const PopularPrograms = () => {
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
                    <div className="text-md font-semibold text-brand-secondary">Programs Designed for Every Stage</div>
                    <h2 className="mt-3 text-display-sm font-semibold text-white md:text-display-md">Popular Programs</h2>
                    <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-60" />
                </div>
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <ProgramCard
                        title="Fresh Graduate Cybersecurity Launchpad"
                        subtitle="Start strong. Build fundamentals. Choose the right track."
                        description="A structured entry pathway for graduates to develop core cybersecurity understanding, hands-on confidence, and a clear specialization direction across modern security domains."
                        bestFor="Fresh graduates, students"
                        href="/programs/cybersecurity-for-fresh-graduates"
                        ctaLabel="Explore Programs"
                    />
                    <ProgramCard
                        title="Career Switcher Accelerator"
                        subtitle="Transition into security without restarting your career."
                        description="A focused pathway for developers, testers, system admins, network admins, and DevOps professionals to translate existing technical skills into security capability and job-aligned outcomes."
                        bestFor="Working professionals pivoting into cybersecurity"
                        href="/programs/cybersecurity-for-working-professionals"
                        ctaLabel="Find My Best-Fit Path"
                    />
                    <ProgramCard
                        title="Corporate Upskilling & Reskilling"
                        subtitle="Build measurable security capability across technical teams."
                        description="Role-aligned training for engineering, QA, cloud/platform, and IT operations teams—designed to strengthen security posture, reduce defects, and improve operational readiness."
                        bestFor="Corporate technical teams"
                        href="/programs/corporate-training"
                        ctaLabel="Request Corporate Training"
                    />
                    <ProgramCard
                        title="Role-Based Security Programs"
                        subtitle="Select a target role. Follow a structured learning path."
                        description="Job-role programs designed around real security responsibilities—application security, cloud security, ethical hacking, incident response, GRC, DFIR, and AI security."
                        bestFor="Anyone with a target role in mind"
                        href="/programs/role-tracks"
                        ctaLabel="View Role-Based Tracks"
                    />
                </div>
            </div>
        </section>
    );
};
