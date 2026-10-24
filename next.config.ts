import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  devIndicators: false,
  async redirects() {
    return [
      { source: "/about-the-author", destination: "/about", permanent: true },
      { source: "/about-the-book", destination: "/book", permanent: true },
    ];
  },
};

export default nextConfig;
