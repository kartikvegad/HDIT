"use server";

import { sendSiteEmail } from "@/lib/mail";

export type QuoteState = {
  ok: boolean;
  error?: string;
};

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email) {
    return { ok: false, error: "Please add your name and email so we can respond." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const result = await sendSiteEmail({
    subject: `Website enquiry from ${name}`,
    replyTo: email,
    text: [
      `Name: ${name}`,
      `Organisation: ${company || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Capability: ${projectType || "—"}`,
      "",
      message || "No message provided.",
    ].join("\n"),
  });

  return result.ok ? { ok: true } : { ok: false, error: result.error };
}
