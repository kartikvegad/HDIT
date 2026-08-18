"use client";

import { useActionState, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { projectTypes, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { submitQuote, type QuoteState } from "@/app/contact/actions";

const initial: QuoteState = { ok: false };

export function Contact() {
  const searchParams = useSearchParams();
  const [state, action, pending] = useActionState(submitQuote, initial);
  const [message, setMessage] = useState("");

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

  return (
    <section id="contact" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel index="10" label="Contact" />
            <h2 className="mt-6 font-display text-4xl tracking-tight sm:text-5xl">
              Request a free quote.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              To get a free quote, or if you have questions or special requests, drop us a line. We stay in constant
              communication until the job is done.
            </p>
            <dl className="mt-12 space-y-6 text-sm">
              <div>
                <dt className="eyebrow">Studio</dt>
                <dd className="mt-2 text-muted">{site.addressPlaceholder}</dd>
              </div>
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-2 text-muted">{site.emailPlaceholder}</dd>
              </div>
              <div>
                <dt className="eyebrow">Telephone</dt>
                <dd className="mt-2 text-muted">{site.phonePlaceholder}</dd>
              </div>
              <div>
                <dt className="eyebrow">Hours</dt>
                <dd className="mt-2 text-muted">{site.hoursPlaceholder}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            {state.ok ? (
              <div className="border border-line bg-cream p-10">
                <p className="eyebrow">Received</p>
                <h3 className="mt-4 font-display text-3xl">Thank you. We have your request.</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  This first version stores the enquiry locally for demonstration. Connect HDIT’s email or CRM next
                  to send it to the team.
                </p>
              </div>
            ) : (
              <form action={action} className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Company" name="company" autoComplete="organization" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                <label className="block sm:col-span-2">
                  <span className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">Project type</span>
                  <select
                    name="projectType"
                    defaultValue=""
                    className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none focus:border-amber"
                  >
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
                  <span className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none focus:border-amber"
                    placeholder="Tell us about the site, the load, or the outcome you want."
                  />
                </label>
                {state.error ? (
                  <p className="sm:col-span-2 text-sm text-red-800" role="alert">
                    {state.error}
                  </p>
                ) : null}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={pending}
                    className={cn(
                      "bg-ink px-8 py-4 text-[0.7rem] tracking-[0.22em] uppercase text-paper transition-colors hover:bg-amber hover:text-ink",
                      pending && "opacity-70",
                    )}
                  >
                    {pending ? "Sending…" : "Request a Quote"}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none focus:border-amber"
      />
    </label>
  );
}
