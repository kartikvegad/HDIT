import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Button, Container } from "@/components/ui";
import { solutions } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.id === slug);
  if (!solution) return { title: "Solution" };
  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.id === slug);
  if (!solution) notFound();

  return (
    <main>
      <PageHero
        index={solution.number}
        label={solution.category}
        title={solution.title}
        body={solution.description}
        image={solution.image}
        imageAlt={solution.imageAlt}
      />
      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">How HDIT approaches this work</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              HDIT specialises in designing and installing custom solar energy systems tailored to business needs.
              This solution sits inside that practice: a commercial conversation first, then a system designed for
              the site, then installation carried through until handover.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Project capacities, typical timelines and commercial references will be added here from HDIT records.
            </p>
            <div className="mt-10">
              <Button href="/contact">Get a Free Quote</Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-6">
            <Image src={solution.image} alt={solution.imageAlt} fill sizes="50vw" className="object-cover" />
          </div>
        </Container>
      </section>
      <CTA />
    </main>
  );
}
