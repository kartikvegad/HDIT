import { globalTech } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

function ChipList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <li key={item} className="border border-white/15 px-4 py-2 text-base text-paper/85">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function GlobalTech() {
  return (
    <section id="sourcing" className="overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionLabel label={globalTech.label} />
            <h2 className="type-display mt-8">{globalTech.headline}</h2>
          </Reveal>
          <Reveal delay={80} className="flex flex-col justify-end gap-5 lg:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-paper/70">{globalTech.body}</p>
            <p className="max-w-xl text-lg leading-relaxed text-paper/70">{globalTech.supporting}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <Reveal className="border border-white/10 p-8 sm:p-10 lg:col-span-5">
            <p className="text-[0.75rem] tracking-[0.18em] text-amber-bright uppercase">
              {globalTech.sourcesLabel}
            </p>
            <ChipList items={globalTech.sourcesMarkets} />
            <p className="mt-8 text-base leading-relaxed text-paper/65">
              Technology and components, selected for the requirement.
            </p>
          </Reveal>

          <Reveal delay={80} className="flex items-center justify-center lg:col-span-2">
            <p className="font-display text-3xl text-amber sm:text-4xl" aria-hidden>
              →
            </p>
          </Reveal>

          <Reveal delay={120} className="border border-white/10 p-8 sm:p-10 lg:col-span-5">
            <p className="text-[0.75rem] tracking-[0.18em] text-amber-bright uppercase">
              {globalTech.operationsLabel}
            </p>
            <ChipList items={globalTech.operationsLines} />
            <p className="mt-8 text-base leading-relaxed text-paper/65">
              Engineering, procurement and delivery remain in India.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
