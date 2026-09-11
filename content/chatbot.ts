export type ChatbotOption = {
  label: string;
  next: string;
};

export type ChatbotInputField = "issue" | "nameCompany" | "phone" | "email";

export type ChatbotNode = {
  message: string;
  options?: ChatbotOption[];
  input?: {
    field: ChatbotInputField;
    kind: "text" | "tel" | "email";
    placeholder: string;
    next: string;
  };
};

const chatbotNodes = {
  root: {
    message:
      "Hi there! Welcome to HDIT. 👋 We engineer smart infrastructure for tomorrow. How can we help you today?",
    options: [
      { label: "💼 I want to discuss a New Project / Get a Quote (Sales)", next: "sales" },
      { label: "🔧 I need Technical Support / Maintenance (Service)", next: "service" },
    ],
  },
  sales: {
    message:
      "Great! We specialize in turnkey, high-performance digital deployments. Which capability fits your current requirements?",
    options: [
      { label: "☀️ Sustainable Solar Solutions", next: "sales-context" },
      { label: "🛡️ Smart Surveillance Infrastructure", next: "sales-context" },
      { label: "🖥️ Advanced AV / IT & Command Centres", next: "sales-context" },
    ],
  },
  "sales-context": {
    message:
      "Got it. To help our engineering team prepare for the briefing, could you share a tiny bit more context?",
    options: [
      { label: "🏢 Enterprise / Corporate", next: "ask-name" },
      { label: "🏛️ Government Public Sector (GeM)", next: "ask-name" },
      { label: "🎓 Institutional Space", next: "ask-name" },
      { label: "🤝 Channel Partner / System Integrator", next: "ask-name" },
    ],
  },
  service: {
    message:
      "Let's get your systems sorted out. Are you currently covered under a valid Annual Maintenance Contract (AMC) with us?",
    options: [
      { label: "✅ Yes, we have an active AMC", next: "service-issue" },
      { label: "❌ No / Not Sure", next: "service-issue" },
    ],
  },
  "service-issue": {
    message:
      "Understood. Please briefly describe the issue or service request you are experiencing (e.g., video wall alignment, camera connectivity, solar output drop).",
    input: {
      field: "issue",
      kind: "text",
      placeholder: "Describe the issue or service request…",
      next: "ask-name",
    },
  },
  "lead-intro-sales": {
    message:
      "Perfect. Let’s get your contact details so our solution expert can reach out with the right technical information.",
  },
  "lead-intro-service": {
    message:
      "Thank you. Let's gather your contact details so our service team can look up your record and schedule an engineer.",
  },
  "ask-name": {
    message: "What is your Full Name and the Company/Organization you represent?",
    input: {
      field: "nameCompany",
      kind: "text",
      placeholder: "Full name · Company / Organisation",
      next: "ask-phone",
    },
  },
  "ask-phone": {
    message: "What is the best Mobile / WhatsApp Number to reach you on?",
    input: {
      field: "phone",
      kind: "tel",
      placeholder: "Mobile / WhatsApp number",
      next: "ask-email",
    },
  },
  "ask-email": {
    message: "And finally, your Official Email Address?",
    input: {
      field: "email",
      kind: "email",
      placeholder: "name@company.com",
      next: "done",
    },
  },
  done: {
    message:
      "Thank you! All your details have been logged securely. 📋 A representative from our team will reach out to you within the next 24 business hours. Have a great day ahead!",
    options: [{ label: "Start over", next: "root" }],
  },
} satisfies Record<string, ChatbotNode>;

export type ChatbotNodeId = keyof typeof chatbotNodes;

export const chatbot = {
  title: "HDIT Assistant",
  subtitle: "Sales · Service · Quotes",
  launcherLabel: "Open help chat",
  closeLabel: "Close chat",
  nodes: chatbotNodes,
} as const;
