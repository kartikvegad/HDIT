import { intro } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section id="intro" className="bg-paper py-24 sm:py-32 lg:py-40">
      <Container>
        <Reveal>
          <SectionLabel index="01" label={intro.eyebrow} />
        </Reveal>
        <div className="mt-10 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[4.2rem]">
              {intro.statement}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:pt-3">
            <p className="text-sm leading-relaxed text-muted">
              HDIT designs and installs custom solar energy systems tailored to business needs — a seamless
              transition to renewable energy that is commercially disciplined.
            </p>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {intro.points.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <article className="bg-paper px-0 py-8 sm:px-8 sm:py-10">
                <p className="font-display text-sm tracking-[0.18em] text-amber">0{index + 1}</p>
                <h3 className="mt-4 font-display text-2xl tracking-tight">{point.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{point.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
