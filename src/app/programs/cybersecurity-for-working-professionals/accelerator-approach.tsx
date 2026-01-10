import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { FileCode01, Shield01, ChartBreakoutSquare } from "@untitledui/icons";

export default function AcceleratorApproach() {
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                        Accelerate Your Transition, Don’t Restart
                    </h2>
                    <p className="mt-4 text-white/75 md:text-lg">
                        This accelerator is built for professionals who already understand systems, code, or infrastructure. The focus is on adding security
                        depth to what you already know—not starting from scratch.
                    </p>
                </div>

                <div className="mt-10 flex flex-col items-center">
                    <div className="hidden md:flex items-center justify-center gap-4">
                        <div className="flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/10 bg-white/[0.03]">
                            <FeaturedIcon icon={FileCode01} size="sm" color="gray" theme="modern" />
                            <span className="text-sm text-white/80">Current Role</span>
                        </div>
                        <div className="h-px w-12 bg-gradient-to-r from-white/10 via-white/25 to-white/10" />
                        <div className="flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/10 bg-white/[0.03]">
                            <FeaturedIcon icon={Shield01} size="sm" color="gray" theme="modern" />
                            <span className="text-sm text-white/80">Security Overlay</span>
                        </div>
                        <div className="h-px w-12 bg-gradient-to-r from-white/10 via-white/25 to-white/10" />
                        <div className="flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/10 bg-white/[0.03]">
                            <FeaturedIcon icon={ChartBreakoutSquare} size="sm" color="gray" theme="modern" />
                            <span className="text-sm text-white/80">New Security Role</span>
                        </div>
                    </div>
                    <div className="md:hidden w-full">
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/10 bg-white/[0.03]">
                                <FeaturedIcon icon={FileCode01} size="sm" color="gray" theme="modern" />
                                <span className="text-sm text-white/80">Current Role</span>
                            </div>
                            <div className="h-px w-24 bg-gradient-to-r from-white/10 via-white/25 to-white/10" />
                            <div className="flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/10 bg-white/[0.03]">
                                <FeaturedIcon icon={Shield01} size="sm" color="gray" theme="modern" />
                                <span className="text-sm text-white/80">Security Overlay</span>
                            </div>
                            <div className="h-px w-24 bg-gradient-to-r from-white/10 via-white/25 to-white/10" />
                            <div className="flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/10 bg-white/[0.03]">
                                <FeaturedIcon icon={ChartBreakoutSquare} size="sm" color="gray" theme="modern" />
                                <span className="text-sm text-white/80">New Security Role</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
