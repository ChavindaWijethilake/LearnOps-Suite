/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@learnops/ui', '@learnops/shared', '@learnops/db', '@learnops/rbac', '@learnops/audit'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
