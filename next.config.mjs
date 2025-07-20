/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // Disables HMR cache for server components
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
            value: "frame-src 'self' https://roadsidecoder.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
