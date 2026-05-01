/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Add any other config options you have here
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
