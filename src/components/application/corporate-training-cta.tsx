"use client";
import { useState } from "react";
import { Dialog, DialogTrigger, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { cx } from "@/utils/cx";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { X } from "@untitledui/icons";

const teamFunctions = ["Engineering", "QA", "DevOps", "IT Ops", "Cloud/Platform", "Security"];
const focusAreas = ["AppSec", "Cloud", "GRC", "IR", "DFIR", "AI Security", "Ethical Hacking"];
const objectives = ["Upskilling", "Reskilling", "Readiness", "Specialisation"];

export const CorporateTrainingRequestModal = () => {
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

    const onSubmit = (e: React.FormEvent, close: () => void) => {
        e.preventDefault();
        setSubmitted(true);
        close();
    };

    return (
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
                                <form onSubmit={(e) => onSubmit(e, state.close)} className="space-y-5">
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
                                        <ShineButton color="secondary" size="lg" onClick={() => state.close()}>Cancel</ShineButton>
                                        <Button type="submit" size="lg">Request Plan</Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="space-y-4 text-center">
                                    <div className="text-display-xs font-semibold text-white md:text-display-sm">Thank you.</div>
                                    <p className="text-white/80">Your request has been submitted. We will review and respond with next steps.</p>
                                    <div className="pt-2">
                                        <Button size="lg" onClick={() => setSubmitted(false)}>Submit another request</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Dialog>
                </Modal>
            )}
        </ModalOverlay>
    );
};

export const CorporateTrainingCTA = () => {
    return (
        <section id="corporate-training" className="relative w-full bg-base-near-black">
            <BackgroundPattern pattern="grid" size="lg" className="pointer-events-none absolute inset-0 w-full h-full text-white/15 opacity-15" />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
                }}
            />
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-24">
                <div
                    className="relative mx-auto max-w-4xl rounded-2xl bg-[#0B0D12]/80 p-6 md:p-7 ring-1 ring-white/10 backdrop-blur-md"
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
                    <div className="text-center">
                        <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10">
                            <span className="flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-md font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
                                Corporate Training
                            </span>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">Corporate training form</h3>
                        <p className="mt-3 text-white/75">Provide your training objectives and team context. We will propose a role-aligned plan.</p>
                    </div>
                    <div className="mt-6 flex items-center justify-center">
                        <DialogTrigger>
                            <ShineButton className="cursor-cta-trendy" size="xl">Request a Corporate Training Plan</ShineButton>
                            <CorporateTrainingRequestModal />
                        </DialogTrigger>
                    </div>
                </div>
            </div>
        </section>
    );
};
