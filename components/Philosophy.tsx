import { philosophy } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Philosophy({ numbered = true }: { numbered?: boolean }) {
  return (
    <section id="purpose" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel index={numbered ? philosophy.index : undefined} label={philosophy.label} />
          <h2 className="type-display mt-8 max-w-3xl">{philosophy.headline}</h2>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-line pt-14 md:grid-cols-3">
          {[philosophy.vision, philosophy.mission, philosophy.slogan].map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <p className="eyebrow">{item.title}</p>
              <p className="type-title mt-5">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-3">
          {philosophy.values.map((value, index) => (
            <Reveal key={value.number} delay={index * 80}>
              <article>
                <p className="font-num text-lg text-amber">{value.number}</p>
                <h3 className="type-title mt-5">{value.title}</h3>
                <p className="mt-4 font-display text-xl italic text-ink">{value.meaning}</p>
                <p className="mt-5 text-base leading-relaxed text-muted">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
