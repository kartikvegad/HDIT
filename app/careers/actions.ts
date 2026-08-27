"use server";

import { sendSiteEmail } from "@/lib/mail";

export type CareerState = {
  ok: boolean;
  error?: string;
};

const MAX_RESUME_BYTES = 4.5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function isAllowedResume(file: File) {
  const name = file.name.toLowerCase();
  const byType = file.type ? ALLOWED_RESUME_TYPES.has(file.type) : false;
  const byName = name.endsWith(".pdf") || name.endsWith(".doc") || name.endsWith(".docx");
  return byType || byName;
}

export async function submitCareer(_prev: CareerState, formData: FormData): Promise<CareerState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const interest = String(formData.get("interest") ?? "").trim();
  const linkedin = String(formData.get("linkedin") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const resume = formData.get("resume");

  if (!name || !email) {
    return { ok: false, error: "Please add your name and email so we can respond." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  let attachment:
    | {
        filename: string;
        content: Buffer;
        contentType?: string;
      }
    | undefined;

  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) {
      return { ok: false, error: "Please keep the résumé under 4.5 MB." };
    }
    if (!isAllowedResume(resume)) {
      return { ok: false, error: "Please attach a PDF or Word document." };
    }

    attachment = {
      filename: resume.name,
      content: Buffer.from(await resume.arrayBuffer()),
      contentType: resume.type || undefined,
    };
  }

  const result = await sendSiteEmail({
    subject: `Career application from ${name}`,
    replyTo: email,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Location: ${location || "—"}`,
      `Area of interest: ${interest || "—"}`,
      `LinkedIn / portfolio: ${linkedin || "—"}`,
      "",
      message || "No covering note provided.",
    ].join("\n"),
    attachments: attachment ? [attachment] : undefined,
  });

  return result.ok ? { ok: true } : { ok: false, error: result.error };
}
