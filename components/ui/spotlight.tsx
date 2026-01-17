'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Spotlight({ className, size = 400 }: { className?: string; size?: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useSpring(0, { bounce: 0 });
    const mouseY = useSpring(0, { bounce: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current) {
                const parent = containerRef.current.parentElement;
                if (parent) {
                    const rect = parent.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;

                    // Check if mouse is within parent bounds
                    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                        mouseX.set(x);
                        mouseY.set(y);
                        setIsHovered(true);
                    } else {
                        setIsHovered(false);
                    }
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
    const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

    return (
        <motion.div
            ref={containerRef}
            className={cn(
                'pointer-events-none absolute rounded-full blur-[60px] transition-opacity duration-300 z-50 mix-blend-screen',
                isHovered ? 'opacity-100' : 'opacity-0',
                className
            )}
            style={{
                width: size,
                height: size,
                left: spotlightLeft,
                top: spotlightTop,
                background: `radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.05) 60%, transparent 85%)`,
            }}
        />
    );
}
