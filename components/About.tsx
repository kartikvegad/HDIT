import Image from "next/image";
import { about } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Certifications } from "@/components/Certifications";
import { Philosophy } from "@/components/Philosophy";
import { GemBanner, GemLink } from "@/components/GemLink";

export function AboutPageContent() {
  return (
    <>
      <section id="who-we-are" className="bg-paper py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <SectionLabel label={about.eyebrow} />
              <h1 className="type-display mt-8">{about.headline}</h1>
            </Reveal>
            <Reveal delay={80} className="flex items-end lg:col-span-4">
              <p className="text-[0.75rem] tracking-[0.16em] text-muted uppercase">{about.who.title}</p>
            </Reveal>
          </div>

          <Reveal className="img-clip relative mt-16 aspect-[16/8] min-h-[260px]">
            <Image
              src="/images/team.jpg"
              alt="HDIT team discussion around infrastructure planning"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            <div className="max-w-3xl space-y-6 lg:col-span-8">
              {about.who.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 60}>
                  <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
                </Reveal>
              ))}
              <Reveal delay={240}>
                <GemLink className="mt-4" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="team" className="bg-cream py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel label="The team" />
              <h2 className="type-display mt-8">{about.team.headline}</h2>
            </Reveal>
            <div className="space-y-8 lg:col-span-7 lg:pt-16">
              <Reveal delay={80}>
                <p className="text-lg leading-relaxed text-muted">{about.team.body}</p>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-lg leading-relaxed text-ink">{about.team.close}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="service" className="bg-paper py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionLabel label="Service" />
            <h2 className="type-display mt-8 max-w-3xl">{about.service.headline}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{about.service.body}</p>
          </Reveal>
          <Reveal delay={80}>
            <ol className="mt-12 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
              {about.service.steps.map((step, index) => (
                <li key={step} className="flex min-h-[168px] flex-col border-r border-b border-line px-7 py-8">
                  <p className="font-num text-lg text-amber">0{index + 1}</p>
                  <p className="mt-4 font-display text-[1.45rem] leading-snug tracking-tight sm:text-[1.55rem]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={120} className="mt-8">
            <GemBanner />
          </Reveal>
        </Container>
      </section>

      <section id="founder" className="bg-ink py-16 text-paper sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel label="Leadership" />
              <p
                className="mt-10 font-display tracking-tight text-amber-bright"
                style={{ fontSize: "clamp(5rem, 12vw, 9rem)", lineHeight: 0.85 }}
              >
                25+
              </p>
              <p className="mt-6 text-[0.75rem] tracking-[0.18em] text-paper/55 uppercase">
                Years of industry experience
              </p>
            </Reveal>
            <Reveal delay={80} className="flex flex-col justify-end lg:col-span-7">
              <h2 className="type-display">{about.founder.headline}</h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">{about.founder.body}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Philosophy numbered={false} />
      <Certifications numbered={false} />
    </>
  );
}
