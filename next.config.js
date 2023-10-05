// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async headers() {
    return [
      // Prevent Google Search video indexing report for background animations
      // https://support.google.com/webmasters/answer/9495631#block_page_video
      {
        source: "/background-light-animated.webm",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/background-dark-animated.webm",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ]
  },
}

module.exports = nextConfig
