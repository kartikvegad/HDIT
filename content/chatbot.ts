export type ChatbotOption = {
  label: string;
  next: string;
};

export type ChatbotNode = {
  message: string;
  options: ChatbotOption[];
  form?: boolean;
};

const menu = { label: "Back to main menu", next: "root" };
const contact = { label: "Contact the team", next: "contact" };
const enquiry = { label: "Share your details", next: "enquiry" };

const chatbotNodes = {
    root: {
      message:
        "Hello. I can help with quick answers about HDIT — capabilities, procurement, contact and more. Choose a topic below.",
      options: [
        { label: "What does HDIT do?", next: "about" },
        { label: "Your capabilities", next: "capabilities" },
        { label: "Solar solutions", next: "solar" },
        { label: "CCTV & surveillance", next: "surveillance" },
        { label: "AV/IT & command centres", next: "av-it" },
        { label: "Government / GeM procurement", next: "gem" },
        { label: "How do I get a quote?", next: "quote" },
        { label: "Share your details", next: "enquiry" },
        { label: "Careers at HDIT", next: "careers" },
        { label: "Contact details", next: "contact" },
      ],
    },
    about: {
      message:
        "HDIT Display Solutions Pvt. Ltd. is a technology and smart infrastructure organisation. We deliver integrated solutions across sustainable solar, smart surveillance and advanced AV/IT — including command and control centres where display, communication and surveillance work as one environment.",
      options: [menu, { label: "See capabilities", next: "capabilities" }, enquiry, contact],
    },
    capabilities: {
      message:
        "HDIT works across three core areas:\n\n• Sustainable solar — commercial rooftops, ground-mount arrays and solar-assisted infrastructure\n• Smart surveillance — CCTV specified for coverage, lighting and recording\n• Advanced AV/IT — video walls, passenger information, wayfinding and integrated command centres\n\nEngineering, procurement and execution stay with one accountable team.",
      options: [
        menu,
        { label: "Solar", next: "solar" },
        { label: "CCTV", next: "surveillance" },
        { label: "AV/IT", next: "av-it" },
        enquiry,
        contact,
      ],
    },
    solar: {
      message:
        "HDIT specifies solar for commercial rooftops, industrial ground-mount programmes and solar-assisted outdoor infrastructure — including passenger information displays where grid power is limited. Arrays are engineered for long-term output, not just installation.",
      options: [menu, { label: "Get a quote", next: "quote" }, enquiry, contact],
    },
    surveillance: {
      message:
        "HDIT designs and deploys high-definition CCTV for campuses, commercial sites and outdoor perimeters. Camera layouts are specified for coverage, lighting and recording — wired into a single operational picture, not sold as disconnected devices.",
      options: [menu, { label: "Get a quote", next: "quote" }, enquiry, contact],
    },
    "av-it": {
      message:
        "HDIT delivers display, communication and command-and-control environments — LED and LCD video walls, operator consoles, live dashboards, wayfinding, transit information and surveillance integrated into one working room.",
      options: [menu, { label: "Get a quote", next: "quote" }, enquiry, contact],
    },
    gem: {
      message:
        "All HDIT products and solutions are available on the Government e-Marketplace (GeM). Government and public-sector requirements can be specified, procured and delivered through the official GeM portal — keeping procurement inside the framework departments already use.",
      options: [
        menu,
        { label: "Visit GeM", next: "gem-link" },
        contact,
        enquiry,
      ],
    },
    "gem-link": {
      message:
        "You can browse HDIT listings on the official GeM portal at gem.gov.in. For a specific requirement or briefing, our team can walk you through what is listed and how to procure.",
      options: [menu, contact, enquiry],
    },
    quote: {
      message:
        "Share your requirement with the HDIT team — site type, scale, location and timeline. We will respond with a briefing on approach, specification and next steps.",
      options: [menu, enquiry, { label: "Contact details", next: "contact" }, { label: "Careers", next: "careers" }],
    },
    careers: {
      message:
        "HDIT is organised around projects, not internal silos. Engineering, execution, procurement and support work as one team. Open roles are listed on the Careers page — apply there with a brief note on the kind of work you want to do.",
      options: [menu, enquiry, contact],
    },
    contact: {
      message:
        "Reach HDIT at info@hdit.in or +91 98732 42407. Use the Contact page for a structured enquiry, or WhatsApp for a direct message. For careers, visit the Careers page.",
      options: [menu, enquiry, { label: "Ask something else", next: "root" }],
    },
    enquiry: {
      message:
        "Leave your name, email and phone below. Our team will follow up on your enquiry — usually within one working day.",
      options: [],
      form: true,
    },
  } satisfies Record<string, ChatbotNode>;

export type ChatbotNodeId = keyof typeof chatbotNodes;

export const chatbot = {
  title: "HDIT Assistant",
  subtitle: "Quick answers · leave your details anytime",
  launcherLabel: "Open help chat",
  closeLabel: "Close chat",
  nodes: chatbotNodes,
} as const;
