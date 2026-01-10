"use client";

import { motion } from "motion/react";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { ChartBreakoutSquare, ZapFast, MessageChatCircle, X } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { useState } from "react";
import { Dialog, DialogTrigger, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";

const teamFunctions = ["Engineering", "QA", "DevOps", "IT Ops", "Cloud/Platform", "Security"];
const focusAreas = ["AppSec", "Cloud", "GRC", "IR", "DFIR", "AI Security", "Ethical Hacking"];
const objectives = ["Upskilling", "Reskilling", "Readiness", "Specialisation"];

export const CorporatePrograms = () => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        company: "",
        nameRole: "",
        email: "",
        teamSize: "",
        message: "",
    });
    const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
    const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
    const [selectedObjective, setSelectedObjective] = useState<string | null>(null);

    const toggleItem = (list: string[], setter: (s: string[]) => void, item: string) => {
        setter(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="w-full overflow-hidden py-16 md:py-24 bg-primary">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center rounded-full p-[1px] ring-1 ring-secondary/10"
                    >
                        <span className="flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-secondary ring-1 ring-secondary/10">
                            Programs for Corporates
                        </span>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm"
                    >
                        Corporate Upskilling & Reskilling (Technical Teams)
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="mt-3 max-w-3xl text-md text-tertiary md:text-lg"
                    >
                        Designed for: Engineering, QA, DevOps, cloud/platform, IT operations, product and architecture teams
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                        className="mt-1 text-md text-tertiary md:text-lg"
                    >
                        Delivery options: Online live / onsite / hybrid
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                        className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
                    >
                        {[
                            { icon: ChartBreakoutSquare, text: "Secure engineering & AppSec capability building" },
                            { icon: ZapFast, text: "Cloud security foundations for platform and DevOps teams" },
                            { icon: MessageChatCircle, text: "Incident readiness and operational response maturity" },
                            { icon: ChartBreakoutSquare, text: "Threat modelling workshops for product and architecture teams" },
                            { icon: ZapFast, text: "AI application security for teams adopting AI features and workflows" },
                        ].map((h) => (
                            <div
                                key={h.text}
                                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-secondary/10 bg-white/5 px-4 py-5 text-center ring-1 ring-secondary/10 backdrop-blur-sm"
                            >
                                <FeaturedIcon icon={h.icon} size="lg" color="brand" theme="modern" />
                                <span className="text-sm text-secondary">{h.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
                        className="mt-10"
                    >
                        <DialogTrigger>
                            <ShineButton size="xl">Request a Corporate Training Plan</ShineButton>
                            <ModalOverlay className="!items-center !justify-center">
                                {({ state }) => (
                                    <Modal className="w-full flex items-center justify-center cursor-auto will-change-transform">
                                        <Dialog className="relative w-[min(92vw,42rem)] max-w-2xl overflow-hidden rounded-2xl bg-[#0B0D12] p-6 md:p-7 ring-1 ring-white/10 shadow-2xl">
                                            <div
                                                className="pointer-events-none absolute inset-0 -z-[1] opacity-60"
                                                style={{
                                                    background:
                                                        "radial-gradient(600px circle at 20% 12%, rgba(139,92,246,0.18), transparent 42%)",
                                                }}
                                            />
                                            <button
                                                aria-label="Close"
                                                onClick={() => state.close()}
                                                className="absolute right-3 top-3 inline-flex items-center justify-center rounded-md bg-white/8 p-2 text-white/85 ring-1 ring-white/12 hover:bg-white/10"
                                            >
                                                <X className="size-5" />
                                            </button>
                                            <div className="relative z-10">
                                                {!submitted ? (
                                                    <form onSubmit={onSubmit} className="space-y-5">
                                                        <div className="text-center">
                                                            <div className="text-display-xs font-semibold text-white md:text-display-sm">Request a Corporate Training Plan</div>
                                                            <p className="mt-2 text-white/75">Provide your training objectives and team context. We will propose a role-aligned plan.</p>
                                                        </div>
                                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                            <div className="flex flex-col gap-2">
                                                                <label className="text-sm font-semibold text-white/80">Company Name</label>
                                                                <input
                                                                    value={form.company}
                                                                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                                                                    className="w-full rounded-md bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 placeholder-white/40 focus:outline-none focus:ring-white/20"
                                                                    placeholder="Acme Corp"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                <label className="text-sm font-semibold text-white/80">Your Name & Role</label>
                                                                <input
                                                                    value={form.nameRole}
                                                                    onChange={(e) => setForm({ ...form, nameRole: e.target.value })}
                                                                    className="w-full rounded-md bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 placeholder-white/40 focus:outline-none focus:ring-white/20"
                                                                    placeholder="Jane Doe, Engineering Manager"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                <label className="text-sm font-semibold text-white/80">Business Email</label>
                                                                <input
                                                                    type="email"
                                                                    value={form.email}
                                                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                                    className="w-full rounded-md bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 placeholder-white/40 focus:outline-none focus:ring-white/20"
                                                                    placeholder="name@company.com"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                <label className="text-sm font-semibold text-white/80">Team Size (approx.)</label>
                                                                <input
                                                                    value={form.teamSize}
                                                                    onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                                                                    className="w-full rounded-md bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 placeholder-white/40 focus:outline-none focus:ring-white/20"
                                                                    placeholder="e.g., 25"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-sm font-semibold text-white/80">Team Function(s)</label>
                                                            <div className="flex flex-wrap gap-2">
                                                                {teamFunctions.map((fn) => {
                                                                    const active = selectedFunctions.includes(fn);
                                                                    return (
                                                                        <button
                                                                            type="button"
                                                                            key={fn}
                                                                            onClick={() => toggleItem(selectedFunctions, setSelectedFunctions, fn)}
                                                                            className={cx(
                                                                                "rounded-full px-3 py-1.5 text-sm ring-1 transition",
                                                                                active ? "bg-brand-500/20 text-brand-300 ring-brand-500/40" : "bg-white/5 text-white/80 ring-white/10",
                                                                            )}
                                                                        >
                                                                            {fn}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-sm font-semibold text-white/80">Training Objective</label>
                                                            <div className="flex flex-wrap gap-2">
                                                                {objectives.map((obj) => (
                                                                    <button
                                                                        type="button"
                                                                        key={obj}
                                                                        onClick={() => setSelectedObjective(selectedObjective === obj ? null : obj)}
                                                                        className={cx(
                                                                            "rounded-full px-3 py-1.5 text-sm ring-1 transition",
                                                                            selectedObjective === obj ? "bg-brand-500/20 text-brand-300 ring-brand-500/40" : "bg-white/5 text-white/80 ring-white/10",
                                                                        )}
                                                                    >
                                                                        {obj}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-sm font-semibold text-white/80">Preferred Focus Areas</label>
                                                            <div className="flex flex-wrap gap-2">
                                                                {focusAreas.map((fa) => {
                                                                    const active = selectedFocus.includes(fa);
                                                                    return (
                                                                        <button
                                                                            type="button"
                                                                            key={fa}
                                                                            onClick={() => toggleItem(selectedFocus, setSelectedFocus, fa)}
                                                                            className={cx(
                                                                                "rounded-full px-3 py-1.5 text-sm ring-1 transition",
                                                                                active ? "bg-brand-500/20 text-brand-300 ring-brand-500/40" : "bg-white/5 text-white/80 ring-white/10",
                                                                            )}
                                                                        >
                                                                            {fa}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-sm font-semibold text-white/80">Message / Requirements</label>
                                                            <textarea
                                                                value={form.message}
                                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                                className="min-h-28 w-full rounded-md bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 placeholder-white/40 focus:outline-none focus:ring-white/20"
                                                                placeholder="Share any specific requirements, timelines, or constraints."
                                                            />
                                                        </div>
                                                        <div className="flex items-center justify-end gap-3">
                                                            <ShineButton color="secondary" size="lg" onClick={() => state.close()}>
                                                                Cancel
                                                            </ShineButton>
                                                            <Button type="submit" size="lg">
                                                                Request Plan
                                                            </Button>
                                                        </div>
                                                    </form>
                                                ) : (
                                                    <div className="space-y-4 text-center">
                                                        <div className="text-display-xs font-semibold text-white md:text-display-sm">Thank you.</div>
                                                        <p className="text-white/80">Your request has been submitted. We will review and respond with next steps.</p>
                                                        <div className="pt-2">
                                                            <Button size="lg" onClick={() => setSubmitted(false)}>
                                                                Submit another request
                                                            </Button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </Dialog>
                                    </Modal>
                                )}
                            </ModalOverlay>
                        </DialogTrigger>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
