import Image from "next/image";

export function VisualBreak() {
  return (
    <section className="relative isolate h-[70vh] min-h-[460px] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/project-05.jpg"
          alt="Precision alignment of solar modules on a commercial roof"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-ink/45" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <h2 className="max-w-4xl font-display text-4xl leading-[1.05] text-paper sm:text-6xl lg:text-7xl">
          The future of energy
          <br />
          <em className="italic text-amber-bright">is already here.</em>
        </h2>
      </div>
    </section>
  );
}
