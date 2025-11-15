"use client";

import * as React from "react";
import { Send, Loader2, Paperclip, Link as LinkIcon, Globe } from "lucide-react";
import { useChat } from "@/contexts/chat-context";
import { cn } from "@/lib/utils";

export function Chatbar() {
  const [prompt, setPrompt] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { sendMessage, isLoading, currentChat } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const currentPrompt = prompt;
    setPrompt("");
    await sendMessage(currentPrompt, currentChat?.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={cn(
          "w-full rounded-3xl p-3 flex items-center justify-between shadow-xl transition-all",
          "bg-transparent border border-gray-300"
        )}
      >
        <input
          ref={inputRef}
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything to Feynman..."
          disabled={isLoading}
          className="flex-grow text-left text-gray-700 pl-3 pr-2 bg-transparent focus:outline-none placeholder:text-gray-500"
        />

        <div className="flex space-x-2 mr-2">
          <button
            type="button"
            className="p-2 bg-transparent rounded-full cursor-pointer opacity-90 hover:opacity-60 transition-colors"
            disabled={isLoading}
          >
            <Globe className="w-4 h-4 text-gray-700" />
          </button>
          <button
            type="button"
            className="p-2 bg-transparent rounded-full cursor-pointer opacity-90 hover:opacity-60 transition-colors"
            disabled={isLoading}
          >
            <LinkIcon className="w-4 h-4 text-gray-700 rotate-45" />
          </button>
          <button
            type="button"
            className="p-2 bg-transparent rounded-full cursor-pointer opacity-90 hover:opacity-60 transition-colors"
            disabled={isLoading}
          >
            <Paperclip className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <button
          type="submit"
          disabled={!prompt.trim() || isLoading}
          className="p-2 bg-transparent rounded-full cursor-pointer text-gray-700 shadow-md hover:bg-purple-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </div>
    </form>
  );
}