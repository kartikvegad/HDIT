import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const supporting = projects.filter((project) => project.id !== featured.id).slice(0, 4);

  return (
    <section id="projects" className="bg-cream py-24 sm:py-32 lg:py-36">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel index="04" label="Selected work" />
            <h2 className="mt-6 font-display text-4xl tracking-tight sm:text-5xl">
              The project gallery.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Images from HDIT’s current site. Project names, locations and capacities will be added from client
              records — they are not invented here.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-8">
            <Link href={`/projects/${featured.id}`} className="group block">
              <div className="img-clip relative aspect-[4/5] sm:aspect-[16/10]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width:1024px) 66vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-amber">{featured.number} / {featured.category}</p>
                  <h3 className="mt-2 font-display text-3xl text-paper sm:text-5xl">{featured.title}</h3>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.22em] text-paper/70">
                    {featured.subtitle}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
                <p>
                  {featured.location}
                  <span className="mx-3 text-line">/</span>
                  {featured.capacity}
                </p>
                <span className="text-[0.68rem] tracking-[0.22em] uppercase text-ink">
                  View project →
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-4">
            {supporting.map((project, index) => (
              <Reveal key={project.id} delay={index * 70}>
                <Link href={`/projects/${project.id}`} className="group grid grid-cols-[1fr_1.1fr] gap-4">
                  <div className="img-clip relative aspect-[4/5]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[0.62rem] uppercase tracking-[0.24em] text-amber">
                      {project.number} / {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight">{project.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      {project.location}
                    </p>
                    <span className="mt-4 text-[0.65rem] tracking-[0.2em] uppercase text-ink">
                      View →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
