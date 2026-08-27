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
      style={{
        backgroundColor: "#ffffff",
        display: "inline-flex",
        alignItems: "center",
        gap: "1rem",
        padding: compact ? "0.6rem 0.85rem" : "0.85rem 1.15rem",
      }}
      className={className}
    >
      <img
        src={gem.logo}
        alt={`${gem.name} logo`}
        width={640}
        height={220}
        style={{
          height: compact ? "3.5rem" : "4.75rem",
          width: "auto",
          display: "block",
          backgroundColor: "#ffffff",
        }}
      />
      <span
        className={cn(
          "shrink-0 tracking-[0.14em] text-[#0a1628] uppercase",
          compact ? "text-[0.7rem]" : "text-sm",
        )}
      >
        gem.gov.in →
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
        dark ? "border border-white/15" : "border border-line bg-cream",
      )}
      style={dark ? { backgroundColor: "#0a1628" } : undefined}
    >
      <div className="max-w-2xl">
        <p className="eyebrow">{gem.eyebrow}</p>
        <p
          className={cn(
            "mt-4 font-display text-2xl leading-snug tracking-tight sm:text-3xl",
            dark ? "text-paper" : "text-ink",
          )}
        >
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
