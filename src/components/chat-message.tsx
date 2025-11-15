"use client";

import * as React from "react";
import { Message } from "@/lib/api";
import { Target, Loader2 } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

interface ChatMessagesProps {
  messages: Message[];
  isLoading?: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`flex gap-4 ${
            message.role === "user" ? "justify-end" : "justify-start"
          } animate-in slide-in-from-bottom-2 duration-300`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {message.role === "assistant" && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-gray-600" />
            </div>
          )}

          <div
            className={`max-w-[70%] ${
              message.role === "user"
                ? "bg-gradient-to-tl from-blue-100 to-purple-100 text-black rounded-2xl rounded-tr-sm p-4"
                : "bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4"
            }`}
          >
            {message.role === "user" ? (
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            ) : (
              <p className="text-sm whitespace-pre-wrap text-black">
                Here is your Vidoe along with the Explanation:
              </p>
            )}

            {message.role === "assistant" && message.video_url && (
              <div className="mt-4 space-y-4">
                <video
                  controls
                  className="w-full rounded-lg"
                  src={message.video_url}
                >
                  Your browser does not support the video tag.
                </video>

                {message.explanation && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <h4 className="font-semibold text-sm mb-2 text-gray-900">
                      Explanation
                    </h4>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">
                      {message.explanation}
                    </p>
                  </div>
                )}

                {message.duration && (
                  <p className="text-xs text-gray-500 mt-2">
                    Duration: {message.duration}s
                  </p>
                )}
              </div>
            )}
          </div>

          {message.role === "user" && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      ))}

      {isLoading && (
        <div className="flex gap-4 justify-start animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <div className="max-w-[70%] bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4">
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              <span className="text-sm text-gray-600">
                Generating animation...
              </span>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
