"use server";

import { Resend } from "resend";
import { site } from "@/content/site";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: `Email is not configured yet. Please write to ${site.email}.`,
    };
  }

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL ?? "HDIT Website <beth.t@example.com>";
  const lines = [
    `Name: ${name}`,
    `Organisation: ${company || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Capability: ${projectType || "—"}`,
    "",
    message || "No message provided.",
  ];

  const { error } = await resend.emails.send({
    from,
    to: site.email,
    replyTo: email,
    subject: `Website enquiry from ${name}`,
    text: lines.join("\n"),
  });

  if (error) {
    return { ok: false, error: "The enquiry could not be sent. Please try again or email us directly." };
  }

  return { ok: true };
}
