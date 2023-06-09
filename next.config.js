/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['github.com', 'random.imagecdn.app', 'picsum.photos'],
  },
};

module.exports = nextConfig;
