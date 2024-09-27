// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',   // Image source protocol (https)
        hostname: 'res.cloudinary.com',  // Image source domain
        port: '',  // Leave empty unless using a specific port
        pathname: '/**',  // Match all paths under the domain
      },
    ],
  },
};

export default nextConfig;
