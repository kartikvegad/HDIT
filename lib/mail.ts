import nodemailer from "nodemailer";
import { Resend } from "resend";
import { site } from "@/content/site";

export type MailAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export type SendSiteEmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: MailAttachment[];
};

export async function sendSiteEmail(
  input: SendSiteEmailInput,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      await transporter.sendMail({
        from: `HDIT Website <${gmailUser}>`,
        to: site.email,
        replyTo: input.replyTo,
        subject: input.subject,
        text: input.text,
        attachments: input.attachments?.map((file) => ({
          filename: file.filename,
          content: file.content,
          contentType: file.contentType,
        })),
      });

      return { ok: true };
    } catch {
      return {
        ok: false,
        error: "The message could not be sent. Please try again or email us directly.",
      };
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL ?? "HDIT Website <beth.t@example.com>";
    const { error } = await resend.emails.send({
      from,
      to: site.email,
      replyTo: input.replyTo,
      subject: input.subject,
      text: input.text,
      attachments: input.attachments?.map((file) => ({
        filename: file.filename,
        content: file.content,
      })),
    });

    if (error) {
      return {
        ok: false,
        error: "The message could not be sent. Please try again or email us directly.",
      };
    }

    return { ok: true };
  }

  return {
    ok: false,
    error: `Email is not configured yet. Please write to ${site.email}.`,
  };
}
