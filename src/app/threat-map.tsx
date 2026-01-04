"use client";

import { useState } from "react";

export const ThreatMap = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <section className="relative w-full bg-[#0A0D12] py-16 md:py-24">
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
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold text-white md:text-4xl">Threat activity happening right now</h2>
                    <p className="mt-3 text-lg text-white/75">Live visualization of ongoing cyber activity across the globe.</p>
                </div>
            </div>
            <div className="mx-auto w-full max-w-container px-4 md:px-8 mt-10">
                <div className="relative w-full rounded-xl md:rounded-2xl bg-[#0B0D12] ring-1 ring-white/10 shadow-2xl overflow-hidden">
                    <iframe
                        title="Live Global Threat Map"
                        src="https://livethreatmap.radware.com/"
                        loading="lazy"
                        className="h-[480px] w-full border-none md:h-[640px]"
                        style={{ border: "none" }}
                        onLoad={() => setLoaded(true)}
                    />
                    {!loaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                            <div className="text-sm text-white/80">Loading live threat map…</div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
