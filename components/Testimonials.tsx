import { testimonialsNote } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="08" label="Client voices" />
          <h2 className="mt-6 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
            Testimonials will live here — once they are real.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <blockquote className="mt-14 max-w-4xl border-l border-amber pl-8 sm:pl-12">
            <p className="font-display text-2xl leading-snug tracking-tight text-ink sm:text-4xl">
              “We stay in constant communication with our customers until the job is done.”
            </p>
            <footer className="mt-8 text-sm text-muted">
              HDIT service promise
              <span className="mx-3 text-line">/</span>
              From the current company website
            </footer>
          </blockquote>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted">{testimonialsNote}</p>
        </Reveal>
      </Container>
    </section>
  );
}
