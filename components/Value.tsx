"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { value } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Value() {
  const router = useRouter();
  const [spend, setSpend] = useState("");
  const [area, setArea] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (spend) params.set("spend", spend);
    if (area) params.set("area", area);
    router.push(`/contact?${params.toString()}`);
  };

  return (
    <section id="value" className="bg-ink py-24 text-paper sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="07" label="Business value" />
              <h2 className="mt-6 font-display text-4xl tracking-tight sm:text-5xl">
                Solar as an operating decision.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-px bg-line-dark sm:grid-cols-2">
              {value.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="bg-ink p-8">
                    <p className="font-display text-sm text-amber">0{index + 1}</p>
                    <h3 className="mt-4 font-display text-2xl tracking-tight">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-paper/65">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="border border-white/10 bg-ink-soft p-8 sm:p-10">
              <p className="eyebrow">Savings model</p>
              <h3 className="mt-4 font-display text-3xl tracking-tight">A foundation for the numbers.</h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/65">
                A site-specific projection needs HDIT engineering inputs. Share a few figures and we will take them
                into the quote conversation — no invented savings percentages.
              </p>
              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <label className="block">
                  <span className="text-[0.62rem] uppercase tracking-[0.22em] text-stone">
                    Monthly electricity spend
                  </span>
                  <input
                    value={spend}
                    onChange={(event) => setSpend(event.target.value)}
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-paper outline-none placeholder:text-stone focus:border-amber"
                    placeholder="Amount to be discussed"
                  />
                </label>
                <label className="block">
                  <span className="text-[0.62rem] uppercase tracking-[0.22em] text-stone">
                    Available roof / site area
                  </span>
                  <input
                    value={area}
                    onChange={(event) => setArea(event.target.value)}
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-paper outline-none placeholder:text-stone focus:border-amber"
                    placeholder="Area to be confirmed"
                  />
                </label>
                <div className="border border-dashed border-amber/40 bg-ink px-4 py-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-amber">Projected saving</p>
                  <p className="mt-2 font-display text-3xl text-paper/90">Figures to be provided</p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber px-6 py-3.5 text-[0.7rem] tracking-[0.22em] uppercase text-ink transition-colors hover:bg-amber-bright"
                >
                  Take this to a quote
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
