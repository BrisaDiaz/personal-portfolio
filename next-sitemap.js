import { env } from "@env";
const siteUrl = env.NEXT_PUBLIC_SITE_URL;
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};
