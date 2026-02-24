import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Amélioration SEO
  trailingSlash: false,
  
  // Optimisations d'images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  
  // Headers de sécurité et cache
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/(.*).png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*).svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  
  // Compression
  compress: true,
  
  // Génération des fichiers statiques
  generateStaticParams: async () => {
    return [
      { slug: "" },
    ];
  },
};

export default nextConfig;
