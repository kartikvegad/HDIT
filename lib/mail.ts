import nodemailer from "nodemailer";
import { Resend } from "resend";
import { site } from "@/content/site";

export type MailAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export type AutoReplyInput = {
  to: string;
  subject: string;
  text: string;
};

export type SendSiteEmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: MailAttachment[];
  autoReply?: AutoReplyInput;
};

function contactAutoReply(name: string) {
  return [
    `Hi ${name},`,
    "",
    "Thank you for contacting HDIT. We have received your enquiry and a member of our team will be in touch shortly.",
    "",
    `If your requirement is urgent, you can reach us at ${site.phone} or ${site.email}.`,
    "",
    site.legalName,
  ].join("\n");
}

function careersAutoReply(name: string) {
  return [
    `Hi ${name},`,
    "",
    "Thank you for your interest in working with HDIT. We have received your application and will review it against open roles.",
    "",
    "If we need anything further, we will contact you using the details you provided.",
    "",
    site.legalName,
  ].join("\n");
}

function chatbotAutoReply(name: string) {
  return [
    `Hi ${name},`,
    "",
    "Thank you for reaching out through the HDIT website. We have received your details and will follow up on your enquiry shortly.",
    "",
    `You can also contact us directly at ${site.email} or ${site.phone}.`,
    "",
    site.legalName,
  ].join("\n");
}

export function buildContactAutoReply(name: string, to: string): AutoReplyInput {
  return {
    to,
    subject: "We received your enquiry — HDIT",
    text: contactAutoReply(name),
  };
}

export function buildCareersAutoReply(name: string, to: string): AutoReplyInput {
  return {
    to,
    subject: "We received your application — HDIT",
    text: careersAutoReply(name),
  };
}

export function buildChatbotAutoReply(name: string, to: string): AutoReplyInput {
  return {
    to,
    subject: "We received your message — HDIT",
    text: chatbotAutoReply(name),
  };
}

async function sendAutoReply(
  transporter: nodemailer.Transporter,
  fromAddress: string,
  autoReply: AutoReplyInput,
) {
  try {
    await transporter.sendMail({
      from: `HDIT Website <${fromAddress}>`,
      to: autoReply.to,
      subject: autoReply.subject,
      text: autoReply.text,
    });
  } catch {
    // The enquiry was received; a failed auto-reply should not block the submission.
  }
}

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
        to: gmailUser,
        replyTo: input.replyTo,
        subject: input.subject,
        text: input.text,
        attachments: input.attachments?.map((file) => ({
          filename: file.filename,
          content: file.content,
          contentType: file.contentType,
        })),
      });

      if (input.autoReply) {
        await sendAutoReply(transporter, gmailUser, input.autoReply);
      }

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

    if (input.autoReply) {
      await resend.emails.send({
        from,
        to: input.autoReply.to,
        subject: input.autoReply.subject,
        text: input.autoReply.text,
      });
    }

    return { ok: true };
  }

  return {
    ok: false,
    error: `Email is not configured yet. Please write to ${site.email}.`,
  };
}
