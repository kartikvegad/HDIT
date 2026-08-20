import Image from "next/image";
import { certifications } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Certifications({ numbered = true }: { numbered?: boolean }) {
  return (
    <section id="certifications" className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel index={numbered ? certifications.index : undefined} label={certifications.label} />
          <h2 className="type-display mt-8 max-w-4xl">{certifications.headline}</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {certifications.items.map((item, index) => (
            <Reveal key={item.code} delay={index * 80}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[280px] flex-col justify-between border border-line p-8 transition-colors duration-300 hover:border-amber sm:p-12"
              >
                <Image
                  src={item.logo}
                  alt="ISO"
                  width={118}
                  height={109}
                  className="h-14 w-auto"
                />
                <div>
                  <p className="font-display text-4xl tracking-tight sm:text-5xl">{item.code}</p>
                  <p className="mt-4 text-lg text-muted">{item.title}</p>
                  <p className="mt-6 text-[0.75rem] tracking-[0.16em] text-amber uppercase">
                    How this standard works
                    <span aria-hidden className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
