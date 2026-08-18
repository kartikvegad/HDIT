"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button, Container, Logo } from "@/components/ui";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        solid
          ? "border-b border-line bg-paper/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[4.6rem] items-center justify-between lg:h-[5.2rem]">
        <Logo light={!solid} />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              pathname === item.href || (item.href.startsWith("/") && item.href !== "/#why-hdit" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={cn(
                  "nav-link text-[0.68rem] tracking-[0.22em] uppercase transition-colors",
                  solid ? "text-ink/75 hover:text-ink" : "text-paper/80 hover:text-paper",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            href="/contact"
            variant={solid ? "gold" : "light"}
            className="hidden sm:inline-flex px-5 py-2.5"
          >
            Get a Quote
          </Button>
          <button
            type="button"
            className={cn(
              "relative flex h-11 w-11 items-center justify-center lg:hidden",
              solid ? "text-ink" : "text-paper",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span
              className={cn(
                "absolute h-px w-6 bg-current transition-transform duration-300",
                open ? "rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-6 bg-current transition-transform duration-300",
                open ? "-rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-0 top-[4.6rem] z-40 bg-ink text-paper transition-[opacity,visibility] duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col justify-between px-6 py-10 sm:px-10" aria-label="Mobile">
          <div className="space-y-2">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-display text-4xl tracking-tight text-paper transition-colors hover:text-amber sm:text-5xl"
                style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
              >
                <span className="mr-4 font-sans text-xs tracking-[0.28em] text-amber">
                  0{index + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="space-y-6 border-t border-white/10 pt-8">
            <p className="max-w-sm text-sm leading-relaxed text-paper/70">
              Custom solar energy systems for businesses. Request a free quote and we will look at the site with you.
            </p>
            <Button href="/contact" className="w-full sm:w-auto">
              Get a Free Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
