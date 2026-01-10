 "use client";

import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Dialog, DialogTrigger, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { FileCode01, LifeBuoy01, MessageChatCircle, ChartBreakoutSquare, ZapFast, ChevronRight } from "@untitledui/icons";

type Pathway = {
    current: string;
    target: string;
    description: string;
    iconCurrent: any;
    iconTarget: any;
};

const pathways: Pathway[] = [
    {
        current: "Developer",
        target: "Application Security / Secure Coding",
        description: "Move from building applications to securing them through secure design, code review, and threat modeling.",
        iconCurrent: FileCode01,
        iconTarget: FileCode01,
    },
    {
        current: "Tester / QA",
        target: "Security Testing / Vulnerability Validation",
        description: "Expand testing skills into security validation, vulnerability assessment, and exploit verification.",
        iconCurrent: LifeBuoy01,
        iconTarget: LifeBuoy01,
    },
    {
        current: "Sysadmin / IT Ops",
        target: "Hardening, IAM & Incident Readiness",
        description: "Transition from operations into system hardening, identity management, and incident preparedness.",
        iconCurrent: MessageChatCircle,
        iconTarget: MessageChatCircle,
    },
    {
        current: "Network Administrator",
        target: "Network & Cloud Network Security",
        description: "Apply networking expertise to secure on-prem and cloud-based network environments.",
        iconCurrent: ChartBreakoutSquare,
        iconTarget: ChartBreakoutSquare,
    },
    {
        current: "DevOps Engineer",
        target: "DevSecOps & Cloud Security Foundations",
        description: "Embed security into CI/CD pipelines, cloud infrastructure, and automation workflows.",
        iconCurrent: ZapFast,
        iconTarget: ZapFast,
    },
];

export default function TransitionPathways() {
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Outcome-Driven Transition Pathways</h2>
                    <p className="mt-3 text-white/75 md:text-lg">
                        Each pathway builds on your current role and transitions you into a security-focused position.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-8">
                    {pathways.map((p) => (
                        <DialogTrigger key={p.current + p.target}>
                            <button className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-6 text-left transition-transform hover:-translate-y-[2px] hover:bg-white/[0.05]">
                                <div className="flex items-center gap-3">
                                    <FeaturedIcon icon={p.iconCurrent} size="md" color="gray" theme="modern" />
                                    <div className="text-sm font-semibold text-white">{p.current}</div>
                                </div>
                                <div className="my-4 flex items-center gap-2 text-white/60">
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
                                    <ChevronRight className="size-4" />
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <FeaturedIcon icon={p.iconTarget} size="md" color="gray" theme="modern" />
                                    <div className="text-sm font-semibold text-white">{p.target}</div>
                                </div>
                                <div className="mt-3 text-sm text-white/75">{p.description}</div>
                            </button>
                            <ModalOverlay className="!items-center !justify-center">
                                {({}) => (
                                    <Modal className="w-full flex items-center justify-center cursor-auto">
                                        <Dialog className="relative w-[min(92vw,44rem)] max-w-2xl overflow-hidden rounded-2xl bg-[#0B0D12] p-6 md:p-7 ring-1 ring-white/10 shadow-2xl">
                                            <div className="text-white font-semibold text-lg">{p.current} → {p.target}</div>
                                            <div className="mt-3 text-white/75">{p.description}</div>
                                        </Dialog>
                                    </Modal>
                                )}
                            </ModalOverlay>
                        </DialogTrigger>
                    ))}
                </div>
            </div>
        </section>
    );
}
