/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.davidnekovar.cz'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
