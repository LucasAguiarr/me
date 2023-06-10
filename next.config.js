/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['github.com', 'random.imagecdn.app', 'picsum.photos'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['fs'] = require.resolve('./mocks.js');
    }
    return config;
  },
};

module.exports = nextConfig;
