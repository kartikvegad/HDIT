import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/ui";
import { solutions } from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "HDIT commercial and industrial solar solutions — custom system design and precision installation for businesses.",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        index="02"
        label="Solutions"
        title="Solar specified for commercial work."
        body="HDIT designs and installs custom solar energy systems for businesses. Each solution below is drawn from that practice — not a catalogue of services we do not offer."
        image="/images/team.jpg"
        imageAlt="Commercial rooftop solar installation inspected by engineers"
      />
      <section className="bg-paper py-20 sm:py-28">
        <Container className="space-y-8">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              href={solution.href}
              className="group grid overflow-hidden border border-line lg:grid-cols-12"
            >
              <div className="relative aspect-[16/10] lg:col-span-5 lg:aspect-auto">
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-10 lg:col-span-7 lg:px-12">
                <p className="font-display text-sm text-amber">{solution.number}</p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.28em] text-muted">
                  {solution.category}
                </p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl">{solution.title}</h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{solution.description}</p>
                <span className="mt-6 text-[0.68rem] tracking-[0.22em] uppercase">Explore →</span>
              </div>
            </Link>
          ))}
        </Container>
      </section>
      <CTA />
    </main>
  );
}
