import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  agentRules: false,
  async redirects() {
    return [
      { source: "/solutions", destination: "/", permanent: false },
      { source: "/solutions/:slug", destination: "/", permanent: false },
      { source: "/projects", destination: "/", permanent: false },
      { source: "/projects/:slug", destination: "/", permanent: false },
      { source: "/about", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
