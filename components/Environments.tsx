import { environments } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { GemBanner } from "@/components/GemLink";

export function Environments() {
  return (
    <section id="environments" className="bg-ink py-16 text-paper sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel label={environments.label} />
            <h2 className="type-display mt-8">{environments.headline}</h2>
          </Reveal>
          <Reveal delay={80} className="flex items-end lg:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-paper/70">{environments.body}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid border-t border-l border-white/10 sm:grid-cols-2">
          {environments.items.map((item, index) => (
            <article
              key={item.title}
              className="flex min-h-[220px] flex-col border-r border-b border-white/10 px-8 py-10 sm:px-10 sm:py-12"
            >
              <Reveal delay={index * 70} className="flex h-full flex-col">
                <h3 className="type-title">{item.title}</h3>
                <p className="mt-5 min-h-[4.875rem] max-w-md text-base leading-relaxed text-paper/70">{item.body}</p>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <GemBanner tone="dark" />
        </Reveal>
      </Container>
    </section>
  );
}
