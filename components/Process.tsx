"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { process } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const stepImages = [
  { src: "/images/hero.jpg", alt: "Consultation around solar technology samples" },
  { src: "/images/project-02.jpg", alt: "Site crew preparing rooftop racking for assessment" },
  { src: "/images/project-04.jpg", alt: "System design discussion with a solar module on the table" },
  { src: "/images/project-05.jpg", alt: "Installation of solar modules on a commercial roof" },
];

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
      { threshold: [0.35, 0.6], rootMargin: "-20% 0px -35% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="bg-paper py-24 sm:py-32 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel index="06" label="How it works" />
          <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            From first conversation to a working system.
          </h2>
        </Reveal>

        <div className="mt-16 hidden lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="sticky top-28 col-span-5 h-[58vh]">
            {stepImages.map((image, index) => (
              <div
                key={image.src}
                className={cn(
                  "absolute inset-0 overflow-hidden transition-opacity duration-700",
                  active === index ? "opacity-100" : "opacity-0",
                )}
              >
                <Image src={image.src} alt={image.alt} fill sizes="40vw" className="object-cover" />
              </div>
            ))}
          </div>
          <ol className="col-span-7">
            {process.map((step, index) => (
              <li
                key={step.number}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className={cn(
                  "border-l py-16 pl-10 transition-colors duration-500",
                  active === index ? "border-amber" : "border-line",
                )}
              >
                <p className="font-display text-sm tracking-[0.2em] text-amber">{step.number}</p>
                <h3 className="mt-3 font-display text-3xl tracking-tight">{step.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-12 space-y-10 lg:hidden">
          {process.map((step, index) => (
            <li key={step.number}>
              <div className="relative mb-5 aspect-[16/10] overflow-hidden">
                <Image src={stepImages[index].src} alt={stepImages[index].alt} fill className="object-cover" />
              </div>
              <p className="font-display text-sm text-amber">{step.number}</p>
              <h3 className="mt-2 font-display text-3xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
