/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [
      "camo.githubusercontent.com",
      "drive.google.com",
      "res.cloudinary.com",
      "www.w3.org",
    ],
  },
};

module.exports = nextConfig;
