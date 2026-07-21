import type { Metadata } from "next";
import { siteConfig } from "../../config/site";

export function createMetadata(title: string, description: string, path = "/"): Metadata {
  const canonical = new URL(path, siteConfig.seo.siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.company.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.seo.twitterHandle,
    },
  };
}
