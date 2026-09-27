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
  // Locklandia's legal pages moved to its own site; older app builds still link here.
  async redirects() {
    return [
      { source: "/legal/locklandia", destination: "https://locklandia.app/legal/privacy", permanent: true },
      { source: "/legal/locklandia/:doc(privacy|terms|returns)", destination: "https://locklandia.app/legal/:doc", permanent: true },
    ]
  },
  async headers() {
    return [{ source: "/demo/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }]
  },
}

export default nextConfig
