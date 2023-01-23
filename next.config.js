/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "fakestoreapi.com",
      "m.media-amazon.com",
      "images-eu.ssl-images-amazon.com",
    ],
  },
};

module.exports = nextConfig;
