"use client";

import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export default function Navbar(){
    return (
        <nav className="flex items-center justify-between p-4 bg-secondary absolute top-0 w-full font-[family-name:var(--font-space-grotesk)]">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-lg font-bold text-secondary-foreground">ManimGPT</Link>
            </div>
            <div className="flex items-center space-x-4">
                <ModeToggle/>
            </div>
        </nav>
    )
}