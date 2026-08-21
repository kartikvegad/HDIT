import { globalTech } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function GlobalTech() {
  const sources = globalTech.nodes.filter((node) => !node.emphasis);
  const operations = globalTech.nodes.find((node) => node.emphasis);

  return (
    <section id="sourcing" className="overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionLabel index={globalTech.index} label={globalTech.label} />
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
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              {sources.map((node, index) => (
                <div key={node.region}>
                  <p className="font-num text-base text-amber">0{index + 1}</p>
                  <h3 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">{node.region}</h3>
                  <p className="mt-4 text-base leading-relaxed text-paper/65">{node.lines[0]}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="flex items-center justify-center lg:col-span-2">
            <p className="font-display text-3xl text-amber sm:text-4xl" aria-hidden>
              →
            </p>
          </Reveal>

          {operations ? (
            <Reveal delay={120} className="bg-paper p-8 text-ink sm:p-10 lg:col-span-5">
              <p className="text-[0.75rem] tracking-[0.18em] text-amber uppercase">{globalTech.operationsLabel}</p>
              <p className="mt-6 font-num text-base text-amber">03</p>
              <h3 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">{operations.region}</h3>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {operations.lines.map((line) => (
                  <li key={line} className="text-base leading-relaxed text-muted">
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
