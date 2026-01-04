import type { Metadata } from "next";
import { ThreatHero } from "@/app/threat-hero";
import { ThreatMap } from "@/app/threat-map";
import { ThreatFacts } from "@/app/threat-facts";
import { ThreatAttacks } from "@/app/threat-attacks";

export const metadata: Metadata = {
    title: "Cyber Threat Landscape | Real-World Attacks & SOC Defense Explained",
    description:
        "Understand today’s cyber threat landscape, global attack activity, and why SOC teams are critical for detecting, investigating, and responding to modern threats.",
};

export default function ThreatPage() {
    return (
        <main>
            <ThreatHero />
            <ThreatMap />
            <ThreatFacts />
            <ThreatAttacks />
        </main>
    );
}
