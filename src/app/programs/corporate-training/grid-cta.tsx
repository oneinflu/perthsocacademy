import { ShineButton } from "@/components/base/buttons/shine-button";
import { DialogTrigger } from "@/components/application/modals/modal";
import { CorporateTrainingRequestModal } from "@/components/application/corporate-training-cta";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const CorporateGridCTA = () => {
    return (
        <section className="relative w-full bg-[#0A0D12] py-20 md:py-24">
            <div className="pointer-events-none absolute inset-0">
                <BackgroundPattern pattern="grid" size="lg" className="absolute inset-0 w-full h-full text-white/15 opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
            </div>
            <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                        Build Cybersecurity Capability Across Your Teams
                    </h2>
                    <p className="mt-3 text-white/80 md:text-lg">
                        Request a tailored corporate training plan aligned to your teams, systems, and risk profile.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <DialogTrigger>
                            <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="xl">Request Corporate Training Plan</ShineButton>
                            <CorporateTrainingRequestModal />
                        </DialogTrigger>
                    </div>
                </div>
            </div>
        </section>
    );
};
