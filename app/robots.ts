import { MetadataRoute } from "next";

// Ensure robots.txt is treated as static when using `output: 'export'`
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://suhaskollur.com/sitemap.xml", // Update with your domain
  };
}

