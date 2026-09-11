"use server";

import { sendSiteEmail } from "@/lib/mail";
import { site } from "@/content/site";

export type DatasheetState = {
  ok: boolean;
  error?: string;
};

function datasheetAutoReply(name: string, domain: string, to: string) {
  return {
    to,
    subject: "Your HDIT data sheet request",
    text: [
      `Hi ${name},`,
      "",
      `Thank you for requesting the HDIT data sheet for ${domain}.`,
      "",
      "Our team will email the data sheet to this address shortly.",
      "",
      `If you need anything sooner, reach us at ${site.phone} or ${site.email}.`,
      "",
      site.legalName,
    ].join("\n"),
  };
}

export async function submitDatasheetRequest(
  _prev: DatasheetState,
  formData: FormData,
): Promise<DatasheetState> {
  const name = String(formData.get("name") ?? "").trim();
  const organisation = String(formData.get("organisation") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const domain = String(formData.get("domain") ?? "").trim();

  if (!name || !organisation || !phone || !email || !domain) {
    return { ok: false, error: "Please complete all fields so we can send the data sheet." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const result = await sendSiteEmail({
    to: site.email,
    subject: `Data sheet request — ${domain} — ${name}`,
    replyTo: email,
    text: [
      "Submitted via website data sheet request",
      "",
      `Domain: ${domain}`,
      `Name: ${name}`,
      `Organisation: ${organisation}`,
      `Phone / WhatsApp: ${phone}`,
      `Email: ${email}`,
      "",
      "Please email the relevant product data sheet to the requester.",
    ].join("\n"),
    autoReply: datasheetAutoReply(name, domain, email),
  });

  return result.ok ? { ok: true } : { ok: false, error: result.error };
}
