"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button, Container, Logo } from "@/components/ui";

const desktopNav = nav.filter((item) => item.href !== "/contact");

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = pathname !== "/" || (scrolled && !open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          ? "border-b border-line/80 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="relative z-[60] flex h-16 items-center justify-between lg:h-[4.35rem]">
        <Logo light={!solid} size="lg" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {desktopNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link text-[0.78rem] tracking-[0.14em] uppercase transition-colors duration-300",
                solid ? "text-ink/70 hover:text-ink" : "text-paper/80 hover:text-paper",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/contact"
            variant={solid ? "gold" : "light"}
            className="hidden px-4 py-2 text-[0.7rem] tracking-[0.14em] sm:inline-flex"
          >
            Get a Quote
          </Button>
          <button
            type="button"
            className={cn(
              "relative z-[60] flex h-11 w-11 items-center justify-center lg:hidden",
              open || !solid ? "text-paper" : "text-ink",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span
              className={cn(
                "absolute h-px w-6 bg-current transition-transform duration-500",
                open ? "rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-6 bg-current transition-transform duration-500",
                open ? "-rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink text-paper transition-[opacity,visibility,transform] duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col justify-between px-6 pb-10 pt-24 sm:px-10" aria-label="Mobile">
          <div className="space-y-1">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block font-display text-4xl tracking-tight text-paper transition-[color,transform,opacity] duration-500 hover:text-amber sm:text-5xl",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
                style={{ transitionDelay: open ? `${120 + index * 60}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8">
            <Button href="/contact" className="w-full">
              Get a Free Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
