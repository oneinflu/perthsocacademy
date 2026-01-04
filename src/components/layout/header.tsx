"use client";
import type { ComponentProps } from "react";
import { Header as MarketingHeader } from "@/components/marketing/header-navigation/header";
import { ProgramsMenu } from "@/components/marketing/header-navigation/programs-menu";

export type LayoutHeaderProps = ComponentProps<typeof MarketingHeader>;

const defaultItems = [
    { label: "Home", href: "/" },
    { label: "Academy", href: "/academy/" },
    {
        label: "Programs",
        menu: <ProgramsMenu />,
    },
    { label: "Threat Landscape", href: "/threat/" },
];

export const Header = ({ isFullWidth = false, items, className, ...props }: LayoutHeaderProps) => {
    const simpleItems = items ?? defaultItems;
    return (
        <MarketingHeader
            isFullWidth={isFullWidth}
            isFloating
            className={`fixed inset-x-0 top-0 z-50 bg-transparent md:bg-transparent md:ring-0 md:shadow-none ${className ?? ""}`}
            items={simpleItems}
            {...props}
        />
    );
};

export default Header;
