import type { Metadata } from "next";
import { AcademyHero } from "@/app/academy-hero";
import { AcademyPillars } from "@/app/academy-pillars";
import { AcademyLearningStrip } from "@/app/academy-learning-strip";
import { PopularPrograms } from "@/app/popular-programs";
import { PopularCourses } from "@/app/popular-courses";
import { BannerStrip } from "@/components/application/banner-strip";
import { DomainCoverage } from "@/app/domain-coverage";
import { CorporateTrainingCTA } from "@/components/application/corporate-training-cta";

export const metadata: Metadata = {
    title: "SOC Academy | Training for Modern Security Operations & AI Security",
    description:
        "Explore Atlanta SOC Academy — a professional training institution focused on security operations, agentic AI security, governance, and real-world cyber defense.",
};

export default function AcademyPage() {
    return (
        <main>
            <AcademyHero />
            <BannerStrip variant="structured-pathways" />
            <AcademyPillars />  
            <DomainCoverage />
            <CorporateTrainingCTA />
           
        </main>
    );
}
