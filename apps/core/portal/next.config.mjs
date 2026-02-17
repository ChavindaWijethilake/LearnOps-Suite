/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@learnops/ui', '@learnops/shared'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
