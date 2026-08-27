export type Capability = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ProjectItem = {
  id: string;
  tags: Array<"solar" | "surveillance" | "av">;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imagePosition?: "center" | "bottom" | "top";
};

export const site = {
  name: "HDIT",
  legalName: "HDIT Display Solutions Pvt. Ltd.",
  tagline: "Technology and smart infrastructure",
  description:
    "Technology and smart infrastructure for a connected, scalable future.",
  url: "https://hdit.example",
  email: "info@hdit.in",
  phone: "+91 98732 42407",
  phoneTel: "+919873242407",
  whatsapp: "919873242407",
  designedBy: {
    name: "DOT",
    href: "https://dot-site.vercel.app",
    logo: "/images/dot.svg",
  },
} as const;

export const gem = {
  name: "Government e-Marketplace (GeM)",
  href: "https://gem.gov.in/",
  logo: "/images/gem-logo.jpg",
  tagline: "All products and solutions are available on GeM",
  eyebrow: "Government e-Marketplace",
  headline: "All HDIT products and solutions are available on GeM.",
  body: "Government and public-sector requirements are specified, procured and delivered through the official GeM portal — so the work stays inside the framework departments already use.",
} as const;

export const social = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@HDITDisplaySolutions",
    icon: "youtube" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hdit-display-solutions",
    icon: "linkedin" as const,
  },
  {
    label: "X",
    href: "https://x.com/HDIT_India",
    icon: "x" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/HDITDisplaySolutions",
    icon: "facebook" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hdit_display/",
    icon: "instagram" as const,
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/#projects" },
  { label: "Approach", href: "/#approach" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/#projects" },
  { label: "Sourcing", href: "/#sourcing" },
  { label: "Approach", href: "/#approach" },
  { label: "Careers", href: "/careers" },
  { label: "People", href: "/about#people" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Technology · Infrastructure · Execution",
  headlineLead: "Engineering the infrastructure",
  headlineAccent: "of tomorrow.",
  body: "HDIT delivers integrated technology and smart infrastructure across sustainable solar solutions, intelligent surveillance and AV/IT systems.",
  primaryCta: { label: "Talk to Our Team", href: "/contact" },
  secondaryCta: { label: "Explore Our Capabilities", href: "/#capabilities" },
} as const;

export const intro = {
  index: "01",
  label: "Who we are",
  headline: "Technology. Infrastructure. Progress.",
  paragraphs: [
    "HDIT Display Solutions Pvt. Ltd. is a technology and smart infrastructure organisation delivering integrated solutions across sustainable solar solutions, smart surveillance infrastructure and advanced AV/IT systems.",
    "With more than 25 years of industry experience at its leadership level, HDIT combines international technology sourcing with local engineering, procurement and execution capabilities.",
    "Through a robust ecosystem of channel partners and system integrators, alongside direct enterprise and government engagements, HDIT delivers reliable infrastructure designed for long term performance — including integrated command and control centres where display, communication and surveillance come together.",
  ],
  cta: { label: "Discover HDIT", href: "/about" },
} as const;

export const capabilities: Capability[] = [
  {
    id: "solar",
    number: "01",
    category: "Energy",
    title: "Sustainable Solar Solutions",
    description:
      "Commercial and industrial solar, rooftop and site-wide arrays, and solar-assisted infrastructure specified for long-term energy performance.",
    image: "/images/solar-farm.jpg",
    imageAlt: "Commercial solar array installed across an open site",
  },
  {
    id: "surveillance",
    number: "02",
    category: "Security",
    title: "Smart Surveillance Infrastructure",
    description:
      "Designing and deploying high definition CCTV and intelligent surveillance infrastructure for secure, connected environments.",
    image: "/images/project-04.jpg",
    imageAlt: "Engineering review for a connected infrastructure deployment",
  },
  {
    id: "av-it",
    number: "03",
    category: "AV / IT",
    title: "Advanced AV / IT Systems",
    description:
      "Display, communication and command-and-control environments for corporate, institutional and public spaces — video walls, operator consoles, live dashboards and surveillance specified as one working room.",
    image: "/images/command-centre.png",
    imageAlt:
      "Integrated command and control centre with video wall, operational dashboard and operator workstations",
  },
];

export const globalTech = {
  index: "04",
  label: "Sourcing",
  headline: "Global technology. Local precision.",
  body: "HDIT combines international technology partnerships and sourcing with Indian engineering, procurement and project execution.",
  supporting:
    "Selected components — not complete product lines — are sourced from multiple markets, including Korea, Japan, America, Europe and Taiwan. Engineering, procurement and delivery remain in India.",
  sourcesLabel: "Selected components",
  sourcesCopy:
    "Display, surveillance and energy components are selected from markets that make them well — including Korea, Japan, America, Europe, Taiwan and others. The specification comes first; HDIT does not import a complete catalogue, so the technology fits the site rather than locking the project to a single origin.",
  operationsLabel: "Built and delivered in India",
  operationsCopy:
    "Engineering, procurement, installation and handover stay in India — one accountable team from layout through commissioning. After handover, support and AMC remain with the same organisation.",
} as const;

export const approach = {
  index: "05",
  label: "Approach",
  headline: "From specification to lifecycle support.",
  body: "We do not simply supply technology. We engineer, deploy and support infrastructure for the long term.",
  pipeline: ["Source", "Engineer", "Install", "Support"],
} as const;

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Strategic Sourcing & Compliance",
    description:
      "Leveraging global technology partnerships alongside strict adherence to local procurement requirements.",
    image: "/images/hero.jpg",
    imageAlt: "Technical consultation around specified system components",
  },
  {
    number: "02",
    title: "Turnkey Precision Installation",
    description:
      "Executing robust, secure engineering layouts tailored to government standards, departmental guidelines and project specific requirements.",
    image: "/images/project-02.jpg",
    imageAlt: "Installation crew executing a precision infrastructure layout",
  },
  {
    number: "03",
    title: "Comprehensive Lifecycle Support",
    description:
      "Providing dedicated Annual Maintenance Contract (AMC) frameworks and responsive technical support designed to minimise operational downtime.",
    image: "/images/project-01.jpg",
    imageAlt: "Technical commissioning of installed infrastructure",
  },
];

export const environments = {
  index: "06",
  label: "Clients",
  headline: "Built for complex environments.",
  body: "HDIT works across enterprise, government, institutional and partner channels — each with its own technical and procurement reality.",
  items: [
    {
      title: "Enterprise",
      body: "Integrated technology infrastructure for modern organisations, specified around operations, scale and long-term support.",
      gem: false,
    },
    {
      title: "Government",
      body: "Public sector solutions aligned with departmental requirements, procurement frameworks and delivery through GeM.",
      gem: true,
    },
    {
      title: "Institutions",
      body: "Reliable infrastructure for high-usage environments where uptime, access and ongoing support have to hold together.",
      gem: false,
    },
    {
      title: "Channel Partners",
      body: "Technology, sourcing and execution support for system integrators and partners delivering projects nationwide.",
      gem: false,
    },
  ],
} as const;

export const projects = {
  index: "07",
  label: "Work",
  headline: "Projects",
  body: "Representative environments across solar, surveillance and AV/IT. Named references are shared against the requirement.",
  filters: [
    { id: "all", label: "All" },
    { id: "solar", label: "Solar" },
    { id: "surveillance", label: "CCTV" },
    { id: "av", label: "AV / IT" },
  ],
  items: [
    {
      id: "solar-rooftop",
      tags: ["solar"],
      category: "Solar",
      title: "Commercial rooftops specified for long-term solar output",
      excerpt:
        "Precision engineered arrays for factories, warehouses and campuses — structured for performance over the life of the asset.",
      image: "/images/project-05.jpg",
      imageAlt: "Commercial rooftop solar array across an industrial warehouse",
      imagePosition: "bottom",
    },
    {
      id: "solar-ground",
      tags: ["solar"],
      category: "Solar",
      title: "Ground-mount solar for industrial energy programmes",
      excerpt:
        "Site-wide systems where structure, output and lifecycle support have to be specified together.",
      image: "/images/work-solar-green.jpg",
      imageAlt: "Ground-mounted solar panels across a lush green field",
      imagePosition: "center",
    },
    {
      id: "cctv-building",
      tags: ["surveillance"],
      category: "CCTV",
      title: "High-definition CCTV for campuses and commercial sites",
      excerpt:
        "Camera layouts specified for coverage, lighting and recording — not a box of devices left for someone else to aim.",
      image: "/images/work-cctv-building.jpg",
      imageAlt: "PTZ and bullet cameras covering a commercial campus against city buildings",
      imagePosition: "top",
    },
    {
      id: "cctv-perimeter",
      tags: ["surveillance"],
      category: "CCTV",
      title: "Perimeter surveillance for industrial and public environments",
      excerpt:
        "Weather-rated outdoor cameras for roads, perimeters and open sites, wired into the same operational picture.",
      image: "/images/work-cctv-outdoor.jpg",
      imageAlt: "Outdoor bullet camera covering a landscaped perimeter under open sky",
    },
    {
      id: "solar-signage",
      tags: ["solar", "av"],
      category: "Solar",
      title: "Solar-assisted passenger information, off the grid",
      excerpt:
        "Outdoor displays that can run on adaptive power — including solar and battery where cabling is thin.",
      image: "/images/work-solar-pids.jpg",
      imageAlt: "Solar-powered digital display at a bus stop, with panels mounted above the screen",
      imagePosition: "top",
    },
    {
      id: "wayfinding",
      tags: ["av"],
      category: "AV / IT",
      title: "Wayfinding displays for civic and campus environments",
      excerpt:
        "Public information systems specified for weather, readability and long hours outdoors.",
      image: "/images/work-wayfinding.png",
      imageAlt: "Interactive digital wayfinding kiosk on a civic campus",
    },
    {
      id: "transit-info",
      tags: ["av"],
      category: "AV / IT",
      title: "Real-time information at the bus stop",
      excerpt:
        "Passenger-facing displays for bus shelters and high-traffic public spaces.",
      image: "/images/work-bus-shelter.jpg",
      imageAlt: "Bus stop shelter with real-time digital passenger information displays",
    },
    {
      id: "led-interiors",
      tags: ["av"],
      category: "AV / IT",
      title: "Large-format LED for retail and public interiors",
      excerpt:
        "Seamless video walls and architectural displays specified into the room, not added afterwards.",
      image: "/images/work-led-ooh.jpg",
      imageAlt: "Large-format LED display wrapping a public urban facade",
    },
  ] satisfies ProjectItem[],
  cta: { label: "Request a briefing", href: "/contact" },
} as const;

export const impact = {
  index: "08",
  label: "Experience",
  headline: "Scale across technology and infrastructure.",
  items: [
    { value: 200, suffix: "+", label: "Projects" },
    { value: 25, suffix: "+", label: "Years" },
    { value: 100, suffix: "+", label: "Clients" },
  ],
} as const;

export const certifications = {
  index: "09",
  label: "Assurance",
  headline: "Certified for quality. Built for operational excellence.",
  items: [
    {
      code: "ISO 9001",
      title: "Quality Management System",
      how: "ISO 9001 sets a repeatable way of working: requirements are recorded, work is checked, and the same standard is applied from specification through commissioning and support.",
      value:
        "For the customer that means fewer surprises, clearer accountability and infrastructure that is delivered the way it was specified — not as a one-off improvisation.",
      logo: "/images/iso-logo.svg",
    },
    {
      code: "ISO 41001",
      title: "Facility Management System",
      how: "ISO 41001 is about the operational life of the facility: roles, maintenance, and how people and systems keep the environment working after handover.",
      value:
        "For the customer that means the installation is designed to be run and supported — not only installed — so uptime and service remain part of the engagement.",
      logo: "/images/iso-logo.svg",
    },
  ],
} as const;

export const philosophy = {
  index: "10",
  label: "Purpose",
  headline: "Driven by a clear purpose.",
  vision: {
    title: "Vision",
    body: "Scaling connectivity with innovative solutions.",
  },
  mission: {
    title: "Mission",
    body: "Empowering digital infrastructure for global progress.",
  },
  slogan: {
    title: "Official slogan",
    body: "Connect. Innovate. Scale.",
  },
  values: [
    {
      number: "01",
      title: "Connectivity First",
      meaning: "We build bridges, not silos.",
      description:
        "We prioritise seamless integration, interoperability and collaboration to bring people, technologies and organisations closer together.",
    },
    {
      number: "02",
      title: "Fearless Innovation",
      meaning: "We challenge the status quo.",
      description:
        "We continuously explore advanced technologies and creative engineering approaches to solve real world infrastructure challenges.",
    },
    {
      number: "03",
      title: "Impactful Scalability",
      meaning: "We build for sustainable growth.",
      description:
        "We engineer resilient systems designed to scale from individual deployments to larger communities, organisations and infrastructure networks.",
    },
  ],
} as const;

export const about = {
  eyebrow: "About HDIT",
  headline: "A technology and smart infrastructure organisation.",
  who: {
    title: "Who we are",
    paragraphs: [
      "HDIT Display Solutions Pvt. Ltd. is a technology and smart infrastructure provider.",
      "Operating through a robust hybrid ecosystem, HDIT works alongside trusted channel partners and system integrators while directly executing enterprise projects and government requirements through the Government e-Marketplace (GeM) portal — including integrated command and control centres that bring display, communication and surveillance into one operational environment.",
      "By combining global technology sourcing with high quality local procurement, engineering and execution, HDIT delivers tailored infrastructure solutions built around the specific requirements of every project.",
      "With more than 25 years of experience at founder level, HDIT brings international sourcing together with Indian engineering — serving enterprise clients, government organisations, institutions and a network of channel partners and system integrators across the country.",
    ],
  },
  team: {
    headline: "Built around expertise. Driven by execution.",
    body: "HDIT brings together experienced leadership, engineering, project execution, procurement and customer support. The work is organised around the project, not around internal silos.",
    close:
      "The customer works with one accountable team across the complete project lifecycle, from consultation and sourcing to installation, commissioning and long term support.",
  },
  service: {
    headline: "Built around the customer.",
    body: "HDIT does not operate as a simple product vendor. Each engagement is specified, sourced and delivered as infrastructure.",
    steps: [
      "Understanding requirements",
      "Engineering the right solution",
      "Sourcing appropriate technology",
      "Executing installation",
      "Commissioning",
      "Providing ongoing support",
    ],
  },
  founder: {
    headline: "Experience that spans generations of technology.",
    body: "With more than 25 years of experience in the field, HDIT's founder brings deep industry knowledge across technology, infrastructure, sourcing and project execution.",
  },
} as const;

export const people = {
  label: "People",
  headline: "Built for people who want to grow with the work.",
  body: "HDIT is organised around projects, not around internal silos. Engineering, execution, procurement and support work as one team — so people see the full lifecycle of the infrastructure they help specify and deliver.",
  items: [
    {
      title: "Learning on live infrastructure",
      body: "The work is real environments: solar, surveillance, AV/IT and command centres. People develop by specifying, installing and supporting systems — not by sitting outside the project.",
    },
    {
      title: "One team, end to end",
      body: "Career growth here follows the project. The same people stay close to the requirement from consultation through commissioning and AMC, so responsibility and skill compound together.",
    },
    {
      title: "Talk to us",
      body: "Open roles are briefed directly. If you want to work with HDIT, use the careers form with your background and the kind of infrastructure you want to build.",
    },
  ],
  cta: { label: "Apply to HDIT", href: "/careers" },
} as const;

export const careers = {
  label: "Careers",
  headline: "Work on infrastructure that has to hold.",
  body: "Open roles are briefed against the work — engineering, procurement, execution and support. Send your background through this form and the team will be in touch.",
  homeBody:
    "HDIT is organised around projects, not around internal silos. Engineering, execution, procurement and support work as one team — so people see the full lifecycle of the infrastructure they help specify and deliver. Open roles are briefed against that work.",
  cta: { label: "Apply to HDIT", href: "/careers" },
} as const;

export const careerInterests = [
  "Engineering",
  "Procurement",
  "Project execution",
  "Support / AMC",
  "Sales and partnerships",
  "Other",
] as const;

export const cta = {
  headlineLead: "Infrastructure, specified",
  headlineAccent: "for the long term.",
  body: "Tell us about the environment, the requirement and the outcome. We will look at the right capability with you.",
  primary: { label: "Talk to Our Team", href: "/contact" },
  secondary: { label: "Explore Our Capabilities", href: "/#capabilities" },
} as const;

export const projectTypes = [
  "Sustainable Solar Solutions",
  "Smart Surveillance Infrastructure",
  "Advanced AV / IT Systems",
  "Command and Control Centre",
  "Integrated infrastructure",
  "Not sure yet",
] as const;
