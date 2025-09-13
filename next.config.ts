import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.pixabay.com'],
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/board',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
