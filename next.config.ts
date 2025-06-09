
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // Recommended: Add a valid basePath if your app is not at the domain root
  // basePath: '/myapp', // Example
  // Recommended: Add a valid assetPrefix if serving assets from a CDN
  // assetPrefix: 'https://cdn.mydomain.com', // Example
};

export default nextConfig;
