import type { Metadata } from "next";
import { AboutPageContent } from "@/components/About";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "HDIT Display Solutions Pvt. Ltd. is a technology and smart infrastructure organisation serving enterprise, government and institutional clients.",
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <AboutPageContent />
      <CTA />
    </main>
  );
}
