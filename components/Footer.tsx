import Link from "next/link";
import { nav, site, solutions } from "@/content/site";
import { Container, Logo } from "@/components/ui";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-paper/65">
              {site.description}
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <FooterCol title="Navigate" items={nav.map((item) => ({ label: item.label, href: item.href }))} />
            <FooterCol
              title="Solutions"
              items={solutions.map((item) => ({ label: item.title, href: item.href }))}
            />
            <div>
              <p className="eyebrow">Contact</p>
              <ul className="mt-5 space-y-3 text-sm text-paper/70">
                <li>{site.emailPlaceholder}</li>
                <li>{site.phonePlaceholder}</li>
                <li>{site.addressPlaceholder}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs tracking-[0.16em] uppercase text-stone sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-paper">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-paper">
              Legal
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-paper/70">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition-colors hover:text-paper">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
