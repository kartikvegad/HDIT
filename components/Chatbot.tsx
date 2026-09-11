"use client";

import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { submitChatbotEnquiry } from "@/app/chatbot/actions";
import { chatbot, type ChatbotInputField, type ChatbotNode, type ChatbotNodeId } from "@/content/chatbot";
import { cn } from "@/lib/cn";

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

type LeadAnswers = {
  path: string;
  capability: string;
  segment: string;
  amc: string;
  issue: string;
  nameCompany: string;
  phone: string;
  email: string;
};

const ROOT_ID = "root" as const;

const emptyAnswers = (): LeadAnswers => ({
  path: "",
  capability: "",
  segment: "",
  amc: "",
  issue: "",
  nameCompany: "",
  phone: "",
  email: "",
});

function isChatbotNodeId(id: string): id is ChatbotNodeId {
  return id in chatbot.nodes;
}

function getNode(nodeId: string): ChatbotNode {
  if (!isChatbotNodeId(nodeId)) return chatbot.nodes[ROOT_ID] as ChatbotNode;
  return chatbot.nodes[nodeId] as ChatbotNode;
}

function messageFor(nodeId: string) {
  return getNode(nodeId).message;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState<string>(ROOT_ID);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [answers, setAnswers] = useState<LeadAnswers>(emptyAnswers);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const currentNode = getNode(currentNodeId);
  const hasInput = Boolean(currentNode.input);
  const hasOptions = Boolean(currentNode.options?.length);

  const resetChat = useCallback(() => {
    setCurrentNodeId(ROOT_ID);
    setAnswers(emptyAnswers());
    setDraft("");
    setError(null);
    setMessages([{ role: "bot", text: chatbot.nodes[ROOT_ID].message }]);
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      resetChat();
    }
  }, [open, messages.length, resetChat]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, currentNodeId, error, pending]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open && hasInput) {
      inputRef.current?.focus();
    }
  }, [open, hasInput, currentNodeId]);

  const goToAskName = (from: "sales" | "service", nextMessages: ChatMessage[]) => {
    const introId = from === "service" ? "lead-intro-service" : "lead-intro-sales";
    setMessages([
      ...nextMessages,
      { role: "bot", text: messageFor(introId) },
      { role: "bot", text: messageFor("ask-name") },
    ]);
    setCurrentNodeId("ask-name");
    setDraft("");
    setError(null);
  };

  const submitLead = (payload: LeadAnswers) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.set("path", payload.path);
      formData.set("capability", payload.capability);
      formData.set("segment", payload.segment);
      formData.set("amc", payload.amc);
      formData.set("issue", payload.issue);
      formData.set("nameCompany", payload.nameCompany);
      formData.set("phone", payload.phone);
      formData.set("email", payload.email);

      const result = await submitChatbotEnquiry({ ok: false }, formData);
      if (!result.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setMessages((prev) => [...prev, { role: "bot", text: messageFor("done") }]);
      setCurrentNodeId("done");
      setDraft("");
      setError(null);
    });
  };

  const handleOption = (label: string, nextId: string) => {
    const userAndBot: ChatMessage[] = [
      ...messages,
      { role: "user", text: label },
      { role: "bot", text: messageFor(nextId) },
    ];

    const nextAnswers = { ...answers };

    if (currentNodeId === ROOT_ID) {
      nextAnswers.path = label;
    } else if (currentNodeId === "sales") {
      nextAnswers.capability = label;
    } else if (currentNodeId === "sales-context") {
      nextAnswers.segment = label;
    } else if (currentNodeId === "service") {
      nextAnswers.amc = label;
    }

    setAnswers(nextAnswers);

    if (nextId === "ask-name") {
      const from = nextAnswers.path.toLowerCase().includes("service") ? "service" : "sales";
      // Drop the ask-name bot line from userAndBot — goToAskName adds intro + ask-name
      goToAskName(from, [...messages, { role: "user", text: label }]);
      return;
    }

    if (nextId === ROOT_ID) {
      resetChat();
      return;
    }

    setMessages(userAndBot);
    setCurrentNodeId(nextId);
    setDraft("");
    setError(null);
  };

  const handleInputSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const value = draft.trim();
    if (!value || !currentNode.input || pending) return;

    const field = currentNode.input.field as ChatbotInputField;
    const nextId = currentNode.input.next;

    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (field === "phone" && value.replace(/\D/g, "").length < 8) {
      setError("Please enter a valid mobile / WhatsApp number.");
      return;
    }

    const nextAnswers = { ...answers, [field]: value };
    setAnswers(nextAnswers);

    const nextMessages: ChatMessage[] = [...messages, { role: "user", text: value }];

    if (nextId === "ask-name") {
      goToAskName("service", nextMessages);
      return;
    }

    if (nextId === "done") {
      setMessages(nextMessages);
      setDraft("");
      setError(null);
      submitLead(nextAnswers);
      return;
    }

    setMessages([...nextMessages, { role: "bot", text: messageFor(nextId) }]);
    setCurrentNodeId(nextId);
    setDraft("");
    setError(null);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="relative flex flex-col items-end">
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-title"
          className="mb-3 flex h-[min(70svh,30rem)] w-[min(100vw-1.5rem,24rem)] flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-paper shadow-[0_24px_60px_rgba(10,22,40,0.28)] sm:mb-4 sm:h-[min(72vh,32rem)] sm:w-[24rem] sm:rounded-[1.35rem]"
        >
          <header className="relative shrink-0 overflow-hidden bg-ink px-4 py-4 text-paper">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(143,180,224,0.22),transparent_55%)]"
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <span className="font-display text-sm tracking-tight">H</span>
                </div>
                <div>
                  <p id="chatbot-title" className="font-display text-[1.15rem] leading-tight tracking-tight">
                    {chatbot.title}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-[0.68rem] tracking-[0.12em] text-paper/70 uppercase">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {chatbot.subtitle}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label={chatbot.closeLabel}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-paper/85 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/15 hover:text-paper"
              >
                <CloseIcon />
              </button>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto bg-[linear-gradient(180deg,#f7f9fc_0%,#f3f6fa_100%)] px-4 py-4"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={cn(
                  "flex max-w-[92%] gap-2",
                  message.role === "bot" ? "self-start" : "self-end flex-row-reverse",
                )}
              >
                {message.role === "bot" ? (
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-[0.62rem] font-medium text-paper">
                    H
                  </span>
                ) : null}
                <div
                  className={cn(
                    "rounded-2xl px-3.5 py-2.5 text-[0.9rem] leading-relaxed whitespace-pre-line shadow-sm",
                    message.role === "bot"
                      ? "rounded-tl-md border border-line/80 bg-white text-ink"
                      : "rounded-tr-md bg-ink text-paper",
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {pending ? (
              <p className="self-start text-[0.8rem] text-muted">Sending your details…</p>
            ) : null}
          </div>

          <div className="shrink-0 border-t border-line bg-white px-4 py-3.5">
            {hasInput && currentNode.input ? (
              <form onSubmit={handleInputSubmit} className="space-y-2">
                <p className="text-[0.68rem] tracking-[0.14em] text-muted uppercase">Your reply</p>
                {currentNode.input.kind === "text" && currentNode.input.field === "issue" ? (
                  <textarea
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    rows={3}
                    placeholder={currentNode.input.placeholder}
                    className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-[0.88rem] text-ink outline-none transition-colors duration-300 placeholder:text-stone focus:border-amber"
                  />
                ) : (
                  <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    type={currentNode.input.kind}
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder={currentNode.input.placeholder}
                    autoComplete={
                      currentNode.input.field === "email"
                        ? "email"
                        : currentNode.input.field === "phone"
                          ? "tel"
                          : "name"
                    }
                    className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-[0.88rem] text-ink outline-none transition-colors duration-300 placeholder:text-stone focus:border-amber"
                  />
                )}
                {error ? <p className="text-[0.8rem] leading-relaxed text-red-700">{error}</p> : null}
                <button
                  type="submit"
                  disabled={pending || !draft.trim()}
                  className="tap-feedback w-full rounded-xl bg-ink px-3 py-2.5 text-[0.8rem] tracking-[0.08em] text-paper uppercase transition-colors duration-300 hover:bg-amber disabled:opacity-70"
                >
                  {pending ? "Sending…" : "Continue"}
                </button>
              </form>
            ) : hasOptions ? (
              <>
                <p className="mb-2.5 text-[0.68rem] tracking-[0.14em] text-muted uppercase">Choose an option</p>
                <div className="flex max-h-44 flex-col gap-2 overflow-y-auto pr-0.5">
                  {currentNode.options?.map((option) => (
                    <button
                      key={`${option.next}-${option.label}`}
                      type="button"
                      disabled={pending}
                      onClick={() => handleOption(option.label, option.next)}
                      className="tap-feedback rounded-xl border border-line bg-paper px-3 py-2.5 text-left text-[0.84rem] leading-snug text-ink hover:-translate-y-px hover:border-amber hover:bg-white hover:shadow-sm disabled:opacity-60"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <button
                type="button"
                onClick={resetChat}
                className="tap-feedback w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-left text-[0.84rem] text-ink hover:border-amber hover:bg-white"
              >
                Start over
              </button>
            )}
          </div>
        </div>
      ) : null}

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={chatbot.launcherLabel}
          className="group fab-pulse tap-feedback relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-amber text-paper shadow-[0_14px_40px_rgba(10,22,40,0.28)] hover:scale-[1.03] sm:h-[3.65rem] sm:w-auto sm:gap-3 sm:bg-ink sm:py-1.5 sm:pr-5 sm:pl-1.5"
        >
          <span
            aria-hidden
            className="absolute inset-0 hidden rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(143,180,224,0.35),transparent_55%)] opacity-80 sm:block"
          />
          <span
            aria-hidden
            className="absolute -inset-1 rounded-full bg-amber/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="relative flex h-12 w-12 items-center justify-center sm:h-11 sm:w-11 sm:rounded-full sm:bg-amber">
            <ChatIcon />
          </span>
          <span className="relative hidden text-left sm:block">
            <span className="block text-[0.72rem] tracking-[0.14em] text-paper/70 uppercase">Need help?</span>
            <span className="block text-[0.92rem] font-medium">Chat with HDIT</span>
          </span>
        </button>
      ) : null}
    </div>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current sm:h-5 sm:w-5">
      <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2Zm2 3v9.17L7.17 14H18V6H6Z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-4 w-4 stroke-current", className)} fill="none" strokeWidth="2">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
