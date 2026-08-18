import Image from "next/image";
import { about } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function About({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32 lg:py-36">
      <Container>
        {showIntro ? (
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <SectionLabel index="09" label={about.eyebrow} />
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {about.statement}
              </h2>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-muted sm:text-base">{about.body}</p>
            </Reveal>
          </div>
        ) : null}

        <div className={showIntro ? "mt-16 grid gap-6 lg:grid-cols-12" : "grid gap-6 lg:grid-cols-12"}>
          <Reveal className="lg:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/project-06.jpg"
                alt="HDIT installation team placing a solar panel on a rooftop"
                fill
                sizes="70vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4">
            <div className="relative h-full min-h-[280px] overflow-hidden">
              <Image
                src="/images/visual.jpg"
                alt="Business discussion on energy infrastructure"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-3">
          {about.approach.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <p className="eyebrow">{item.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
