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
            value: "https://mihiragath.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
