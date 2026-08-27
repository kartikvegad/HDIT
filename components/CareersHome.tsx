import { careers, people } from "@/content/site";
import { Button, Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function CareersHome() {
  return (
    <section id="join" className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel label={careers.label} />
            <h2 className="type-display mt-8">{careers.headline}</h2>
          </Reveal>
          <Reveal delay={80} className="flex flex-col justify-end lg:col-span-7">
            <p className="max-w-2xl text-lg leading-relaxed text-muted">{careers.homeBody}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-14 md:grid-cols-3">
          {people.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article>
                <h3 className="type-title">{item.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <Button href={careers.cta.href}>{careers.cta.label}</Button>
        </Reveal>
      </Container>
    </section>
  );
}
