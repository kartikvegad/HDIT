import type { Metadata } from "next";
import { Suspense } from "react";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free HDIT solar quote.",
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
