/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig, // assuming you already have nextConfig defined
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {    
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path.html',
        destination: '/:path',
      },
    ]
  },
  
};

