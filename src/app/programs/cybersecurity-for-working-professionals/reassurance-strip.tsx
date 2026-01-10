import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { User01, FileCode01, BarChart02, CheckCircle } from "@untitledui/icons";

const items = [
    { text: "Designed for working professionals", icon: User01 },
    { text: "Leverage existing IT experience", icon: FileCode01 },
    { text: "Outcome-driven role pathways", icon: BarChart02 },
    { text: "No career reset required", icon: CheckCircle },
];

export default function WorkingProReassuranceStrip() {
    return (
        <section className="bg-[#0A0D12] border-t border-white/10">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 py-6 md:py-8">
                    {items.map((item) => (
                        <div key={item.text} className="flex items-center gap-3 rounded-full px-3 py-2 ring-1 ring-white/10 bg-white/[0.03]">
                            <FeaturedIcon icon={item.icon} size="sm" color="gray" theme="modern" />
                            <span className="text-sm text-white/80">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
