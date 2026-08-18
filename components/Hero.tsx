import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/site";
import { Button, Container } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden bg-ink text-paper lg:min-h-svh">
      <div className="hero-image absolute inset-0">
        <Image
          src="/images/team.jpg"
          alt="Engineers inspecting a commercial rooftop solar installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] contrast-[0.92]"
        />
      </div>
      <div className="hero-overlay absolute inset-0" />

      <Container className="relative z-10 flex min-h-[88svh] flex-col justify-center pb-28 pt-32 lg:min-h-svh lg:pb-32 lg:pt-40">
        <p className="hero-in hero-in-1 eyebrow text-amber-bright">{hero.eyebrow}</p>
        <h1 className="hero-in hero-in-2 hero-headline mt-7 max-w-5xl text-paper">
          {hero.headlineLead}
          <br />
          <em className="italic text-amber-bright">{hero.headlineAccent}</em>
        </h1>
        <p className="hero-in hero-in-3 mt-8 max-w-[580px] text-base leading-[1.8] text-paper/65 sm:text-[1.0625rem] sm:leading-[1.85]">
          {hero.body}
        </p>
        <div className="hero-in hero-in-4 mt-10 flex flex-col items-start gap-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-9">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Link
            href={hero.secondaryCta.href}
            className="group inline-flex items-center gap-3 text-[0.78rem] font-medium tracking-[0.16em] text-paper/90 uppercase transition-colors duration-300 hover:text-amber-bright"
          >
            <span>{hero.secondaryCta.label}</span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Container>

      <a
        href="#intro"
        className="absolute bottom-8 left-5 z-10 text-[0.62rem] tracking-[0.22em] text-paper/40 uppercase sm:bottom-10 sm:left-8 lg:left-12"
      >
        Scroll to explore ↓
      </a>
    </section>
  );
}
