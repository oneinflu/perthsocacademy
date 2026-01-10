import type { Metadata } from "next";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { Button } from "@/components/base/buttons/button";

export const metadata: Metadata = {
    title: "Contact PerthSOC Academy",
    description: "Get in touch to discuss courses, role pathways, or corporate training plans.",
};

export default function ContactPage() {
    return (
        <main>
            <section className="relative w-full bg-[#0A0D12] py-24 md:py-32">
                <div className="pointer-events-none absolute inset-0">
                    <BackgroundPattern pattern="grid" size="lg" className="absolute inset-0 w-full h-full text-white/15 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />
                </div>
                <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-4xl">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Speak With an Advisor</h1>
                        <p className="mt-3 text-white/80 md:text-lg">
                            Tell us about your goals. We’ll recommend a course or pathway and share next steps.
                        </p>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-2xl ring-1 ring-white/12 bg-white/[0.03] p-6">
                                <div className="space-y-4">
                                    <Input label="Full Name" placeholder="Your name" size="md" />
                                    <Input label="Email" placeholder="you@example.com" size="md" />
                                    <Input label="Phone (optional)" placeholder="+1 (555) 000-0000" size="md" />
                                    <Input label="Interest" placeholder="Course / Role Pathway / Corporate Training" size="md" />
                                    <TextArea label="Message" placeholder="Briefly describe your background and goals" />
                                    <div className="flex items-center gap-3 pt-2">
                                        <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg">
                                            Speak With an Advisor
                                        </ShineButton>
                                        <Button href="/programs/role-tracks" color="link-gray" className="rounded-full text-white/90 hover:text-white" size="lg">
                                            View Role Pathways
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl ring-1 ring-white/12 bg-white/[0.03] p-6">
                                <div className="space-y-3">
                                    <div className="text-white font-semibold">What we cover</div>
                                    <ul className="space-y-2 text-sm text-white/80">
                                        <li>• Best-fit course or pathway based on your background</li>
                                        <li>• Role readiness and capability outcomes</li>
                                        <li>• Timelines, format, and expectations</li>
                                    </ul>
                                    <div className="mt-4 h-px w-full bg-white/10" />
                                    <div className="text-white font-semibold">Corporate inquiries</div>
                                    <p className="text-sm text-white/80">
                                        For role-based team upskilling, request a tailored plan aligned to your teams, systems, and risk profile.
                                    </p>
                                    <div className="pt-2">
                                        <Button href="/programs/corporate-training" size="md" color="secondary">
                                            Request Corporate Training
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
