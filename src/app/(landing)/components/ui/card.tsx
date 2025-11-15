"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: string; 
  showGradient?: boolean; 
  blur?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      gradient = "from-[#805575] to-[#c76868]",
      showGradient = false,
      blur = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          
          "relative rounded-3xl overflow-hidden shadow-xl border border-gray-200",
          "bg-white flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]",
          
          "w-full max-w-2xl  p-8 sm:p-10",
          className
        )}
        {...props}
      >
        {showGradient && (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-b",
              gradient,
              blur && "backdrop-blur-sm",
              "opacity-70"
            )}
          />
        )}

        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
