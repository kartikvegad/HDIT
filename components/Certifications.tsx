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
              <article className="flex h-full flex-col border border-line p-8 sm:p-10">
                <div className="flex items-start gap-4">
                  <Image
                    src={item.logo}
                    alt="ISO"
                    width={118}
                    height={109}
                    className="mt-0.5 h-10 w-auto shrink-0 sm:h-11"
                  />
                  <div>
                    <p className="font-num text-4xl leading-none tracking-tight sm:text-5xl">{item.code}</p>
                    <p className="mt-4 text-lg leading-snug text-muted">{item.title}</p>
                  </div>
                </div>
                <p className="mt-8 text-base leading-relaxed text-muted">{item.how}</p>
                <p className="mt-4 text-base leading-relaxed text-ink">{item.value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
