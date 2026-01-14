/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Fix: Removed 'optimization' and 'swcMinify'
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

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
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },

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
      {
        source: "/pdf-tools",
        destination: "/tools/pdf-compressor",
        permanent: false,
      },
      {
        source: "/career-tools",
        destination: "/",
        permanent: false,
      },
    ]
  },
}


export default nextConfig
