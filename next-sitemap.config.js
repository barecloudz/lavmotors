/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.lavmotors.com",
  generateRobotsTxt: true,
  outDir: "./public",
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/services": 0.9,
      "/contact": 0.8,
      "/about": 0.7,
    };
    const isServicePage = path.startsWith("/services/");
    const isBlogPage = path.startsWith("/blog/");
    return {
      loc: path,
      changefreq: isBlogPage ? "monthly" : "weekly",
      priority: priorities[path] ?? (isServicePage ? 0.85 : 0.7),
      lastmod: new Date().toISOString(),
    };
  },
};
