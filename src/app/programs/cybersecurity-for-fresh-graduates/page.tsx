import type { Metadata } from "next";
import { FreshGraduatesHero } from "./fresh-graduates-hero";
import { BookOpen01, CheckCircle, User01, ChartBreakoutSquare } from "@untitledui/icons";
import LearningPhilosophy from "./learning-philosophy";
import FoundationalAreas from "./foundational-areas";
import RoleTracks from "./role-tracks";
import FreshGraduateFAQ from "./fresh-graduate-faq";


export const metadata: Metadata = {
    title: "Cybersecurity for Fresh Graduates | PerthSOC Academy",
    description:
        "A clear starting path for fresh graduates entering cybersecurity — foundations, SOC context, and guided practice leading into role-aligned tracks.",
};

export default function FreshGraduatesPage() {
    return (
        <main>
            <FreshGraduatesHero />
            <section className="bg-[#0A0D12]">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 border-t border-white/10 py-6 md:py-8">
                        <div className="flex items-center gap-3">
                            <BookOpen01 className="size-5 text-white/70" />
                            <span className="text-sm text-white/80">Beginner-friendly</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="size-5 text-white/70" />
                            <span className="text-sm text-white/80">No prior experience required</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <User01 className="size-5 text-white/70" />
                            <span className="text-sm text-white/80">Role-based learning</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <ChartBreakoutSquare className="size-5 text-white/70" />
                            <span className="text-sm text-white/80">Industry-aligned skills</span>
                        </div>
                    </div>
                </div>
            </section>
            <LearningPhilosophy />
            <FoundationalAreas />
            <RoleTracks />
            <FreshGraduateFAQ />
          
        </main>
    );
}
