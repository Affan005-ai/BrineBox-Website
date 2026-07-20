export type FormProvider = 'formspree' | 'emailjs' | 'resend' | 'cloudflare-workers';

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
    // Resend config
    resendApiKey: string;
    resendToEmail: string;
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
    name: 'Brinebox Logistics',
    tagline: 'Global Logistics, Simplified.',
    description: 'A premium, modern freight forwarding and supply chain solutions provider. We connect markets, streamline cargo transit, and deliver trust across the globe.',
    email: 'operations@brineboxlogistics.example.com', // Professional placeholder
    phone: '+92 21 35123456', // Pakistan placeholder format (inspired by Karachi)
    whatsApp: '+92 300 1234567',
    address: 'Suite 402, 4th Floor, Horizon Tower, Clifton Block 3, Karachi, Pakistan',
    website: 'https://brineboxlogistics.example.com',
    googleMapsUrl: 'https://maps.google.com/?q=Horizon+Tower+Clifton+Karachi',
    logoPath: '/logo.png',
    logoAlt: 'Brinebox Logistics Logo',
    profilePdfPath: '/company-profile.pdf',
  },
  socialLinks: {
    linkedin: 'https://linkedin.com/company/brinebox-logistics-placeholder',
    twitter: 'https://twitter.com/brinebox-placeholder',
    facebook: 'https://facebook.com/brinebox-placeholder',
  },
  form: {
    // Highly configurable form submission provider.
    // Set to 'formspree', 'emailjs', 'resend', or 'cloudflare-workers'
    provider: 'formspree', 
    
    // Configurations for each provider (configured with dummy values, easily editable)
    formspreeId: 'xoqgqgqj', // Replace with actual Formspree form ID
    
    emailjsServiceId: 'service_dummy',
    emailjsTemplateId: 'template_dummy',
    emailjsPublicKey: 'public_key_dummy',
    
    resendApiKey: 're_dummy_key_12345678',
    resendToEmail: 'inbound@brineboxlogistics.example.com',
    
    cfWorkerUrl: 'https://form-receiver.brinebox.workers.dev',
  },
  seo: {
    titleTemplate: '%s | Brinebox Logistics',
    defaultTitle: 'Brinebox Logistics | Global Freight Forwarding & Supply Chain Solutions',
    defaultDescription: 'Premium end-to-end logistics, ocean & air freight forwarding, customs clearance, and supply chain management. Delivering seamless cargo services across Pakistan, China, Europe, Middle East, and North America.',
    siteUrl: 'https://brineboxlogistics.example.com',
    keywords: [
      'freight forwarding',
      'logistics company',
      'ocean freight',
      'air freight',
      'customs clearance',
      'supply chain solutions',
      'FCL shipping',
      'LCL cargo',
      'warehousing',
      'door delivery',
      'Pakistan logistics',
      'China shipping',
      'global shipping solutions'
    ],
    twitterHandle: '@BrineboxLogistics',
  },
};
