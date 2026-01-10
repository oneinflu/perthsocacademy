"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { cx } from "@/utils/cx";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { ArrowRight } from "@untitledui/icons";

export const ProgramCard = ({
    title,
    subtitle,
    tags = [],
    href,
    ctaLabel = "Explore",
    description,
    bestFor,
    className,
}: {
    title: string;
    subtitle?: string;
    tags?: string[];
    href?: string;
    ctaLabel?: string;
    description?: string;
    bestFor?: string;
    className?: string;
}) => {
    const Wrapper = href ? Link : "div";
    const wrapperProps = href ? { href } : {};
    return (
        // @ts-expect-error next/link polymorphic wrapper
        <Wrapper {...wrapperProps} className={cx("block", className)}>
            <motion.div
                initial={{ y: 18, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl bg-[#0B0F14]/75 p-6 md:p-7 ring-1 ring-white/10 backdrop-blur-md hover:bg-[#0B0F14]/80 hover:ring-white/14"
                style={{
                    boxShadow:
                        "0 0 0 0.5px rgba(127,86,217,0.28), 0 24px 60px rgba(0,0,0,0.35), 0 0 48px rgba(68,76,231,0.10)",
                }}
            >
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl -z-[1] opacity-60"
                    style={{
                        background:
                            "radial-gradient(600px circle at 18% 12%, rgba(139,92,246,0.18), transparent 42%)",
                    }}
                />
                <div className="flex flex-col gap-3">
                    <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10">
                        <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-2.5 py-1 text-xs font-medium text-white/85 ring-1 ring-white/10 backdrop-blur-sm">
                            Audience-led pathway
                        </span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="text-xl md:text-2xl font-semibold text-white">{title}</div>
                            {subtitle && <div className="mt-1.5 text-sm text-white/70">{subtitle}</div>}
                            {tags.length > 0 && (
                                <div className="mt-3 flex flex-wrap items-center gap-2">
                                    {tags.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {description && <div className="mt-3 text-sm text-white/75">{description}</div>}
                            {bestFor && <div className="mt-2 text-xs font-medium text-white/70">Best for: {bestFor}</div>}
                        </div>
                        <div className="mt-2 flex items-center justify-end">
                            <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight}>
                                {ctaLabel}
                            </ShineButton>
                        </div>
                    </div>
                </div>
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
                />
            </motion.div>
        </Wrapper>
    );
};
