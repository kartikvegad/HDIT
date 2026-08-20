import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Capabilities } from "@/components/Capabilities";
import { CommandCentre } from "@/components/CommandCentre";
import { GlobalTech } from "@/components/GlobalTech";
import { Process } from "@/components/Process";
import { Environments } from "@/components/Environments";
import { Projects } from "@/components/Projects";
import { VisualBreak } from "@/components/VisualBreak";
import { Impact } from "@/components/Impact";
import { Certifications } from "@/components/Certifications";
import { Philosophy } from "@/components/Philosophy";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Capabilities />
      <CommandCentre />
      <GlobalTech />
      <Process />
      <Environments />
      <Projects />
      <VisualBreak />
      <Impact />
      <Certifications />
      <Philosophy />
      <CTA />
    </main>
  );
}
