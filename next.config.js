/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["antd"],
  reactStrictMode: false,

  images: {
    domains: ["shaoor.pk"],
  },

  experimental: {
    appDir: true,
  },
};

module.exports = {
  ...nextConfig,
};
