"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { cx } from "@/utils/cx";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { ArrowRight } from "@untitledui/icons";

export const CourseCard = ({
    title,
    category,
    imageUrl,
    tagline,
    copy,
    href,
    className,
}: {
    title: string;
    category?: string;
    imageUrl: string;
    tagline?: string;
    copy?: string;
    href?: string;
    className?: string;
}) => {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const showDetails = hovered || active;

    return (
        <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={cx(
                "relative h-[430px] w-[280px] overflow-hidden rounded-2xl ring-1 ring-white/10 shrink-0",
                "bg-[#0B0F14]",
                className,
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setActive((v) => !v)}
        >
            <Image src={imageUrl} alt={title} fill sizes="280px" className="object-cover" priority={false} />
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="text-xs font-semibold text-white/85">{category}</div>
                <div className="text-white font-semibold text-xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">{title}</div>
            </div>
            <motion.div
                initial={false}
                animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-x-0 bottom-0 p-4"
            >
                <div className="rounded-xl bg-[#0B0F14]/92 p-4 ring-1 ring-white/10 backdrop-blur">
                    {tagline && <div className="text-sm font-semibold text-white">{tagline}</div>}
                    {copy && <div className="mt-2 text-xs text-white/80">{copy}</div>}
                    <div className="mt-3 flex justify-end">
                        <ShineButton href={href} className="cursor-cta-trendy" color="secondary-destructive" size="sm" iconTrailing={ArrowRight}>
                            View Curriculum
                        </ShineButton>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
