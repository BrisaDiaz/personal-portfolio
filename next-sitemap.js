const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brisa-diaz.netlify.app";
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};
