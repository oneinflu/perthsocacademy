import { Illustration } from "@/components/shared-assets/illustrations";

export default function LearningPhilosophy() {
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Start the Right Way</h2>
                    <p className="mt-3 text-base md:text-lg text-white/80">Cybersecurity is a broad field. This program is designed to help you build clarity first, not confusion—by strengthening fundamentals before committing to a specific role.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-6">
                        <div className="flex justify-center">
                            <Illustration type="box" size="sm" className="text-white/20" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-white text-center">Foundation</h3>
                        <p className="mt-2 text-sm text-white/75 text-center">Strengthen fundamentals to build clarity and confidence before diving deeper.</p>
                    </div>
                    <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-6">
                        <div className="flex justify-center">
                            <Illustration type="cloud" size="sm" className="text-white/20" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-white text-center">Explore</h3>
                        <p className="mt-2 text-sm text-white/75 text-center">Sample domains and workflows to understand what fits best.</p>
                    </div>
                    <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-6">
                        <div className="flex justify-center">
                            <Illustration type="documents" size="sm" className="text-white/20" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-white text-center">Specialise</h3>
                        <p className="mt-2 text-sm text-white/75 text-center">Commit to a role-aligned track and go deeper with guided practice.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
