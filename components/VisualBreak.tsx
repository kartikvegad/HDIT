"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/Reveal";

export function VisualBreak() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = imageRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const onScroll = () => {
      const box = node.parentElement?.getBoundingClientRect();
      if (!box) return;
      const progress = Math.min(Math.max(-box.top / (box.height + window.innerHeight), 0), 1);
      node.style.transform = `scale(${1.04 + progress * 0.06})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate h-[78vh] min-h-[420px] overflow-hidden bg-ink md:h-[85vh]">
      <div ref={imageRef} className="absolute inset-0 origin-center scale-105 will-change-transform">
        <Image
          src="/images/project-06.jpg"
          alt="Installation team placing a solar panel on a commercial rooftop"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-ink/50" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <Reveal>
          <h2 className="type-hero max-w-5xl text-paper">
            The future of energy
            <br />
            <em className="italic text-amber-bright">is already here.</em>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
