"use client";

import { useEffect, useRef, useState } from "react";
import { impact } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="05" label="Impact" />
          <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            Scale, once the numbers are in.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-paper/60">
            Installed capacity, project count, years and clients will be published here from HDIT records. Until
            then these remain placeholders — nothing is invented.
          </p>
        </Reveal>
        <div ref={ref} className="mt-16 grid grid-cols-2 gap-px bg-line-dark lg:grid-cols-4">
          {impact.map((item, index) => (
            <div key={item.label} className="bg-ink px-4 py-10 sm:px-8 sm:py-14">
              <p
                className="font-display text-5xl tracking-tight text-amber-bright sm:text-6xl lg:text-7xl"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(18px)",
                  transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms`,
                }}
              >
                {item.value}
              </p>
              <p className="mt-4 text-[0.68rem] uppercase tracking-[0.24em] text-paper/80">{item.label}</p>
              <p className="mt-2 text-xs text-stone">{item.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
