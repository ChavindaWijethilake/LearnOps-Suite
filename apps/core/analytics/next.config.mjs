/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@learnops/ui'],
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
}

export default nextConfig
