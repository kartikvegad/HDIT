"use client";

import { useActionState, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const [state, action, pending] = useActionState(submitQuote, initial);
  const [message, setMessage] = useState("");
  const dark = tone === "ink";

  useEffect(() => {
    const spend = searchParams.get("spend");
    const area = searchParams.get("area");
    if (!spend && !area) return;
    const lines = [
      spend ? `Monthly electricity spend: ${spend}` : null,
      area ? `Available roof / site area: ${area}` : null,
    ].filter(Boolean);
    setMessage(lines.join("\n"));
  }, [searchParams]);

  const fieldClass = dark
    ? "mt-2 w-full border-b border-white/20 bg-transparent py-3 text-paper outline-none placeholder:text-stone focus:border-amber"
    : "mt-2 w-full border-b border-line bg-transparent py-3 outline-none focus:border-amber";
  const labelClass = dark
    ? "text-[0.75rem] tracking-[0.14em] text-stone uppercase"
    : "text-[0.75rem] tracking-[0.14em] text-muted uppercase";

  const Wrapper = compact ? "div" : "section";

  return (
    <Wrapper
      id={compact ? "quote" : "contact"}
      className={cn(dark ? "bg-ink text-paper" : "bg-paper", compact ? "pt-6 pb-28 sm:pb-36" : "py-28 sm:py-36 lg:py-44")}
    >
      <Container>
        <div className={cn("grid gap-16", compact ? "lg:grid-cols-12" : "lg:grid-cols-12")}>
          <Reveal className={compact ? "lg:col-span-5" : "lg:col-span-5"}>
            {compact ? (
              <>
                <p className="eyebrow">Enquire</p>
                <h2 className="type-display mt-6">Let’s talk about your energy.</h2>
                <p className={cn("mt-6 max-w-md text-lg leading-relaxed", dark ? "text-paper/70" : "text-muted")}>
                  Tell us about your energy requirements. We will look at the site with you.
                </p>
              </>
            ) : (
              <>
                <SectionLabel index="09" label="Contact" />
                <h2 className="type-display mt-8">Request a free quote.</h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                  Questions or special requests can go in the same note.
                </p>
                <dl className="mt-14 space-y-7 text-base">
                  <div>
                    <dt className="eyebrow">Studio</dt>
                    <dd className="mt-2 text-muted">{site.addressPlaceholder}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Email</dt>
                    <dd className="mt-2">
                      <a href={`mailto:${site.email}`} className="text-muted transition-colors duration-300 hover:text-ink">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Telephone</dt>
                    <dd className="mt-2">
                      <a href={`tel:${site.phoneTel}`} className="text-muted transition-colors duration-300 hover:text-ink">
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Hours</dt>
                    <dd className="mt-2 text-muted">{site.hoursPlaceholder}</dd>
                  </div>
                </dl>
              </>
            )}
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            {state.ok ? (
              <div className={cn("border p-10", dark ? "border-white/15" : "border-line bg-cream")}>
                <p className="eyebrow">Received</p>
                <h3 className="type-title mt-4">Thank you. We have your request.</h3>
                <p className={cn("mt-4 max-w-md text-base leading-relaxed", dark ? "text-paper/70" : "text-muted")}>
                  This first version stores the enquiry locally for demonstration. Connect HDIT’s email or CRM next to
                  send it to the team.
                </p>
              </div>
            ) : (
              <form action={action} className="grid gap-7 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" className={fieldClass} labelClass={labelClass} />
                <Field label="Company" name="company" autoComplete="organization" className={fieldClass} labelClass={labelClass} />
                <Field label="Email" name="email" type="email" required autoComplete="email" className={fieldClass} labelClass={labelClass} />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} labelClass={labelClass} />
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Project type</span>
                  <select name="projectType" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a project type
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
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={fieldClass}
                    placeholder="Tell us about your energy requirements."
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
                      "group inline-flex items-center gap-3 px-8 py-4 text-[0.78rem] tracking-[0.16em] uppercase transition-colors duration-300",
                      dark
                        ? "bg-amber text-ink hover:bg-amber-bright"
                        : "bg-ink text-paper hover:bg-amber hover:text-ink",
                      pending && "opacity-70",
                    )}
                  >
                    {pending ? "Sending…" : "Request a Quote"}
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
