"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  Loader2,
  BrainCircuit,
} from "lucide-react";
import { cn } from "../lib/utils";

/* ---------------- Types ---------------- */
type Message = {
  role: "user" | "ai";
  content: string;
};

/* ---------------- Component ---------------- */
export default function CareerAssistant() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "Hi! I’m your Aptech Agodi Career Assistant. Tell me about your interests, and I’ll help you find the right path from CPISM to ADSE!",
    },
  ]);

  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /* ---------------- Send Handler ---------------- */
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
    ]);

    setIsLoading(true);

    try {
      // ⚠️ NOTE: AI is commented out in your original code
      // You must initialize it properly in Next.js (server/client safe setup later)

      const response = {
        text: "AI response placeholder (connect backend or Gemini here)",
      };

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            response.text ||
            "I'm sorry, I couldn't process that. Please try again.",
        },
      ]);
    } catch (error) {
      console.error("AI Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "Oops, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-white text-black p-4 rounded-full shadow-2xl shadow-brand-accent/40 hover:scale-110 active:scale-95 transition-all group lg:flex items-center gap-3 hidden"
        aria-label="Open Career Assistant"
      >
        <BrainCircuit className="w-6 h-6" />
        <span className="font-bold pr-2">Career Assistant</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-6"
            role="dialog"
            aria-modal="true"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[600px]"
            >
              {/* Header */}
              <div className="bg-brand-primary p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-accent p-2 rounded-xl">
                    <Bot className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold">
                      Career Assistant
                    </h3>
                    <p className="text-white/60 text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online & AI-Powered
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white p-2 hover:bg-white/10 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg: Message, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={cn(
                      "flex gap-3 max-w-[85%]",
                      msg.role === "user"
                        ? "ml-auto flex-row-reverse text-right"
                        : "mr-auto"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        msg.role === "user"
                          ? "bg-slate-200"
                          : "bg-brand-tertiary"
                      )}
                    >
                      {msg.role === "user" ? (
                        <User className="w-4 h-4 text-slate-600" />
                      ) : (
                        <Sparkles className="w-4 h-4 text-white" />
                      )}
                    </div>

                    <div
                      className={cn(
                        "p-4 rounded-2xl text-sm",
                        msg.role === "user"
                          ? "bg-slate-100 text-slate-800 rounded-tr-none"
                          : "bg-brand-accent/10 text-brand-primary border border-brand-accent/20 rounded-tl-none"
                      )}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <div className="flex gap-2 items-center text-slate-400 text-xs ml-10">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Assistant is thinking...
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-6 border-t bg-slate-50">
                <div className="relative flex items-center">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about data science, networking..."
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none"
                  />

                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 p-3 bg-brand-primary text-white rounded-xl disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}