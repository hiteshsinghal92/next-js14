/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Important for static hosting
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;
