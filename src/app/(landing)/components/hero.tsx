"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Hero = () => (
  <div
    className="relative z-10 flex flex-col items-center text-center"
    style={{ paddingTop: "15vh" }}
  >
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className={cn(
          "absolute inset-0 opacity-10",
          "[background-size:48px_48px]",
          "[background-image:linear-gradient(to_right,#cfcfd2_1px,transparent_1px),linear-gradient(to_bottom,#cfcfd2_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#2b2b2b_1px,transparent_1px),linear-gradient(to_bottom,#2b2b2b_1px,transparent_1px)]",
          "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        )}
      />
    </div>

    <h1 className="relative text-4xl md:text-6xl font-bold text-gray-800 max-w-4xl">
      Research and Infrastructure for Visual Concept Intelligence
    </h1>
    <p className="relative mt-4 text-gray-600 md:text-lg max-w-2xl">
      Step into the visualization lab — where cross-domain concepts are animated, clarified, and openly explored.
    </p>

    <div className="relative z-10 mt-8 flex space-x-4">
      <Button
        variant="default"
        size="lg"
        className={cn(
          "bg-gray-800 text-white shadow-2xl hover:bg-gray-700",
          "rounded-lg"
        )}
      >
        About
      </Button>

      <Button
        variant="outline"
        size="lg"
        className={cn(
          "bg-white/50 border-gray-500 text-gray-800 hover:bg-white/70",
          "hover:text-gray-700",
          "rounded-lg"
        )}
      >
        Explore
      </Button>
    </div>
  </div>
);
