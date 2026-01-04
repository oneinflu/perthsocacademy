import type { Metadata } from "next";
import { AcademyHero } from "@/app/academy-hero";
import { AcademyPillars } from "@/app/academy-pillars";
import { AcademyLearningStrip } from "@/app/academy-learning-strip";
import { ProgramsFeaturedStack } from "@/app/programs-featured-stack";

export const metadata: Metadata = {
    title: "SOC Academy | Training for Modern Security Operations & AI Security",
    description:
        "Explore Perth SOC Academy — a professional training institution focused on security operations, agentic AI security, governance, and real-world cyber defense.",
};

export default function AcademyPage() {
    return (
        <main>
            <AcademyHero />
            <AcademyPillars />  
           
        </main>
    );
}
