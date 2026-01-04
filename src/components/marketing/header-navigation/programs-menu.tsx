"use client";

import { Stars02 } from "@untitledui/icons";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

export const ProgramsMenu = () => {
    return (
        <div className="px-3 pb-2 md:max-w-84 md:p-0">
            <nav className="overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-secondary_alt md:p-2 md:shadow-lg">
                <ul className="flex flex-col gap-0.5">
                    <li>
                        <NavMenuItemLink
                            href="/programs/ai-cyber-security-training-program"
                            icon={Stars02}
                            title="AI Cybersecurity Training Program"
                            subtitle="Hands-on SOC training augmented with AI workflows."
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};
