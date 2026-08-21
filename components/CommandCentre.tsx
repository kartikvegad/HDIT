import Image from "next/image";
import { commandCentre } from "@/content/site";
import { Button, Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function CommandCentre() {
  return (
    <section id="command-centre" className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionLabel index={commandCentre.index} label={commandCentre.label} />
        </Reveal>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="type-display">{commandCentre.headline}</h2>
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-6 lg:col-span-7 lg:pt-2">
            <p className="max-w-xl text-lg leading-relaxed text-muted">{commandCentre.body}</p>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{commandCentre.supporting}</p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="img-clip relative mt-14 aspect-[1784/882] min-h-[280px]">
            <Image
              src={commandCentre.image}
              alt={commandCentre.imageAlt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
          <ul className="grid gap-x-10 gap-y-5 sm:col-span-2 sm:grid-cols-2 lg:col-span-8">
            {commandCentre.points.map((point, index) => (
              <Reveal key={point} delay={index * 60}>
                <li className="flex items-start gap-4">
                  <span className="font-num text-base leading-none text-amber">0{index + 1}</span>
                  <span className="text-base leading-snug text-ink">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200} className="lg:col-span-4 lg:justify-self-end">
            <Button href={commandCentre.cta.href}>{commandCentre.cta.label}</Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
