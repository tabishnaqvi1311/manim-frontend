"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "./components/hero";
import About from "./components/about";
import Product from "./components/product";
import Research from "./components/research";
import Community from "./components/community";

export default function Page() {
    const [pos, setPos] = React.useState({ x: 50, y: 50 });

    const handleMove = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
    }, []);

    return (
        <main
            className="relative flex flex-col min-h-screen bg-landing font-[family-name:var(--font-space-grotesk)] md:px-20 pt-20"
            onMouseMove={handleMove}
        >
            <Navbar />

            <div
                className="absolute -top-10 -left-10 w-[45vw] h-[45vh] bg-[radial-gradient(circle_at_top_left,rgba(100,80,255,0.4),transparent_70%)] blur-3xl pointer-events-none transition-all duration-100 ease-out"
                style={{
                    backgroundPosition: `${pos.x}% ${pos.y}%`,
                    transform: `translate(${pos.x / 10}px, ${pos.y / 10}px)`,
                }}
            />
            <div
                className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-[radial-gradient(circle_at_top_right,rgba(80,60,220,0.35),transparent_70%)] blur-3xl pointer-events-none transition-all duration-100 ease-out"
                style={{
                    backgroundPosition: `${100 - pos.x}% ${100 - pos.y}%`,
                    transform: `translate(-${pos.x / 10}px, -${pos.y / 10}px)`,
                }}
            />

            <Hero />
            <About />
            <Product />
            <Research />
            <Community />
        </main>
    );
}
