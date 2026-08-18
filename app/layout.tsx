import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
    default: "HDIT | Commercial Solar Energy",
    template: "%s | HDIT",
  },
  description: site.description,
  keywords: [
    "HDIT",
    "Solar Energy",
    "Commercial Solar",
    "Industrial Solar",
    "Solar Installation",
    "Custom Solar Systems",
  ],
  openGraph: {
    title: "HDIT | Commercial Solar Energy",
    description: site.description,
    type: "website",
    images: [{ url: "/images/team.jpg", width: 2400, height: 1600, alt: "Commercial rooftop solar installation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HDIT | Commercial Solar Energy",
    description: site.description,
    images: ["/images/team.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="min-h-svh bg-paper font-sans text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-amber focus:px-4 focus:py-3 focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
