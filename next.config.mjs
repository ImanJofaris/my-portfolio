/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      type: "asset/resource", // Ensures fonts are treated as static files
    });
    return config;
  },
};

export default nextConfig;
