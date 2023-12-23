/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/guidonaselli.github.io",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  experimental: {
    serverActions: {
      // Configuración de Server Actions va aquí
    },
  },
  output: "export",
};

module.exports = nextConfig;
