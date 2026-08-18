"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { hero } from "@/content/site";
import { Button, Container } from "@/components/ui";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = imageRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const offset = Math.min(window.scrollY, 700);
      node.style.transform = `translate3d(0, ${offset * 0.18}px, 0) scale(1.08)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-ink text-paper">
      <div ref={imageRef} className="absolute inset-0 origin-center scale-[1.08] will-change-transform">
        <Image
          src="/images/team.jpg"
          alt="Engineers inspecting a commercial rooftop solar installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-ink/20" />

      <Container className="relative z-10 w-full pb-16 pt-32 sm:pb-20 lg:pb-24">
        <p className="eyebrow text-amber-bright">{hero.eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-[2.7rem] leading-[0.95] tracking-tight text-paper sm:text-6xl lg:text-[5.4rem]">
          {hero.headlineLead}
          <br />
          <em className="italic text-amber-bright">{hero.headlineAccent}</em>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/78 sm:text-lg">
          {hero.body}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="light">
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-paper/60">
            Commercial solar installation experts. Custom systems designed for the way businesses use energy.
          </p>
          <a
            href="#intro"
            className="group inline-flex items-center gap-3 text-[0.65rem] tracking-[0.28em] uppercase text-paper/70"
          >
            Scroll
            <span className="block h-10 w-px overflow-hidden bg-white/20">
              <span className="block h-full w-full origin-top animate-pulse bg-amber" />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
