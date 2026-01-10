"use client";

import { motion } from "motion/react";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { ChartBreakoutSquare, MessageChatCircle, SearchLg, User01, ZapFast } from "@untitledui/icons";

const items = [
    {
        icon: ChartBreakoutSquare,
        title: "Structured roadmaps",
        body: "Clear sequencing from foundational to advanced.",
    },
    {
        icon: ZapFast,
        title: "Outcome-driven learning",
        body: "Capabilities you can demonstrate—not just theory.",
    },
    {
        icon: User01,
        title: "Role alignment",
        body: "Training mapped to how security roles operate in practice.",
    },
    {
        icon: MessageChatCircle,
        title: "Innovation-ready domains",
        body: "Modern coverage including cloud, APIs, and AI systems.",
    },
    {
        icon: SearchLg,
        title: "Assessment checkpoints",
        body: "Validate progress and capability development.",
    },
];

export const WhyAtlantaSOC = () => {
    return (
        <section className="w-full bg-primary overflow-hidden py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
                >
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Why PerthSOC Academy</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Formal differentiators</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="mx-auto mt-10 w-full max-w-5xl"
                >
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                        {items.slice(0, 3).map((it) => (
                            <div key={it.title} className="flex items-start gap-4">
                                <FeaturedIcon icon={it.icon} size="lg" color="gray" theme="modern" />
                                <div className="flex-1">
                                    <div className="text-md font-semibold text-primary">{it.title}</div>
                                    <div className="mt-1 text-sm text-tertiary">{it.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-wrap items-start justify-center gap-10 md:gap-12">
                        {items.slice(3).map((it) => (
                            <div key={it.title} className="flex max-w-md items-start gap-4">
                                <FeaturedIcon icon={it.icon} size="lg" color="gray" theme="modern" />
                                <div className="flex-1">
                                    <div className="text-md font-semibold text-primary">{it.title}</div>
                                    <div className="mt-1 text-sm text-tertiary">{it.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
