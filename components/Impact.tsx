"use client";

import { useEffect, useRef, useState } from "react";
import { impact } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";

function CountUp({
  value,
  suffix,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  active: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    let frame = 0;
    let start: number | null = null;
    const duration = 1200;

    const tick = (time: number) => {
      if (start === null) start = time;
      const elapsed = time - start - delay;
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, delay, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function Impact() {
  const ref = useRef<HTMLElement>(null);
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
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ink py-10 text-paper sm:py-12 lg:py-14">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionLabel index={impact.index} label={impact.label} />
            <h2 className="mt-4 font-display text-2xl leading-tight tracking-tight sm:text-3xl">
              {impact.headline}
            </h2>
          </div>
          <div className="grid grid-cols-3 lg:col-span-8">
            {impact.items.map((item, index) => (
              <div
                key={item.label}
                className="border-l border-line-dark px-4 first:border-l-0 first:pl-0 sm:px-6 lg:px-8"
              >
                <p className="font-display text-4xl tracking-tight text-amber-bright sm:text-5xl lg:text-6xl">
                  <CountUp value={item.value} suffix={item.suffix} active={visible} delay={index * 120} />
                </p>
                <p className="mt-2 text-[0.72rem] tracking-[0.16em] text-paper/80 uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
