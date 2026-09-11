"use server";

import { buildChatbotAutoReply, sendSiteEmail } from "@/lib/mail";
import { site } from "@/content/site";

export type ChatbotEnquiryState = {
  ok: boolean;
  error?: string;
};

export async function submitChatbotEnquiry(
  _prev: ChatbotEnquiryState,
  formData: FormData,
): Promise<ChatbotEnquiryState> {
  const path = String(formData.get("path") ?? "").trim();
  const capability = String(formData.get("capability") ?? "").trim();
  const segment = String(formData.get("segment") ?? "").trim();
  const amc = String(formData.get("amc") ?? "").trim();
  const issue = String(formData.get("issue") ?? "").trim();
  const nameCompany = String(formData.get("nameCompany") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  if (!nameCompany || !email || !phone) {
    return { ok: false, error: "Please share your name, phone and email so we can respond." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const name = nameCompany.split(/[·|,/–—-]/)[0]?.trim() || nameCompany;
  const isService = path.toLowerCase().includes("service") || path.toLowerCase().includes("support");

  const result = await sendSiteEmail({
    to: site.email,
    subject: isService
      ? `Website chat — Service request from ${name}`
      : `Website chat — Sales enquiry from ${name}`,
    replyTo: email,
    text: [
      "Submitted via website chat assistant",
      "",
      `Path: ${path || "—"}`,
      `Capability: ${capability || "—"}`,
      `Segment / context: ${segment || "—"}`,
      `AMC status: ${amc || "—"}`,
      `Issue / request: ${issue || "—"}`,
      "",
      `Name / Organisation: ${nameCompany}`,
      `Phone / WhatsApp: ${phone}`,
      `Email: ${email}`,
    ].join("\n"),
    autoReply: buildChatbotAutoReply(name, email),
  });

  return result.ok ? { ok: true } : { ok: false, error: result.error };
}
