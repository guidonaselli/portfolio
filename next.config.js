/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
};

module.exports = nextConfig;
