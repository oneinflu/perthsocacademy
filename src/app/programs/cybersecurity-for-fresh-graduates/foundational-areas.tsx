import { AlertCircle, SearchLg, UploadCloud02, LifeBuoy01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export default function FoundationalAreas() {
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Foundational Learning Areas</h2>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
                    <div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-6 flex flex-col h-full transition-transform hover:-translate-y-[2px] hover:bg-white/[0.05]">
                        <div className="flex items-center gap-3">
                            <FeaturedIcon icon={AlertCircle} size="md" color="gray" theme="modern" />
                            <h3 className="text-lg font-semibold text-white">Security Fundamentals & Risk Thinking</h3>
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                            Understand threats, vulnerabilities, assets, and how security decisions are made.
                        </p>
                    </div>

                    <div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-6 flex flex-col h-full transition-transform hover:-translate-y-[2px] hover:bg-white/[0.05]">
                        <div className="flex items-center gap-3">
                            <FeaturedIcon icon={SearchLg} size="md" color="gray" theme="modern" />
                            <h3 className="text-lg font-semibold text-white">Networking & Operating Systems</h3>
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                            Learn how systems communicate and where security failures actually occur.
                        </p>
                    </div>

                    <div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-6 flex flex-col h-full transition-transform hover:-translate-y-[2px] hover:bg-white/[0.05]">
                        <div className="flex items-center gap-3">
                            <FeaturedIcon icon={UploadCloud02} size="md" color="gray" theme="modern" />
                            <h3 className="text-lg font-semibold text-white">Web, API & Cloud Foundations</h3>
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                            Build context for modern applications and cloud-native environments.
                        </p>
                    </div>

                    <div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-6 flex flex-col h-full transition-transform hover:-translate-y-[2px] hover:bg-white/[0.05]">
                        <div className="flex items-center gap-3">
                            <FeaturedIcon icon={LifeBuoy01} size="md" color="gray" theme="modern" />
                            <h3 className="text-lg font-semibold text-white">Security Hygiene & Failure Patterns</h3>
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                            Passwords, access control, misconfigurations, and common real-world mistakes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
