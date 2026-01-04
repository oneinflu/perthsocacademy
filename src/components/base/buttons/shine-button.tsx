"use client";

import { Button, type Props } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

export const ShineButton = ({ className, color = "secondary", ...props }: Props) => {
    return (
        <Button
            {...props}
            color={color}
            className={cx(
                "relative rounded-full bg-black/70 text-white shadow-none ring-0 border border-white/12 hover:bg-black/75",
                "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-1/3 after:-translate-x-1/2",
                "after:bg-gradient-to-r after:from-white/0 after:via-white/70 after:to-white/0",
                "after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full hover:after:translate-x-0",
                className,
            )}
        />
    );
};
