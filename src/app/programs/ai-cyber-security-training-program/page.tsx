import type { Metadata } from "next";
import { CAASPHero } from "@/app/programs/caasp-hero";
import { WhyProgramExists } from "@/app/programs/why-program-exists";
import { AgenticVisualStory } from "@/app/programs/agentic-visual-story";
import { MarketGapSummary } from "@/app/programs/market-gap-summary";
import { MarketDemand } from "@/app/programs/market-demand";
import { JobRoles } from "@/app/programs/job-roles";
import { SkillsGap } from "@/app/programs/skills-gap";
import { Curriculum } from "@/app/programs/curriculum";
import { Certification } from "@/app/programs/certification";
import { CourseOutcomes } from "@/app/programs/course-outcomes";
import { CertificationTrust } from "@/app/programs/certification-trust";
import { Capstone } from "@/app/programs/capstone";
import { NextStepCTA } from "@/app/programs/cta-next-step";
import ProgramsParallaxPage from "@/app/programs/programs-parallax-page";

export const metadata: Metadata = {
    title: "Agentic AI Security Certification | CAASP Program at SOC Academy",
    description:
        "The CAASP program trains professionals to secure autonomous and multi-agent AI systems through hands-on labs, red teaming, and industry-aligned certification.",
};

export default function AICyberProgramPage() {
    return (
        <main>
            <ProgramsParallaxPage>
                <CAASPHero />
                <WhyProgramExists />
                <CourseOutcomes />
                <Curriculum />
                <Capstone />
                <NextStepCTA />
            </ProgramsParallaxPage>
        </main>
    );
}
