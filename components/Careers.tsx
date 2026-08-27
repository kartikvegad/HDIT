"use client";

import { useActionState } from "react";
import { careerInterests, careers, site } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { submitCareer, type CareerState } from "@/app/careers/actions";

const initial: CareerState = { ok: false };

export function Careers() {
  const [state, action, pending] = useActionState(submitCareer, initial);

  const fieldClass =
    "mt-2 w-full border-b border-line bg-transparent py-3 outline-none file:mr-4 file:border-0 file:bg-transparent file:text-sm file:text-muted focus:border-amber";
  const labelClass = "text-[0.75rem] tracking-[0.14em] text-muted uppercase";

  return (
    <section id="careers" className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel label={careers.label} />
            <h1 className="type-display mt-8">{careers.headline}</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{careers.body}</p>
            <dl className="mt-14 space-y-7 text-base">
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
            </dl>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            {state.ok ? (
              <div className="border border-line bg-cream p-10">
                <p className="eyebrow">Received</p>
                <h2 className="type-title mt-4">Thank you. We have your application.</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  The team will review your background and respond using the details provided.
                </p>
              </div>
            ) : (
              <form action={action} className="grid gap-7 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" className={fieldClass} labelClass={labelClass} />
                <Field label="Email" name="email" type="email" required autoComplete="email" className={fieldClass} labelClass={labelClass} />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} labelClass={labelClass} />
                <Field label="Location" name="location" autoComplete="address-level2" className={fieldClass} labelClass={labelClass} />
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Area of interest</span>
                  <select name="interest" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select an area
                    </option>
                    {careerInterests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </label>
                <Field
                  label="LinkedIn or portfolio"
                  name="linkedin"
                  autoComplete="url"
                  className={fieldClass}
                  labelClass={labelClass}
                  spanClass="sm:col-span-2"
                />
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Covering note</span>
                  <textarea
                    name="message"
                    rows={4}
                    className={fieldClass}
                    placeholder="Tell us about your background and the kind of infrastructure you want to work on."
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>Résumé (PDF or Word, optional)</span>
                  <input name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf" className={fieldClass} />
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
                    className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-[0.78rem] tracking-[0.16em] text-paper uppercase transition-colors duration-300 hover:bg-amber disabled:opacity-70"
                  >
                    {pending ? "Sending…" : "Send application"}
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
    </section>
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
  spanClass,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className: string;
  labelClass: string;
  spanClass?: string;
}) {
  return (
    <label className={spanClass ? `block ${spanClass}` : "block"}>
      <span className={labelClass}>{label}</span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className={className} />
    </label>
  );
}
