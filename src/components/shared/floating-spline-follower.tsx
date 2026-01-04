"use client";

import { useEffect, useRef, useState } from "react";

export const FloatingSplineFollower = ({ url = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode", size = 140 }) => {
    const [enabled, setEnabled] = useState(true);
    const posRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const onMovePointer = (e: PointerEvent) => {
            targetRef.current.x = e.clientX;
            targetRef.current.y = e.clientY;
        };
        const onMoveMouse = (e: MouseEvent) => {
            targetRef.current.x = e.clientX;
            targetRef.current.y = e.clientY;
        };
        const tick = () => {
            const p = posRef.current;
            const t = targetRef.current;
            p.x += (t.x - p.x) * 0.18;
            p.y += (t.y - p.y) * 0.18;
            if (containerRef.current) {
                containerRef.current.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`;
            }
            const c = canvasRef.current;
            if (c) {
                const dpr = window.devicePixelRatio || 1;
                const w = Math.floor(c.clientWidth * dpr);
                const h = Math.floor(c.clientHeight * dpr);
                if (c.width !== w || c.height !== h) {
                    c.width = w;
                    c.height = h;
                }
                const ctx = c.getContext("2d");
                if (ctx) {
                    ctx.clearRect(0, 0, w, h);
                    ctx.globalCompositeOperation = "lighter";
                    const cx = w / 2;
                    const cy = h / 2;
                    const r1 = Math.min(w, h) * 0.42;
                    const grad = ctx.createRadialGradient(cx, cy, r1 * 0.1, cx, cy, r1);
                    grad.addColorStop(0, "rgba(158,119,237,0.75)");
                    grad.addColorStop(0.5, "rgba(127,86,217,0.35)");
                    grad.addColorStop(1, "rgba(127,86,217,0.00)");
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(cx, cy, r1, 0, Math.PI * 2);
                    ctx.fill();

                    const tms = performance.now();
                    const sides = 6;
                    const r2 = r1 * 0.55;
                    const rot = (tms * 0.0006) % (Math.PI * 2);
                    ctx.strokeStyle = "rgba(255,255,255,0.25)";
                    ctx.lineWidth = Math.max(1, 2 * dpr);
                    ctx.beginPath();
                    for (let i = 0; i <= sides; i++) {
                        const a = rot + (i / sides) * Math.PI * 2;
                        const x = cx + Math.cos(a) * r2;
                        const y = cy + Math.sin(a) * r2;
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.stroke();

                    ctx.fillStyle = "rgba(158,119,237,0.9)";
                    ctx.beginPath();
                    ctx.arc(cx, cy, r1 * 0.12, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        const media = window.matchMedia("(max-width: 767px)");
        setEnabled(!media.matches);
        const handleMedia = () => setEnabled(!media.matches);
        media.addEventListener("change", handleMedia);
        window.addEventListener("pointermove", onMovePointer, { passive: true });
        window.addEventListener("mousemove", onMoveMouse, { passive: true });
        rafRef.current = requestAnimationFrame(tick);
        return () => {
            media.removeEventListener("change", handleMedia);
            window.removeEventListener("pointermove", onMovePointer);
            window.removeEventListener("mousemove", onMoveMouse);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    if (!enabled) return null;

    const SplineViewer = "spline-viewer" as any;
    return (
        <div
            ref={containerRef}
            className="fixed left-0 top-0 z-40 pointer-events-none will-change-transform"
            style={{ width: size, height: size }}
        >
            <SplineViewer className="pointer-events-none h-full w-full" background="transparent" loading="lazy" url={url} />
            <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
        </div>
    );
};
