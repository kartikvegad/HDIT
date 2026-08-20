import Link from "next/link";
import { intro } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section id="intro" className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel index={intro.index} label={intro.label} />
          <h2 className="type-display mt-8 max-w-4xl">{intro.headline}</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="max-w-2xl space-y-6 lg:col-span-8">
            {intro.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 70}>
                <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160} className="flex items-end lg:col-span-4">
            <Link
              href={intro.cta.href}
              className="group inline-flex items-center gap-3 text-[0.78rem] font-medium tracking-[0.16em] text-ink uppercase"
            >
              <span>{intro.cta.label}</span>
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
