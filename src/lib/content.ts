import {
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Globe2,
  Landmark,
  Plane,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";

export const services = [
  {
    title: "Ocean Freight",
    description: "Structured sea freight planning for dependable movement across major international ports.",
    icon: Ship,
  },
  {
    title: "Air Freight",
    description: "Priority cargo support for urgent, high-value, and time-sensitive shipments.",
    icon: Plane,
  },
  {
    title: "FCL",
    description: "Full container load coordination with routing, documentation, and milestone visibility.",
    icon: Boxes,
  },
  {
    title: "LCL",
    description: "Consolidated freight options for efficient movement without full-container commitments.",
    icon: Warehouse,
  },
  {
    title: "Customs Clearance",
    description: "Documentation-led clearance support designed to reduce avoidable delays and rework.",
    icon: FileCheck2,
  },
  {
    title: "Warehousing",
    description: "Storage, staging, and inventory handoff workflows for planned cargo movement.",
    icon: Building2,
  },
  {
    title: "Door Delivery",
    description: "Coordinated first-mile and last-mile transport for end-to-end cargo handling.",
    icon: Truck,
  },
  {
    title: "Supply Chain Solutions",
    description: "Custom operating models for recurring trade flows, vendor coordination, and visibility.",
    icon: Globe2,
  },
];

export const industries = [
  "Textiles",
  "Garments",
  "Rice",
  "Agriculture",
  "Chemicals",
  "Electronics",
  "Industrial Equipment",
  "Automotive",
];

export const tradeLanes = [
  {
    region: "Pakistan",
    detail: "Origin and destination coordination for exporters, importers, and manufacturing supply chains.",
  },
  {
    region: "China",
    detail: "Supplier-side cargo planning, consolidation, documentation, and port-to-port visibility.",
  },
  {
    region: "Europe",
    detail: "Structured routing options for regulated, scheduled, and multi-party freight programs.",
  },
  {
    region: "Middle East",
    detail: "Regional trade support for gateway ports, distribution flows, and commercial cargo lanes.",
  },
  {
    region: "North America",
    detail: "Transcontinental freight planning with clear handoffs and documentation discipline.",
  },
];

export const processSteps = [
  {
    title: "Scope",
    description: "Confirm cargo profile, origin, destination, timeline, and commercial requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Plan",
    description: "Select routing, documents, carrier options, and operational milestones.",
    icon: Globe2,
  },
  {
    title: "Move",
    description: "Coordinate pickup, freight movement, customs steps, and status updates.",
    icon: Truck,
  },
  {
    title: "Close",
    description: "Complete delivery, reconcile documents, and prepare improvements for repeat lanes.",
    icon: CheckCircle2,
  },
];

export const whyChooseUs = [
  "Single configuration source for all public company details.",
  "Static-first architecture prepared for Cloudflare Pages.",
  "Clear operational pages without fake statistics, logos, or testimonials.",
  "Accessible forms with validation and provider-level flexibility.",
  "Modular components ready for future CRM, portal, tracking, and analytics modules.",
];

export const faqs = [
  {
    question: "Can the quote form connect to our preferred provider?",
    answer:
      "Yes. The submission driver reads provider settings from config/site.ts and supports Formspree, EmailJS, Resend via a secure endpoint, and Cloudflare Workers.",
  },
  {
    question: "Can we replace the logo and company profile later?",
    answer:
      "Yes. Replace public/logo.png or public/company-profile.pdf with files using the same names, and the website will use the new assets automatically.",
  },
  {
    question: "Does the site include fake testimonials or client logos?",
    answer:
      "No. The content avoids fake testimonials, shipment statistics, certifications, partner logos, and client logos.",
  },
  {
    question: "Is this ready for Cloudflare Pages?",
    answer:
      "The Next.js configuration uses static export, making the build output suitable for Cloudflare Pages hosting.",
  },
];

export const policyContent = {
  privacy: [
    "This website uses placeholder company contact details until the owner replaces them in config/site.ts.",
    "Submitted form data is sent to the configured form provider only when that provider is enabled.",
    "Do not enter sensitive cargo, financial, or personal data until your production form endpoint is configured.",
  ],
  terms: [
    "Website content is provided for general business information and can be tailored to the operating company.",
    "Freight services, quotes, timelines, and availability are subject to formal confirmation by the company.",
    "Replace these placeholder terms with legal language reviewed for your jurisdiction before launch.",
  ],
  cookies: [
    "This static website does not set tracking cookies by default.",
    "If analytics, chat widgets, maps, or marketing tools are added later, update this policy accordingly.",
    "Cookie consent requirements depend on the jurisdictions where the company operates and serves customers.",
  ],
};

export const industryIcon = Factory;
export const laneIcon = Landmark;
