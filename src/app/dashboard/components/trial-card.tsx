"use client";

import { useState, useEffect } from "react";
import { X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrialCard() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isHidden = localStorage.getItem("hideTrialCard");
    if (isHidden === "true") setVisible(false);
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("hideTrialCard", "true");
  };

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-br from-gray-200 to-purple-100 rounded-xl p-4 group-data-[collapsible=icon]:hidden">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="flex items-center gap-2 mb-2">
        <Crown className="h-5 w-5 text-yellow-600" />
        <span className="text-xl font-semibold text-gray-900 font-[family-name:var(--font-space-grotesk)]">
          Subscribe
        </span>
      </div>

      <div className="mb-3 text-center">
        <p className="text-xs font-semibold text-gray-900 font-[family-name:var(--font-space-grotesk)]">
          You are on a free trial. Subscribe to generate more videos.
        </p>
      </div>

      <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-2 text-sm font-medium transition-colors">
        Upgrade Plan
      </Button>
    </div>
  );
}
