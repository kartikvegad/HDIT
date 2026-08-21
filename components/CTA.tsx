import { cta } from "@/content/site";
import { Button, Container } from "@/components/ui";
import { HoverLabel } from "@/components/HoverLabel";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-paper sm:py-24 lg:py-28">
      <Container className="relative z-10">
        <p className="eyebrow text-amber-bright">Begin</p>
        <h2 className="type-hero mt-8 max-w-5xl">
          {cta.headlineLead}
          <br />
          <em className="italic text-amber-bright">{cta.headlineAccent}</em>
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/80">{cta.body}</p>
        <HoverLabel label="Let's talk" className="mt-12 inline-block">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={cta.primary.href} className="w-full sm:w-auto">
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="light" className="w-full sm:w-auto">
              {cta.secondary.label}
            </Button>
          </div>
        </HoverLabel>
      </Container>
    </section>
  );
}
