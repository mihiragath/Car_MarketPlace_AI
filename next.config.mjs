/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: true, // defaults to true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vnxpfgobegkxdtgsfsag.supabase.co",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co", // Allow all Supabase subdomains
      },
      {
        protocol: "https",
        hostname: "aws-0-ap-southeast-1.pooler.supabase.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://vehical.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
