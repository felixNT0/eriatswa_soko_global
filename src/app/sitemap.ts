import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eriatswa-soko-global.vercel.app";

  // Core routes
  const routes = ["", "/about-ceo", "/products", "/booking", "/privacy", "/terms"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "/products" ? "daily" : "weekly") as "daily" | "weekly",
      priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.8,
    }),
  );

  return routes;
}
