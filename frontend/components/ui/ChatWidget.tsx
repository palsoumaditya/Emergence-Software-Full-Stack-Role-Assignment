"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:8000";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const GREETING_MESSAGE: Message = {
  id: "greeting",
  role: "assistant",
  content:
    "Hey there! 👋 I'm Soumaditya's AI assistant. Ask me anything about his skills, projects, experience, or background!",
};

const SUGGESTED_QUESTIONS = [
  "What projects has Soumaditya built?",
  "What are his technical skills?",
  "Tell me about his experience",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate or retrieve session ID
  useEffect(() => {
    let sid = sessionStorage.getItem("chat_session_id");
    if (!sid) {
      sid = crypto.randomUUID();
      sessionStorage.setItem("chat_session_id", sid);
    }
    setSessionId(sid);

    // Load history from backend
    fetch(`${BACKEND_URL.replace(/\/$/, "")}/api/chat/history/${sid}`, { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        if (data.messages && data.messages.length > 0) {
          const restored: Message[] = data.messages.map(
            (m: { role: string; content: string }, i: number) => ({
              id: `history-${i}`,
              role: m.role as "user" | "assistant",
              content: m.content,
            })
          );
          setMessages([GREETING_MESSAGE, ...restored]);
        }
      })
      .catch(() => {
        /* Backend might not be running yet */
      });
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text?: string) => {
      const messageText = (text || input).trim();
      if (!messageText || isLoading) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content: messageText,
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      try {
        const res = await fetch(`${BACKEND_URL.replace(/\/$/, "")}/api/chat`, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: messageText,
            session_id: sessionId,
          }),
        });
        const data = await res.json();

        if (data.session_id && data.session_id !== sessionId) {
          setSessionId(data.session_id);
          sessionStorage.setItem("chat_session_id", data.session_id);
        }

        const aiMsg: Message = {
          id: `ai-${Date.now()}`,
          role: "assistant",
          content: data.response || "Sorry, I couldn't process that.",
        };
        setMessages((prev) => [...prev, aiMsg]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `error-${Date.now()}`,
            role: "assistant",
            content:
              "I'm having trouble connecting right now. Please make sure the backend server is running and try again.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, sessionId]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[9998] w-14 h-14 rounded-full bg-foreground text-background shadow-lg shadow-black/20 dark:shadow-white/10 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group"
            aria-label="Open AI Chat"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-foreground/15" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl overflow-hidden border border-white/10 dark:border-white/[0.08] shadow-2xl shadow-black/20"
          >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-white/80 dark:bg-[#0a0a0a]/90 backdrop-blur-xl" />

            {/* Header */}
            <div className="relative flex items-center justify-between px-5 py-4 border-b border-black/5 dark:border-white/[0.06]">
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/[0.02] via-foreground/[0.03] to-foreground/[0.02] dark:from-white/[0.04] dark:via-white/[0.06] dark:to-white/[0.04]" />
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-foreground flex items-center justify-center shadow-sm">
                    <Sparkles className="w-4 h-4 text-background" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#0a0a0a] rounded-full" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground leading-tight">
                    Ask about Soumaditya
                  </h3>
                  <p className="text-[11px] text-muted-foreground">
                    AI-powered • Always available
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="relative w-8 h-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="relative flex-1 overflow-y-auto px-4 py-4 space-y-3 chat-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Bot className="w-3.5 h-3.5 text-background" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-foreground text-background rounded-2xl rounded-br-md shadow-sm"
                        : "bg-black/[0.03] dark:bg-white/[0.06] text-foreground rounded-2xl rounded-bl-md border border-black/[0.04] dark:border-white/[0.06]"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-foreground/60" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5 items-start"
                >
                  <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Bot className="w-3.5 h-3.5 text-background" />
                  </div>
                  <div className="bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.04] dark:border-white/[0.06] rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-foreground/40 animate-[chat-bounce_1.2s_ease-in-out_infinite]" />
                      <span className="w-2 h-2 rounded-full bg-foreground/40 animate-[chat-bounce_1.2s_ease-in-out_0.2s_infinite]" />
                      <span className="w-2 h-2 rounded-full bg-foreground/40 animate-[chat-bounce_1.2s_ease-in-out_0.4s_infinite]" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Suggested Questions (only after greeting) */}
              {messages.length === 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2 pt-1"
                >
                  <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider px-1">
                    Suggested questions
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-left text-[12px] px-3 py-2 rounded-xl bg-foreground/[0.04] hover:bg-foreground/[0.08] dark:bg-white/[0.06] dark:hover:bg-white/[0.12] text-foreground/80 dark:text-foreground/70 border border-foreground/[0.08] hover:border-foreground/[0.15] transition-all duration-200"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="relative px-4 pb-4 pt-2">
              <div className="flex items-center gap-2 bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] rounded-xl px-3 py-1.5 focus-within:border-foreground/30 focus-within:ring-1 focus-within:ring-foreground/10 transition-all duration-200">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Soumaditya..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground/60 outline-none py-1.5 disabled:opacity-50"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 active:scale-95 transition-all duration-150 shadow-sm"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground/50 text-center mt-2">
                Powered by AI • Responses based on resume data
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
