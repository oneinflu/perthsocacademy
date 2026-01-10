"use client";

import type { FC } from "react";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

export const Footer: FC<{ className?: string }> = ({ className }) => {
    const year = new Date().getFullYear();
    const items: Array<{ label: string; href: string }> = [];

    return (
        <footer
            className={cx(
                "w-full border-t border-secondary bg-primary",
                "py-6 md:py-8",
                className,
            )}
        >
            <div className="mx-auto flex w-full max-w-container items-center justify-between gap-6 px-4 md:px-8">
                <div className="flex items-center gap-3">
                    <UntitledLogo className="h-8" />
                </div>

                {items.length > 0 && (
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {items.map((item) => (
                                <li key={item.label}>
                                    <Button color="link-gray" size="lg" href={item.href}>
                                        {item.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                <div className="ml-auto text-sm text-tertiary">{`© ${year} Perth SOC`}</div>
            </div>
        </footer>
    );
};

export default Footer;
