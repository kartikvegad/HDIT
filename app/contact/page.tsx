import type { Metadata } from "next";
import { Suspense } from "react";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the HDIT team about AV/IT systems, surveillance infrastructure or solar solutions.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  );
}
