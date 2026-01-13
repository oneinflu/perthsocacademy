import type { Metadata } from "next";
import Link from "next/link";
import { ProgramsHero } from "./programs-hero";
import { HomeFeatures } from "../home-features";
import { CorporatePrograms } from "../corporate-programs";

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
          
        </>
    );
}
