export const ThreatHero = () => {
    return (
        <section className="relative w-full bg-[#0A0D12] py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background:
                            "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
                    }}
                />
                <div
                    className="absolute left-0 top-0 h-[55vh] w-[55vw] blur-3xl opacity-35"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 30%, rgba(158,119,237,0.28) 0%, rgba(127,86,217,0.14) 35%, rgba(127,86,217,0) 65%)",
                    }}
                />
                <div
                    className="absolute right-0 bottom-8 h-[55vh] w-[55vw] blur-3xl opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle at 70% 70%, rgba(127,86,217,0.24) 0%, rgba(105,65,198,0.12) 35%, rgba(105,65,198,0) 65%)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "80px 80px, 80px 80px",
                        backgroundPosition: "center",
                    }}
                />
            </div>
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center gap-6">
                    <div className="inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10">
                        <span className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-xs font-bold text-white/90 uppercase tracking-wide ring-1 ring-white/10">
                            THREAT LANDSCAPE
                        </span>
                    </div>
                    <h1 className="font-bold tracking-tight leading-tight">
                        <span className="block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.6rem,7vw,5.6rem)]">
                            The reality of modern
                        </span>
                        <span className="block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.5rem,7vw,5.4rem)]">
                            cyber threats
                        </span>
                    </h1>
                    <p className="text-lg text-white/75 md:text-xl">
                        Cyber attacks are continuous, global, and increasingly complex. Understanding the threat
                        landscape is essential for anyone working in security operations.
                    </p>
                </div>
            </div>
        </section>
    );
};
