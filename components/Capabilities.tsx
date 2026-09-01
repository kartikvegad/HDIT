"use client";

import Image from "next/image";
import Link from "next/link";
import { capabilities, catalogue } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-ink py-16 text-paper sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel label="Capabilities" />
          <h2 className="type-display mt-8 max-w-3xl">Multiple capabilities. One accountable organisation.</h2>
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
                    quality={85}
                    className={cn(
                      "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105",
                      capability.id === "solar" ? "object-bottom" : "object-center",
                    )}
                  />
                ) : null}
                <div className="absolute inset-0 bg-ink/45 transition-colors duration-500 group-hover:bg-ink/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-transparent" />
                <div className="relative z-10 mt-auto flex w-full flex-col p-7 xl:p-8">
                  <p className="h-4 text-[0.75rem] tracking-[0.16em] text-paper/70 uppercase">
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

        <Reveal delay={220} className="mt-12 sm:mt-14">
          <div className="border border-white/15 bg-white/[0.04] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow !text-paper/70">{catalogue.title}</p>
                <p className="mt-3 text-base leading-relaxed text-paper/75">{catalogue.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={catalogue.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-white/25 bg-white/5 px-6 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-paper uppercase transition-colors duration-300 hover:border-white hover:bg-white/10"
                >
                  <PdfIcon />
                  <span>{catalogue.viewLabel}</span>
                </a>
                <a
                  href={catalogue.href}
                  download={catalogue.fileName}
                  className="group inline-flex items-center gap-3 bg-amber px-6 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-paper uppercase transition-colors duration-300 hover:bg-amber-bright hover:text-ink"
                >
                  <DownloadIcon />
                  <span>{catalogue.downloadLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6Zm7 1.5L18.5 9H13V3.5ZM8 13h2v5H8v-5Zm4-2h2c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-2v-5Zm2 5c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1h-1v5h1Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z" />
    </svg>
  );
}
