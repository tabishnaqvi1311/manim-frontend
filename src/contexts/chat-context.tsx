"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { apiClient, Chat, ChatDetail, Message } from "@/lib/api";
import { useUser } from "@clerk/nextjs";

interface ChatContextType {
  chats: Chat[];
  currentChat: ChatDetail | null;
  isLoading: boolean;
  error: string | null;
  loadChats: () => Promise<void>;
  loadChat: (chatId: string) => Promise<void>;
  sendMessage: (prompt: string, chatId?: string) => Promise<void>;
  createNewChat: () => void;
  deleteChat: (chatId: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChat, setCurrentChat] = useState<ChatDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadChats = useCallback(async () => {
    try {
      setError(null);
      const data = await apiClient.getChatHistory();
      setChats(data);
    } catch (err) {
      setError("Failed to load chats");
      console.error(err);
    }
  }, []);

  React.useEffect(() => {
    if (user) {
      apiClient.setUserId(user.id);
      apiClient.createOrGetUser(
        user.id,
        user.primaryEmailAddress?.emailAddress || "",
        user.fullName || undefined
      );
      loadChats();
    }
  }, [user, loadChats]);

  const loadChat = useCallback(async (chatId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await apiClient.getChatDetail(chatId);
      setCurrentChat(data);
    } catch (err) {
      setError("Failed to load chat");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sendMessage = useCallback(
    async (prompt: string, chatId?: string) => {
      try {
        setError(null);

        const userMessage: Message = {
          id: `temp-${Date.now()}`,
          role: "user",
          content: prompt,
          created_at: new Date().toISOString(),
        };

        if (currentChat) {
          setCurrentChat({
            ...currentChat,
            messages: [...currentChat.messages, userMessage],
          });
        } else {
          setCurrentChat({
            id: "temp",
            title: prompt.slice(0, 50),
            messages: [userMessage],
            created_at: new Date().toISOString(),
          });
        }

        setIsLoading(true);

        const response = await apiClient.generateAnimation(prompt, chatId);

        const assistantMessage: Message = {
          id: response.message_id,
          role: "assistant",
          content: prompt,
          video_url: response.video_url,
          explanation: response.explanation,
          duration: response.duration,
          created_at: response.created_at,
        };

        setCurrentChat((prev) => {
          if (!prev) return null;

          return {
            id: response.chat_id,
            title: prev.title,
            messages:
              prev.id === "temp"
                ? [
                    { ...userMessage, id: userMessage.id.replace("temp-", "") },
                    assistantMessage,
                  ]
                : [...prev.messages, assistantMessage],
            created_at: prev.created_at,
          };
        });

        await loadChats();
      } catch (err) {
        setError("Failed to send message");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [currentChat, loadChats]
  );

  const deleteChat = useCallback(
    async (chatId: string) => {
      try {
        setError(null);
        await apiClient.deleteChat(chatId);

        if (currentChat?.id === chatId) {
          setCurrentChat(null);
        }

        await loadChats();
      } catch (err) {
        setError("Failed to delete chat");
        console.error(err);
        throw err;
      }
    },
    [currentChat, loadChats]
  );

  const createNewChat = useCallback(() => {
    setCurrentChat(null);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chats,
        currentChat,
        isLoading,
        error,
        loadChats,
        loadChat,
        sendMessage,
        createNewChat,
        deleteChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within ChatProvider");
  }
  return context;
}
