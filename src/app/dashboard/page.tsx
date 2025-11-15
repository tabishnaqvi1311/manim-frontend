"use client";

import { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Plus,
  BookOpen,
  FolderOpen,
  Search,
  Target,
  MessageSquare,
  MoreVertical,
  Trash2,
} from "lucide-react";
import TrialCard from "./components/trial-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Chatbar } from "../../components/chatbar";
import { useChat } from "@/contexts/chat-context";
import { ChatMessages } from "@/components/chat-message";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardContent user={user} />
    </SidebarProvider>
  );
}

function DashboardContent({ user }: { user: any }) {
  const { toggleSidebar, setOpen } = useSidebar();
  const { chats, currentChat, loadChat, createNewChat, isLoading, deleteChat } =
    useChat();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const menuItems = [
    {
      title: "New Chat",
      icon: Plus,
      url: "#",
      action: createNewChat,
      highlight: true,
    },
    { title: "Search Chat", icon: Search, url: "/dashboard/search" },
    { title: "Library", icon: BookOpen, url: "/dashboard/library" },
    { title: "Projects", icon: FolderOpen, url: "/dashboard/projects" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setOpen(false);
    }
  }, [setOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          (activeElement as HTMLElement).isContentEditable)
      ) {
        return;
      }

      if (e.key.toLowerCase() === "m") {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [toggleSidebar]);

  const handleDeleteChat = async (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (deletingId) return;

    if (confirm("Are you sure you want to delete this chat?")) {
      setDeletingId(chatId);
      try {
        await deleteChat(chatId);
      } catch (error) {
        console.error("Failed to delete chat:", error);
      } finally {
        setDeletingId(null);
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar
        collapsible="icon"
        className="bg-gradient-to-b from-blue-50 to-purple-200 border-r border-gray-200"
      >
        <SidebarHeader className="bg-blue-50 p-4">
          <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
            <button
              onClick={toggleSidebar}
              className="group-data-[collapsible=icon]:hidden hover:scale-105 transition-transform"
              aria-label="Toggle Sidebar"
            >
              <Target className="h-6 w-6 text-gray-700" />
            </button>

            <div className="hidden group-data-[collapsible=icon]:block">
              <SidebarTrigger className="text-gray-700" />
            </div>

            <h2 className="text-lg font-semibold text-gray-900 font-[family-name:var(--font-space-grotesk)] group-data-[collapsible=icon]:hidden">
              Feynman
            </h2>
          </div>
        </SidebarHeader>

        <SidebarContent className="bg-gradient-to-b from-blue-50 to-gray-100">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild={!item.action}
                      tooltip={item.title}
                      className={
                        item.highlight
                          ? "bg-gradient-to-tl from-blue-100 to-purple-100 hover:bg-purple-900 text-black"
                          : "text-gray-700 hover:bg-blue-100"
                      }
                      onClick={item.action}
                    >
                      {item.action ? (
                        <div className="flex items-center gap-2 cursor-pointer">
                          <item.icon className="h-5 w-5 text-black" />
                          <span className="text-black">{item.title}</span>
                        </div>
                      ) : (
                        <a href={item.url}>
                          <item.icon className="h-5 w-5 text-gray-700" />
                          <span className="text-gray-700">{item.title}</span>
                        </a>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase px-4 group-data-[collapsible=icon]:hidden">
              Chats
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {chats.map((chat) => (
                  <SidebarMenuItem key={chat.id}>
                    <div className="group relative flex items-center w-full">
                      <SidebarMenuButton
                        tooltip={chat.title}
                        onClick={() => loadChat(chat.id)}
                        className={`flex-1 text-gray-700 hover:bg-gray-200 hover:text-gray-900 ${
                          currentChat?.id === chat.id
                            ? "bg-transparent text-gray-900"
                            : ""
                        }`}
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span className="truncate">{chat.title}</span>
                      </SidebarMenuButton>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            className="opacity-0 group-hover:opacity-100 absolute right-2 p-1 hover:bg-gray-200 rounded transition-opacity"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreVertical className="h-4 w-4 text-gray-600" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            className="text-red-600 cursor-pointer"
                            onClick={(e) => handleDeleteChat(chat.id, e as any)}
                            disabled={deletingId === chat.id}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            {deletingId === chat.id ? "Deleting..." : "Delete"}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="bg-gradient-to-b from-gray-100 to-purple-50 p-4 space-y-4">
          <TrialCard />
          <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
            <UserButton afterSignOutUrl="/" />
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              {!user ? (
                <>
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-3 w-32" />
                </>
              ) : (
                <>
                  <span className="text-sm text-gray-900 font-medium">
                    {user.fullName || "User"}
                  </span>
                  <span className="text-xs text-gray-500">
                    {user.primaryEmailAddress?.emailAddress || ""}
                  </span>
                </>
              )}
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-7xl h-[calc(100vh-3rem)] bg-gray-100 rounded-2xl shadow-lg flex flex-col">
          {currentChat ? (
            <>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 font-[family-name:var(--font-space-grotesk)]">
                  {currentChat.title}
                </h2>
              </div>

              <ChatMessages
                messages={currentChat.messages}
                isLoading={isLoading}
              />

              <div className="p-4">
                <Chatbar />
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col justify-between p-8 bg-gradient-to-t from-purple-50 to-blue-50 rounded-2xl shadow-lg">
              <div className="flex flex-col items-center justify-center flex-1">
                <h1 className="text-3xl font-extralight text-gray-900 mb-8 text-center font-[family-name:var(--font-space-grotesk)]">
                  Start generating concepts
                </h1>
              </div>

              <div className="w-full max-w-3xl mx-auto mt-auto">
                <Chatbar />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
