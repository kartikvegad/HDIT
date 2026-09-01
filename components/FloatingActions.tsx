import { Chatbot } from "@/components/Chatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-3 sm:right-8 sm:bottom-8">
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}
