import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/ui";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "HDIT solar project gallery — commercial and industrial installations from the current HDIT archive.",
};

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <main>
      <PageHero
        index="04"
        label="Projects"
        title="Work from the HDIT gallery."
        body="These photographs come from the current HDIT website. Names, locations and capacities are placeholders until the client provides project records."
        image="/images/team.jpg"
        imageAlt="Large commercial rooftop solar array"
      />
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <Link href={`/projects/${featured.id}`} className="group block">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-0 p-6 sm:p-10">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                  {featured.number} / {featured.category}
                </p>
                <h2 className="mt-2 font-display text-4xl text-paper sm:text-5xl">{featured.title}</h2>
              </div>
            </div>
          </Link>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {rest.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[0.62rem] uppercase tracking-[0.24em] text-amber">
                  {project.number} / {project.category}
                </p>
                <h2 className="mt-2 font-display text-2xl">{project.title}</h2>
                <p className="mt-2 text-sm text-muted">
                  {project.location} · {project.capacity}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </main>
  );
}
