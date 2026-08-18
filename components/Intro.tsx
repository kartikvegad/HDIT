import { intro } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section id="intro" className="bg-paper py-28 sm:py-36 lg:py-44">
      <Container>
        <Reveal>
          <SectionLabel index="01" label={intro.eyebrow} />
        </Reveal>
        <div className="mt-12 max-w-6xl">
          <Reveal>
            <p className="type-display text-ink">
              Solar is not simply an environmental decision.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="type-display mt-6 text-ink">
              It is a{" "}
              <em className="italic text-amber">business decision</em>
              {" "}— one that can lower costs, strengthen operations, and future-proof the way a company uses energy.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
