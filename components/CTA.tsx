import Image from "next/image";
import { cta } from "@/content/site";
import { Button, Container } from "@/components/ui";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 text-paper sm:py-36">
      <Image
        src="/images/team.jpg"
        alt="Commercial rooftop solar array at dusk light"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <Container className="relative z-10">
        <p className="eyebrow text-amber-bright">Begin</p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">
          {cta.headline}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75">{cta.body}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={cta.primary.href}>{cta.primary.label}</Button>
          <Button href={cta.secondary.href} variant="light">
            {cta.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
