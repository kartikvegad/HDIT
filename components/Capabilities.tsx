"use client";

import Image from "next/image";
import Link from "next/link";
import { capabilities } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { GemBanner } from "@/components/GemLink";

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-ink py-16 text-paper sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel index="02" label="Capabilities" />
          <h2 className="type-display mt-8 max-w-3xl">Three disciplines. One accountable organisation.</h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.id} delay={index * 70} className="h-full">
              <article id={capability.id} className="group relative flex h-full min-h-[420px] flex-col overflow-hidden lg:min-h-[460px]">
                {capability.image ? (
                  <Image
                    src={capability.image}
                    alt={capability.imageAlt ?? capability.title}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                ) : null}
                <div className="absolute inset-0 bg-ink/45 transition-colors duration-500 group-hover:bg-ink/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-transparent" />
                <div className="relative z-10 mt-auto flex w-full flex-col p-7 xl:p-8">
                  <p className="font-display text-lg leading-none text-amber-bright">{capability.number}</p>
                  <p className="mt-3 h-4 text-[0.75rem] tracking-[0.16em] text-paper/70 uppercase">
                    {capability.category}
                  </p>
                  <h3 className="mt-2 min-h-[3.8rem] font-display text-[1.85rem] leading-tight tracking-tight text-paper xl:min-h-[4.3rem] xl:text-[2.05rem]">
                    {capability.title}
                  </h3>
                  <p className="mt-4 min-h-[6.5rem] text-base leading-relaxed text-paper/85">
                    {capability.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-[0.75rem] tracking-[0.16em] text-paper uppercase transition-colors duration-300 hover:text-amber-bright"
                  >
                    Learn more
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <GemBanner tone="dark" />
        </Reveal>
      </Container>
    </section>
  );
}
