/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
