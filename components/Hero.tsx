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
      const offset = Math.min(window.scrollY, 640);
      node.style.transform = `translate3d(0, ${offset * 0.12}px, 0) scale(1.06)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink text-paper lg:min-h-svh">
      <div ref={imageRef} className="absolute inset-0 origin-center scale-[1.06] will-change-transform">
        <Image
          src="/images/team.jpg"
          alt="Engineers inspecting a commercial rooftop solar installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      <Container className="relative z-10 w-full pb-12 pt-28 sm:pb-16 lg:pb-20">
        <p className="eyebrow text-amber-bright">{hero.eyebrow}</p>
        <h1 className="type-hero mt-6 max-w-6xl text-paper">
          {hero.headlineLead}
          <br />
          <em className="italic text-amber-bright">{hero.headlineAccent}</em>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/80 sm:text-xl">
          {hero.body}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="light">
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="mt-14 flex justify-end border-t border-white/15 pt-6">
          <a
            href="#intro"
            className="inline-flex items-center gap-4 text-[0.75rem] tracking-[0.18em] text-paper/70 uppercase"
          >
            Scroll
            <span className="relative block h-12 w-px bg-white/20">
              <span className="scroll-line absolute inset-0 bg-amber" />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
