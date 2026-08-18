export type Solution = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
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
};

export const site = {
  name: "HDIT",
  legalName: "HDIT",
  tagline: "Commercial Solar Installation Experts",
  description:
    "HDIT designs and installs custom solar energy systems for businesses — reducing energy costs and supporting a cleaner, more independent operation.",
  url: "https://hdit.example",
  emailPlaceholder: "Email to be provided",
  phonePlaceholder: "Phone to be provided",
  addressPlaceholder: "Address to be provided",
  hoursPlaceholder: "Operating hours to be provided",
} as const;

export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Why HDIT", href: "/#why-hdit" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Commercial Solar Energy",
  headlineLead: "Powering businesses",
  headlineAccent: "with the sun.",
  body: "HDIT designs and delivers custom solar energy systems that help companies reduce operational costs and move toward cleaner, more independent power.",
  primaryCta: { label: "Get a Free Quote", href: "/contact" },
  secondaryCta: { label: "Explore Our Solutions", href: "/#solutions" },
} as const;

export const intro = {
  eyebrow: "Smarter energy. Stronger business.",
  statement:
    "Solar is not simply an environmental decision. It is a business decision — one that can lower costs, strengthen operations, and future-proof the way a company uses energy.",
  points: [
    { title: "Lower energy costs", body: "Custom systems designed to reduce the operational cost of power." },
    { title: "Greater independence", body: "Generate on-site energy and take more control of your supply." },
    { title: "Long-term value", body: "Infrastructure built to perform reliably for years, not seasons." },
    { title: "A cleaner operation", body: "Move toward renewable energy without compromising commercial performance." },
  ],
} as const;

export const solutions: Solution[] = [
  {
    id: "commercial-solar",
    number: "01",
    category: "Business",
    title: "Commercial Solar",
    description:
      "Custom solar installations for offices, warehouses, and commercial facilities — engineered around how your business actually uses energy.",
    href: "/solutions/commercial-solar",
    image: "/images/team.jpg",
    imageAlt: "Inspectors walking a large commercial rooftop solar array",
  },
  {
    id: "industrial-solar",
    number: "02",
    category: "Industry",
    title: "Industrial Solar",
    description:
      "High-capacity solar for industrial sites that need dependable generation, careful engineering, and installation that respects live operations.",
    href: "/solutions/industrial-solar",
    image: "/images/project-05.jpg",
    imageAlt: "Technician aligning solar modules on an industrial metal roof",
  },
  {
    id: "custom-design",
    number: "03",
    category: "Engineering",
    title: "Custom System Design",
    description:
      "Every HDIT system is designed around the site, load profile, and commercial objective — not a catalogue template.",
    href: "/solutions/custom-design",
    image: "/images/project-04.jpg",
    imageAlt: "Engineers reviewing a solar module sample during system design",
  },
  {
    id: "installation",
    number: "04",
    category: "Delivery",
    title: "Precision Installation",
    description:
      "From mounting to commissioning, installation is handled with the care required of infrastructure that must last.",
    href: "/solutions/installation",
    image: "/images/project-06.jpg",
    imageAlt: "Installation team placing a solar panel on a commercial rooftop",
  },
];

export const why = [
  {
    number: "01",
    title: "Custom, not catalogue",
    body: "We specialise in designing solar energy systems around the specific needs of each business — the site, the load, and the outcome.",
  },
  {
    number: "02",
    title: "Design through installation",
    body: "HDIT takes projects from engineering through to installed, working systems so the work stays coherent from first drawing to final handover.",
  },
  {
    number: "03",
    title: "Commercial discipline",
    body: "Our focus is business energy: reducing operational costs while delivering reliable, cost-efficient solar that stands the test of time.",
  },
  {
    number: "04",
    title: "Present until the job is done",
    body: "We stay in constant communication with our customers until the installation is complete — available for questions, special requests, and a free quote.",
  },
] as const;

export const projects: Project[] = [
  {
    id: "featured-installation",
    number: "01",
    category: "Commercial",
    title: "Featured Solar Installation",
    subtitle: "Solar Installation",
    location: "Location to be provided",
    capacity: "Capacity to be provided",
    description:
      "A large-scale commercial solar installation from the HDIT project gallery. Full project name, location, and capacity will be added from client records.",
    image: "/images/team.jpg",
    imageAlt: "Three inspectors reviewing a large commercial rooftop solar farm",
    featured: true,
  },
  {
    id: "rooftop-array",
    number: "02",
    category: "Rooftop",
    title: "Module Alignment",
    subtitle: "Solar Installation",
    location: "Location to be provided",
    capacity: "Capacity to be provided",
    description: "Project name, location and capacity to be provided by HDIT.",
    image: "/images/project-05.jpg",
    imageAlt: "Installer measuring and aligning a solar module on a metal roof",
  },
  {
    id: "facility-installation",
    number: "03",
    category: "Commercial",
    title: "Panel Placement",
    subtitle: "Solar Installation",
    location: "Location to be provided",
    capacity: "Capacity to be provided",
    description: "Project name, location and capacity to be provided by HDIT.",
    image: "/images/project-06.jpg",
    imageAlt: "Three technicians placing a solar panel during rooftop installation",
  },
  {
    id: "electrical-fit",
    number: "04",
    category: "Installation",
    title: "Electrical Fit-Out",
    subtitle: "Solar Installation",
    location: "Location to be provided",
    capacity: "Capacity to be provided",
    description: "Project name, location and capacity to be provided by HDIT.",
    image: "/images/project-01.jpg",
    imageAlt: "Technician wiring a solar panel into rooftop mounting rails",
  },
  {
    id: "racking-works",
    number: "05",
    category: "Installation",
    title: "Racking Works",
    subtitle: "Solar Installation",
    location: "Location to be provided",
    capacity: "Capacity to be provided",
    description: "Project name, location and capacity to be provided by HDIT.",
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
      "A conversation about energy use, commercial objectives, and whether solar is the right infrastructure decision for the site.",
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "We study the building, available area, and operating conditions so the system is designed for the place it will actually live.",
  },
  {
    number: "03",
    title: "System Design",
    description:
      "A custom solar energy system is engineered around your business needs — not a generic layout applied from another project.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "The system is installed with the precision required of long-life energy infrastructure, with communication held until the job is done.",
  },
];

export const value = [
  {
    title: "Reduce energy costs",
    body: "Solar is specified as a commercial asset: designed to lower the cost of power as a line on the operating statement.",
  },
  {
    title: "Increase energy independence",
    body: "On-site generation gives businesses more control over a cost that is otherwise fully exposed to the grid.",
  },
  {
    title: "Long-term savings",
    body: "A well-designed installation is built to deliver value across years of operation, not a single billing cycle.",
  },
  {
    title: "Lower environmental impact",
    body: "Cleaner energy follows the business case — a more sustainable operation without treating sustainability as the only argument.",
  },
] as const;

export const about = {
  eyebrow: "About HDIT",
  statement: "Building a cleaner energy future, one project at a time.",
  body: "HDIT specialises in designing and installing custom solar energy systems for businesses. We exist to make the transition to renewable energy practical, reliable, and commercially sound — reducing operational costs and environmental impact with systems that stand the test of time.",
  approach: [
    {
      title: "Expertise",
      body: "Commercial solar installation, with systems tailored to the way each business uses energy.",
    },
    {
      title: "Approach",
      body: "Custom design first. Then careful installation. Then presence until handover is complete.",
    },
    {
      title: "Values",
      body: "Reliability, cost-efficiency, and communication. Infrastructure should be as considered as the businesses it powers.",
    },
  ],
} as const;

export const testimonialsNote =
  "Client testimonials from live projects will be published here. The current HDIT website does not yet include verified customer quotes.";

export const cta = {
  headline: "Ready to make your energy work harder?",
  body: "Request a free quote and we will look at how a custom solar system can serve your site, your costs, and your long-term energy position.",
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
