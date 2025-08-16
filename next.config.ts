import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'http://localhost:3002/auth/:path*',
      },
      {
        source: '/api/users',
        destination: 'http://localhost:3002/users',
      },
    ];
  },
};

export default nextConfig;
