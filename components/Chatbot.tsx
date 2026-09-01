"use client";

import { useActionState, useCallback, useEffect, useRef, useState } from "react";
import { submitChatbotEnquiry, type ChatbotEnquiryState } from "@/app/chatbot/actions";
import { chatbot, type ChatbotNodeId } from "@/content/chatbot";
import { gem, site } from "@/content/site";
import { cn } from "@/lib/cn";

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

const ROOT_ID = "root" as const;
const ENQUIRY_ID = "enquiry" as const;
const initialEnquiryState: ChatbotEnquiryState = { ok: false };

function isChatbotNodeId(id: string): id is ChatbotNodeId {
  return id in chatbot.nodes;
}

function resolveMessage(nodeId: string): string {
  if (nodeId === "contact") {
    return `Reach HDIT at ${site.email} or ${site.phone}. Use the Contact page for a structured enquiry, or WhatsApp for a direct message. For careers, visit the Careers page.`;
  }

  if (!isChatbotNodeId(nodeId)) {
    return "Sorry — that option is not available. Please choose from the menu below.";
  }

  return chatbot.nodes[nodeId].message;
}

function getNode(nodeId: string) {
  if (!isChatbotNodeId(nodeId)) return chatbot.nodes[ROOT_ID];
  return chatbot.nodes[nodeId];
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState<string>(ROOT_ID);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [topic, setTopic] = useState("General enquiry");
  const [formSession, setFormSession] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentNode = getNode(currentNodeId);
  const showForm = currentNodeId === ENQUIRY_ID;

  const resetChat = useCallback(() => {
    setCurrentNodeId(ROOT_ID);
    setTopic("General enquiry");
    setFormSession((value) => value + 1);
    setMessages([{ role: "bot", text: chatbot.nodes[ROOT_ID].message }]);
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      resetChat();
    }
  }, [open, messages.length, resetChat]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, currentNodeId, showForm]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleOption = (label: string, nextId: string) => {
    if (nextId === ENQUIRY_ID) {
      setFormSession((value) => value + 1);
    }

    if (nextId !== ENQUIRY_ID && nextId !== ROOT_ID && nextId !== "contact" && nextId !== "gem-link") {
      setTopic(label);
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", text: label },
      { role: "bot", text: resolveMessage(nextId) },
    ]);
    setCurrentNodeId(nextId);
  };

  const handleEnquirySuccess = useCallback(() => {
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        text: "Thank you — we have your details. A member of the HDIT team will be in touch shortly.",
      },
    ]);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <div className="relative flex flex-col items-end">
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-title"
          className="mb-4 flex h-[min(72vh,32rem)] w-[min(100vw-2rem,24rem)] flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-paper shadow-[0_24px_60px_rgba(10,22,40,0.28)] sm:w-[24rem]"
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
          </div>

          <div className="shrink-0 border-t border-line bg-white px-4 py-3.5">
            {showForm ? (
              <div className="max-h-52 overflow-y-auto">
                <EnquiryForm
                  key={formSession}
                  topic={topic}
                  onBack={() => handleOption("Back to main menu", ROOT_ID)}
                  onSuccess={handleEnquirySuccess}
                />
              </div>
            ) : (
              <>
                <p className="mb-2.5 text-[0.68rem] tracking-[0.14em] text-muted uppercase">Choose an option</p>
                <div className="flex h-44 flex-col gap-2 overflow-y-auto pr-0.5">
                  {currentNode.options.map((option) => {
                    if (option.next === "gem-link") {
                      return (
                        <a
                          key={option.next}
                          href={gem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl border border-line bg-paper px-3 py-2.5 text-left text-[0.84rem] leading-snug text-ink transition-all duration-300 hover:-translate-y-px hover:border-amber hover:bg-white hover:shadow-sm"
                        >
                          {option.label}
                        </a>
                      );
                    }

                    return (
                      <button
                        key={`${option.next}-${option.label}`}
                        type="button"
                        onClick={() => handleOption(option.label, option.next)}
                        className="rounded-xl border border-line bg-paper px-3 py-2.5 text-left text-[0.84rem] leading-snug text-ink transition-all duration-300 hover:-translate-y-px hover:border-amber hover:bg-white hover:shadow-sm"
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={chatbot.launcherLabel}
          className="group relative flex h-[3.65rem] items-center gap-3 overflow-hidden rounded-full bg-ink py-1.5 pr-5 pl-1.5 text-paper shadow-[0_14px_40px_rgba(10,22,40,0.28)] transition-transform duration-300 hover:scale-[1.02]"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(143,180,224,0.35),transparent_55%)] opacity-80"
          />
          <span
            aria-hidden
            className="absolute -inset-1 rounded-full bg-amber/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-amber text-paper">
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

function EnquiryForm({
  topic,
  onBack,
  onSuccess,
}: {
  topic: string;
  onBack: () => void;
  onSuccess: () => void;
}) {
  const [state, action, pending] = useActionState(submitChatbotEnquiry, initialEnquiryState);
  const notified = useRef(false);

  useEffect(() => {
    if (state.ok && !notified.current) {
      notified.current = true;
      onSuccess();
    }
  }, [state.ok, onSuccess]);

  if (state.ok) {
    return (
      <div className="space-y-3">
        <p className="text-[0.84rem] leading-relaxed text-muted">
          Your details are with the team. You can keep browsing topics below.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-left text-[0.84rem] text-ink transition-colors duration-300 hover:border-amber hover:bg-white"
        >
          Back to main menu
        </button>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-3">
      <p className="text-[0.68rem] tracking-[0.14em] text-muted uppercase">Your details</p>
      <input type="hidden" name="topic" value={topic} />
      <Field label="Name" name="name" type="text" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      {state.error ? <p className="text-[0.8rem] leading-relaxed text-red-700">{state.error}</p> : null}
      <div className="flex gap-2 pt-1">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border border-line px-3 py-2.5 text-[0.8rem] text-muted transition-colors duration-300 hover:border-amber hover:text-ink"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={pending}
          className="flex-1 rounded-xl bg-ink px-3 py-2.5 text-[0.8rem] tracking-[0.08em] text-paper uppercase transition-colors duration-300 hover:bg-amber disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send to HDIT"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[0.68rem] tracking-[0.12em] text-muted uppercase">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2 text-[0.88rem] text-ink outline-none transition-colors duration-300 placeholder:text-stone focus:border-amber"
      />
    </label>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
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
