/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy bdi.technology static HTML routes → akademia.bdi.technology (per W2 migration · Sprint 2)
      { source: "/katalog.html", destination: "https://akademia.bdi.technology/katalog", permanent: false },
      { source: "/kursy/:slug.html", destination: "https://akademia.bdi.technology/kursy/:slug.html", permanent: false },
    ];
  },
};
