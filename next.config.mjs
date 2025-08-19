/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  images: {
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
