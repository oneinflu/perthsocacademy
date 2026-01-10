import type { FC, HTMLAttributes } from "react";
import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { TagCheckbox } from "@/components/base/tags/base-components/tag-checkbox";

import { cx } from "@/utils/cx";

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div
            className={cx(
                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
                props.className,
            )}
        >
            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[15.06px] md:ring-[1.25px]">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export const HomeFeatures = () => {
    return (
        <section className="flex flex-col gap-12 overflow-hidden  bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Programs For Individuals</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Three ways to start and grow in cybersecurity</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Choose a starting point that fits you: build foundation, pivot your career without restarting, or follow a role-specialisation track with measurable outcomes.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={MessageChatCircle} size="lg" color="brand" theme="light" />
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Fresh Graduate Cybersecurity Launchpad</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">Purpose: Build foundation, confidence, and direction.</p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Core security principles and terminology",
                                "OS and networking essentials for security work",
                                "Intro to application, cloud, and operational security",
                                "Guided mini-projects to build proof of learning",
                            ].map((feat) => (
                                <li key={feat} className="flex items-center gap-3">
                                    <TagCheckbox size="lg" isSelected />
                                    <span className="text-md text-secondary">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:left-0">
                            <video
                                src="/feature1.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="size-full object-contain lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={ZapFast} size="lg" color="brand" theme="light" />
                          <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Career Switcher Accelerator</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">Purpose: Transition into security without restarting your career.</p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Developer → Application Security / Secure Coding",
                                "Tester / QA → Security Testing / Vulnerability Validation",
                                "Sysadmin / IT Ops → Hardening / Identity & Access / Readiness",
                                "Network Admin → Network & Cloud Network Security",
                                "DevOps → DevSecOps Foundations / Cloud Security",
                            ].map((feat) => (
                                <li key={feat} className="flex items-center gap-3">
                                    <TagCheckbox size="lg" isSelected />
                                    <span className="text-md text-secondary">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:right-0">
                            <video
                                src="/feature3.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="size-full object-contain lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="brand" theme="light" />

<h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Role-Based Specialisation Bootcamps</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">Choose a target role and follow a structured sequence.</p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Structured modules, labs, and assessments",
                                "Outcome-focused learning with measurable capability",
                                "Alignment to real security responsibilities",
                            ].map((feat) => (
                                <li key={feat} className="flex items-center gap-3">
                                    <TagCheckbox size="lg" isSelected />
                                    <span className="text-md text-secondary">{feat}</span>
                                </li>
                            ))}
                        </ul>

                     
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:left-0">
                            <video
                                src="/feature4.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="size-full object-contain lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>
            </div>
        </section>
    );
};
