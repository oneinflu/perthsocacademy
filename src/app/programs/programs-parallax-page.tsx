/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import type { ReactNode, MouseEvent } from "react";
import { Children } from "react";

const ParallaxSection = ({ children, depth = 0.06 }: { children: ReactNode; depth?: number }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, depth * 240]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + depth * 0.06]);
    return (
        <motion.section
            style={{ y, scale, transformStyle: "preserve-3d" }}
            className="will-change-transform"
        >
            {children}
        </motion.section>
    );
};

export default function ProgramsParallaxPage({ children }: { children: ReactNode }) {
    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);
    const rotateX = useSpring(tiltX, { stiffness: 120, damping: 18, mass: 0.5 });
    const rotateY = useSpring(tiltY, { stiffness: 120, damping: 18, mass: 0.5 });

    const onMouseMove = (e: MouseEvent) => {
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        tiltY.set(nx * 2.5);
        tiltX.set(-ny * 1.8);
    };

    const depths = [0.06, 0.08, 0.07, 0.08, 0.06, 0.05];
    const items = Children.toArray(children);

    return (
        <motion.div
            onMouseMove={onMouseMove}
            style={{ perspective: 1000, rotateX, rotateY }}
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(1200px 800px at 80% 20%, rgba(127,86,217,0.08), transparent 60%), radial-gradient(1200px 800px at 20% 80%, rgba(105,65,198,0.06), transparent 60%)",
                }}
            />
            {items.map((child, i) => (
                <ParallaxSection key={i} depth={depths[i] ?? 0.06}>{child}</ParallaxSection>
            ))}
        </motion.div>
    );
}
