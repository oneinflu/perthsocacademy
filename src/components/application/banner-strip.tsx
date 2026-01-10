"use client";
import { motion } from "motion/react";
import { cx } from "@/utils/cx";

type BannerVariant =
    | "academy-role-based"
    | "structured-pathways"
    | "modern-security-coverage"
    | "designed-for-capability";

const messages: Record<BannerVariant, string> = {
    "academy-role-based": "PerthSOC Academy — role-based cybersecurity training across modern domains.",
    "structured-pathways": "Structured pathways for graduates, career switchers, and corporate technical teams.",
    "modern-security-coverage":
        "Modern security coverage: applications, cloud, governance, response, and AI security.",
    "designed-for-capability": "Designed for capability: clear outcomes, structured learning, applied practice.",
};

export const BannerStrip = ({
    variant = "academy-role-based",
    text,
    className,
}: {
    variant?: BannerVariant;
    text?: string;
    className?: string;
}) => {
    const content = text ?? messages[variant];
    return (
        <div className={cx("w-full  bg-primary", className)}>
            <div className="relative w-full">
                <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative mx-auto w-full max-w-container px-4 md:px-8"
                >
                    <div className="relative rounded-2xl bg-[#0B0F14]/75 p-4 md:p-5 ring-1 ring-white/10 backdrop-blur">
                        <div
                            className="pointer-events-none absolute inset-0 rounded-2xl opacity-60 -z-[1]"
                            style={{
                                background:
                                    "radial-gradient(600px circle at 14% 8%, rgba(139,92,246,0.18), transparent 42%)",
                            }}
                        />
                        <div className="flex items-center justify-center text-center">
                            <span className="text-sm md:text-base font-semibold text-white">
                                {content}
                            </span>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-0 rounded-2xl"
                            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

