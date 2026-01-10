export const CorporateProgramThemes = () => {
    const panels = [
        {
            title: "Secure Engineering & Application Security",
            subtitle: "(Engineering & QA Teams)",
            description:
                "Reduce security defects through secure coding fundamentals, common vulnerability patterns, and security testing workflows embedded into development and QA processes.",
            variant: "a" as const,
        },
        {
            title: "Cloud & Platform Security",
            subtitle: "(DevOps, Platform & IT Operations)",
            description:
                "Build secure foundations with access control thinking, exposure reduction strategies, and logging and monitoring principles for cloud and platform environments.",
            variant: "b" as const,
        },
        {
            title: "Incident Readiness",
            subtitle: "(IT Operations & Security Teams)",
            description:
                "Improve response maturity through playbooks, tabletop exercises, and practical incident workflows aligned to real-world scenarios.",
            variant: "c" as const,
        },
        {
            title: "AI / Agentic AI Application Security",
            subtitle: "(AI, Product & Security Teams)",
            description:
                "Enable safer AI adoption by understanding control thinking, misuse scenarios, guardrails, and monitoring requirements for AI-powered systems.",
            variant: "d" as const,
        },
    ];
    return (
        <section className="bg-[#0A0D12]">
            <div className="mx-auto w-full max-w-container px-4 md:px-8 py-20 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Corporate Training Program Themes</h2>
                </div>
                <div className="mt-10 space-y-6">
                    {panels.map((p) => (
                        <div
                            key={p.title}
                            className="w-full rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md"
                            style={{
                                boxShadow:
                                    "0 0 0 0.5px rgba(127,86,217,0.20), 0 24px 60px rgba(0,0,0,0.35), 0 0 48px rgba(68,76,231,0.08)",
                            }}
                        >
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
                                <div>
                                    <div className="text-xl md:text-2xl font-semibold text-white">{p.title}</div>
                                    <div className="mt-1 text-white/70">{p.subtitle}</div>
                                    <p className="mt-4 text-white/80">{p.description}</p>
                                </div>
                                <div className="relative w-full h-32 md:h-36">
                                    <AbstractDiagram variant={p.variant} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

function AbstractDiagram({ variant }: { variant: "a" | "b" | "c" | "d" }) {
    const colorA = "rgba(127,86,217,0.5)";
    const colorB = "rgba(68,76,231,0.5)";
    return (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
            <defs>
                <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor={colorA} />
                    <stop offset="1" stopColor={colorB} />
                </linearGradient>
            </defs>
            {variant === "a" && (
                <>
                    <rect x="20" y="20" width="80" height="26" rx="6" fill="url(#grad)" opacity="0.25" />
                    <rect x="20" y="56" width="110" height="26" rx="6" fill="url(#grad)" opacity="0.35" />
                    <rect x="20" y="92" width="140" height="26" rx="6" fill="url(#grad)" opacity="0.45" />
                    <path d="M170 35 L360 35" stroke="url(#grad)" strokeWidth="2" strokeDasharray="6 10" />
                    <path d="M170 71 L360 71" stroke="url(#grad)" strokeWidth="2" strokeDasharray="6 10" />
                    <path d="M170 107 L360 107" stroke="url(#grad)" strokeWidth="2" strokeDasharray="6 10" />
                    <rect x="320" y="24" width="46" height="90" rx="8" fill="url(#grad)" opacity="0.18" />
                </>
            )}
            {variant === "b" && (
                <>
                    <circle cx="60" cy="40" r="12" fill="url(#grad)" opacity="0.35" />
                    <circle cx="110" cy="70" r="12" fill="url(#grad)" opacity="0.35" />
                    <circle cx="80" cy="100" r="12" fill="url(#grad)" opacity="0.35" />
                    <path d="M60 40 L110 70 L80 100" stroke="url(#grad)" strokeWidth="2" fill="none" />
                    <rect x="250" y="30" width="100" height="26" rx="6" fill="url(#grad)" opacity="0.22" />
                    <rect x="250" y="66" width="100" height="26" rx="6" fill="url(#grad)" opacity="0.28" />
                    <rect x="250" y="102" width="100" height="26" rx="6" fill="url(#grad)" opacity="0.34" />
                </>
            )}
            {variant === "c" && (
                <>
                    <rect x="20" y="30" width="120" height="22" rx="6" fill="url(#grad)" opacity="0.28" />
                    <rect x="20" y="62" width="160" height="22" rx="6" fill="url(#grad)" opacity="0.36" />
                    <rect x="20" y="94" width="200" height="22" rx="6" fill="url(#grad)" opacity="0.44" />
                    <path d="M230 41 L360 41" stroke="url(#grad)" strokeWidth="2" strokeDasharray="4 8" />
                    <path d="M230 73 L360 73" stroke="url(#grad)" strokeWidth="2" strokeDasharray="4 8" />
                    <path d="M230 105 L360 105" stroke="url(#grad)" strokeWidth="2" strokeDasharray="4 8" />
                </>
            )}
            {variant === "d" && (
                <>
                    <circle cx="60" cy="40" r="10" fill="url(#grad)" opacity="0.35" />
                    <circle cx="100" cy="40" r="10" fill="url(#grad)" opacity="0.35" />
                    <circle cx="80" cy="70" r="10" fill="url(#grad)" opacity="0.35" />
                    <path d="M60 40 L80 70 L100 40" stroke="url(#grad)" strokeWidth="2" fill="none" />
                    <rect x="250" y="30" width="100" height="70" rx="8" fill="url(#grad)" opacity="0.2" />
                    <path d="M250 65 L350 65" stroke="url(#grad)" strokeWidth="2" strokeDasharray="6 10" />
                </>
            )}
        </svg>
    );
}

