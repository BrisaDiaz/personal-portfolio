/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "camo.githubusercontent.com",
      "drive.google.com",
      "res.cloudinary.com",
      "www.w3.org",
    ],
  },
};

module.exports = nextConfig;
