import Image from "next/image";
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
    gold: "bg-amber text-paper hover:bg-amber-bright hover:text-ink",
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
    <div className="flex items-baseline gap-3 sm:gap-4">
      {index ? (
        <span className="font-num text-2xl tracking-[0.08em] text-amber sm:text-3xl">{index}</span>
      ) : null}
      <span className="text-2xl font-medium tracking-[0.14em] text-amber uppercase sm:text-3xl">{label}</span>
    </div>
  );
}

export function Logo({
  light = false,
  size = "md",
}: {
  light?: boolean;
  size?: "md" | "lg";
}) {
  const large = size === "lg";

  return (
    <Link href="/" className="inline-flex items-center" aria-label="HDIT home">
      <Image
        src={light ? "/images/hdit-logo-light.png" : "/images/hdit-logo.png"}
        alt="HDIT — Connect. Innovate. Scale."
        width={978}
        height={395}
        priority
        className={cn("w-auto", large ? "h-9 sm:h-10 lg:h-11" : "h-12 sm:h-[3.75rem]")}
      />
    </Link>
  );
}
