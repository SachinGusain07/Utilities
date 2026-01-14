/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimization flags
  reactStrictMode: true,

  // Image optimization
  images: {
    optimization: "auto",
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },

  // Compression
  compress: true,

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ]
  },

  // SEO redirects
  async redirects() {
    return [
      {
        source: "/pdf-compressor",
        destination: "/tools/pdf-compressor",
        permanent: true,
      },
      {
        source: "/image-resizer",
        destination: "/tools/image-resizer",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
