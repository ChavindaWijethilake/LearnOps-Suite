/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/analytics',
    transpilePackages: ['@learnops/ui'],
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
}

export default nextConfig
