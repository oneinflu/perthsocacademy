"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import { UntitledLogoMinimal } from "./untitledui-logo-minimal";

export const UntitledLogo = (props: HTMLAttributes<HTMLOrSVGElement>) => {
    return (
        <div {...props} className={cx("flex h-8 w-max items-center justify-start overflow-visible", props.className)}>
            {/* Minimal logo */}
            <UntitledLogoMinimal className="aspect-square h-full w-auto shrink-0" />

            {/* Gap that adjusts to the height of the container */}
            <div className="aspect-[0.3] h-full" />

            {/* Logomark */}
            <div className="h-full flex items-center shrink-0">
                <span className="text-fg-primary text-lg md:text-xl font-semibold tracking-tight">Perth SOC</span>
            </div>
        </div>
    );
};
