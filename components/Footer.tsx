import Link from "next/link";
import { footerLinks, gem, site, social } from "@/content/site";
import { Container, Logo } from "@/components/ui";
import { GemLink } from "@/components/GemLink";

export function Footer() {
  return (
    <footer className="bg-[#eef1f4] text-ink">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <Logo />
          <p className="mt-4 text-[0.75rem] tracking-[0.14em] text-muted uppercase">{site.legalName}</p>
        </div>

        <div className="mt-12 grid gap-12 border-t border-line pt-12 text-center md:grid-cols-3 lg:mt-14 lg:gap-8 lg:pt-14">
          <FooterBlock title="Resources">
            <ul className="space-y-3 text-base text-muted">
              {footerLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link href={item.href} className="transition-colors duration-300 hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterBlock>

          <FooterBlock title="Follow us">
            <div className="flex max-w-[18rem] flex-wrap items-center justify-center gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper transition-colors duration-300 hover:bg-amber"
                >
                  <SocialIcon name={item.icon} />
                </a>
              ))}
            </div>
            <p className="mt-4 max-w-[16rem] text-base text-muted">YouTube, LinkedIn, X, Facebook and Instagram</p>
          </FooterBlock>

          <FooterBlock title="GeM">
            <div className="flex flex-col items-center gap-4">
              <GemLink compact />
              <span className="max-w-[18rem] text-base text-muted">{gem.tagline}</span>
            </div>
          </FooterBlock>
        </div>

        <div className="mt-14 border-t border-line pt-8 text-center text-sm text-muted">
          <p>
            Copyright © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="mt-3">
            {site.email}
            <span className="mx-2 text-stone">|</span>
            <a href={`tel:${site.phoneTel}`} className="transition-colors hover:text-ink">
              {site.phone}
            </a>
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.8rem] tracking-[0.04em] uppercase">
            <Link href="/contact" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <span className="text-stone">|</span>
            <Link href="/contact" className="transition-colors hover:text-ink">
              Legal
            </Link>
            <span className="text-stone">|</span>
            <Link href="/careers" className="transition-colors hover:text-ink">
              Careers
            </Link>
            <span className="text-stone">|</span>
            <Link href="/contact" className="transition-colors hover:text-ink">
              Contact
            </Link>
          </div>
          <a
            href={site.designedBy.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Designed by ${site.designedBy.name}`}
            className="mt-7 inline-flex items-center gap-2.5 text-ink"
          >
            <span className="text-[0.65rem] tracking-[0.18em] uppercase">Designed by</span>
            <img
              src={site.designedBy.logo}
              alt=""
              width={60}
              height={60}
              className="h-[1.15rem] w-[1.15rem]"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}

function FooterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-base font-semibold tracking-tight">{title}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function SocialIcon({ name }: { name: (typeof social)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-4 w-4 fill-current",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.09h4.52V24H.24zM8.34 8.09h4.33v2.17h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V24h-4.52v-7.93c0-1.89-.03-4.32-2.63-4.32-2.63 0-3.03 2.05-3.03 4.18V24H8.34z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M18.24 2H21.7L14.32 10.43 23 22h-6.56l-5.14-6.72L5.9 22H2.42l7.88-9.02L1 2h6.72l4.64 6.16zm-1.2 18h1.92L7.05 3.92H5z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.38.46A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.4 12 20.4 12 20.4s7.5 0 9.38-.46a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.57V8.43L15.84 12z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69V11.1h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.25h-1.92c-1.5 0-1.8.72-1.8 1.76v2.31h3.59l-.47 3.61h-3.12V24h6.12c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.89 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98C23.99 15.67 24 15.26 24 12s-.01-3.67-.07-4.95C23.73 2.7 21.3.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
