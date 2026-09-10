import Link from "next/link";
import { hero } from "@/content/site";
import { Button, Container } from "@/components/ui";
import { HeroMedia } from "@/components/HeroMedia";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper sm:min-h-[88svh] lg:min-h-svh">
      <div className="absolute inset-0">
        <HeroMedia />
      </div>
      <div className="hero-overlay absolute inset-0" />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-36 pt-28 sm:min-h-[88svh] sm:pb-28 sm:pt-32 lg:min-h-svh lg:pb-32 lg:pt-40">
        <p className="hero-in hero-in-1 eyebrow !text-white">{hero.eyebrow}</p>
        <h1 className="hero-in hero-in-2 hero-headline mt-5 max-w-5xl text-paper drop-shadow-[0_8px_28px_rgba(10,22,40,0.45)] sm:mt-7">
          {hero.headlineLead}
          <br />
          <em className="italic text-amber-bright">{hero.headlineAccent}</em>
        </h1>
        <p className="hero-in hero-in-3 mt-6 max-w-[580px] text-[0.98rem] leading-[1.75] text-paper/75 sm:mt-8 sm:text-[1.0625rem] sm:leading-[1.85] sm:text-paper/65">
          {hero.body}
        </p>
        <div className="hero-in hero-in-4 mt-8 flex w-full max-w-md flex-col items-stretch gap-4 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:gap-9">
          <Button href={hero.primaryCta.href} className="w-full sm:w-auto">
            {hero.primaryCta.label}
          </Button>
          <Link
            href={hero.secondaryCta.href}
            className="group tap-feedback inline-flex items-center justify-center gap-3 py-2 text-[0.78rem] font-medium tracking-[0.16em] text-paper/90 uppercase transition-colors duration-300 hover:text-amber-bright sm:justify-start"
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
        className="scroll-cue absolute bottom-24 left-5 z-10 text-[0.62rem] tracking-[0.22em] text-paper/45 uppercase sm:bottom-10 sm:left-8 lg:left-12"
      >
        Scroll to explore ↓
      </a>
    </section>
  );
}
