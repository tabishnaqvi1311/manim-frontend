"use client";
import Link from "next/link";
import Image from "next/image"; 
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Research", href: "/research" },
    { name: "Community", href: "/community" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        "flex items-center justify-between gap-10", 
        "px-4 py-2", 
        "bg-white/10 backdrop-blur-lg",
        "border border-white/20",
        "shadow-lg",
        "rounded-xl"
      )}
    >
      <Link href="/" className={cn()}>
        <Image
          src="/gamma.svg"
          alt="Gamma Logo"
          width={50} 
          height={50} 
        />
      </Link>

      <div className="hidden md:flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors",
              "text-black/70 hover:text-black"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Link
        href="/sign-in"
        className={cn(
          "flex items-center justify-center",
          "h-10 w-10", 
          "bg-white/10 backdrop-blur-sm", 
          "border border-white/20",
          "text-black",
          "hover:bg-white/20 transition-colors",
          "shadow-md", 
          "rounded-lg"
        )}
      >
        <ArrowRight className="h-5 w-5" /> 
      </Link>
    </nav>
  );
}