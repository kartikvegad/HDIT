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
  const onHome = pathname === "/";
  const solid = !open && (!onHome || scrolled);
  const light = open || (onHome && !scrolled);

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
        "fixed inset-x-0 top-0 z-50",
        open
          ? "border-b border-white/10 bg-ink"
          : solid
            ? "border-b border-line/80 bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="relative z-[60] flex h-[4.25rem] items-center justify-between gap-3 py-3 sm:h-[4.75rem] lg:h-[5.25rem] lg:py-3.5">
        <div className="min-w-0 shrink pt-0.5">
          <Logo light={light} size="lg" />
        </div>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {desktopNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link text-[0.78rem] tracking-[0.14em] uppercase transition-colors duration-200",
                solid ? "text-ink/70 hover:text-ink" : "text-paper/80 hover:text-paper",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <Button
              href="/contact"
              variant={solid ? "gold" : "light"}
              className="px-4 py-2 text-[0.7rem] tracking-[0.14em]"
            >
              Talk to Us
            </Button>
          </div>
          <button
            type="button"
            className={cn(
              "tap-feedback relative z-[60] flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
              light ? "text-paper active:bg-white/10" : "text-ink active:bg-ink/5",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span
              className={cn(
                "absolute h-px w-5 bg-current transition-transform duration-300",
                open ? "rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-current transition-transform duration-300",
                open ? "-rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-40 bg-ink text-paper lg:hidden">
          <nav
            className="flex h-full flex-col justify-between px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 sm:px-10"
            aria-label="Mobile"
          >
            <div className="space-y-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="tap-feedback block rounded-lg py-3.5 text-[1.05rem] tracking-[0.14em] text-paper uppercase transition-colors duration-200 hover:text-amber-bright active:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-white/10 pt-8">
              <Button href="/contact" className="w-full">
                Talk to Our Team
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
