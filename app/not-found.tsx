import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-ink px-6 text-center text-paper">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-display text-5xl tracking-tight">This page is not here.</h1>
      <p className="mt-4 max-w-md text-sm text-paper/70">
        The link may be out of date. Return to the HDIT homepage or talk to our team.
      </p>
      <div className="mt-10 flex gap-4">
        <Button href="/">Home</Button>
        <Link href="/contact" className="px-7 py-3.5 text-[0.7rem] tracking-[0.22em] uppercase text-paper">
          Contact
        </Link>
      </div>
    </main>
  );
}
