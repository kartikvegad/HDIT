"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function HoverLabel({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => enabled && setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={(event) => {
        if (!enabled) return;
        const box = event.currentTarget.getBoundingClientRect();
        setPoint({ x: event.clientX - box.left, y: event.clientY - box.top });
      }}
    >
      {children}
      {enabled ? (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute z-20 hidden whitespace-nowrap bg-amber px-3 py-2 text-[0.68rem] tracking-[0.16em] text-ink uppercase transition-opacity duration-300 lg:block",
            visible ? "opacity-100" : "opacity-0",
          )}
          style={{ left: point.x, top: point.y, transform: "translate(-50%, -130%)" }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
