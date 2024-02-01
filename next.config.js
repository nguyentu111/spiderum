/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "images.spiderum.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
