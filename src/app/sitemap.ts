import type { MetadataRoute } from "next";
import { siteConfig } from "../../config/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/trade-lanes",
  "/why-choose-us",
  "/request-quote",
  "/contact",
  "/faq",
  "/company-profile",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteConfig.seo.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
