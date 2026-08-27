import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/content/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hdit.example"),
  title: {
    default: "HDIT | Technology and Smart Infrastructure",
    template: "%s | HDIT",
  },
  description: site.description,
  keywords: [
    "HDIT",
    "HDIT Display Solutions",
    "AV IT systems",
    "Smart surveillance",
    "Solar infrastructure",
    "Government e-Marketplace",
    "GeM",
    "Enterprise technology",
  ],
  openGraph: {
    title: "HDIT | Technology and Smart Infrastructure",
    description: site.description,
    type: "website",
    images: [{ url: "/images/visual.jpg", width: 2400, height: 1600, alt: "HDIT technology and infrastructure briefing" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HDIT_India",
    title: "HDIT | Technology and Smart Infrastructure",
    description: site.description,
    images: ["/images/visual.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="min-h-svh bg-paper font-sans text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-amber focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="content">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
