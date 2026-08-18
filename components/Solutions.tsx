"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { solutions } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Solutions() {
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" className="bg-ink py-24 text-paper sm:py-32 lg:py-36">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel index="02" label="Solutions" />
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Solar, specified for the commercial world.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-sm leading-relaxed text-paper/65">
              HDIT specialises in designing and installing custom solar energy systems for businesses — from first
              conversation through to a working array.
            </p>
          </Reveal>
        </div>
      </Container>

      <div className="mt-14 hidden h-[72vh] min-h-[560px] lg:flex">
        {solutions.map((solution, index) => {
          const expanded = active === index;
          return (
            <Link
              key={solution.id}
              href={solution.href}
              className={cn(
                "relative overflow-hidden border-l border-white/10 transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                expanded ? "flex-[2.4]" : "flex-1",
              )}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <Image
                src={solution.image}
                alt={solution.imageAlt}
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className={cn(
                  "object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  expanded ? "scale-105" : "scale-100",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 transition-colors duration-500",
                  expanded ? "bg-ink/35" : "bg-ink/62",
                )}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 xl:p-10">
                <p className="font-display text-sm tracking-[0.2em] text-amber">{solution.number}</p>
                <p className="mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-paper/60">
                  {solution.category}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-tight xl:text-4xl">{solution.title}</h3>
                <p
                  className={cn(
                    "max-w-md overflow-hidden text-sm leading-relaxed text-paper/75 transition-[max-height,opacity,margin] duration-500",
                    expanded ? "mt-4 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0",
                  )}
                >
                  {solution.description}
                </p>
                <span
                  className={cn(
                    "mt-6 inline-flex w-fit items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase text-amber transition-opacity duration-500",
                    expanded ? "opacity-100" : "opacity-0",
                  )}
                >
                  Explore
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 grid gap-4 px-5 sm:px-8 lg:hidden">
        {solutions.map((solution) => (
          <Link key={solution.id} href={solution.href} className="group relative block min-h-[340px] overflow-hidden">
            <Image
              src={solution.image}
              alt={solution.imageAlt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-sm text-amber">{solution.number}</p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.28em] text-paper/60">
                {solution.category}
              </p>
              <h3 className="mt-1 font-display text-3xl">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">{solution.description}</p>
              <span className="mt-5 inline-flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase text-amber">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
