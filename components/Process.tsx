"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { process } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Process() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const nodes = itemRefs.current.filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { threshold: [0.4, 0.65], rootMargin: "-18% 0px -35% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const progress = ((active + 1) / process.length) * 100;

  return (
    <section id="process" className="bg-paper py-28 sm:py-36 lg:py-44">
      <Container>
        <Reveal>
          <SectionLabel index="06" label="How it works" />
          <h2 className="type-display mt-8 max-w-3xl">From first conversation to a working system.</h2>
        </Reveal>

        <div className="mt-16 hidden lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="sticky top-28 col-span-5 h-[62vh]">
            {process.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "absolute inset-0 overflow-hidden transition-opacity duration-700",
                  active === index ? "opacity-100" : "opacity-0",
                )}
              >
                <Image src={step.image} alt={step.imageAlt} fill sizes="40vw" className="object-cover" />
              </div>
            ))}
            <div className="absolute inset-x-0 bottom-0 h-px bg-line">
              <span
                className="absolute inset-y-0 left-0 bg-amber transition-[width] duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <ol className="col-span-7">
            {process.map((step, index) => (
              <li
                key={step.number}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className={cn(
                  "border-l py-20 pl-10 transition-colors duration-500",
                  active === index ? "border-amber" : "border-line",
                )}
              >
                <p className="font-display text-5xl text-amber">{step.number}</p>
                <h3 className="type-title mt-5">{step.title}</h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <ol className="relative mt-14 space-y-0 border-l border-line pl-8 lg:hidden">
          {process.map((step, index) => (
            <li key={step.number} className="relative pb-14">
              <span className="absolute top-0 -left-[37px] h-3 w-3 rounded-full border border-amber bg-paper" />
              <Reveal delay={index * 60}>
                <p className="font-display text-2xl text-amber">{step.number}</p>
                <h3 className="type-title mt-3">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{step.description}</p>
                <div className="relative mt-6 aspect-[16/10] overflow-hidden">
                  <Image src={step.image} alt={step.imageAlt} fill sizes="100vw" className="object-cover" />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
