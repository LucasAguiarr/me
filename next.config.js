/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['github.com', 'user-images.githubusercontent.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['fs'] = require.resolve('./mocks.js');
    }
    return config;
  },
};

module.exports = nextConfig;
