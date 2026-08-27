import type { Metadata } from "next";
import { Careers } from "@/components/Careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Apply to work with HDIT on solar, surveillance and AV/IT infrastructure.",
};

export default function CareersPage() {
  return (
    <main className="pt-16">
      <Careers />
    </main>
  );
}
