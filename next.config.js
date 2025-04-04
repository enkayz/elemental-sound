/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'standalone',
  reactStrictMode: true,  
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig; 