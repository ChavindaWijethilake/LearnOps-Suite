/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/billing',
    transpilePackages: ['@learnops/ui'],
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
}

export default nextConfig
