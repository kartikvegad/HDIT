import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost" | "light" | "dark";
  className?: string;
};

export function Button({ href, children, variant = "gold", className }: ButtonProps) {
  const styles = {
    gold: "bg-amber text-ink hover:bg-amber-bright",
    ghost: "border border-current bg-transparent hover:bg-white/8",
    light: "border border-white/30 text-white hover:border-white hover:bg-white/8",
    dark: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  } as const;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300",
        styles[variant],
        className,
      )}
    >
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

export function SectionLabel({
  index,
  label,
}: {
  index?: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      {index ? (
        <span className="font-display text-base tracking-[0.12em] text-amber">{index}</span>
      ) : null}
      <span className="eyebrow">{label}</span>
    </div>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="HDIT home">
      <span
        className={cn(
          "relative grid h-8 w-8 place-items-center border transition-colors duration-300",
          light ? "border-amber" : "border-ink/80 group-hover:border-amber",
        )}
      >
        <span className="block h-1.5 w-1.5 rotate-45 bg-amber" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.2rem] tracking-[0.18em]",
            light ? "text-paper" : "text-ink",
          )}
        >
          HDIT
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] tracking-[0.22em] text-muted uppercase",
            light && "text-amber-bright/80",
          )}
        >
          Solar
        </span>
      </span>
    </Link>
  );
}
