"use client";
import type { ComponentProps } from "react";
import { Header as MarketingHeader } from "@/components/marketing/header-navigation/header";
import { ProgramsMenu } from "@/components/marketing/header-navigation/programs-menu";

export type LayoutHeaderProps = ComponentProps<typeof MarketingHeader>;

const defaultItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Courses", menu: <ProgramsMenu /> },
    { label: "Role Tracks", href: "/programs/role-tracks" },
    { label: "Corporate Training", href: "/programs/corporate-training" },
    { label: "Contact", href: "/contact" },
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
