import { gem } from "@/content/site";
import { cn } from "@/lib/cn";

export function GemLink({
  className,
  compact = false,
  withHint = false,
}: {
  className?: string;
  compact?: boolean;
  withHint?: boolean;
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
        padding: compact ? "0.5rem 0.65rem" : withHint ? "0.75rem 0.9rem 0.65rem" : "0.75rem 0.9rem",
      }}
      className={cn(
        "group cursor-pointer transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber",
        withHint && "flex-col gap-2 hover:shadow-[0_10px_28px_rgba(0,0,0,0.28)]",
        className,
      )}
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
      {withHint ? (
        <span className="text-[0.68rem] font-medium tracking-[0.16em] text-neutral-500 uppercase transition-colors duration-300 group-hover:text-neutral-800">
          Visit GeM
          <span aria-hidden className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      ) : null}
    </a>
  );
}

export function GemBanner({
  tone = "light",
  showLinkHint = false,
}: {
  tone?: "light" | "dark";
  showLinkHint?: boolean;
}) {
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
      <GemLink withHint={showLinkHint} />
    </div>
  );
}
