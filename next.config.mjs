/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2jfx0w9sp915a.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
