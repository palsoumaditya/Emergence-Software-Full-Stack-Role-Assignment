import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "soumaditya.vercel.app",
          },
        ],
        destination: "https://soumadityapal.in/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
