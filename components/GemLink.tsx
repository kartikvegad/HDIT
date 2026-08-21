import Image from "next/image";
import { gem } from "@/content/site";
import { cn } from "@/lib/cn";

export function GemLink({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={gem.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex max-w-full shrink-0 items-center gap-5 bg-paper transition-opacity duration-300 hover:opacity-90",
        compact ? "p-3" : "p-4 sm:p-5",
        className,
      )}
    >
      <Image
        src={gem.logo}
        alt={`${gem.name} logo`}
        width={360}
        height={140}
        className={cn("w-auto", compact ? "h-14 sm:h-16" : "h-[4.5rem] sm:h-24")}
      />
      <span
        className={cn(
          "pr-2 tracking-[0.14em] text-ink/70 uppercase",
          compact ? "text-[0.72rem]" : "text-[0.78rem] sm:text-sm",
        )}
      >
        gem.gov.in
        <span aria-hidden className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </a>
  );
}

export function GemBanner({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-8 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-12 sm:p-8 lg:p-10",
        dark ? "border border-white/15 bg-white/5" : "border border-line bg-cream",
      )}
    >
      <div className="max-w-2xl">
        <p className="eyebrow">{gem.eyebrow}</p>
        <p className={cn("mt-4 font-display text-2xl leading-snug tracking-tight sm:text-3xl", dark ? "text-paper" : "text-ink")}>
          {gem.headline}
        </p>
        <p className={cn("mt-4 max-w-xl text-base leading-relaxed sm:text-lg", dark ? "text-paper/75" : "text-muted")}>
          {gem.body}
        </p>
      </div>
      <GemLink />
    </div>
  );
}
