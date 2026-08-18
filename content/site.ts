export type Solution = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  capacity: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const site = {
  name: "HDIT",
  legalName: "HDIT",
  tagline: "Commercial Solar Installation Experts",
  description:
    "Commercial and industrial solar — designed around the site, installed with care.",
  url: "https://hdit.example",
  emailPlaceholder: "Email to be provided",
  phonePlaceholder: "Phone to be provided",
  addressPlaceholder: "Address to be provided",
  hoursPlaceholder: "Operating hours to be provided",
} as const;

export const nav = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Why HDIT", href: "/#why-hdit" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Commercial Solar Energy",
  headlineLead: "Powering businesses",
  headlineAccent: "with the sun.",
  body: "HDIT designs and delivers custom solar energy systems that help companies reduce operational costs and move toward cleaner, more independent power.",
  primaryCta: { label: "Get a Free Quote", href: "/contact" },
  secondaryCta: { label: "Explore Solutions", href: "/#solutions" },
} as const;

export const intro = {
  eyebrow: "Smarter energy. Stronger business.",
  statement:
    "Solar is not simply an environmental decision. It is a business decision — one that can lower costs, strengthen operations, and future-proof the way a company uses energy.",
} as const;

export const solutions: Solution[] = [
  {
    id: "commercial-solar",
    number: "01",
    category: "Business",
    title: "Commercial Solar",
    description:
      "Arrays for offices, warehouses and commercial roofs, sized to the way the building actually draws power.",
    image: "/images/project-01.jpg",
    imageAlt: "Technician wiring a solar panel on a commercial rooftop",
  },
  {
    id: "industrial-solar",
    number: "02",
    category: "Industry",
    title: "Industrial Solar",
    description:
      "Higher-capacity plant for factories and industrial sites that cannot pause operations for a careless install.",
    image: "/images/project-05.jpg",
    imageAlt: "Installer aligning modules on an industrial metal roof",
  },
  {
    id: "custom-design",
    number: "03",
    category: "Engineering",
    title: "Custom System Design",
    description:
      "Engineering around site, load profile and commercial objective — not a layout copied from the last job.",
    image: "/images/project-04.jpg",
    imageAlt: "Engineers reviewing a solar module sample during system design",
  },
  {
    id: "installation",
    number: "04",
    category: "Delivery",
    title: "Precision Installation",
    description:
      "Mounting, electrical fit-out and commissioning handled as infrastructure that has to last.",
    image: "/images/project-02.jpg",
    imageAlt: "Installation crew setting racking and safety lines",
  },
];

export const why = [
  {
    number: "01",
    title: "Custom, not catalogue",
    body: "Each system is drawn around the site, the load, and the outcome — not a package applied from another project.",
  },
  {
    number: "02",
    title: "Design through installation",
    body: "Engineering and installation stay in one sequence, so the drawing and the array on the roof still agree at handover.",
  },
  {
    number: "03",
    title: "Commercial discipline",
    body: "The brief is business energy: reliable generation and a lower cost of power, specified to stand the test of time.",
  },
  {
    number: "04",
    title: "Present until the job is done",
    body: "We stay in constant communication with our customers until the installation is complete.",
  },
] as const;

export const projects: Project[] = [
  {
    id: "module-alignment",
    number: "01",
    category: "Rooftop",
    title: "Module Alignment",
    subtitle: "Installation",
    location: "Location to be provided",
    capacity: "Capacity to be provided",
    description:
      "A commercial rooftop installation photographed during module alignment. Project name, location and capacity will be added from HDIT records.",
    image: "/images/project-05.jpg",
    imageAlt: "Installer measuring and aligning a solar module on a metal roof",
    featured: true,
  },
  {
    id: "electrical-fit",
    number: "02",
    category: "Installation",
    title: "Electrical Fit-Out",
    subtitle: "Installation",
    location: "Location to be provided",
    capacity: "Capacity to be provided",
    description:
      "Electrical connection of a module into rooftop rails. Specification and site details to be provided by HDIT.",
    image: "/images/project-01.jpg",
    imageAlt: "Technician wiring a solar panel into rooftop mounting rails",
  },
  {
    id: "racking-works",
    number: "03",
    category: "Installation",
    title: "Racking Works",
    subtitle: "Installation",
    location: "Location to be provided",
    capacity: "Capacity to be provided",
    description:
      "Racking and safety lines being set before modules go down. Client, location and capacity to be provided.",
    image: "/images/project-02.jpg",
    imageAlt: "Installation crew fixing solar racking and safety lines on a roof",
  },
];

export const impact = [
  { value: "XX+", label: "MW Installed", note: "Figure to be provided" },
  { value: "XX+", label: "Projects", note: "Figure to be provided" },
  { value: "XX+", label: "Years", note: "Figure to be provided" },
  { value: "XX+", label: "Clients", note: "Figure to be provided" },
] as const;

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "A first conversation about energy use, commercial objectives, and whether solar belongs on this site.",
    image: "/images/hero.jpg",
    imageAlt: "Consultation around a solar module sample",
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "Structure, available area and operating conditions are read so the system is drawn for the place it will live.",
    image: "/images/project-02.jpg",
    imageAlt: "Crew assessing a roof and setting racking lines",
  },
  {
    number: "03",
    title: "System Design",
    description:
      "Modules, electrics and layout are specified against the assessed load — not borrowed from a previous drawing.",
    image: "/images/project-04.jpg",
    imageAlt: "Engineers reviewing a solar module during system design",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "The array is built, commissioned and handed over as working plant.",
    image: "/images/project-06.jpg",
    imageAlt: "Installation team placing a solar panel on a rooftop",
  },
];

export const value = [
  {
    title: "Reduce energy costs",
    body: "Specified as a commercial asset: a lower cost of power on the operating statement.",
  },
  {
    title: "Increase energy independence",
    body: "On-site generation takes a share of supply off a tariff the business does not control.",
  },
  {
    title: "Long-term savings",
    body: "Value is measured across years of operation, not a single billing cycle.",
  },
  {
    title: "Lower environmental impact",
    body: "Cleaner energy follows the business case, rather than replacing it.",
  },
] as const;

export const about = {
  eyebrow: "About HDIT",
  statement: "Building a cleaner energy future, one project at a time.",
  body: "We exist to make the move to renewable energy practical and commercially sound — systems specified for the building they serve, not for a brochure.",
  approach: [
    {
      title: "Expertise",
      body: "Commercial and industrial installation, always tailored to the load on the site.",
    },
    {
      title: "Approach",
      body: "Assess, design, install, handover. One sequence, one conversation.",
    },
    {
      title: "Values",
      body: "Reliability and cost-efficiency. Infrastructure should be as considered as the businesses it powers.",
    },
  ],
} as const;

export const cta = {
  headlineLead: "Ready to make your energy",
  headlineAccent: "work harder?",
  body: "Share the site and the load. We will look at whether a custom array belongs there.",
  primary: { label: "Get a Free Quote", href: "/contact" },
  secondary: { label: "Talk to Our Team", href: "/contact" },
} as const;

export const projectTypes = [
  "Commercial Solar",
  "Industrial Solar",
  "Custom System Design",
  "Installation",
  "Not sure yet",
] as const;
