import Image from "next/image";
import { projects } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const supporting = projects.filter((project) => project.id !== featured.id);

  return (
    <section id="projects" className="bg-cream py-28 sm:py-36 lg:py-44">
      <Container>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel index="04" label="Selected work" />
            <h2 className="type-display mt-8">The project gallery.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              Photographs from the current HDIT site. Names, locations and capacities will be added from client records.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-8">
            <article className="group">
              <div className="img-clip relative aspect-[4/5] sm:aspect-[16/10]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width:1024px) 66vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1 sm:p-10">
                  <p className="text-[0.75rem] tracking-[0.16em] text-amber uppercase">
                    {featured.number} · {featured.category}
                  </p>
                  <h3 className="mt-3 font-display text-4xl text-paper sm:text-6xl">{featured.title}</h3>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col justify-between gap-8 lg:col-span-4">
            {supporting.map((project, index) => (
              <Reveal key={project.id} delay={index * 70}>
                <article className="group grid grid-cols-[1fr_1.15fr] gap-5">
                  <div className="img-clip relative aspect-[4/5]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center transition-transform duration-500 group-hover:translate-x-1">
                    <p className="text-[0.75rem] tracking-[0.16em] text-amber uppercase">
                      {project.number} · {project.category}
                    </p>
                    <h3 className="type-title mt-3">{project.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
