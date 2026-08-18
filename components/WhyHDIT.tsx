import Image from "next/image";
import { why } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function WhyHDIT() {
  return (
    <section id="why-hdit" className="bg-paper py-28 sm:py-36 lg:py-44">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="03" label="Why HDIT" />
              <h2 className="type-display mt-8">Chosen for how the work is actually done.</h2>
            </Reveal>
            <Reveal delay={120} className="mt-12 hidden overflow-hidden lg:block">
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
          <div className="divide-y divide-line lg:col-span-7 lg:pt-20">
            {why.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <article className="grid grid-cols-[auto_1fr] gap-6 py-10 sm:gap-12 sm:py-12">
                  <p className="font-display text-4xl text-amber sm:text-5xl">{item.number}</p>
                  <div>
                    <h3 className="type-title">{item.title}</h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{item.body}</p>
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
