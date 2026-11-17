import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://grabredenwettbewerb.at";
  return [
    { url: base,                         lastModified: new Date(), changeFrequency: "monthly",  priority: 1.0 },
    { url: `${base}/ueber`,              lastModified: new Date(), changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/rueckblick/2026`,    lastModified: new Date(), changeFrequency: "yearly",   priority: 0.9 },
    { url: `${base}/kontakt`,            lastModified: new Date(), changeFrequency: "yearly",   priority: 0.6 },
    { url: `${base}/impressum`,          lastModified: new Date(), changeFrequency: "yearly",   priority: 0.3 },
    { url: `${base}/datenschutz`,        lastModified: new Date(), changeFrequency: "yearly",   priority: 0.3 },
  ];
}
