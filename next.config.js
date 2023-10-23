/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        port: '',
        pathname: '/im/**',
      },
    ],
  },
};

module.exports = nextConfig;
