import Image from "next/image";
import { value } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Contact } from "@/components/Contact";

export function Value() {
  return (
    <section id="value" className="bg-ink text-paper">
      <div className="py-28 sm:py-36 lg:pt-44 lg:pb-10">
        <Container>
          <Reveal>
            <SectionLabel index="07" label="Business value" />
            <h2 className="type-display mt-8 max-w-4xl">Solar as an operating decision.</h2>
          </Reveal>

          <Reveal delay={80} className="img-clip relative mt-14 aspect-[16/8] min-h-[280px]">
            <Image
              src="/images/project-03.jpg"
              alt="Energy performance presented during a commercial briefing"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="mt-16 grid gap-12 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
            {value.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <p className="font-display text-lg text-amber">0{index + 1}</p>
                <h3 className="type-title mt-5">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-paper/70">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>
      <Contact tone="ink" compact />
    </section>
  );
}
