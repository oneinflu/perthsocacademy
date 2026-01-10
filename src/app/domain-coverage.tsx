"use client";
import { useRef } from "react";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { CourseCard } from "@/components/application/course-card";
import { ChevronRight, ChevronLeft } from "@untitledui/icons";

const domains = [
    { title: "Fundamentals", category: "Domain", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop" },
    { title: "AppSec", category: "Domain", image: "https://images.unsplash.com/photo-1554672723-0df1b0834d59?q=80&w=1200&auto=format&fit=crop" },
    { title: "Cloud Security", category: "Domain", image: "https://images.unsplash.com/photo-1517180102446-f3ece6bb704b?q=80&w=1200&auto=format&fit=crop" },
    { title: "Offensive Security", category: "Domain", image: "https://images.unsplash.com/photo-1526378722370-2ad2f253df52?q=80&w=1200&auto=format&fit=crop" },
    { title: "Defensive Security", category: "Domain", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
    { title: "GRC", category: "Domain", image: "https://images.unsplash.com/photo-1556157382-97eda2d6b6d5?q=80&w=1200&auto=format&fit=crop" },
    { title: "DFIR", category: "Domain", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { title: "AI Security", category: "Domain", image: "https://images.unsplash.com/photo-1551281044-8b5e5b9da1f4?q=80&w=1200&auto=format&fit=crop" },
];

export const DomainCoverage = () => {
    const railRef = useRef<HTMLDivElement | null>(null);
    const scrollBy = (dir: "left" | "right") => {
        const rail = railRef.current;
        if (!rail) return;
        const amount = 320 * 2;
        rail.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    };

    return (
        <section className="relative w-full bg-base-near-black">
            <BackgroundPattern pattern="grid" size="lg" className="pointer-events-none absolute inset-0 w-full h-full text-white/15 opacity-15" />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
                }}
            />
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-display-sm font-semibold text-white md:text-display-md">Domain Coverage</h2>
                    <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-60" />
                </div>
                <div className="relative mt-8">
                    <div
                        ref={railRef}
                        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-1"
                    >
                        {domains.map((d) => (
                            <div key={d.title} className="snap-start">
                                <CourseCard title={d.title} category={d.category} imageUrl={d.image} />
                            </div>
                        ))}
                    </div>
                    <div className="absolute right-2 -bottom-8 flex items-center gap-2">
                        <button
                            aria-label="Scroll left"
                            onClick={() => scrollBy("left")}
                            className="flex items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/12"
                        >
                            <ChevronLeft className="size-5 text-white/85" />
                        </button>
                        <button
                            aria-label="Scroll right"
                            onClick={() => scrollBy("right")}
                            className="flex items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/12"
                        >
                            <ChevronRight className="size-5 text-white/85" />
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .no-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

