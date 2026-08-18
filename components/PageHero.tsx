import Image from "next/image";
import { Container, SectionLabel } from "@/components/ui";

export function PageHero({
  index,
  label,
  title,
  body,
  image,
  imageAlt,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-36 pb-20 text-paper sm:pt-44 sm:pb-28">
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover opacity-30" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <Container className="relative z-10">
        <SectionLabel index={index} label={label} />
        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75">{body}</p>
      </Container>
    </section>
  );
}
