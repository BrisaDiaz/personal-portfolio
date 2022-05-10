export const env = {
  NODE_ENV: process.env.NODE_ENV,
  SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL || "https://brisa-diaz.netlify.app",
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || "brisa-diaz.netlify.app",
  GOOGLE_ANALYTICS_MESUREMENT_ID:
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MESUREMENT_ID || "",
};
