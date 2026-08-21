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
    if (!active) {
      setCount(0);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    let frame = 0;
    let start: number | null = null;
    const duration = 1400;

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
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Impact() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const start = () => setActive(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "80px 0px" },
    );
    observer.observe(node);

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) start();

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="overflow-hidden bg-ink py-10 text-paper sm:py-12 lg:py-14">
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
                className="overflow-hidden border-l border-line-dark px-4 first:border-l-0 first:pl-0 sm:px-6 lg:px-8"
              >
                <p
                  className="font-num text-4xl leading-none tracking-tight text-amber-bright sm:text-5xl lg:text-6xl"
                  aria-label={`${item.value}${item.suffix} ${item.label}`}
                >
                  <CountUp value={item.value} suffix={item.suffix} active={active} delay={index * 160} />
                </p>
                <p className="mt-3 text-[0.72rem] tracking-[0.16em] text-paper/80 uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
