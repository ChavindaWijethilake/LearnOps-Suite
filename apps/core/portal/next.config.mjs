/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@learnops/ui', '@learnops/shared'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/billing',
        destination: 'http://localhost:3001/billing',
      },
      {
        source: '/billing/:path*',
        destination: 'http://localhost:3001/billing/:path*',
      },
      {
        source: '/service',
        destination: 'http://localhost:3002/service',
      },
      {
        source: '/service/:path*',
        destination: 'http://localhost:3002/service/:path*',
      },
      {
        source: '/analytics',
        destination: 'http://localhost:3003/analytics',
      },
      {
        source: '/analytics/:path*',
        destination: 'http://localhost:3003/analytics/:path*',
      },
      {
        source: '/student',
        destination: 'http://localhost:3004/student',
      },
      {
        source: '/student/:path*',
        destination: 'http://localhost:3004/student/:path*',
      },
      {
        source: '/learning',
        destination: 'http://localhost:3004/student/learning',
      },
      {
        source: '/learning/:path*',
        destination: 'http://localhost:3004/student/learning/:path*',
      }
    ];
  },
}

export default nextConfig
