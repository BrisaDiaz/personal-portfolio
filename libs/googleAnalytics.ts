import { env } from "env";
const isProd = env.NODE_ENV === "production";
export const pageview = (url: string) => {
  if (!isProd) return;
  window.gtag("config", env.GOOGLE_ANALYTICS_MESUREMENT_ID, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({
  action,
  params,
}: {
  action: string;
  params: Gtag.CustomParams;
}) => {
  if (!isProd) return;
  window.gtag("event", action, params);
};
