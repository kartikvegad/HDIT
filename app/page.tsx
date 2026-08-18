import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Solutions } from "@/components/Solutions";
import { WhyHDIT } from "@/components/WhyHDIT";
import { Projects } from "@/components/Projects";
import { VisualBreak } from "@/components/VisualBreak";
import { Impact } from "@/components/Impact";
import { Process } from "@/components/Process";
import { Value } from "@/components/Value";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Solutions />
      <WhyHDIT />
      <Projects />
      <VisualBreak />
      <Impact />
      <Process />
      <Value />
      <Testimonials />
      <About />
      <CTA />
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  );
}
