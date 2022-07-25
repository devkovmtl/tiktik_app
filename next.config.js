/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "yt3.ggpht.com",
      "static.wikia.nocookie.net",
      "lg3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
