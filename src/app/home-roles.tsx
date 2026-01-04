"use client";

import { AlertCircle, BookOpen01, SearchLg, User01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Role = {
    title: string;
    responsibility: string;
    tasks: string[];
    salary: string;
    icon: React.FC<{ className?: string }>;
    imageUrl?: string;
};

const roles: Role[] = [
    {
        title: "SOC Analyst (L1)",
        responsibility: "Monitors alerts and identifies potential security threats.",
        tasks: ["Analyze SIEM alerts", "Validate suspicious activity", "Escalate confirmed incidents"],
        salary: "Perth, GA: $60k–$80k",
        icon: BookOpen01,
        imageUrl: "./bg.png",
    },
    {
        title: "SOC Analyst (L2)",
        responsibility: "Investigates incidents and determines impact and response.",
        tasks: ["Deep-dive alert investigations", "Correlate logs and evidence", "Support containment actions"],
        salary: "Perth, GA: $80k–$110k",
        icon: SearchLg,
        imageUrl: "./bg.png", },
    {
        title: "Incident Responder",
        responsibility: "Handles active security incidents and containment.",
        tasks: ["Respond to confirmed breaches", "Coordinate remediation steps", "Document incident timelines"],
        salary: "Perth, GA: $90k–$120k",
        icon: AlertCircle,
        imageUrl: "./bg.png", },
    {
        title: "Threat Hunter",
        responsibility: "Proactively searches for hidden or advanced threats.",
        tasks: ["Hunt for anomalous behavior", "Develop detection hypotheses", "Improve SOC detection logic"],
        salary: "Perth, GA: $110k–$140k",
        icon: SearchLg,
        imageUrl: "./bg.png", },
    {
        title: "SOC Manager",
        responsibility: "Oversees SOC operations, people, and performance.",
        tasks: ["Manage analysts and workflows", "Review incidents and metrics", "Ensure SLA and compliance"],
        salary: "Perth, GA: $130k–$170k",
        icon: User01,
       imageUrl: "./bg.png", },
];

const RoleCard = ({ role }: { role: Role }) => {
    const Icon = role.icon;
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cx(
                "group relative overflow-hidden flex min-w-[320px] max-w-[360px] flex-col rounded-xl bg-[#0B0D12] p-5 ring-1 ring-white/10 shadow-xl transition",
                "md:rounded-2xl md:p-6",
                "hover:ring-white/20 hover:shadow-2xl cursor-default",
            )}
        >
            <div className="absolute inset-0 z-0">
                {role.imageUrl && (
                    <img
                        src={role.imageUrl}
                        alt=""
                        className="h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-25"
                    />
                )}
            </div>
            <div className="relative z-10">
                <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                        <Icon className="size-5 text-white/85" />
                    </div>
                    <div className="text-xl font-semibold text-white">{role.title}</div>
                </div>
                <div className="mt-2 text-sm text-white/70">{role.responsibility}</div>
                <div className="mt-3 h-px w-full bg-white/10" />
                <ul className="mt-3 space-y-2 text-white/75">
                    {role.tasks.map((t) => (
                        <li key={t}>• {t}</li>
                    ))}
                </ul>
                <div className="mt-4 h-px w-full bg-white/10" />
                <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-brand-500/10 px-2.5 py-1 text-sm font-semibold text-brand-400 ring-1 ring-brand-500/25">
                    <span className="tracking-tight">{role.salary}</span>
                </div>
            </div>
        </motion.div>
    );
};

export const HomeRoles = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setSeen(true);
            },
            { threshold: 0.25 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section ref={ref} className="w-full overflow-hidden py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10">
                        <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-md font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                            SOC ROLES
                        </span>
                    </div>
                    <h2 className={cx("mt-6 text-3xl font-semibold text-white md:text-4xl")}>What SOC professionals actually do</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
                        Every role in a Security Operations Center has a defined responsibility in detecting, investigating, and responding to
                        cyber threats.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="mt-12"
                >
                    <div className="flex flex-col gap-6 md:flex-row md:overflow-x-auto md:scrollbar-hide md:py-2">
                        {roles.map((r) => (
                            <RoleCard key={r.title} role={r} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
