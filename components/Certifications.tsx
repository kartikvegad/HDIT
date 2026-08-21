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
                className="group flex items-start border border-line p-8 transition-colors duration-300 hover:border-amber sm:p-10"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={item.logo}
                    alt="ISO"
                    width={118}
                    height={109}
                    className="mt-0.5 h-10 w-auto shrink-0 sm:h-11"
                  />
                  <div className="flex min-w-0 flex-col gap-4">
                    <p className="font-display text-4xl leading-none tracking-tight sm:text-5xl">{item.code}</p>
                    <p className="text-lg leading-snug text-muted">{item.title}</p>
                    <p className="text-[0.75rem] tracking-[0.16em] text-amber uppercase">
                      How this standard works
                      <span aria-hidden className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
