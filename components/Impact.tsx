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
    <section className="bg-ink py-28 text-paper sm:py-36 lg:py-44">
      <Container>
        <Reveal>
          <SectionLabel index="05" label="Impact" />
          <h2 className="type-display mt-8 max-w-3xl">Scale, once the numbers are in.</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/65 sm:text-lg">
            Installed capacity, project count, years and clients will be published here from HDIT records. Until then
            these remain placeholders — nothing is invented.
          </p>
        </Reveal>
        <div ref={ref} className="mt-20 grid grid-cols-2 lg:grid-cols-4">
          {impact.map((item, index) => (
            <div
              key={item.label}
              className="border-t border-line-dark px-2 py-10 sm:px-8 sm:py-16 lg:border-l lg:first:border-l-0"
            >
              <p
                className="font-display text-6xl tracking-tight text-amber-bright sm:text-7xl lg:text-8xl"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(16px)",
                  transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms`,
                }}
              >
                {item.value}
              </p>
              <p className="mt-5 text-[0.8rem] tracking-[0.16em] text-paper/85 uppercase">{item.label}</p>
              <p className="mt-2 text-sm text-stone">{item.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
