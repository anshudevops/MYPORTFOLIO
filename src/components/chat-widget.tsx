import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { Bot, MessageSquare, Send, Sparkles, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const QUICK_PROMPTS = [
  "What is your tech stack?",
  "Are you available for freelance / full-time roles?",
  "Tell me about your Node.js experience",
] as const;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, messages.length]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        onClick={() => setOpen(true)}
        aria-label="Open AI chat"
        className={cn(
          "fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full",
          "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground",
          "shadow-2xl shadow-primary/40 transition-all hover:scale-110",
          open && "pointer-events-none opacity-0"
        )}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
          AI
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 22 }}
            className="fixed bottom-6 right-6 z-50 flex h-[600px] max-h-[calc(100vh-3rem)] w-[calc(100vw-3rem)] max-w-md flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border bg-gradient-to-br from-primary/10 via-card to-card px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Ask Anshu's AI</div>
                  <div className="text-[11px] text-muted-foreground">Powered by Lovable AI</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-md p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-sm">
                      Hi! I'm Anshu's AI assistant. Ask me anything about his experience, skills, or availability.
                    </div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="px-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Try asking</div>
                    {QUICK_PROMPTS.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="block w-full rounded-xl border border-border bg-surface/60 px-3 py-2 text-left text-sm transition-all hover:border-primary/50 hover:bg-secondary hover:translate-x-0.5"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => {
                const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
                const isUser = m.role === "user";
                return (
                  <div key={m.id} className={cn("flex gap-3", isUser && "flex-row-reverse")}>
                    {!isUser && (
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                        isUser
                          ? "rounded-tr-sm bg-primary text-primary-foreground"
                          : "rounded-tl-sm bg-secondary text-foreground"
                      )}
                    >
                      {isUser ? (
                        <p className="whitespace-pre-wrap">{text}</p>
                      ) : (
                        <div className="prose prose-sm max-w-none dark:prose-invert prose-p:my-1 prose-ul:my-1 prose-headings:my-1">
                          <ReactMarkdown>{text}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {status === "submitted" && (
                <div className="flex gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-secondary px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                  </div>
                </div>
              )}

              {error && (
                <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  Something went wrong. Please try again.
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-border bg-card p-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary/40">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Anshu..."
                  disabled={busy}
                  className="flex-1 bg-transparent py-1.5 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label="Send"
                  className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-30"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
