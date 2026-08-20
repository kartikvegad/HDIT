import { globalTech } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function GlobalTech() {
  return (
    <section id="sourcing" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionLabel index={globalTech.index} label={globalTech.label} />
            <h2 className="type-display mt-8">{globalTech.headline}</h2>
          </Reveal>
          <Reveal delay={80} className="flex flex-col justify-end gap-6 lg:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-muted">{globalTech.body}</p>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{globalTech.supporting}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid border-t border-line md:grid-cols-3">
          {globalTech.nodes.map((node, index) => (
            <Reveal key={node.region} delay={index * 80}>
              <article
                className={cn(
                  "border-line pt-10 pb-2 md:border-l md:px-10 md:first:border-l-0 md:first:pl-0",
                  node.emphasis && "md:bg-transparent",
                )}
              >
                <p className="text-[0.75rem] tracking-[0.18em] text-amber uppercase">
                  {node.emphasis ? "Operations" : "Sourcing"}
                </p>
                <h3
                  className={cn(
                    "mt-5 font-display tracking-tight",
                    node.emphasis ? "text-5xl text-ink sm:text-6xl" : "text-4xl text-ink sm:text-5xl",
                  )}
                >
                  {node.region}
                </h3>
                <ul className="mt-8 space-y-2">
                  {node.lines.map((line) => (
                    <li key={line} className="text-base leading-relaxed text-muted">
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
