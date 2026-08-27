import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  agentRules: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "6mb",
    },
  },
  async redirects() {
    return [
      { source: "/solutions", destination: "/#capabilities", permanent: false },
      { source: "/solutions/:slug", destination: "/#capabilities", permanent: false },
      { source: "/projects", destination: "/#projects", permanent: false },
      { source: "/projects/:slug", destination: "/#projects", permanent: false },
    ];
  },
};

export default nextConfig;
