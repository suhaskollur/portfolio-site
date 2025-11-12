import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export static HTML for GitHub Pages. See Next.js docs: output: 'export'
  output: "export",
  // GitHub Pages serves from /portfolio-site/ subdirectory; set basePath to match
  basePath: "/portfolio-site",
  // Use trailing slashes to make GitHub Pages hosting of `gh-pages` simpler
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

