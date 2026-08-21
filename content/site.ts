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

export const makeInIndia = {
  name: "Make in India",
  href: "https://www.makeinindia.com/",
  logo: "/images/make-in-india.png",
  tagline: "Proudly Make in India Brand",
} as const;

export const social = [
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "X", href: "#", icon: "x" as const },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/#projects" },
  { label: "Approach", href: "/#approach" },
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
    "HDIT Display Solutions Pvt. Ltd. is a pan India technology and smart infrastructure organisation delivering integrated solutions across sustainable solar solutions, smart surveillance infrastructure and advanced AV/IT systems.",
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
      "Delivering precision engineered commercial and industrial solar systems designed for long term energy performance.",
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
      "Transforming corporate, institutional and public spaces through next generation display, communication and integrated technology systems.",
    image: "/images/project-03.jpg",
    imageAlt: "Technology briefing for an integrated AV and IT environment",
  },
];

export const commandCentre = {
  index: "03",
  label: "Command centre",
  headline: "Command and control, in one room.",
  body: "HDIT delivers integrated command and control centres that bring large-format display, live operational dashboards and surveillance into a single working environment.",
  supporting:
    "These rooms are specified for cities, campuses and enterprises that need a clear operational picture — from video walls and operator consoles through to the systems that feed them.",
  points: [
    "Large-format video walls",
    "Operator consoles and workstations",
    "Live operational dashboards",
    "Integrated surveillance and communications",
  ],
  image: "/images/command-centre.png",
  imageAlt:
    "Integrated command and control centre with video wall, city dashboard, map view and operator workstations",
  cta: { label: "Discuss a Command Centre", href: "/contact" },
} as const;

export const globalTech = {
  index: "04",
  label: "Sourcing",
  headline: "Global technology. Local precision.",
  body: "HDIT combines international technology partnerships and sourcing with Indian engineering, procurement and project execution.",
  supporting:
    "Selected components — not complete product lines — are sourced from Korea and Japan. Engineering, procurement and delivery remain in India.",
  sourcesLabel: "Selected components",
  operationsLabel: "Built and delivered in India",
  nodes: [
    {
      region: "Korea",
      role: "Selected sourcing",
      lines: ["Technology & components"],
      emphasis: false,
    },
    {
      region: "Japan",
      role: "Selected sourcing",
      lines: ["Technology & components"],
      emphasis: false,
    },
    {
      region: "India",
      role: "Operations",
      lines: ["Engineering", "Procurement", "Execution", "Support"],
      emphasis: true,
    },
  ],
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
      "Leveraging global technology partnerships alongside strict adherence to local procurement requirements and Make in India considerations.",
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
      image: "/images/work-solar-roof.jpg",
      imageAlt: "Industrial rooftop solar array across a commercial facility",
      imagePosition: "bottom",
    },
    {
      id: "solar-ground",
      tags: ["solar"],
      category: "Solar",
      title: "Ground-mount solar for industrial energy programmes",
      excerpt:
        "Site-wide systems where structure, output and lifecycle support have to be specified together.",
      image: "/images/work-solar-ground.jpg",
      imageAlt: "Ground-mounted solar array across an open industrial site",
      imagePosition: "bottom",
    },
    {
      id: "cctv-building",
      tags: ["surveillance"],
      category: "CCTV",
      title: "High-definition CCTV for campuses and commercial sites",
      excerpt:
        "Camera layouts specified for coverage, lighting and recording — not a box of devices left for someone else to aim.",
      image: "/images/work-cctv-building.jpg",
      imageAlt: "Dome and bullet cameras mounted on a commercial building facade",
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
      image: "/images/work-bus.jpg",
      imageAlt: "Solar-powered outdoor passenger information display at a transit stop",
    },
    {
      id: "wayfinding",
      tags: ["av"],
      category: "AV / IT",
      title: "Wayfinding displays for civic and campus environments",
      excerpt:
        "Public information systems specified for weather, readability and long hours outdoors.",
      image: "/images/work-zurich.jpg",
      imageAlt: "Outdoor wayfinding pylons and digital information display in a civic landscape",
    },
    {
      id: "transit-info",
      tags: ["av"],
      category: "AV / IT",
      title: "Real-time information at the stop",
      excerpt:
        "Passenger-facing displays for transit shelters and high-traffic public spaces.",
      image: "/images/work-riga.jpg",
      imageAlt: "Digital passenger information display integrated into a transit shelter",
    },
    {
      id: "led-interiors",
      tags: ["av"],
      category: "AV / IT",
      title: "Large-format LED for retail and public interiors",
      excerpt:
        "Seamless video walls and architectural displays specified into the room, not added afterwards.",
      image: "/images/work-led.jpg",
      imageAlt: "Curved LED video wall and digital pillar in a premium retail interior",
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
      href: "https://www.iso.org/home/insights-news/resources/iso-9001-explained.html",
      logo: "/images/iso-logo.svg",
    },
    {
      code: "ISO 41001",
      title: "Facility Management System",
      href: "https://www.iso.org/standard/68021.html",
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
  headline: "A pan India technology and smart infrastructure organisation.",
  who: {
    title: "Who we are",
    paragraphs: [
      "HDIT Display Solutions Pvt. Ltd. is a premier pan India technology and smart infrastructure provider.",
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
