"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { projects } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button, Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

type FilterId = (typeof projects.filters)[number]["id"];

export function Projects() {
  const [filter, setFilter] = useState<FilterId>("all");

  const items = useMemo(() => {
    switch (filter) {
      case "all":
        return projects.items;
      case "solar":
      case "surveillance":
      case "av":
        return projects.items.filter((item) => item.tags.some((tag) => tag === filter));
      default: {
        const _exhaustive: never = filter;
        return _exhaustive;
      }
    }
  }, [filter]);

  return (
    <section id="projects" className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionLabel label={projects.label} />
            <h2 className="type-display mt-8">{projects.headline}</h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6">
            <p className="max-w-xl text-lg leading-relaxed text-muted">{projects.body}</p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-line" role="tablist" aria-label="Filter projects">
            {projects.filters.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "relative pb-3 text-[0.78rem] tracking-[0.16em] uppercase transition-colors duration-300",
                    active ? "text-ink" : "text-stone hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 -bottom-px h-px bg-ink transition-opacity duration-300",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 50}>
              <article>
                <div className="img-clip relative aspect-[3/2] bg-cream">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width:1024px) 44vw, (min-width:640px) 50vw, 100vw"
                    quality={85}
                    className={cn(
                      "object-cover",
                      item.imagePosition === "bottom"
                        ? "object-bottom"
                        : item.imagePosition === "top"
                          ? "object-top"
                          : "object-center",
                    )}
                  />
                </div>
                <p className="eyebrow mt-6">{item.category}</p>
                <h3 className="mt-3 font-display text-[1.65rem] leading-tight tracking-tight text-ink sm:text-[1.85rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{item.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14">
          <Button href={projects.cta.href}>{projects.cta.label}</Button>
        </Reveal>
      </Container>
    </section>
  );
}
