"use server";

import { sendSiteEmail } from "@/lib/mail";

export type ChatbotEnquiryState = {
  ok: boolean;
  error?: string;
};

export async function submitChatbotEnquiry(
  _prev: ChatbotEnquiryState,
  formData: FormData,
): Promise<ChatbotEnquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();

  if (!name || !email) {
    return { ok: false, error: "Please add your name and email so we can respond." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const result = await sendSiteEmail({
    subject: `Website chat enquiry from ${name}`,
    replyTo: email,
    text: [
      "Submitted via website chat assistant",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Topic: ${topic || "General enquiry"}`,
    ].join("\n"),
  });

  return result.ok ? { ok: true } : { ok: false, error: result.error };
}
