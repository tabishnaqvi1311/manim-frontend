import React, { useState, useEffect, useRef } from "react";
import { Send, Mic, Play } from "lucide-react";
import Image from "next/image";

const VideoBubble: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="p-1 rounded-xl max-w-xs w-full shadow-lg bg-black relative overflow-hidden animate-bubble-appear cursor-pointer">
      <video
        ref={videoRef}
        src="/videos/sample2.mp4"
        loop
        muted
        style={{ backgroundImage: "linear-gradient(135deg, #4c4c4c, #2c2c2c)" }}
        className="w-full h-auto object-cover rounded-lg aspect-video"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-white/70 text-black hover:bg-opacity-90 transition-opacity"
        >
          <Play
            className={`w-6 h-6 transition-opacity ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
            fill="currentColor"
          />
        </button>
      </div>
      <p className="text-white text-xs mt-2 p-1">
        Here’s a quick sample explaining neural networks.
      </p>
    </div>
  );
};

interface ChatMessage {
  id: number;
  sender: "user" | "bot";
  content: React.ReactNode;
  delay: number;
}

const messages: ChatMessage[] = [
  {
    id: 1,
    sender: "user",
    content: "Generate a video of a Neural Network",
    delay: 800,
  },
  {
    id: 2,
    sender: "bot",
    content:
      "Sure! Let’s get started. I’ll prepare a quick visual explanation for you.",
    delay: 2200,
  },
  {
    id: 3,
    sender: "bot",
    content: <VideoBubble />,
    delay: 4000,
  },
];

const Conversation: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [cycleKey, setCycleKey] = useState(0);
  const [sendActive, setSendActive] = useState(false);

  const chatAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const timers = useRef<number[]>([]);

  const messageToType = messages[0].content as string;

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    setVisibleMessages([]);
    setInputText("");
    setIsTyping(true);

    const typeMessage = (index = 0) => {
      if (index <= messageToType.length) {
        setInputText(messageToType.slice(0, index));
        const typingTimer = window.setTimeout(
          () => typeMessage(index + 1),
          30 + Math.random() * 40
        );
        timers.current.push(typingTimer);
      } else {
        const sendTimer = window.setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages([{ ...messages[0] }]);
          setInputText("");
          setSendActive(true);

          setTimeout(() => setSendActive(false), 150);

          messages.slice(1).forEach((msg) => {
            const botTimer = window.setTimeout(() => {
              setVisibleMessages((prev) => [...prev, msg]);
            }, msg.delay);
            timers.current.push(botTimer);
          });

          const totalDuration = messages[messages.length - 1].delay + 4000;
          const loopTimer = window.setTimeout(() => {
            setCycleKey((prev) => prev + 1);
          }, totalDuration);
          timers.current.push(loopTimer);
        }, 600);
        timers.current.push(sendTimer);
      }
    };

    typeMessage();

    return () => timers.current.forEach(clearTimeout);
  }, [cycleKey]);

  useEffect(() => {
    if (chatAreaRef.current) {
      setTimeout(() => {
        if (chatAreaRef.current) {
          chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
      }, 0);
    }
  }, [visibleMessages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    setSendActive(true);

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      content: inputText,
      delay: 0,
    };

    setTimeout(() => {
      setVisibleMessages((prev) => [...prev, userMessage]);
      setInputText("");
      if (inputRef.current) inputRef.current.style.height = "auto";
      setSendActive(false);
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative w-full max-w-md h-full flex flex-col mt-[-20px]">
      <div className="relative w-full h-full flex flex-col rounded-3xl overflow-hidden border border-white/40 shadow-xl ">
        <div
          ref={chatAreaRef}
          className="flex-1 flex flex-col justify-end p-6 pt-10 space-y-6 relative overflow-y-auto "
        >
          {visibleMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col relative animate-bubble-appear ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="absolute -top-2 -left-2 w-6 h-6">
                  <Image
                    src="/gamma.svg"
                    alt="Feynman Logo"
                    width={24}
                    height={24}
                  />
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl max-w-[80%] shadow-lg text-sm transition-all duration-500 ${
                  msg.sender === "user"
                    ? "bg-[#e8f0fe] text-gray-800 rounded-br-lg"
                    : "bg-black text-white rounded-tl-lg ml-6"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-3">
          <div className="relative flex items-end bg-white/70 backdrop-blur-md rounded-3xl shadow-inner px-3 py-4">
            <textarea
              ref={inputRef}
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={isTyping ? "" : "Generate more...."}
              className="flex-1 resize-none bg-transparent text-gray-700 focus:outline-none placeholder-gray-500 overflow-y-auto max-h-36 py-1 px-2 text-sm"
              rows={1}
              disabled={isTyping}
            />

            <div className="flex items-end gap-1 ml-1 pb-0">
              <button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors text-black">
                <Mic className="w-4 h-4" />
              </button>

              <button
                onClick={handleSend}
                disabled={isTyping || !inputText.trim()}
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 transition-colors duration-150 shadow-md ${
                  sendActive ? "text-blue-500" : "text-black"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;