/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.themoviedb.org',
        pathname: '/t/p/**',
      },
    ],
  },
};

export default nextConfig;
