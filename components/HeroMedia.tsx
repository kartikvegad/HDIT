"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroMedia() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) {
    return (
      <Image
        src="/images/visual.jpg"
        alt="Corporate briefing for technology and infrastructure planning"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] contrast-[0.92]"
      />
    );
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover object-[center_35%] contrast-[0.92]"
      autoPlay
      muted
      loop
      playsInline
      poster="/images/visual.jpg"
      aria-hidden
    >
      <source src="/videos/hdit.mp4" type="video/mp4" />
    </video>
  );
}
