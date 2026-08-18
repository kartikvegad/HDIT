import type { Metadata } from "next";
import { Suspense } from "react";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free HDIT solar quote. We stay in communication until the job is done.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        index="10"
        label="Contact"
        title="Tell us about the site."
        body="To get a free quote, or if you have questions or special requests, drop us a line."
        image="/images/visual.jpg"
        imageAlt="Energy infrastructure discussion in a boardroom"
      />
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  );
}
