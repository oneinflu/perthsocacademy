import type { Metadata } from "next";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { Button } from "@/components/base/buttons/button";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BarChart02, FileCode01, LifeBuoy01, MessageChatCircle, Shield01, ZapFast, ChartBreakoutSquare, ArrowRight } from "@untitledui/icons";
import WorkingProReassuranceStrip from "./reassurance-strip";
import AcceleratorApproach from "./accelerator-approach";
import EligibleBackgroundsGrid from "./eligible-backgrounds-grid";
import TransitionPathways from "./transition-pathways";
import CareerSwitcherFAQ from "./career-switcher-faq";

export const metadata: Metadata = {
    title: "Cybersecurity Career Upgrade for Working Professionals | PerthSOC Academy",
    description:
        "Outcome-driven, role-aligned transition for experienced IT professionals—accelerate into cybersecurity without restarting your career.",
};

export default function WorkingProfessionalsPage() {
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
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
                </div>
                <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                        <div>
                            <h1 className="text-[clamp(2.2rem,6.5vw,4rem)] font-semibold tracking-tight text-white">
                                Career Switcher Accelerator
                            </h1>
                            <p className="mt-4 text-lg text-white/80 md:text-xl">
                                Transition into cybersecurity without restarting your career. This program is designed for working professionals to leverage
                                existing skills and move into security-focused roles with confidence.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center  gap-3">
                                <ShineButton href="/programs" className="cursor-cta-trendy" color="secondary-destructive" size="xl" iconTrailing={<ArrowRight />}>
                                    Explore Transition Pathways
                                </ShineButton>
                                <ShineButton href="/contact" className="rounded-full" color="secondary" size="xl">
                                    Talk to an Advisor
                                </ShineButton>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-6 md:p-8">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.04] p-4">
                                        <div className="flex items-center gap-2">
                                            <FeaturedIcon icon={FileCode01} size="md" color="gray" theme="modern" />
                                            <span className="text-sm font-semibold text-white">Build</span>
                                        </div>
                                        <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                                            <div className="h-2 w-2/3 rounded-full bg-white/30" />
                                        </div>
                                    </div>
                                    <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.04] p-4">
                                        <div className="flex items-center gap-2">
                                            <FeaturedIcon icon={ChartBreakoutSquare} size="md" color="gray" theme="modern" />
                                            <span className="text-sm font-semibold text-white">Evolve</span>
                                        </div>
                                        <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                                            <div className="h-2 w-3/4 rounded-full bg-white/30" />
                                        </div>
                                    </div>
                                    <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.04] p-4">
                                        <div className="flex items-center gap-2">
                                            <FeaturedIcon icon={Shield01} size="md" color="gray" theme="modern" />
                                            <span className="text-sm font-semibold text-white">Secure</span>
                                        </div>
                                        <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                                            <div className="h-2 w-full rounded-full bg-white/30" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-white/70">
                                        <FeaturedIcon icon={ZapFast} size="sm" color="gray" theme="modern" />
                                        <span className="text-sm">Role evolution visual</span>
                                    </div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WorkingProReassuranceStrip />
            <AcceleratorApproach />

            <EligibleBackgroundsGrid />
            <TransitionPathways />
            <CareerSwitcherFAQ />
        </main>
    );
}
