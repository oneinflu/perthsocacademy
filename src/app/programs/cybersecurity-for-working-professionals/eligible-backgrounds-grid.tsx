import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { FileCode01, LifeBuoy01, MessageChatCircle, ChartBreakoutSquare, ZapFast, User01 } from "@untitledui/icons";

const roles = [
    { label: "Developers & Coders", icon: FileCode01 },
    { label: "Testers / QA Engineers", icon: LifeBuoy01 },
    { label: "System Administrators", icon: MessageChatCircle },
    { label: "Network Administrators", icon: ChartBreakoutSquare },
    { label: "DevOps Engineers", icon: ZapFast },
    { label: "IT Support & Operations", icon: User01 },
];

export default function EligibleBackgroundsGrid() {
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Eligible Professional Backgrounds</h2>
                    <p className="mt-3 text-white/75 md:text-lg">
                        If you work in software, QA, systems, networks, DevOps, or IT operations, this accelerator maps your experience into security outcomes.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {roles.map((r) => (
                        <div key={r.label} className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-4 md:p-5 transition-transform hover:-translate-y-[2px] hover:bg-white/[0.05]">
                            <div className="aspect-square flex flex-col items-center justify-center gap-3">
                                <FeaturedIcon icon={r.icon} size="lg" color="gray" theme="modern" />
                                <div className="text-center text-white font-semibold text-sm md:text-base">{r.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
