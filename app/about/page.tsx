import type { Metadata } from "next";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "HDIT designs and installs custom solar energy systems for businesses — reducing energy costs and supporting a cleaner operation.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        index="09"
        label="About HDIT"
        title="Building a cleaner energy future, one project at a time."
        body="HDIT specialises in designing and installing custom solar energy systems tailored to business needs."
        image="/images/hero.jpg"
        imageAlt="HDIT consultation with a solar module sample"
      />
      <About showIntro={false} />
      <CTA />
    </main>
  );
}
