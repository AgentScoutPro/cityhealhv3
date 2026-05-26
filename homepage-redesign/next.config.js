/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [375, 768, 1024, 1440, 1920],
  },
};

module.exports = nextConfig;
