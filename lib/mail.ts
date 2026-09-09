import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
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
  } catch (error) {
    console.error("HDIT auto-reply failed:", error);
  }
}

function smtpErrorMessage(error: unknown): string {
  if (error && typeof error === "object") {
    const code = "code" in error ? String(error.code) : "";
    const responseCode = "responseCode" in error ? Number(error.responseCode) : undefined;

    if (code === "EAUTH" || responseCode === 535) {
      return "Email login failed. Check SMTP_USER and SMTP_PASSWORD in your hosting settings.";
    }
  }

  return "The message could not be sent. Please try again or email us directly.";
}

function getSmtpConfig():
  | { ok: true; options: SMTPTransport.Options; user: string; mailTo: string }
  | { ok: false } {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD?.trim();

  if (!user || !pass) {
    return { ok: false };
  }

  const host = process.env.SMTP_HOST?.trim() || "smtpout.secureserver.net";
  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    (process.env.SMTP_SECURE !== "false" && port === 465);
  const mailTo = process.env.MAIL_TO?.trim() || user;

  return {
    ok: true,
    user,
    mailTo,
    options: {
      host,
      port,
      secure,
      auth: { user, pass },
      ...(port === 587 && !secure ? { requireTLS: true } : {}),
    },
  };
}

async function sendViaSmtp(
  smtp: { options: SMTPTransport.Options; user: string; mailTo: string },
  input: SendSiteEmailInput,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const transporter = nodemailer.createTransport(smtp.options);

    await transporter.sendMail({
      from: `HDIT Website <${smtp.user}>`,
      to: smtp.mailTo,
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
      await sendAutoReply(transporter, smtp.user, input.autoReply);
    }

    return { ok: true };
  } catch (error) {
    console.error("HDIT enquiry email failed:", error);
    return {
      ok: false,
      error: smtpErrorMessage(error),
    };
  }
}

export async function sendSiteEmail(
  input: SendSiteEmailInput,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const smtp = getSmtpConfig();
  if (smtp.ok) {
    return sendViaSmtp(smtp, input);
  }

  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (gmailUser && gmailPass) {
    const mailTo = process.env.MAIL_TO?.trim() || gmailUser;

    return sendViaSmtp(
      {
        user: gmailUser,
        mailTo,
        options: {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        },
      },
      input,
    );
  }

  return {
    ok: false,
    error: `Email is not configured yet. Please write to ${site.email}.`,
  };
}
