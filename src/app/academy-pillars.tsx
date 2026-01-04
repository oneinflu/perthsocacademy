"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

const PillarCard = ({
    title,
    index,
    onHover,
    offsetY,
}: {
    title: string;
    index: number;
    onHover: (rect: DOMRect | null) => void;
    offsetY: number;
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
    const [hovering, setHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        const ry = (x / (r.width / 2)) * 3;
        const rx = (-y / (r.height / 2)) * 3;
        setTilt({ rx, ry });
    };

    const handleMouseEnter = () => {
        setHovering(true);
        onHover(ref.current?.getBoundingClientRect() || null);
    };
    const handleMouseLeave = () => {
        setHovering(false);
        setTilt({ rx: 0, ry: 0 });
        onHover(null);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl bg-[#0B0F14]/70 backdrop-blur-md p-8 ring-1 ring-white/10"
            style={{
                transform: `translateY(${offsetY}px) translateZ(${index * 2}px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                boxShadow: hovering
                    ? "0 0 0 1px rgba(127,86,217,0.55), 0 28px 68px rgba(0,0,0,0.45), 0 0 60px rgba(68,76,231,0.22)"
                    : "0 0 0 0.5px rgba(127,86,217,0.35), 0 24px 60px rgba(0,0,0,0.35), 0 0 48px rgba(68,76,231,0.12)",
            }}
        >
            <div
                className="absolute inset-0 rounded-2xl -z-[1]"
                 style={{
                     background:
                         "radial-gradient(600px circle at 20% 10%, rgba(139,92,246,0.16), transparent 40%)",
                     opacity: hovering ? 0.9 : 0.6,
                 }}
            />
            <div className="flex flex-col gap-2 items-start">
                <div className="text-sm font-semibold text-white/80">Academy Pillar</div>
                <div className="text-2xl md:text-3xl font-semibold text-white">{title}</div>
                <div className="mt-2 text-white/70">Core discipline within our training framework.</div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl"
                 style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
            />
        </motion.div>
    );
};

export const AcademyPillars = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLDivElement | null>(null);
    const spriteRef = useRef<THREE.Sprite | null>(null);
    const [progress, setProgress] = useState(0);
    const threeRef = useRef<{
        renderer?: THREE.WebGLRenderer;
        scene?: THREE.Scene;
        camera?: THREE.OrthographicCamera;
        animationId?: number;
    }>({});

    useEffect(() => {
        const container = canvasRef.current;
        if (!container) return;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0.1, 1000);
        camera.position.z = 10;

        const size = 256;
        const cvs = document.createElement("canvas");
        cvs.width = size;
        cvs.height = size;
        const ctx = cvs.getContext("2d")!;
        const grd = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        grd.addColorStop(0, "rgba(127,86,217,0.25)");
        grd.addColorStop(0.4, "rgba(68,76,231,0.15)");
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, size, size);
        const tex = new THREE.CanvasTexture(cvs);
        tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.0, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(600, 600, 1);
        scene.add(sprite);
        spriteRef.current = sprite;

        const state = threeRef.current;
        state.renderer = renderer;
        state.scene = scene;
        state.camera = camera;

        const onResize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            renderer.setSize(w, h);
            camera.left = -w / 2;
            camera.right = w / 2;
            camera.top = h / 2;
            camera.bottom = -h / 2;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", onResize, { passive: true });

        const animate = () => {
            renderer.render(scene, camera);
            state.animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(state.animationId || 0);
            window.removeEventListener("resize", onResize);
            renderer.dispose();
            tex.dispose();
            mat.dispose();
            container.removeChild(renderer.domElement);
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const container = containerRef.current;
            if (!container) return;
            const rect = container.getBoundingClientRect();
            const vh = window.innerHeight || 1;
            const start = vh * 0.9;
            const end = -rect.height * 0.2;
            const raw = (start - rect.top) / (start - end);
            const p = Math.max(0, Math.min(1, raw));
            setProgress(p);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleHover = (rect: DOMRect | null) => {
        const container = containerRef.current;
        const sprite = spriteRef.current;
        const state = threeRef.current;
        if (!container || !sprite || !state.camera) return;
        if (!rect) {
            const mat = sprite.material as THREE.SpriteMaterial;
            mat.opacity = Math.max(0, mat.opacity - 0.1);
            return;
        }
        const cRect = container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2 - cRect.left - cRect.width / 2;
        const cy = -(rect.top + rect.height / 2 - cRect.top - cRect.height / 2);
        sprite.position.set(cx, cy, 0);
        const mat = sprite.material as THREE.SpriteMaterial;
        mat.opacity = Math.min(0.28, mat.opacity + 0.12);
    };

    return (
        <section className="relative w-full bg-[#0A0D12]">
            <BackgroundPattern
                pattern="grid"
                size="lg"
                className="pointer-events-none absolute inset-0 z-10 w-full h-full text-white/15 opacity-20"
                style={{ mixBlendMode: "soft-light" }}
            />
            <div
                className="pointer-events-none absolute inset-0 z-20 opacity-95"
                style={{
                    background:
                        "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.80) 100%)",
                }}
            />
            <div className="pointer-events-none absolute inset-0 z-21 bg-black/60" />
            <div
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "80px 80px, 80px 80px",
                }}
            />
            <div className="absolute top-0 left-0 z-20 h-24 w-full bg-gradient-to-b from-transparent via-[#0A0D12]/65 to-[#0A0D12]" />
            <div className="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/60 to-transparent" />
            <div ref={containerRef} className="relative z-30 mx-auto w-full max-w-container px-4 md:px-8 py-24">
                <div ref={canvasRef} className="absolute inset-0 -z-[1]" />
                <div className="mx-auto max-w-4xl text-center">
                    <div className="text-md font-semibold text-brand-secondary">Academy Pillars</div>
                    <h2 className="mt-3 text-display-sm font-semibold text-white md:text-display-md">Core Disciplines</h2>
                    <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-60" />
                </div>
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <PillarCard title="Security Operations" index={0} onHover={handleHover} offsetY={-progress * 14} />
                    <PillarCard title="Agentic AI Security" index={1} onHover={handleHover} offsetY={-progress * 24} />
                    <PillarCard title="Governance & Risk" index={2} onHover={handleHover} offsetY={-progress * 32} />
                </div>
            </div>
        </section>
    );
};
