import Image from "next/image";
import { why } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function WhyHDIT() {
  return (
    <section id="why-hdit" className="bg-paper py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="03" label="Why HDIT" />
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Chosen for how the work is actually done.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
                We do not sell a catalogue. We design and install custom solar energy systems for businesses, and we
                remain present until the job is done.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-10 hidden overflow-hidden lg:block">
              <div className="img-clip relative aspect-[4/5]">
                <Image
                  src="/images/hero.jpg"
                  alt="HDIT consultation around a solar module sample"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="divide-y divide-line lg:col-span-7 lg:pt-16">
            {why.map((item, index) => (
              <Reveal key={item.number} delay={index * 90}>
                <article className="grid grid-cols-[auto_1fr] gap-6 py-8 sm:gap-10 sm:py-10">
                  <p className="font-display text-3xl text-amber sm:text-4xl">{item.number}</p>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
