import type { MetadataRoute } from "next";

const BASE_URL = "https://bdi.technology";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: "/", priority: 1.0 },
    { url: "/kontakt", priority: 0.9 },
    { url: "/kariery", priority: 0.4 },
    { url: "/blog", priority: 0.5 },
    // Segmenty
    { url: "/segmenty/klienci-indywidualni", priority: 0.85 },
    { url: "/segmenty/klient-firmowy", priority: 0.85 },
    { url: "/segmenty/korporacje", priority: 0.85 },
    { url: "/segmenty/ngo", priority: 0.85 },
    { url: "/segmenty/b2g-sektor-publiczny", priority: 0.85 },
    // Produkty
    { url: "/produkt/bdi-finance-hub", priority: 0.85 },
    { url: "/produkt/bdi-legal-hub", priority: 0.85 },
    { url: "/produkt/bdi-cybersec", priority: 0.85 },
    { url: "/produkt/bdi-research", priority: 0.85 },
  ];
  return routes.map(r => ({
    url: `${BASE_URL}${r.url}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));
}
