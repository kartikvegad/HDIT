import Image from "next/image";
import { about } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="bg-cream py-28 sm:py-36 lg:py-44">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <SectionLabel index="08" label={about.eyebrow} />
            <h2 className="type-display mt-8">
              Building a cleaner energy future,
              <br />
              one project at a time.
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-muted">{about.body}</p>
          </Reveal>
        </div>

        <Reveal className="img-clip relative mt-16 aspect-[16/8] min-h-[260px]">
          <Image
            src="/images/visual.jpg"
            alt="A commercial energy briefing around the table"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-line pt-14 md:grid-cols-3">
          {about.approach.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <p className="eyebrow">{item.title}</p>
              <p className="mt-5 text-lg leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
