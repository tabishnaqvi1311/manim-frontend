"use client";

import { cn } from "@/lib/utils";
import { Mic, Link, Paperclip, Globe } from "lucide-react";
import * as React from "react";

interface ChatInputProps {
  isGlass?: boolean;
  containerClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export function ChatInput({
  isGlass = true,
  containerClassName,
  inputRef,
}: ChatInputProps) {
  const glassClasses = isGlass
    ? "bg-transparent backdrop-blur-xl border border-white/80"
    : "bg-white border border-gray-300 shadow-md";

  return (
    <div
      className={cn(
        "w-full max-w-3xl rounded-3xl p-3 flex items-center justify-between shadow-xl transition-all",
        glassClasses,
        containerClassName
      )}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Ask anything to Feynman..."
        className="flex-grow text-left text-gray-700 pl-3 pr-2 bg-transparent focus:outline-none placeholder:text-gray-500"
      />

      <div className="flex space-x-2 mr-2">
        <button className="p-2 bg-gray-100 rounded-full cursor-pointer opacity-90 hover:opacity-60 transition-colors">
          <Globe className="w-4 h-4 text-gray-700" />
        </button>
        <button className="p-2 bg-gray-100 rounded-full cursor-pointer opacity-90 hover:opacity-60 transition-colors">
          <Link className="w-4 h-4 text-gray-700 rotate-45" />
        </button>
        <button className="p-2 bg-gray-100 rounded-full cursor-pointer opacity-90 hover:opacity-60 transition-colors">
          <Paperclip className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      <button className="p-2 bg-gray-100 rounded-full cursor-pointer text-gray-700 shadow-md hover:bg-gray-200 transition-colors">
        <Mic className="w-4 h-4" />
      </button>
    </div>
  );
}
