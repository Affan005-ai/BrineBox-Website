export type FormProvider = "formspree" | "emailjs" | "resend" | "cloudflare-workers";

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    description: string;
    email: string;
    phone: string;
    whatsApp: string;
    address: string;
    website: string;
    googleMapsUrl?: string;
    logoPath: string;
    logoAlt: string;
    profilePdfPath: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  socialLinks: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
  form: {
    provider: FormProvider;
    // Formspree config
    formspreeId: string; // e.g. "mjvqdypb"
    // EmailJS config
    emailjsServiceId: string;
    emailjsTemplateId: string;
    emailjsPublicKey: string;
    // Resend should be proxied through a Worker or secure endpoint for static sites.
    resendEndpointUrl: string;
    // Cloudflare Workers config
    cfWorkerUrl: string;
  };
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    siteUrl: string;
    keywords: string[];
    twitterHandle: string;
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: "BrineBox Shipping",
    tagline: " freight forwarding and logistics from Pakistan with clear execution.",
    description:
      "BrineBox Shipping provides freight forwarding, customs clearance, warehousing and trade lane coordination for importers, exporters and manufacturers.",
    email: "cs@brineboxshipping.com",
    phone: "+92 327 2594572",
    whatsApp: "+92 327 2594572",
    address: "Karachi, Pakistan",
    website: "https://brinebox.com",
    logoPath: "/logo.png",
    logoAlt: "BrineBox Shipping logo",
    profilePdfPath: "/company-profile.pdf",
  },
  navigation: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Trade Lanes", href: "/trade-lanes" },
    { label: "Why Us", href: "/why-choose-us" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: {
    linkedin: "",
    twitter: "",
    facebook: "",
  },
  form: {
    provider: "formspree",
    
    formspreeId: "mvzeboqj",
    
    emailjsServiceId: "",
    emailjsTemplateId: "",
    emailjsPublicKey: "",
    
    resendEndpointUrl: "",
    
    cfWorkerUrl: "",
  },
  seo: {
    titleTemplate: "%s | BrineBox Shipping",
    defaultTitle: "BrineBox Shipping | International Freight Forwarding & Logistics",
    defaultDescription:
      "BrineBox Shipping offers freight forwarding, customs clearance, warehousing and supply chain support from Pakistan to key international markets.",
    siteUrl: "https://brineboxshipping.com",
    keywords: [
      "freight forwarding",
      "logistics Pakistan",
      "ocean freight",
      "air freight",
      "customs clearance",
      "warehousing",
      "supply chain",
      "FCL",
      "LCL",
      "import logistics",
      "export logistics",
      "trade lanes",
      "international shipping",
    ],
    twitterHandle: "@BrineBox",
  },
};
