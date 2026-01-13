import type { Metadata } from "next";
import Link from "next/link";
import { ProgramsHero } from "./programs-hero";
import { HomeFeatures } from "../home-features";
import { CorporatePrograms } from "../corporate-programs";
import { FAQBlock } from "../faq-block";

export const metadata: Metadata = {
    title: "Cybersecurity Programs | PerthSOC Academy (Perth, Australia)",
    description:
        "Cybersecurity programs for fresh graduates, career switchers, and corporate teams—role-based pathways across AppSec, Cloud, Ethical Hacking, GRC, DFIR, SOC/IR, and AI security.",
};

export default function ProgramsIndexPage() {
    return (
        <>
            <ProgramsHero />
            <HomeFeatures />
            <CorporatePrograms />
            <FAQBlock
                title="Frequently Asked Questions"
                faqs={[
                    {
                        q: "Which program is best for fresh graduates?",
                        a: "Start with Cybersecurity Fundamentals, then choose a role-based track based on your strengths and preferred domain.",
                    },
                    {
                        q: "I’m a developer/tester/admin—do I need to start from zero?",
                        a: "No. Transition pathways are designed to build on your existing technical experience and map it into security outcomes.",
                    },
                    {
                        q: "Do you provide training for corporate technical teams?",
                        a: "Yes. Corporate programs are structured by role and domain focus to support capability uplift across teams.",
                    },
                    {
                        q: "Do you cover areas beyond SOC?",
                        a: "Yes. Programs cover application security, cloud security, ethical hacking, incident response, DFIR, GRC, and AI/agentic AI application security.",
                    },
                ]}
            />
        </>
    );
}
