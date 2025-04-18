/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d2jfx0w9sp915a.cloudfront.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
