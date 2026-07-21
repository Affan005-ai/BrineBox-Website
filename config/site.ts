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
    googleMapsUrl: string;
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
    name: "Brinebox Shipping ",
    tagline: "Global shipping, handled with clarity.",
    description:
      "A freight forwarding and supply chain partner for importers, exporters, manufacturers, and distributors moving cargo across critical trade lanes.",
    email: "cs@brineboxshipping.com",
    phone: "+00 000 0000000",
    whatsApp: "+00 000 0000000",
    address: "Office address placeholder, City, Country",
    website: "https://brineboxshipping.com",
    googleMapsUrl: "https://maps.google.com/?q=Office+Address+Placeholder",
    logoPath: "/logo.png",
    logoAlt: "Brinebox Shipping Line logo",
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
    linkedin: "https://linkedin.com/company/company-placeholder",
    twitter: "https://twitter.com/company-placeholder",
    facebook: "https://facebook.com/company-placeholder",
  },
  form: {
    provider: "cloudflare-workers",
    
    formspreeId: "",
    
    emailjsServiceId: "",
    emailjsTemplateId: "",
    emailjsPublicKey: "",
    
    resendEndpointUrl: "",
    
    cfWorkerUrl: "",
  },
  seo: {
    titleTemplate: "%s | Brinebox Shipping Line",
    defaultTitle: "Brinebox Shipping Line | Freight Forwarding & Supply Chain Solutions",
    defaultDescription:
      "Freight forwarding, customs clearance, warehousing, and supply chain support across Pakistan, China, Europe, the Middle East, and North America.",
    siteUrl: "https://brineboxshipping.com",
    keywords: [
      "freight forwarding",
      "logistics company",
      "ocean freight",
      "air freight",
      "customs clearance",
      "supply chain solutions",
      "FCL shipping",
      "LCL cargo",
      "warehousing",
      "door delivery",
      "Pakistan logistics",
      "China shipping",
      "global shipping solutions",
    ],
    twitterHandle: "@companyplaceholder",
  },
};
