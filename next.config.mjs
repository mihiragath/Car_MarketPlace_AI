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
