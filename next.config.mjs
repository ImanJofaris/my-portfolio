/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.woff2$/,
      use: "null-loader", // Prevents loading font files
    });
    return config;
  },
};

export default nextConfig;
