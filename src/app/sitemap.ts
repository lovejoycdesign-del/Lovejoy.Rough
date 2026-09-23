import type { MetadataRoute } from "next";

const siteUrl = "https://lovejoyvisuals.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/skills`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}
