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
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Automotive",
  "Food & Beverage",
  "Industrial Equipment",
  "Construction",
  "E-commerce",
  "Textiles",
  "Consumer Goods",
];

export const tradeLanes = [
  {
    region: "Pakistan",
    detail: "Coordination from inland collection through export documentation and sea or air dispatch.",
  },
  {
    region: "Middle East",
    detail: "Cargo routing for GCC and nearby markets with practical transit and customs visibility.",
  },
  {
    region: "Europe",
    detail: "Freight planning that aligns with European import compliance and carrier schedules.",
  },
  {
    region: "China",
    detail: "Supplier-side logistics and export coordination for goods moving between China and Pakistan.",
  },
  {
    region: "South Asia",
    detail: "Regional land and sea connections for neighboring markets and shorter trade corridors.",
  },
  {
    region: "North America",
    detail: "Long-haul planning for cargo bound for the United States and Canada with documentation support.",
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
  "Transparent communication throughout every shipment stage.",
  "Tailored logistics solutions based on cargo profile and destination.",
  "Dedicated support for freight planning, booking and documentation.",
  "Flexible routing that adapts to carrier schedules and shipment needs.",
  "Reliable customs clearance guidance for imports and exports.",
  "Focus on long-term partnerships rather than one-time transactions.",
  "Professional coordination across carrier, port and warehouse touchpoints.",
  "Responsive service built around customer requirements and timing.",
  "Operational efficiency that reduces unnecessary handling and delay.",
  "A customer-first mindset that keeps logistics execution aligned with your objectives.",
];

export const faqs = [
  {
    question: "What freight services do you provide?",
    answer:
      "BrineBox offers ocean freight, air freight, road transportation, customs clearance, warehousing and supply chain support. We work with customers to select the most appropriate transport mode and coordinate the documentation required for each route.",
  },
  {
    question: "What is the difference between FCL and LCL?",
    answer:
      "FCL is a full container load service where a single shipment uses a dedicated container. LCL combines smaller shipments from multiple customers in one container. We help customers choose the right option based on volume, timing and budget.",
  },
  {
    question: "How long does international shipping take?",
    answer:
      "Transit time depends on the transport mode, route and carrier schedule. Ocean freight is typically slower than air freight. Once we confirm the origin, destination and shipment details, we provide an estimated timeline based on the selected service.",
  },
  {
    question: "Do you provide customs clearance?",
    answer:
      "Yes. We support customs clearance for imports and exports by preparing documents, submitting declarations and coordinating with customs authorities to help the cargo move through clearance efficiently.",
  },
  {
    question: "Can you handle import documentation?",
    answer:
      "We can handle import documentation such as commercial invoices, packing lists and customs declarations. We work with customers to ensure the required paperwork is complete and aligned with the destination requirements.",
  },
  {
    question: "Can I request both air and sea freight quotations?",
    answer:
      "Yes. BrineBox can provide quotes for both air and sea freight. We compare the options based on cargo profile, timing and cost so you can choose the solution that suits your shipment.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Request a quote by sharing cargo description, origin, destination, transport mode preference and any special handling needs. We review the details and follow up with a practical estimate.",
  },
  {
    question: "Do you provide cargo insurance?",
    answer:
      "Cargo insurance is arranged through third-party providers. If you need coverage, we can recommend appropriate options and help include it in your shipping plan.",
  },
  {
    question: "Can you assist first-time importers?",
    answer:
      "Yes. We guide first-time importers through the process, documentation requirements and customs clearance steps to help avoid common delays and to support a smoother first shipment.",
  },
  {
    question: "How are shipping costs calculated?",
    answer:
      "Shipping costs are based on cargo weight or volume, transport mode, route, carrier charges and any additional services such as customs handling or warehousing. We aim to provide transparent estimates that reflect the actual shipment components.",
  },
  {
    question: "Which countries do you serve?",
    answer:
      "We support freight movements from Pakistan to markets including the Middle East, Europe, China, South Asia and North America. The available routes depend on cargo type and the transport mode selected.",
  },
  {
    question: "Can you arrange door-to-door delivery?",
    answer:
      "Door-to-door delivery is available where local transport and customs conditions allow. We can coordinate the final delivery leg once the shipment reaches the destination country.",
  },
  {
    question: "Do you handle dangerous goods?",
    answer:
      "Dangerous goods require special approvals and transportation conditions. Tell us the cargo details and we will assess whether we can support the shipment safely and in compliance with applicable rules.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "Shipment tracking depends on the carrier and service. We share status updates and tracking details when available so you can monitor progress through the route.",
  },
  {
    question: "What documents are required?",
    answer:
      "Required documents may include commercial invoices, packing lists, bills of lading, airway bills and customs declarations. We help identify the documents needed for your cargo and route.",
  },
  {
    question: "Can you manage export shipments from Pakistan?",
    answer:
      "Yes. We support export shipments by coordinating carrier bookings, preparing export paperwork and managing customs export clearance from Pakistan.",
  },
  {
    question: "Can you help with warehouse storage?",
    answer:
      "We offer warehousing support for temporary storage, cargo staging and handling while shipments are prepared or awaiting transport.",
  },
  {
    question: "What should I include in a freight request?",
    answer:
      "Include cargo description, weight, dimensions, origin, destination, shipment timeline and any special handling requirements. Detailed information helps us provide a more accurate estimate.",
  },
  {
    question: "Do you work with SMEs?",
    answer:
      "Yes. We support SMEs with logistics solutions that match their cargo needs and trade volumes while keeping the process clear and manageable.",
  },
  {
    question: "How do you handle documentation errors?",
    answer:
      "We review paperwork before submission and work to correct issues promptly. Correcting documentation early helps avoid delays at customs and carrier handoffs.",
  },
  {
    question: "What happens if a shipment schedule changes?",
    answer:
      "If a schedule changes, we review alternative routing and carrier options and keep customers informed about the revised plan. We focus on adjusting the logistics steps to match the new timing.",
  },
];

export const policyContent = {
  privacy: [
    "The website uses configured BrineBox contact details from config/site.ts for email, phone, and location information.",
    "Submitted form data is sent only to the configured form provider when a production endpoint is enabled.",
    "Avoid entering sensitive cargo, financial, or personal data until the final production form endpoint is configured.",
  ],
  terms: [
    "Website content is provided for general business information and can be tailored to the operating company.",
    "Freight services, quotes, timelines, and availability are subject to formal confirmation by the company.",
    "Replace this terms content with reviewed legal language for your operating jurisdiction before launch.",
  ],
  cookies: [
    "This static website does not set tracking cookies by default.",
    "If analytics, chat widgets, maps, or marketing tools are added later, update this policy accordingly.",
    "Cookie consent requirements depend on the jurisdictions where the company operates and serves customers.",
  ],
};

export const industryIcon = Factory;
export const laneIcon = Landmark;
