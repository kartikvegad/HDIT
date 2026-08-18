import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Button, Container } from "@/components/ui";
import { projects } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) notFound();

  return (
    <main>
      <PageHero
        index={project.number}
        label={project.category}
        title={project.title}
        body={project.description}
        image={project.image}
        imageAlt={project.imageAlt}
      />
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <dl className="grid gap-8 border-y border-line py-10 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-3 font-display text-2xl">{project.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Capacity</dt>
              <dd className="mt-3 font-display text-2xl">{project.capacity}</dd>
            </div>
            <div>
              <dt className="eyebrow">Type</dt>
              <dd className="mt-3 font-display text-2xl">{project.subtitle}</dd>
            </div>
          </dl>
          <div className="mt-12 relative aspect-[16/9] overflow-hidden">
            <Image src={project.image} alt={project.imageAlt} fill sizes="100vw" className="object-cover" />
          </div>
          <div className="mt-12 max-w-2xl">
            <p className="text-sm leading-relaxed text-muted">
              Full specification, client name and performance data will be added from HDIT project records. This
              page holds the photograph and structure so those details can drop in without a redesign.
            </p>
            <div className="mt-8">
              <Button href="/contact">Discuss a similar project</Button>
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </main>
  );
}
