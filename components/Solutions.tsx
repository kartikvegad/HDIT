"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { solutions } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { HoverLabel } from "@/components/HoverLabel";

export function Solutions() {
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" className="bg-ink py-28 text-paper sm:py-36 lg:py-40">
      <Container>
        <Reveal>
          <SectionLabel index="02" label="Solutions" />
          <h2 className="type-display mt-8 max-w-3xl">Solar, specified for the commercial world.</h2>
        </Reveal>
      </Container>

      <div className="mt-16 hidden h-[72vh] min-h-[560px] lg:flex">
        {solutions.map((solution, index) => {
          const expanded = active === index;
          const image = solution.image;
          return (
            <HoverLabel
              key={solution.id}
              label="Enquire"
              className={cn(
                "h-full min-w-0 transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                expanded ? "flex-[2.6]" : "flex-[0.85]",
              )}
            >
              <article
                id={solution.id}
                className="relative flex h-full overflow-hidden border-l border-white/10"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                {image ? (
                  <Image
                    src={image}
                    alt={solution.imageAlt ?? solution.title}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className={cn(
                      "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      expanded ? "scale-105" : "scale-100",
                    )}
                  />
                ) : null}
                <div
                  className={cn(
                    "absolute inset-0 transition-colors duration-500",
                    expanded ? "bg-ink/40" : "bg-ink/78",
                  )}
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 xl:p-10">
                  <p className="font-display text-lg text-amber">{solution.number}</p>
                  <p className="mt-3 text-[0.75rem] tracking-[0.16em] text-paper/55 uppercase">
                    {solution.category}
                  </p>
                  <h3
                    className={cn(
                      "mt-2 font-display tracking-tight transition-[font-size] duration-500",
                      expanded ? "text-4xl xl:text-5xl" : "text-2xl xl:text-3xl",
                    )}
                  >
                    {solution.title}
                  </h3>
                  <p
                    className={cn(
                      "max-w-md overflow-hidden text-base leading-relaxed text-paper/80 transition-[max-height,opacity,margin] duration-500",
                      expanded ? "mt-5 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0",
                    )}
                  >
                    {solution.description}
                  </p>
                  <Link
                    href="/contact"
                    className={cn(
                      "mt-6 inline-flex w-fit items-center gap-2 text-[0.75rem] tracking-[0.16em] text-amber uppercase transition-opacity duration-500",
                      expanded ? "opacity-100" : "opacity-0",
                    )}
                  >
                    Enquire
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </HoverLabel>
          );
        })}
      </div>

      <div className="mt-12 px-5 sm:px-8 lg:hidden">
        {solutions.map((solution, index) => {
          const open = active === index;
          return (
            <div key={solution.id} id={solution.id} className="border-t border-white/10">
              <button
                type="button"
                className="flex w-full items-end justify-between gap-4 py-6 text-left"
                aria-expanded={open}
                onClick={() => setActive(index)}
              >
                <span>
                  <span className="block font-display text-sm text-amber">{solution.number}</span>
                  <span className="mt-2 block font-display text-3xl">{solution.title}</span>
                </span>
                <span aria-hidden className="text-amber">
                  {open ? "–" : "+"}
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-[max-height,opacity] duration-500",
                  open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                {solution.image ? (
                  <div className="relative mb-5 aspect-[16/10] overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.imageAlt ?? solution.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <p className="text-base leading-relaxed text-paper/75">{solution.description}</p>
                <Link
                  href="/contact"
                  className="mt-5 mb-8 inline-flex items-center gap-2 text-[0.75rem] tracking-[0.16em] text-amber uppercase"
                >
                  Enquire →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
