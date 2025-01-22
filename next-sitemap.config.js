// next-sitemap.config.js
module.exports = {
  siteUrl: "https://www.artedgesecurityandcleaning.com",
  generateRobotsTxt: true, // Generate a robots.txt file
  sitemapSize: 7000, // Split large sitemaps into multiple files
  exclude: ["/admin", "/secret"], // Exclude specific pages
  changefreq: "daily", // Default change frequency
  priority: 0.7, // Default priority
  transform: async (config, path) => {
    return {
      loc: path, // URL of the page
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(), // Last modified date
    };
  },
};
