"use client";

import { useActionState, useState } from "react";
import { projectTypes, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { submitQuote, type QuoteState } from "@/app/contact/actions";

const initial: QuoteState = { ok: false };

export function Contact({
  tone = "paper",
  compact = false,
}: {
  tone?: "paper" | "ink";
  compact?: boolean;
}) {
  const [state, action, pending] = useActionState(submitQuote, initial);
  const [message, setMessage] = useState("");
  const dark = tone === "ink";

  const fieldClass = dark
    ? "mt-1.5 w-full border-b border-white/20 bg-transparent py-2 text-paper outline-none placeholder:text-stone focus:border-amber"
    : "mt-1.5 w-full border-b border-line bg-transparent py-2 outline-none focus:border-amber";
  const labelClass = dark
    ? "text-[0.7rem] tracking-[0.14em] text-stone uppercase"
    : "text-[0.7rem] tracking-[0.14em] text-muted uppercase";

  const Wrapper = compact ? "div" : "section";

  return (
    <Wrapper
      id={compact ? "quote" : "contact"}
      className={cn(dark ? "bg-ink text-paper" : "bg-paper", compact ? "pt-6 pb-12 sm:pb-14" : "py-12 sm:py-14 lg:py-16")}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            {compact ? (
              <>
                <p className="eyebrow">Enquire</p>
                <h2 className="type-display mt-5">Let’s specify the requirement.</h2>
                <p className={cn("mt-4 max-w-md text-base leading-relaxed", dark ? "text-paper/70" : "text-muted")}>
                  Tell us about the environment and the outcome. We will look at the right capability with you.
                </p>
              </>
            ) : (
              <>
                <SectionLabel label="Contact" />
                <h2 className="type-display mt-5">Talk to our team.</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  Enterprise, government and institutional enquiries can begin here.
                </p>
                <dl className="mt-8 space-y-4 text-base">
                  <div>
                    <dt className="eyebrow">Email</dt>
                    <dd className="mt-1.5">
                      <a href={`mailto:${site.email}`} className="text-muted transition-colors duration-300 hover:text-ink">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Telephone</dt>
                    <dd className="mt-1.5">
                      <a href={`tel:${site.phoneTel}`} className="text-muted transition-colors duration-300 hover:text-ink">
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </>
            )}
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            {state.ok ? (
              <div className={cn("border p-8", dark ? "border-white/15" : "border-line bg-cream")}>
                <p className="eyebrow">Received</p>
                <h3 className="type-title mt-4">Thank you. We have your request.</h3>
                <p className={cn("mt-4 max-w-md text-base leading-relaxed", dark ? "text-paper/70" : "text-muted")}>
                  The team will review the enquiry and respond using the details provided.
                </p>
              </div>
            ) : (
              <form action={action} className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" className={fieldClass} labelClass={labelClass} />
                <Field label="Organisation" name="company" autoComplete="organization" className={fieldClass} labelClass={labelClass} />
                <Field label="Email" name="email" type="email" required autoComplete="email" className={fieldClass} labelClass={labelClass} />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} labelClass={labelClass} />
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Capability</span>
                  <select name="projectType" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a capability
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Message</span>
                  <textarea
                    name="message"
                    rows={2}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={fieldClass}
                    placeholder="Tell us about the requirement and the environment."
                  />
                </label>
                {state.error ? (
                  <p className="sm:col-span-2 text-base text-red-800" role="alert">
                    {state.error}
                  </p>
                ) : null}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={pending}
                    className={cn(
                      "group mt-1 inline-flex items-center gap-3 px-7 py-3 text-[0.75rem] tracking-[0.16em] uppercase transition-colors duration-300",
                      dark
                        ? "bg-amber text-paper hover:bg-amber-bright hover:text-ink"
                        : "bg-ink text-paper hover:bg-amber",
                      pending && "opacity-70",
                    )}
                  >
                    {pending ? "Sending…" : "Send enquiry"}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </Wrapper>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className,
  labelClass,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className: string;
  labelClass: string;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className={className} />
    </label>
  );
}
