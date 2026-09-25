/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Unlisted JPX sales demos: serve public/demo/<slug>/index.html at /demo/<slug> and keep them out of search.
  async rewrites() {
    return [{ source: "/demo/:slug", destination: "/demo/:slug/index.html" }]
  },
  async headers() {
    return [{ source: "/demo/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }]
  },
}

export default nextConfig
